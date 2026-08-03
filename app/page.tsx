export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-black">
            BENTINO
          </h1>

          <p className="text-2xl mt-4 text-yellow-400 font-bold">
            ELECTRICIDAD Y REPARACIONES GENERALES
          </p>

          <p className="max-w-2xl mx-auto mt-6 text-zinc-300 text-lg">
            Soluciones rápidas y confiables para tu hogar.
            Atención en CABA y Zona Norte.
          </p>

          wa.me/5491164107178"
            target="_blank"
            className="inline-block mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-center mb-12">
          Servicios
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-500 mb-6">
              ⚡ Electricidad
            </h3>

            <ul className="space-y-3">
              <li>Instalaciones eléctricas</li>
              <li>Cambio de tomacorrientes</li>
              <li>Cambio de interruptores</li>
              <li>Instalación de luminarias</li>
              <li>Reparación de fallas eléctricas</li>
              <li>Artefactos eléctricos</li>
            </ul>
          </div>

          <div className="border rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-500 mb-6">
              🔧 Reparaciones Generales
            </h3>

            <ul className="space-y-3">
              <li>Mantenimiento y arreglos del hogar</li>
              <li>Instalaciones y colocaciones</li>
              <li>Reparaciones varias</li>
              <li>Soluciones prácticas para tu hogar</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ZONAS */}
      <section className="bg-zinc-100 py-24">
        <div className="max-w-5xl mx-auto text-center px-6">

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
                className="bg-yellow-500 px-5 py-3 rounded-full font-semibold"
              >
                {zona}
              </span>
            ))}

          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-black text-center mb-12">
          ¿Por qué elegir Bentino?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-2xl border shadow text-center">
            <h3 className="font-bold text-xl">Rapidez</h3>
            <p className="mt-3">
              Coordinación rápida por WhatsApp.
            </p>
          </div>

          <div className="p-8 rounded-2xl border shadow text-center">
            <h3 className="font-bold text-xl">Confianza</h3>
            <p className="mt-3">
              Trabajos responsables y prolijos.
            </p>
          </div>

          <div className="p-8 rounded-2xl border shadow text-center">
            <h3 className="font-bold text-xl">Garantía</h3>
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

        https://wa.me/5491164107178
          WhatsApp 11 6410-7178
        </a>

      </section>

      <footer className="bg-black text-white text-center py-8">
        <p className="font-bold">
          BENTINO SERVICIOS
        </p>

        <p className="text-zinc-400 mt-2">
          Electricidad y Reparaciones Generales
        </p>
      </footer>

    </main>
  );
}
