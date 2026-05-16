export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        <a href="/" className="font-bold text-xl">atensyo</a>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/notes">Notes</a>
          <a href="/contact" className="font-medium text-black">Contact</a>
        </div>
      </nav>
      <section className="px-8 py-24 max-w-2xl mx-auto">
        <p className="text-sm text-gray-400 mb-2">Get in touch</p>
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-gray-500 mb-12">Feel free to reach out anytime.</p>
        <div className="flex flex-col gap-4">
          <div className="border border-gray-200 rounded-xl px-6 py-4">
            <p className="font-medium text-sm">Email</p>
            <p className="text-gray-400 text-sm">titoatensyo280@gmail.com</p>
          </div>
          <div className="border border-gray-200 rounded-xl px-6 py-4">
            <p className="font-medium text-sm">LinkedIn</p>
            <p className="text-gray-400 text-sm">linkedin.com/in/titoatensyo08</p>
          </div>
          <div className="border border-gray-200 rounded-xl px-6 py-4">
            <p className="font-medium text-sm">Instagram</p>
            <p className="text-gray-400 text-sm">@titoatnsy15</p>
          </div>
        </div>
      </section>
    </main>
  );
}