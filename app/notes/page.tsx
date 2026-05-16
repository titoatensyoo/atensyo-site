export default function Notes() {
  const categories = [
    { title: "Learning", emoji: "📚", description: "Hal-hal baru yang lagi gue pelajarin", count: 1, href: "/notes/learning" },
    { title: "Ideas", emoji: "💡", description: "Ide-ide random yang muncul di kepala", count: 0, href: "/notes/ideas" },
    { title: "Journal", emoji: "🗒️", description: "Refleksi & catatan pribadi", count: 0, href: "/notes/journal" },
  ];
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
        <p className="text-sm text-gray-400 mb-2">My writings</p>
        <h1 className="text-4xl font-bold mb-4">Notes</h1>
        <p className="text-gray-500 mb-12">Kumpulan catatan, ide, dan refleksi pribadi gue.</p>
        <div className="flex flex-col gap-4">
          {categories.map((cat) => (
            <a key={cat.title} href={cat.href} className="border border-gray-200 rounded-xl px-6 py-5 hover:bg-gray-50 transition">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span>{cat.emoji}</span>
                  <p className="font-medium">{cat.title}</p>
                </div>
                <span className="text-xs text-gray-300">{cat.count} notes</span>
              </div>
              <p className="text-sm text-gray-400">{cat.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}