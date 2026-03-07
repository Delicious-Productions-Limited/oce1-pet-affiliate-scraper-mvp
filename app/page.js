const featureCards = [
  {
    title: 'Daily deal sweep',
    body: 'We scan top pet retailers every morning and surface only high-intent offers worth posting.',
  },
  {
    title: 'Commission-fit scoring',
    body: 'Each deal is ranked by margin potential so you can prioritize content that actually converts.',
  },
  {
    title: 'Ready-to-post format',
    body: 'Get product title, pricing, merchant, and angle in one clean card for faster publishing.',
  },
]

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at 10% 10%, #dcfce7 0%, #f8fafc 45%, #ecfeff 100%)',
        color: '#0f172a',
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 20px 72px' }}>
        <section
          style={{
            borderRadius: 28,
            padding: 32,
            background: 'linear-gradient(135deg, #052e16 0%, #14532d 45%, #166534 100%)',
            color: '#ecfdf5',
            boxShadow: '0 25px 60px rgba(6, 78, 59, 0.28)',
          }}
        >
          <span style={{ display: 'inline-block', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.85 }}>
            GrowthAuditKit • Pet Affiliate Scanner
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.3rem)', margin: '12px 0 14px', lineHeight: 1.05 }}>
            Find profitable pet deals before competitors do.
          </h1>
          <p style={{ maxWidth: 760, margin: 0, color: '#bbf7d0', fontSize: 18, lineHeight: 1.6 }}>
            Your daily shortlist of affiliate-ready pet products with margin context, promo timing, and copy angles.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 26 }}>
            <a
              href="/api/checkout"
              style={{
                background: '#22c55e',
                color: '#052e16',
                textDecoration: 'none',
                fontWeight: 700,
                borderRadius: 12,
                padding: '13px 20px',
              }}
            >
              Start subscription — €9/mo
            </a>
            <a
              href="#how"
              style={{
                border: '1px solid rgba(236, 253, 245, 0.45)',
                color: '#ecfdf5',
                textDecoration: 'none',
                borderRadius: 12,
                padding: '13px 20px',
                fontWeight: 600,
              }}
            >
              See how it works
            </a>
          </div>
        </section>

        <section id="how" style={{ marginTop: 26, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
          {featureCards.map((card) => (
            <article key={card.title} style={{ borderRadius: 18, background: '#ffffff', border: '1px solid #dcfce7', padding: 20, boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)' }}>
              <h2 style={{ margin: '0 0 8px', fontSize: 20 }}>{card.title}</h2>
              <p style={{ margin: 0, color: '#334155', lineHeight: 1.6 }}>{card.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
