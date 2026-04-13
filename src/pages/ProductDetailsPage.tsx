import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, Check, MessageCircle } from "lucide-react";
import { PRODUCTS, getProductById } from "../data/products";

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(price);
};

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<(typeof PRODUCTS)[0] | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct || null);
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen w-full bg-white pt-32 flex items-center justify-center">
        <div className="text-center">
          <p className="text-black/60 text-lg mb-6">Product not found</p>
          <button
            onClick={() => navigate("/products")}
            className="px-8 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const phoneNumber = "2348000000000"; // Replace with your WhatsApp number
    const message = encodeURIComponent(
      `${product.whatsappMessage}\n\nProduct: ${product.name}\nPrice: ${formatPrice(product.price)}`
    );
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`,
      "_blank"
    );
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen w-full bg-white pt-32">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <button
          onClick={() => navigate("/products")}
          className="flex items-center gap-2 text-black/60 hover:text-black transition"
        >
          <ChevronLeft size={20} />
          <span>Back to Products</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Left - Image */}
          <div className="h-96 md:h-full min-h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: product.image ? `url('${product.image}')` : "none",
              }}
            />
          </div>

          {/* Right - Details */}
          <div className="flex flex-col justify-between">
            {/* Header */}
            <div>
              <div className="mb-4">
                <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-black/60 text-lg mb-8 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Price */}
              <div className="mb-8 p-6 bg-teal-50 rounded-2xl border border-teal-200">
                <p className="text-black/50 text-sm mb-2">Starting Price</p>
                <p className="text-4xl font-bold text-teal-600">
                  {formatPrice(product.price)}
                </p>
                <p className="text-black/40 text-sm mt-2">
                  5-year warranty included
                </p>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-black/80 uppercase tracking-widest mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check size={18} className="text-teal-600 flex-shrink-0" />
                        <span className="text-black/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleWhatsAppOrder}
                className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition shadow-lg"
              >
                <MessageCircle size={20} />
                Order via WhatsApp
              </button>
              <button className="px-8 py-3 border border-black/20 text-black rounded-full font-medium hover:border-black/40 transition">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-black mb-8">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="p-6 bg-white border border-black/8 rounded-2xl"
                >
                  <p className="text-sm font-semibold text-black/60 uppercase tracking-widest mb-2">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                  <p className="text-lg font-semibold text-black">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Components */}
        {product.components && product.components.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-black mb-8">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.components.map((component, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-teal-50 border border-teal-200 rounded-xl"
                >
                  <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-black/70">{component}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-black mb-8">
              Similar Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <div
                  key={relProduct.id}
                  className="group bg-white border border-black/8 rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer"
                  onClick={() => navigate(`/products/${relProduct.id}`)}
                >
                  <div className="h-40 overflow-hidden bg-teal-50">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition duration-300"
                      style={{
                        backgroundImage: relProduct.image
                          ? `url('${relProduct.image}')`
                          : "none",
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-teal-600 transition">
                      {relProduct.name}
                    </h4>
                    <p className="text-sm text-black/60 mt-1">
                      {relProduct.description}
                    </p>
                    <p className="text-lg font-bold text-teal-600 mt-3">
                      {formatPrice(relProduct.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="bg-teal-50 rounded-3xl p-10 md:p-16 border border-teal-200">
          <h2 className="text-3xl font-bold text-black mb-8">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does installation take?",
                a: "Most installations are completed within 1-3 days depending on system complexity.",
              },
              {
                q: "What's your warranty coverage?",
                a: "All systems come with a comprehensive 5-year warranty covering parts and labor.",
              },
              {
                q: "Can I upgrade my system later?",
                a: "Yes! Our systems are modular and can be upgraded as your needs grow.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-black mb-2">{item.q}</h4>
                <p className="text-black/60 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
