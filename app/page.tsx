export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="bg-zinc-950 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">BENTINO SERVICIOS</h1>
          <p className="mt-4 text-xl text-yellow-400">
            Electricidad y Reparaciones Generales
          </p>
          <p className="mt-6">
            Atención en CABA y Zona Norte.
          </p>
          <a
            href="https://wa.me/5491164107178"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
          >
            Solicitar Presupuesto por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
