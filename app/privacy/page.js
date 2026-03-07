export default function PrivacyPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#09090b',
        color: '#f4f4f5',
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '56px 20px 72px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>Privacy Policy</h1>
        <p style={{ color: '#d4d4d8', lineHeight: 1.7, marginBottom: 20 }}>
          GrowthAuditKit Pet Affiliate Scanner only collects the minimum account, billing, and usage information required to operate your subscription.
        </p>

        <section style={{ display: 'grid', gap: 14 }}>
          <article style={{ border: '1px solid #3f3f46', borderRadius: 14, padding: 18, background: '#18181b' }}>
            <h2 style={{ margin: '0 0 8px', color: '#fafafa' }}>What we collect</h2>
            <p style={{ margin: 0, color: '#e4e4e7', lineHeight: 1.65 }}>
              Contact details, subscription metadata, and product-interaction telemetry used to generate and deliver deal recommendations.
            </p>
          </article>
          <article style={{ border: '1px solid #3f3f46', borderRadius: 14, padding: 18, background: '#18181b' }}>
            <h2 style={{ margin: '0 0 8px', color: '#fafafa' }}>How we use data</h2>
            <p style={{ margin: 0, color: '#e4e4e7', lineHeight: 1.65 }}>
              We use data to provide the scanner service, improve relevance, process billing, and send essential product communications.
            </p>
          </article>
          <article style={{ border: '1px solid #3f3f46', borderRadius: 14, padding: 18, background: '#18181b' }}>
            <h2 style={{ margin: '0 0 8px', color: '#fafafa' }}>Retention and rights</h2>
            <p style={{ margin: 0, color: '#e4e4e7', lineHeight: 1.65 }}>
              You can request export or deletion of your personal data at any time by emailing support@growthauditkit.com.
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}
