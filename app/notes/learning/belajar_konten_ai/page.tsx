export default function BelajarKontenAI() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        <a href="/" className="font-bold text-xl">atensyo</a>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/notes" className="font-medium text-black">Notes</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section className="px-8 py-24 max-w-2xl mx-auto">
        <a href="/notes/learning" className="text-sm text-gray-400 hover:text-black mb-6 inline-block">
          Back to Learning
        </a>
        <div className="mb-8">
          <p className="text-sm text-gray-400 mb-2">17 Mei 2026 · Learning</p>
          <h1 className="text-3xl font-bold mb-4">Belajar Bikin Konten AI di TikTok</h1>
        </div>
        <div className="prose text-gray-600 leading-relaxed flex flex-col gap-4">
          <p>
            Mulai 17 Mei 2026, aku lagi eksplor dunia konten AI. Tools pertama yang aku coba adalah CapCut Pro — hasilnya surprisingly bagus, langsung aku upload ke TikTok.
          </p>
          <p>
            Tantangannya sekarang ada dua: konsistensi upload dan token CapCut AI yang terbatas. CapCut Pro kasih 500 kredit token, tapi sekali habis ya habis — gak refill otomatis. Kalau mau full lagi harus beli.
          </p>
          <p>
            Sisa token aku sekarang: <span className="font-semibold text-gray-900">186</span>. Semoga ada yang mau donasi 😂
          </p>
          <p>
            Untuk sekarang, yang bisa aku lakuin adalah pakai token seefisien mungkin sambil cari alternatif tools AI lain yang gratis.
          </p>
        </div>
      </section>
    </main>
  );
}