export default function Home() {
  return (
    <main className="min-h-screen bg-[#fefefe] text-[#331f0f]">
      {/* Hero */}
      <section className="bg-[#331f0f] text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          /logo.png w-72"
          />

          <h1 className="text-5xl font-black md:text-7xl">
            SOLUCIONES PARA TU HOGAR
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-300">
            Electricidad, mantenimiento y reparaciones generales en CABA y Zona Norte.
          </p>

          ://wa.me/5491164107178"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-xl bg-[#f6b911] px-8 py-4 font-bold text-[#331f0f]"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-black">
          Servicios
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border p-8 shadow-md">
            <h3 className="mb-6 text-2xl font-bold text-[#f6b911]">
              ⚡ Electricidad
            </h3>

            <ul className="space-y-2">
              <li>Instalaciones eléctricas</li>
              <li>Reparación de fallas</li>
              <li>Cambio de tomacorrientes</li>
              <li>Cambio de interruptores</li>
              <li>Instalación de luminarias</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-8 shadow-md">
            <h3 className="mb-6 text-2xl font-bold text-[#f6b911]">
              🔧 Reparaciones Generales
            </h3>

            <ul className="space-y-2">
              <li>Mantenimiento del hogar</li>
              <li>Arreglos generales</li>
              <li>Instalaciones</li>
              <li>Colocaciones</li>
              <li>Soluciones para el hogar</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-4xl font-black">
            ¿Por qué elegir Bentino?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 text-center shadow">
              <h3 className="font-bold">Respuesta rápida</h3>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow">
              <h3 className="font-bold">Trabajos garantizados</h3>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow">
              <h3 className="font-bold">Atención personalizada</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="mb-12 text-4xl font-black">
          Contacto
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="https://wa.me/5491164107178"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border p-6 shadow hover:bg-[#f6b911]"
          >
            📱 WhatsApp
          </a>

          <a
            href="mailto:bentinomd@gmail.com"
            className="rounded-xl border p-6 shadow hover:bg-[#f6b911]"
          >
            ✉️ Email
          </a>

          <a
            href="https://instagram.com/bentinoservicios"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border p-6 shadow hover:bg-[#f6b911]"
          >
            📸 Instagram
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f6b911] py-20 text-center">
        <h2 className="text-4xl font-black">
          ¿Tenés algo para reparar?
        </h2>

        <p className="mt-4">
          Escribinos y coordinamos una visita.
        </p>

        5491164107178"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-xl bg-[#331f0f] px-10 py-4 font-bold text-white"
        >
          WhatsApp 11 6410-7178
        </a>
      </section>

      <footer className="bg-[#331f0f] py-10 text-center text-white">
        /logo.png

        <p>Bentino Servicios</p>

        <p className="mt-2 text-gray-300">
          Electricidad y Reparaciones Generales
        </p>
      </footer>
    </main>
  );
}
