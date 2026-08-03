export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">

          <h1 className="text-5xl md:text-7xl font-black">
            BENTINO
          </h1>

          <p className="mt-4 text-2xl font-bold text-yellow-400">
            ELECTRICIDAD Y REPARACIONES GENERALES
          </p>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-300">
            Soluciones rápidas y confiables para tu hogar.
            Atención en CABA y Zona Norte.
          </p>

          <a
            href="https://wa.me/5491164107178"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400"
          >
           ssName="grid md:grid-cols-2 gap-8">

          <div className="rounded-2xl border p-8 shadow-lg">

            <h3 className="text-2xl font-bold text-yellow-500 mb-6">
              ⚡ Electricidad
            </h3>

            <ul className="space-y-3">
              <li>Instalaciones eléctricas</li>
              <li>Cambio de tomacorrientes</li>
              <li>Cambio de interruptores</li>
              <li>Instalación de luminarias</li>
              <li>Reparación de fallas eléctricas</li>
              <li>Colocación de artefactos eléctricos</li>
            </ul>

          </div>

          <div className="rounded-2xl border p-8 shadow-lg">

            <h3 className="text-2xl font-bold text-yellow-500 mb-6">
              🔧 Reparaciones Generales
            </h3>

            <ul className="space-y-3">
              <li>Mantenimiento del hogar</li>
              <li>Instalaciones y colocaciones</li>
              <li>Reparaciones varias</li>
              <li>Trabajos pendientes del hogar</li>
            </ul>

          </div>

        </div>

      </section>

      {/* ZONAS */}
      <section className="bg-zinc-100 py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-black mb-10">
            Atención a Domicilio
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            {[
              "Palermo",
              "Recoleta",
              "Belgrano",
              "Colegiales",
              "Saavedra",
              "CABA",
              "Zona Norte",
            ].map((zona) => (
              <span
                key={zona}
                className="rounded-full bg-yellow-500 px-5 py-3 font-semibold"
              >
                {zona}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* BENEFICIOS */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-center text-4xl font-black mb-12">
          ¿Por qué elegir Bentino?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-2xl border p-8 shadow text-center">
            <h3 className="text-xl font-bold">Rapidez</h3>
            <p className="mt-3">
              Coordinación rápida por WhatsApp.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow text-center">
            <h3 className="text-xl font-bold">Confianza</h3>
            <p className="mt-3">
              Trabajos responsables y prolijos.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow text-center">
            <h3 className="text-xl font-bold">Garantía</h3>
            <p className="mt-3">
              Soluciones duraderas para tu hogar.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-yellow-500 py-24 text-center">

        <h2 className="text-5xl font-black">
          ¿Tenés algo para reparar?
        </h2>

        <p className="mt-4 text-xl">
          Consultanos y coordinamos tu visita.
        </p>

        ://wa.me/5491164107178"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 rounded-xl bg-black px-10 py-4 font-bold text-white"
        >
          WhatsApp 11 6410-7178
        </a>

      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 text-center text-white">

        <p className="font-bold">
          BENTINO SERVICIOS
        </p>

        <p className="mt-2 text-zinc-400">
          Electricidad y Reparaciones Generales
        </p>

        <p className="mt-2 text-zinc-400">
          CABA y Zona Norte
        </p>

      </footer>

    </main>
  );
}
