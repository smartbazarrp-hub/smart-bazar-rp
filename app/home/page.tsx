"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  emoji: string;
};

type CartItem = Product & {
  quantity: number;
};

const products: Product[] = [
  // ================= SHAK-SOBJI =================
  { id: 1, name: "আলু", category: "শাকসবজি", price: 45, unit: "কেজি", emoji: "🥔" },
  { id: 2, name: "পেঁয়াজ", category: "শাকসবজি", price: 70, unit: "কেজি", emoji: "🧅" },
  { id: 3, name: "রসুন", category: "শাকসবজি", price: 180, unit: "কেজি", emoji: "🧄" },
  { id: 4, name: "আদা", category: "শাকসবজি", price: 220, unit: "কেজি", emoji: "🫚" },
  { id: 5, name: "টমেটো", category: "শাকসবজি", price: 80, unit: "কেজি", emoji: "🍅" },
  { id: 6, name: "বেগুন", category: "শাকসবজি", price: 60, unit: "কেজি", emoji: "🍆" },
  { id: 7, name: "গাজর", category: "শাকসবজি", price: 90, unit: "কেজি", emoji: "🥕" },
  { id: 8, name: "শসা", category: "শাকসবজি", price: 70, unit: "কেজি", emoji: "🥒" },
  { id: 9, name: "কাঁচা মরিচ", category: "শাকসবজি", price: 120, unit: "কেজি", emoji: "🌶️" },
  { id: 10, name: "ফুলকপি", category: "শাকসবজি", price: 50, unit: "পিস", emoji: "🥦" },
  { id: 11, name: "বাঁধাকপি", category: "শাকসবজি", price: 45, unit: "পিস", emoji: "🥬" },
  { id: 12, name: "লাউ", category: "শাকসবজি", price: 60, unit: "পিস", emoji: "🥒" },
  { id: 13, name: "পটল", category: "শাকসবজি", price: 75, unit: "কেজি", emoji: "🥒" },
  { id: 14, name: "করলা", category: "শাকসবজি", price: 90, unit: "কেজি", emoji: "🥒" },
  { id: 15, name: "ঢেঁড়স", category: "শাকসবজি", price: 80, unit: "কেজি", emoji: "🌱" },
  { id: 16, name: "সিম", category: "শাকসবজি", price: 90, unit: "কেজি", emoji: "🌱" },
  { id: 17, name: "বরবটি", category: "শাকসবজি", price: 85, unit: "কেজি", emoji: "🌱" },
  { id: 18, name: "মিষ্টি কুমড়া", category: "শাকসবজি", price: 70, unit: "কেজি", emoji: "🎃" },
  { id: 19, name: "লেবু", category: "শাকসবজি", price: 80, unit: "ডজন", emoji: "🍋" },
  { id: 20, name: "মাশরুম", category: "শাকসবজি", price: 350, unit: "কেজি", emoji: "🍄" },
  { id: 21, name: "পালং শাক", category: "শাকসবজি", price: 30, unit: "আঁটি", emoji: "🥬" },
  { id: 22, name: "লাল শাক", category: "শাকসবজি", price: 30, unit: "আঁটি", emoji: "🥬" },
  { id: 23, name: "কলমি শাক", category: "শাকসবজি", price: 25, unit: "আঁটি", emoji: "🌿" },
  { id: 24, name: "পুদিনা পাতা", category: "শাকসবজি", price: 30, unit: "আঁটি", emoji: "🌿" },

  // ================= FRUITS =================
  { id: 25, name: "আপেল", category: "ফলমূল", price: 280, unit: "কেজি", emoji: "🍎" },
  { id: 26, name: "কমলা", category: "ফলমূল", price: 220, unit: "কেজি", emoji: "🍊" },
  { id: 27, name: "কলা", category: "ফলমূল", price: 100, unit: "ডজন", emoji: "🍌" },
  { id: 28, name: "আম", category: "ফলমূল", price: 160, unit: "কেজি", emoji: "🥭" },
  { id: 29, name: "লিচু", category: "ফলমূল", price: 180, unit: "কেজি", emoji: "🍒" },
  { id: 30, name: "আনারস", category: "ফলমূল", price: 80, unit: "পিস", emoji: "🍍" },
  { id: 31, name: "পেয়ারা", category: "ফলমূল", price: 100, unit: "কেজি", emoji: "🍐" },
  { id: 32, name: "পেঁপে", category: "ফলমূল", price: 70, unit: "কেজি", emoji: "🍈" },
  { id: 33, name: "তরমুজ", category: "ফলমূল", price: 60, unit: "কেজি", emoji: "🍉" },
  { id: 34, name: "ডালিম", category: "ফলমূল", price: 350, unit: "কেজি", emoji: "🍎" },
  { id: 35, name: "নারিকেল", category: "ফলমূল", price: 100, unit: "পিস", emoji: "🥥" },
  { id: 36, name: "জাম", category: "ফলমূল", price: 180, unit: "কেজি", emoji: "🫐" },
  { id: 37, name: "কাঁচা আম", category: "ফলমূল", price: 100, unit: "কেজি", emoji: "🥭" },
  { id: 38, name: "আঙুর", category: "ফলমূল", price: 300, unit: "কেজি", emoji: "🍇" },

  // ================= FISH =================
  { id: 39, name: "রুই মাছ", category: "মাছ", price: 380, unit: "কেজি", emoji: "🐟" },
  { id: 40, name: "কাতলা মাছ", category: "মাছ", price: 420, unit: "কেজি", emoji: "🐟" },
  { id: 41, name: "ইলিশ মাছ", category: "মাছ", price: 1200, unit: "কেজি", emoji: "🐟" },
  { id: 42, name: "পাঙ্গাস মাছ", category: "মাছ", price: 220, unit: "কেজি", emoji: "🐟" },
  { id: 43, name: "তেলাপিয়া", category: "মাছ", price: 240, unit: "কেজি", emoji: "🐟" },
  { id: 44, name: "চিংড়ি", category: "মাছ", price: 700, unit: "কেজি", emoji: "🦐" },
  { id: 45, name: "কৈ মাছ", category: "মাছ", price: 550, unit: "কেজি", emoji: "🐟" },
  { id: 46, name: "শিং মাছ", category: "মাছ", price: 600, unit: "কেজি", emoji: "🐟" },
  { id: 47, name: "মাগুর মাছ", category: "মাছ", price: 650, unit: "কেজি", emoji: "🐟" },
  { id: 48, name: "বোয়াল মাছ", category: "মাছ", price: 500, unit: "কেজি", emoji: "🐟" },

  // ================= MEAT =================
  { id: 49, name: "গরুর মাংস", category: "মাংস", price: 750, unit: "কেজি", emoji: "🥩" },
  { id: 50, name: "খাসির মাংস", category: "মাংস", price: 950, unit: "কেজি", emoji: "🥩" },
  { id: 51, name: "ব্রয়লার মুরগি", category: "মাংস", price: 220, unit: "কেজি", emoji: "🍗" },
  { id: 52, name: "দেশি মুরগি", category: "মাংস", price: 650, unit: "কেজি", emoji: "🍗" },
  { id: 53, name: "মুরগির বুকের মাংস", category: "মাংস", price: 350, unit: "কেজি", emoji: "🍗" },
  { id: 54, name: "মুরগির রান", category: "মাংস", price: 320, unit: "কেজি", emoji: "🍗" },

  // ================= SPICES =================
  { id: 55, name: "হলুদ গুঁড়া", category: "মসলা", price: 180, unit: "৫০০ গ্রাম", emoji: "🟡" },
  { id: 56, name: "মরিচ গুঁড়া", category: "মসলা", price: 220, unit: "৫০০ গ্রাম", emoji: "🌶️" },
  { id: 57, name: "জিরা", category: "মসলা", price: 300, unit: "৫০০ গ্রাম", emoji: "🟤" },
  { id: 58, name: "ধনে গুঁড়া", category: "মসলা", price: 160, unit: "৫০০ গ্রাম", emoji: "🌿" },
  { id: 59, name: "গরম মসলা", category: "মসলা", price: 250, unit: "১০০ গ্রাম", emoji: "🧂" },
  { id: 60, name: "এলাচ", category: "মসলা", price: 450, unit: "১০০ গ্রাম", emoji: "🌿" },
  { id: 61, name: "দারুচিনি", category: "মসলা", price: 180, unit: "১০০ গ্রাম", emoji: "🌿" },
  { id: 62, name: "লবঙ্গ", category: "মসলা", price: 220, unit: "১০০ গ্রাম", emoji: "🌿" },
  { id: 63, name: "গোলমরিচ", category: "মসলা", price: 280, unit: "১০০ গ্রাম", emoji: "⚫" },
  { id: 64, name: "তেজপাতা", category: "মসলা", price: 80, unit: "১০০ গ্রাম", emoji: "🌿" },

  // ================= RICE & DAL =================
  { id: 65, name: "মিনিকেট চাল", category: "চাল ও ডাল", price: 750, unit: "১০ কেজি", emoji: "🍚" },
  { id: 66, name: "নাজিরশাইল চাল", category: "চাল ও ডাল", price: 850, unit: "১০ কেজি", emoji: "🍚" },
  { id: 67, name: "বাসমতি চাল", category: "চাল ও ডাল", price: 180, unit: "কেজি", emoji: "🍚" },
  { id: 68, name: "মসুর ডাল", category: "চাল ও ডাল", price: 140, unit: "কেজি", emoji: "🫘" },
  { id: 69, name: "মুগ ডাল", category: "চাল ও ডাল", price: 170, unit: "কেজি", emoji: "🫘" },
  { id: 70, name: "ছোলা", category: "চাল ও ডাল", price: 110, unit: "কেজি", emoji: "🫘" },
  { id: 71, name: "মটর ডাল", category: "চাল ও ডাল", price: 130, unit: "কেজি", emoji: "🫘" },

  // ================= OIL =================
  { id: 72, name: "সয়াবিন তেল", category: "তেল", price: 190, unit: "লিটার", emoji: "🛢️" },
  { id: 73, name: "সরিষার তেল", category: "তেল", price: 240, unit: "লিটার", emoji: "🛢️" },
  { id: 74, name: "অলিভ অয়েল", category: "তেল", price: 850, unit: "লিটার", emoji: "🫒" },
  { id: 75, name: "নারিকেল তেল", category: "তেল", price: 300, unit: "লিটার", emoji: "🥥" },

  // ================= MILK & EGGS =================
  { id: 76, name: "গরুর দুধ", category: "দুধ ও ডিম", price: 90, unit: "লিটার", emoji: "🥛" },
  { id: 77, name: "ডিম", category: "দুধ ও ডিম", price: 150, unit: "ডজন", emoji: "🥚" },
  { id: 78, name: "মাখন", category: "দুধ ও ডিম", price: 350, unit: "৫০০ গ্রাম", emoji: "🧈" },
  { id: 79, name: "চিজ", category: "দুধ ও ডিম", price: 420, unit: "৫০০ গ্রাম", emoji: "🧀" },
  { id: 80, name: "দই", category: "দুধ ও ডিম", price: 180, unit: "৫০০ গ্রাম", emoji: "🥛" },

  // ================= SNACKS =================
  { id: 81, name: "বিস্কুট", category: "স্ন্যাকস", price: 60, unit: "প্যাকেট", emoji: "🍪" },
  { id: 82, name: "চিপস", category: "স্ন্যাকস", price: 30, unit: "প্যাকেট", emoji: "🥔" },
  { id: 83, name: "চকলেট", category: "স্ন্যাকস", price: 120, unit: "পিস", emoji: "🍫" },
  { id: 84, name: "নুডলস", category: "স্ন্যাকস", price: 70, unit: "প্যাকেট", emoji: "🍜" },
  { id: 85, name: "পপকর্ন", category: "স্ন্যাকস", price: 80, unit: "প্যাকেট", emoji: "🍿" },

  // ================= DRINKS =================
  { id: 86, name: "মিনারেল ওয়াটার", category: "পানীয়", price: 30, unit: "লিটার", emoji: "💧" },
  { id: 87, name: "জুস", category: "পানীয়", price: 120, unit: "লিটার", emoji: "🧃" },
  { id: 88, name: "কোল্ড ড্রিংকস", category: "পানীয়", price: 70, unit: "লিটার", emoji: "🥤" },
  { id: 89, name: "গ্রিন টি", category: "পানীয়", price: 180, unit: "প্যাকেট", emoji: "🍵" },
  { id: 90, name: "কফি", category: "পানীয়", price: 450, unit: "২০০ গ্রাম", emoji: "☕" },

  // ================= HOUSEHOLD =================
  { id: 91, name: "ডিটারজেন্ট", category: "ঘর পরিষ্কার", price: 180, unit: "কেজি", emoji: "🧺" },
  { id: 92, name: "ডিশওয়াশ", category: "ঘর পরিষ্কার", price: 120, unit: "প্যাকেট", emoji: "🧽" },
  { id: 93, name: "ফ্লোর ক্লিনার", category: "ঘর পরিষ্কার", price: 180, unit: "লিটার", emoji: "🧹" },
  { id: 94, name: "টিস্যু", category: "ঘর পরিষ্কার", price: 100, unit: "বক্স", emoji: "🧻" },
  { id: 95, name: "ময়লার ব্যাগ", category: "ঘর পরিষ্কার", price: 120, unit: "প্যাকেট", emoji: "🗑️" },

  // ================= PERSONAL CARE =================
  { id: 96, name: "শ্যাম্পু", category: "Personal Care", price: 250, unit: "বোতল", emoji: "🧴" },
  { id: 97, name: "সাবান", category: "Personal Care", price: 70, unit: "পিস", emoji: "🧼" },
  { id: 98, name: "টুথপেস্ট", category: "Personal Care", price: 120, unit: "প্যাকেট", emoji: "🪥" },
  { id: 99, name: "টুথব্রাশ", category: "Personal Care", price: 80, unit: "পিস", emoji: "🪥" },
  { id: 100, name: "হ্যান্ডওয়াশ", category: "Personal Care", price: 160, unit: "বোতল", emoji: "🧴" },
  { id: 101, name: "ফেসওয়াশ", category: "Personal Care", price: 280, unit: "বোতল", emoji: "🧴" },

  // ================= DAILY =================
  { id: 102, name: "লবণ", category: "দৈনন্দিন পণ্য", price: 40, unit: "কেজি", emoji: "🧂" },
  { id: 103, name: "চিনি", category: "দৈনন্দিন পণ্য", price: 140, unit: "কেজি", emoji: "🍚" },
  { id: 104, name: "ময়দা", category: "দৈনন্দিন পণ্য", price: 65, unit: "কেজি", emoji: "🌾" },
  { id: 105, name: "আটা", category: "দৈনন্দিন পণ্য", price: 60, unit: "কেজি", emoji: "🌾" },
  { id: 106, name: "সুজি", category: "দৈনন্দিন পণ্য", price: 75, unit: "কেজি", emoji: "🌾" },
  { id: 107, name: "চা পাতা", category: "দৈনন্দিন পণ্য", price: 220, unit: "৫০০ গ্রাম", emoji: "🍵" },
  { id: 108, name: "মধু", category: "দৈনন্দিন পণ্য", price: 500, unit: "৫০০ গ্রাম", emoji: "🍯" },
  { id: 109, name: "খেজুর", category: "দৈনন্দিন পণ্য", price: 450, unit: "কেজি", emoji: "🌴" },
  { id: 110, name: "কিশমিশ", category: "দৈনন্দিন পণ্য", price: 500, unit: "৫০০ গ্রাম", emoji: "🍇" },
  { id: 111, name: "বাদাম", category: "দৈনন্দিন পণ্য", price: 650, unit: "৫০০ গ্রাম", emoji: "🥜" },
  { id: 112, name: "কাজু বাদাম", category: "দৈনন্দিন পণ্য", price: 850, unit: "৫০০ গ্রাম", emoji: "🥜" },
];

