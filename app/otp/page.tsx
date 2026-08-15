export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-green-700 text-white p-5 flex justify-between items-center">
        <button>☰</button>

        <img src="/logo.jpeg" alt="Smart Bazar" className="w-24" />

        <button>🛒</button>
      </header>

      <div className="p-5">
        <input
          placeholder="Search fresh groceries..."
          className="w-full p-4 rounded-2xl bg-white shadow"
        />

        <div className="bg-green-700 text-white rounded-3xl p-6 mt-6">
          <h2 className="text-2xl font-bold">Fresh Grocery</h2>
          <p>Up to 40% OFF</p>
        </div>
      </div>
    </main>
  );
}