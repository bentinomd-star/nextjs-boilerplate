export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="mb-4 inline-block rounded-full border border-yellow-500 px-4 py-2 text-yellow-400">Atención en CABA y Zona Norte</div>
          <h1 className="text-5xl font-black md:text-7xl">BENTINO SERVICIOS</h1>
          <p className="mt-4 text-2xl font-bold text-yellow-400">Electricidad y Reparaciones Generales</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">Soluciones rápidas, seguras y confiables para tu hogar.</p>
          <a href="https://wa.me/5491164107178" target="_blank" rel="noopener noreferrer" className="mt-10 inline-block rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black">Solicitar Presupuesto</a>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-center text-4xl font-black">Servicios</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border p-8 shadow">
            <h3 className="mb-4 text-2xl font-bold text-yellow-500">⚡ Electricidad</h3>
            <ul className="space-y-2">
              <li>Instalaciones eléctricas</li><li>Reparación de fallas</li><li>Cambio de tomacorrientes</li><li>Instalación de luminarias</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-8 shadow">
            <h3 className="mb-4 text-2xl font-bold text-yellow-500">🔧 Reparaciones</h3>
            <ul className="space-y-2">
              <li>Mantenimiento del hogar</li><li>Instalaciones</li><li>Arreglos generales</li><li>Soluciones a medida</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-zinc-100 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-8 text-4xl font-black">¿Por qué elegir Bentino?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow">Respuesta rápida</div>
            <div className="rounded-xl bg-white p-6 shadow">Trabajos garantizados</div>
            <div className="rounded-xl bg-white p-6 shadow">Atención personalizada</div>
          </div>
        </div>
      </section>
      <section className="bg-yellow-500 py-20 text-center">
        <h2 className="text-4xl font-black">¿Tenés algo para reparar?</h2>
        <a href="https://wa.me/5491164107178" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block rounded-xl bg-black px-8 py-4 font-bold text-white">¡Escribinos!</a>
      </section>
      <footer className="bg-black py-8 text-center text-white">BENTINO SERVICIOS · CABA y Zona Norte</footer>
    </main>
  );
}
