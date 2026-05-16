export default function Ideas() {
  const notes: { title: string; date: string; preview: string }[] = [];

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
        <a href="/notes" className="text-sm text-gray-400 hover:text-black mb-6 inline-block">
          Back to Notes
        </a>
        <div className="flex items-center gap-2 mb-2">
          <span>💡</span>
          <p className="text-sm text-gray-400">Category</p>
        </div>
        <h1 className="text-4xl font-bold mb-12">Ideas</h1>
        {notes.length === 0 ? (
          <p className="text-gray-400 text-sm">Belum ada catatan.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {notes.map((note) => (
              <div key={note.title} className="border border-gray-200 rounded-xl px-6 py-5 hover:bg-gray-50 transition">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium">{note.title}</p>
                  <span className="text-xs text-gray-300">{note.date}</span>
                </div>
                <p className="text-sm text-gray-400">{note.preview}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}