import Image from 'next/image';

export default function NyaeSynergy() {
  return (
    <section
      id="nyae"
      style={{
        padding: '90px 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
            border: '1px solid #E2E8F0',
            borderRadius: '24px',
            padding: 'clamp(36px, 5vw, 60px)',
            boxShadow: '0 8px 30px rgba(15, 23, 42, 0.04)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Text & Action */}
          <div>
            <span className="section-tag" style={{ marginBottom: '14px' }}>
              Dual Charter Synergy
            </span>

            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 900,
                color: '#0F172A',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              Check out the New York Auto Experience At:
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: '28px',
              }}
            >
              Explore the educational non-profit charter, STEM youth initiatives, and experiential programs powering our mission.
            </p>

            <a
              href="https://newyorkautoexperience.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                padding: '14px 30px',
                fontSize: '1rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              Visit newyorkautoexperience.org &rarr;
            </a>
          </div>

          {/* Official Logo Card Display */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
            }}
          >
            <Image
              src="/images/NYAE-logo.png"
              alt="The New York Auto Experience logo"
              width={320}
              height={100}
              style={{ objectFit: 'contain', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