const categories = [
  { name: "সব পণ্য", emoji: "🛍️" },
  { name: "শাকসবজি", emoji: "🥬" },
  { name: "ফলমূল", emoji: "🍎" },
  { name: "মাছ", emoji: "🐟" },
  { name: "মাংস", emoji: "🥩" },
  { name: "মসলা", emoji: "🌶️" },
  { name: "চাল ও ডাল", emoji: "🍚" },
  { name: "তেল", emoji: "🛢️" },
  { name: "দুধ ও ডিম", emoji: "🥚" },
  { name: "স্ন্যাকস", emoji: "🍪" },
  { name: "পানীয়", emoji: "🥤" },
  { name: "ঘর পরিষ্কার", emoji: "🧹" },
  { name: "Personal Care", emoji: "🧴" },
  { name: "দৈনন্দিন পণ্য", emoji: "🛒" },
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("সব পণ্য");

  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const [orderProduct, setOrderProduct] = useState<Product | null>(null);

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "সব পণ্য" || product.category === category;

    return searchMatch && categoryMatch;
  });

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function addToCart(product: Product) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function increaseQuantity(id: number) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(id: number) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id: number) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  function openOrder(product: Product) {
    setOrderProduct(product);
    setQuantity(1);
  }

  function placeOrder() {
    if (!customerName || !phone || !address) {
      alert("অনুগ্রহ করে নাম, মোবাইল নম্বর এবং ঠিকানা দিন।");
      return;
    }

    alert(
      `Order সফল হয়েছে!\n\nপণ্য: ${orderProduct?.name}\nQuantity: ${quantity}\nCustomer: ${customerName}\nPhone: ${phone}`
    );

    setOrderProduct(null);
    setCustomerName("");
    setPhone("");
    setAddress("");
    setQuantity(1);
  }

  return (
    <main className="min-h-screen bg-[#F8FAF8] text-[#1F2937]">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white">

        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">

          <div className="min-w-fit">

            <h1 className="text-2xl font-bold text-[#087A3D]">
              🛒 Smart Bazar
            </h1>

            <p className="hidden text-xs text-[#6B7280] sm:block">
              Fresh • Quality • Affordable
            </p>

          </div>

          {/* Search */}
          <div className="relative flex-1">

            <span className="absolute left-4 top-3">
              🔍
            </span>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F8FAF8] py-3 pl-11 pr-4 outline-none focus:border-[#087A3D]"
            />

          </div>

          {/* ONE CART BUTTON */}
          <button
            onClick={() => setShowCart(true)}
            className="relative rounded-xl bg-[#EAF7EE] px-4 py-3 text-xl text-[#087A3D] transition hover:bg-[#d9f1df]"
          >

            🛒

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6B00] text-xs font-bold text-white">
                {cartCount}
              </span>
            )}

          </button>

        </div>

      </header>

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-4 py-7">

        <div className="grid overflow-hidden rounded-3xl bg-[#087A3D] md:grid-cols-2">

          <div className="p-7 text-white md:p-12">

            <span className="rounded-full bg-[#EAF7EE] px-4 py-2 text-sm font-bold text-[#087A3D]">
              🥬 Fresh Products Everyday
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              আপনার বাজার,
              <br />
              এখন ঘরে বসেই!
            </h2>

            <p className="mt-4 text-[#EAF7EE]">
              শাকসবজি, ফলমূল, মাছ, মাংস, মসলা
              এবং দৈনন্দিন প্রয়োজনীয় পণ্য এক জায়গায়।
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="mt-6 rounded-xl bg-[#FF6B00] px-7 py-3 font-bold text-white hover:opacity-90"
            >
              এখনই কেনাকাটা করুন →
            </button>

          </div>

          {/* LOGO */}
          <div className="flex items-center justify-center p-8">

            <div className="rounded-3xl bg-[#EAF7EE] p-8 text-center">

              <img
                src="/logo.jpeg"
                alt="Smart Bazar Logo"
                className="mx-auto h-32 w-auto object-contain"
              />

              <p className="mt-4 font-bold text-[#087A3D]">
                Fresh & Quality
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="mx-auto max-w-7xl px-4 py-5">

        <h2 className="text-2xl font-bold">
          Categories
        </h2>

        <p className="mt-1 text-sm text-[#6B7280]">
          আপনার প্রয়োজনীয় পণ্য বেছে নিন
        </p>

        <div className="mt-5 flex gap-3 overflow-x-auto pb-3">

          {categories.map((item) => (

            <button
              key={item.name}
              onClick={() => setCategory(item.name)}
              className={`min-w-fit rounded-xl border px-5 py-3 font-medium transition ${
                category === item.name
                  ? "border-[#087A3D] bg-[#087A3D] text-white"
                  : "border-[#E5E7EB] bg-white hover:border-[#087A3D]"
              }`}
            >

              <span className="mr-2">
                {item.emoji}
              </span>

              {item.name}

            </button>

          ))}

        </div>

      </section>

      {/* ================= PRODUCTS ================= */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-4 py-8"
      >

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold">
              {category}
            </h2>

            <p className="text-sm text-[#6B7280]">
              {filteredProducts.length} টি পণ্য
            </p>

          </div>

          <span className="rounded-full bg-[#FFF1E6] px-4 py-2 text-sm font-bold text-[#FF6B00]">
            🔥 Best Price
          </span>

        </div>

        {filteredProducts.length === 0 ? (

          <div className="rounded-2xl bg-white p-12 text-center">

            <div className="text-5xl">
              🔍
            </div>

            <h3 className="mt-4 text-xl font-bold">
              কোনো পণ্য পাওয়া যায়নি
            </h3>

          </div>

        ) : (

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >

                {/* Product Image */}
                <div className="flex h-40 items-center justify-center bg-[#F8FAF8]">

                  <span className="text-7xl transition group-hover:scale-110">
                    {product.emoji}
                  </span>

                </div>

                {/* Product Info */}
                <div className="p-4">

                  <p className="text-xs text-[#6B7280]">
                    {product.category}
                  </p>

                  <h3 className="mt-1 font-bold">
                    {product.name}
                  </h3>

                  <div className="mt-3">

                    <span className="text-lg font-bold text-[#087A3D]">
                      ৳{product.price}
                    </span>

                    <span className="ml-1 text-xs text-[#6B7280]">
                      / {product.unit}
                    </span>

                  </div>

                  {/* TWO BUTTONS ONLY */}
                  <div className="mt-3 grid grid-cols-2 gap-2">

                    {/* ADD TO CART */}
                    <button
                      onClick={() => addToCart(product)}
                      className="rounded-lg bg-[#087A3D] py-2.5 text-xs font-bold text-white transition hover:bg-[#045A2C]"
                    >
                      🛒 Add to Cart
                    </button>

                    {/* ORDER NOW */}
                    <button
                      onClick={() => openOrder(product)}
                      className="rounded-lg bg-[#FF6B00] py-2.5 text-xs font-bold text-white transition hover:bg-[#e85f00]"
                    >
                      ⚡ Order Now
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

      {/* ================= FEATURES ================= */}
      <section className="mx-auto max-w-7xl px-4 py-8">

        <div className="grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl bg-[#EAF7EE] p-6">

            <div className="text-3xl">
              🚚
            </div>

            <h3 className="mt-3 font-bold text-[#045A2C]">
              দ্রুত ডেলিভারি
            </h3>

            <p className="mt-1 text-sm text-[#6B7280]">
              আপনার অর্ডার দ্রুত পৌঁছে যাবে।
            </p>

          </div>

          <div className="rounded-2xl bg-[#FFF1E6] p-6">

            <div className="text-3xl">
              🥬
            </div>

            <h3 className="mt-3 font-bold text-[#FF6B00]">
              Fresh Products
            </h3>

            <p className="mt-1 text-sm text-[#6B7280]">
              প্রতিদিনের fresh পণ্য।
            </p>

          </div>

          <div className="rounded-2xl bg-[#EAF7EE] p-6">

            <div className="text-3xl">
              🔒
            </div>

            <h3 className="mt-3 font-bold text-[#045A2C]">
              নিরাপদ কেনাকাটা
            </h3>

            <p className="mt-1 text-sm text-[#6B7280]">
              নিরাপদ ও সহজ shopping experience।
            </p>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="mt-8 bg-[#045A2C] px-4 py-10 text-white">

        <div className="mx-auto max-w-7xl">

          <h2 className="text-2xl font-bold">
            🛒 Smart Bazar
          </h2>

          <p className="mt-2 text-sm text-[#EAF7EE]">
            আপনার দৈনন্দিন বাজারের বিশ্বস্ত অনলাইন ঠিকানা।
          </p>

          <div className="mt-8 border-t border-[#087A3D] pt-5 text-center text-sm text-[#EAF7EE]">
            © 2026 Smart Bazar. All rights reserved.
          </div>

        </div>

      </footer>

      {/* ================================================= */}
      {/* CART MODAL */}
      {/* ================================================= */}

      {showCart && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">

          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">

            {/* Cart Header */}
            <div className="flex items-center justify-between border-b border-[#E5E7EB] p-5">

              <h2 className="text-xl font-bold">
                🛒 My Cart
              </h2>

              <button
                onClick={() => setShowCart(false)}
                className="rounded-lg bg-[#F8FAF8] px-3 py-2 text-lg"
              >
                ✕
              </button>

            </div>

            {/* Cart Content */}
            <div className="p-5">

              {cart.length === 0 ? (

                <div className="py-12 text-center">

                  <div className="text-6xl">
                    🛒
                  </div>

                  <h3 className="mt-4 text-xl font-bold">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 text-sm text-[#6B7280]">
                    কিছু পণ্য Cart-এ যোগ করুন।
                  </p>

                  <button
                    onClick={() => setShowCart(false)}
                    className="mt-5 rounded-xl bg-[#087A3D] px-6 py-3 font-bold text-white"
                  >
                    Continue Shopping
                  </button>

                </div>

              ) : (

                <>

                  {/* Cart Items */}
                  <div className="space-y-3">

                    {cart.map((item) => (

                      <div
                        key={item.id}
                        className="rounded-xl bg-[#F8FAF8] p-4"
                      >

                        <div className="flex items-center gap-3">

                          <div className="text-4xl">
                            {item.emoji}
                          </div>

                          <div className="flex-1">

                            <h3 className="font-bold">
                              {item.name}
                            </h3>

                            <p className="text-sm text-[#087A3D]">
                              ৳{item.price} / {item.unit}
                            </p>

                          </div>

                          <button
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="text-sm font-bold text-[#DC2626]"
                          >
                            Remove
                          </button>

                        </div>

                        {/* Quantity */}
                        <div className="mt-3 flex items-center justify-between">

                          <div className="flex items-center rounded-lg border bg-white">

                            <button
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="px-4 py-2 font-bold"
                            >
                              −
                            </button>

                            <span className="px-4 font-bold">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="px-4 py-2 font-bold"
                            >
                              +
                            </button>

                          </div>

                          <span className="font-bold text-[#087A3D]">
                            ৳{item.price * item.quantity}
                          </span>

                        </div>

                      </div>

                    ))}

                  </div>

                  {/* Total */}
                  <div className="mt-6 border-t border-[#E5E7EB] pt-5">

                    <div className="flex justify-between">

                      <span className="font-bold">
                        Total Items
                      </span>

                      <span>
                        {cartCount}
                      </span>

                    </div>

                    <div className="mt-2 flex justify-between text-xl">

                      <span className="font-bold">
                        Total
                      </span>

                      <span className="font-bold text-[#087A3D]">
                        ৳{cartTotal}
                      </span>

                    </div>

                    <button
                      onClick={() => {
                        setShowCart(false);

                        if (cart.length > 0) {
                          setOrderProduct(cart[0]);
                          setQuantity(cart[0].quantity);
                        }
                      }}
                      className="mt-5 w-full rounded-xl bg-[#FF6B00] py-3 font-bold text-white hover:opacity-90"
                    >
                      🛍️ Checkout / Order
                    </button>

                  </div>

                </>

              )}

            </div>

          </div>

        </div>

      )}

      {/* ================================================= */}
      {/* ORDER NOW MODAL */}
      {/* ================================================= */}

      {orderProduct && (

        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4">

          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">

            {/* Order Header */}
            <div className="flex items-center justify-between border-b border-[#E5E7EB] p-5">

              <h2 className="text-xl font-bold">
                ⚡ Order Now
              </h2>

              <button
                onClick={() => setOrderProduct(null)}
                className="rounded-lg bg-[#F8FAF8] px-3 py-2"
              >
                ✕
              </button>

            </div>

            <div className="p-5">

              {/* Selected Product */}
              <div className="flex items-center gap-4 rounded-xl bg-[#EAF7EE] p-4">

                <div className="text-5xl">
                  {orderProduct.emoji}
                </div>

                <div>

                  <h3 className="font-bold">
                    {orderProduct.name}
                  </h3>

                  <p className="text-[#087A3D]">
                    ৳{orderProduct.price} / {orderProduct.unit}
                  </p>

                </div>

              </div>

              {/* Quantity */}
              <label className="mt-5 block text-sm font-bold">
                Quantity
              </label>

              <div className="mt-2 flex items-center rounded-lg border">

                <button
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                  className="px-5 py-3 text-xl font-bold"
                >
                  −
                </button>

                <span className="flex-1 text-center font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((q) => q + 1)
                  }
                  className="px-5 py-3 text-xl font-bold"
                >
                  +
                </button>

              </div>

              {/* Name */}
              <label className="mt-5 block text-sm font-bold">
                আপনার নাম
              </label>

              <input
                type="text"
                value={customerName}
                onChange={(e) =>
                  setCustomerName(e.target.value)
                }
                placeholder="আপনার নাম লিখুন"
                className="mt-2 w-full rounded-lg border border-[#E5E7EB] p-3 outline-none focus:border-[#087A3D]"
              />

              {/* Phone */}
              <label className="mt-4 block text-sm font-bold">
                মোবাইল নম্বর
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                placeholder="01XXXXXXXXX"
                className="mt-2 w-full rounded-lg border border-[#E5E7EB] p-3 outline-none focus:border-[#087A3D]"
              />

              {/* Address */}
              <label className="mt-4 block text-sm font-bold">
                Delivery Address
              </label>

              <textarea
                value={address}
                onChange={(e) =>
                  setAddress(e.target.value)
                }
                placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                rows={3}
                className="mt-2 w-full rounded-lg border border-[#E5E7EB] p-3 outline-none focus:border-[#087A3D]"
              />

              {/* Order Summary */}
              <div className="mt-5 rounded-xl bg-[#F8FAF8] p-4">

                <div className="flex justify-between">

                  <span>
                    Product
                  </span>

                  <span className="font-bold">
                    ৳
                    {orderProduct.price * quantity}
                  </span>

                </div>

                <div className="mt-2 flex justify-between">

                  <span>
                    Delivery
                  </span>

                  <span className="font-bold">
                    ৳50
                  </span>

                </div>

                <div className="mt-3 border-t pt-3">

                  <div className="flex justify-between text-lg">

                    <span className="font-bold">
                      Total
                    </span>

                    <span className="font-bold text-[#087A3D]">
                      ৳
                      {orderProduct.price * quantity + 50}
                    </span>

                  </div>

                </div>

              </div>

              {/* Place Order */}
              <button
                onClick={placeOrder}
                className="mt-5 w-full rounded-xl bg-[#087A3D] py-3 font-bold text-white transition hover:bg-[#045A2C]"
              >
                ✅ Place Order
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}