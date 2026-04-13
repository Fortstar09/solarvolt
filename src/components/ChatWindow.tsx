import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import packages from "../data/solarPackages.json";

const ChatWindow = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement[]>([]);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I’m your Solar Assistant. Tell me what you want to power and I’ll recommend a plan.",
    },
  ]);

  const [input, setInput] = useState("");

  // 🔥 OPEN / CLOSE ANIMATION
  useEffect(() => {
    if (!panelRef.current) return;

    if (open) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" },
      );
    }
  }, [open]);

  // 🔥 MESSAGE ANIMATION
  useEffect(() => {
    messagesRef.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      );
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);

    setInput("");

    // temporary loading message
    setMessages((prev) => [...prev, { role: "bot", text: "Thinking..." }]);

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "mistralai/mistral-7b-instruct:free",
            messages: [
              {
                role: "system",
                content: `You are a solar expert. Recommend the best package from this data:
            
            ${JSON.stringify(packages)}`,
              },
              {
                role: "user",
                content: userMessage,
              },
            ],
          }),
        },
      );

      const data = await response.json();

      const reply = data.choices?.[0]?.message?.content || "No response";

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "bot", text: reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "bot", text: "Something went wrong. Try again." },
      ]);
      console.log(err);
    }
  };

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      className="fixed bottom-24 right-6 z-50 w-[360px] h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
    >
      {/* HEADER */}
      <div className="bg-teal-600 text-white px-4 py-3 flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Solar Assistant</h3>
          <p className="text-xs text-white/80">Online • Ready to help</p>
        </div>

        <button onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) messagesRef.current[i] = el;
            }}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-2xl text-sm max-w-[80%] shadow-sm ${
                msg.role === "user"
                  ? "bg-teal-600 text-white rounded-br-sm"
                  : "bg-white border text-gray-700 rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="p-3 border-t flex gap-2 bg-white">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. I need power for my shop..."
          className="flex-1 border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
        />

        <button
          onClick={sendMessage}
          className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm hover:bg-teal-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
