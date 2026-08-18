export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-green-700 text-white p-5 rounded-b-3xl">
        <h1 className="text-2xl font-bold">Smart Bazar</h1>
        <p>Fresh groceries delivered fast</p>
      </div>

      {/* Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full h-12 rounded-xl px-4 border bg-white"
        />
      </div>

      {/* Categories */}
      <div className="px-4">
        <h2 className="font-bold text-lg mb-3">Categories</h2>
        <div className="grid grid-cols-4 gap-3">
          {["Fruits", "Vegetables", "Dairy", "Meat"].map((item) => (
            <div key={item} className="bg-white rounded-xl p-3 text-center shadow">
              <div className="text-3xl mb-2">🛒</div>
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-3">Popular Products</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Apple", price: "৳220/kg" },
            { name: "Banana", price: "৳70/dozen" },
            { name: "Milk", price: "৳90" },
            { name: "Tomato", price: "৳60/kg" },
          ].map((item) => (
            <div key={item.name} className="bg-white rounded-2xl p-3 shadow">
              <div className="h-28 bg-gray-200 rounded-xl mb-3 flex items-center justify-center text-4xl">
                🥬
              </div>

              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-green-700 font-bold">{item.price}</p>

              <button className="mt-3 w-full bg-green-700 text-white rounded-xl py-2">
                Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3">
        <div className="flex justify-around">
          <button>🏠</button>
          <button>📂</button>
          <button>❤️</button>
          <button>👤</button>
        </div>
      </div>
    </main>
  );
}