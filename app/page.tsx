import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        <span className="font-bold text-xl tracking-tight">atensyo</span>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="/" className="hover:text-black">Home</a>
          <a href="/projects" className="hover:text-black">Projects</a>
          <a href="/notes" className="hover:text-black">Notes</a>
          <a href="/contact" className="hover:text-black">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-10 mb-12">
          <Image
            src="/foto.png"
            alt="Tito Atensyo Hardite"
            width={120}
            height={120}
            className="rounded-full object-cover w-28 h-28"
          />
          <div>
            <p className="text-sm text-gray-400 mb-2">Hello, I'm</p>
            <h1 className="text-5xl font-bold mb-4">Tito Atensyo Hardite</h1>
            <p className="text-lg text-gray-500">
              A curious mind documenting projects, notes, and ideas — all in one place.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="/projects" className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800">
            See Projects
          </a>
          <a href="/notes" className="border border-gray-300 px-6 py-2 rounded-full text-sm hover:bg-gray-50">
            Read Notes
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100 max-w-3xl mx-auto" />

      {/* Quick Info */}
      <section className="px-8 py-12 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-gray-500">
        <div>
          <p className="font-semibold text-gray-900 mb-1">Based in</p>
          <p>Indonesia 🇮🇩</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900 mb-1">Interests</p>
          <p>Tech, Design, Writing</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900 mb-1">Status</p>
          <p>Building atensyo ⚡</p>
        </div>
      </section>
    </main>
  );
}