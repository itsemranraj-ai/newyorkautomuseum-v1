import Image from 'next/image';

export default function MuseumSpotlights() {
  return (
    <section
      style={{
        backgroundColor: '#F8FAFC',
        padding: '110px 0',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <span className="section-tag">Destination &amp; Institution</span>
          <h2 className="section-title">The Museum &amp; Partners</h2>
          <p className="section-subtitle">
            An unprecedented landmark proposed for Manhattan, uniting automotive science, historical collections, and global OEM alliances.
          </p>
        </div>

        {/* 1. HERO FEATURE SPOTLIGHT: The Museum */}
        <div
          id="the-museum"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(15, 23, 42, 0.05)',
            marginBottom: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          }}
        >
          {/* Image Side */}
          <div
            style={{
              position: 'relative',
              minHeight: '440px',
              width: '100%',
              backgroundColor: '#0F172A',
            }}
          >
            <Image
              src="/images/bigtire.JPG"
              alt="The Museum - Proposed 200,000+ Sq Ft Manhattan Facility"
              fill
              style={{ objectFit: 'cover' }}
            />
            {/* Glass floor floating badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '10px 18px',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ color: '#DC2626' }}>●</span> Proposed Manhattan Landmark • Glass Floors
            </div>
          </div>

          {/* Content Side */}
          <div
            style={{
              padding: 'clamp(32px, 5vw, 56px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#DC2626',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '16px',
              }}
            >
              Flagship Facility
            </div>

            <h3
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 900,
                color: '#0F172A',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
              }}
            >
              The Museum
            </h3>

            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#334155',
                fontWeight: 500,
                marginBottom: '18px',
              }}
            >
              Our proposed 200,000+- square-foot Manhattan location is set to impress. With a planned rooftop patio and partially glass floors, NYAM visitors will get to see above and beneath many of the extravagant vehicles on display. Also another original exclusive world-first; allows visitors to sit in up to 100 vehicles at any given time.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#64748B',
              }}
            >
              The New York Auto Museum is developed to change the way you think about an automotive museum.
            </p>
          </div>
        </div>

        {/* 2. DUAL PILLARS: Partners & About Us (Side-by-Side Bento Grid) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Card A: Partners */}
          <div
            id="partners"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(15, 23, 42, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <div style={{ position: 'relative', height: '240px', width: '100%' }}>
              <Image
                src="/images/racecar.JPG"
                alt="Partnership Strategy"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#DC2626',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Global Alliances
              </div>
            </div>

            <div style={{ padding: '36px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                }}
              >
                Partners
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#475569', flex: 1 }}>
                NYA is continuously working to forge partnerships with OEMs, media conglomerates, automotive aficionados, race car drivers, race car team owners, Fortune 500 companies, automotive journalists, the public, VIPs, the State of New York, New York City, and NY Grant Company.
              </p>
            </div>
          </div>

          {/* Card B: About Us */}
          <div
            id="about"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(15, 23, 42, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <div style={{ position: 'relative', height: '240px', width: '100%' }}>
              <Image
                src="/images/world-motorsport.jpg"
                alt="About New York Auto Museum Leadership"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#DC2626',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Governance &amp; Finance
              </div>
            </div>

            <div style={{ padding: '36px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                }}
              >
                About Us
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#475569', flex: 1 }}>
                NYA is led by a seasoned board of advisors, directors, and executive management. Anticipated financial partners include major banks, OEMs, advertising agencies, publicity firms, investment funds, private equity firms, players in heavy industry, and entities from the broader private sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
