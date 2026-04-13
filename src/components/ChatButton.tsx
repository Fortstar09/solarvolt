import { MessageCircle } from "lucide-react";

const ChatButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300"
    >
      <MessageCircle size={18} />
      <span className="text-sm font-medium">Ask Solar AI</span>
    </button>
  );
};

export default ChatButton;
