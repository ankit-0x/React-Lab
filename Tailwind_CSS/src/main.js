import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Tailwind CSS Complete Demo</h1>
        <p className="mt-2 text-lg">
          Colors • Spacing • Flex • Grid • Cards • Buttons • Responsive
        </p>
      </header>

      {/* Color Section */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">🎨 Colors</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 text-white text-center font-semibold">
          <div className="bg-red-500 p-4 rounded">Red</div>
          <div className="bg-orange-500 p-4 rounded">Orange</div>
          <div className="bg-yellow-500 p-4 rounded text-black">Yellow</div>
          <div className="bg-green-500 p-4 rounded">Green</div>
          <div className="bg-blue-500 p-4 rounded">Blue</div>
          <div className="bg-purple-500 p-4 rounded">Purple</div>
          <div className="bg-pink-500 p-4 rounded">Pink</div>
          <div className="bg-gray-700 p-4 rounded">Gray</div>
        </div>
      </section>

      {/* Typography */}
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">✍ Typography</h2>
        <p className="text-sm">Small Text</p>
        <p className="text-base">Base Text</p>
        <p className="text-xl font-semibold">Large Semi Bold</p>
        <p className="text-3xl font-extrabold text-indigo-600">
          Extra Large Bold Indigo
        </p>
      </section>

      {/* Spacing */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">📦 Spacing</h2>
        <div className="bg-emerald-500 p-10 m-4 text-white text-center rounded-xl">
          Padding 10 + Margin 4
        </div>
      </section>

      {/* Flexbox */}
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">↔ Flexbox</h2>
        <div className="flex justify-between items-center bg-slate-200 p-6 rounded">
          <div className="bg-teal-500 text-white p-4 rounded">Left</div>
          <div className="bg-cyan-500 text-white p-4 rounded">Center</div>
          <div className="bg-sky-500 text-white p-4 rounded">Right</div>
        </div>
      </section>

      {/* Grid */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">🔲 Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-indigo-500 text-white p-6 rounded">Grid 1</div>
          <div className="bg-violet-500 text-white p-6 rounded">Grid 2</div>
          <div className="bg-fuchsia-500 text-white p-6 rounded">Grid 3</div>
        </div>
      </section>

      {/* Cards */}
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6">🃏 Cards</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold mb-2">Card Title {card}</h3>
              <p className="text-gray-600 mb-4">
                This is a simple card using Tailwind utilities.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Click Me
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Responsive */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">📱 Responsive Design</h2>
        <div className="bg-rose-500 md:bg-green-500 text-white p-6 rounded text-center">
          Resize screen — Color changes on medium screen
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-10">
        © 2026 Tailwind CSS Demo
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
