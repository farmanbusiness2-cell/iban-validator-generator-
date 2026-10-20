export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          Free IBAN Validator
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Validate any European IBAN instantly. 100% private, no data stored.
        </p>
        <a
          href="/iban-validator"
          className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
        >
          Check IBAN Now →
        </a>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="p-6 border rounded-lg text-center">
          <div className="text-3xl">🔒</div>
          <h3 className="font-bold mt-2">100% Private</h3>
          <p className="text-sm text-gray-600 mt-1">
            No IBAN is stored or logged. Your data stays yours.
          </p>
        </div>
        <div className="p-6 border rounded-lg text-center">
          <div className="text-3xl">⚡</div>
          <h3 className="font-bold mt-2">Instant Check</h3>
          <p className="text-sm text-gray-600 mt-1">
            Validate IBAN in milliseconds with checksum verification.
          </p>
        </div>
        <div className="p-6 border rounded-lg text-center">
          <div className="text-3xl">🌍</div>
          <h3 className="font-bold mt-2">80+ Countries</h3>
          <p className="text-sm text-gray-600 mt-1">
            Supports all European and many global IBAN formats.
          </p>
        </div>
      </section>
    </main>
  );
}
