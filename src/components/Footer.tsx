import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#F1F5F9',
        borderTop: '1px solid #E2E8F0',
        padding: '80px 0 40px 0',
        color: '#475569',
        fontSize: '0.95rem',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '36px',
        }}
      >
        {/* Sponsored By */}
        <div>
          <h3
            style={{
              fontSize: '1.1rem',
              fontWeight: 800,
              color: '#0F172A',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Sponsored By:
          </h3>
          <a
            href="https://www.dnb.com/en-us/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
            }}
          >
            <Image
              src="/images/sponsor1.jpg"
              alt="Dun & Bradstreet"
              width={160}
              height={50}
              style={{ objectFit: 'contain' }}
            />
          </a>
        </div>

        <div
          style={{
            width: '100%',
            maxWidth: '600px',
            height: '1px',
            backgroundColor: '#E2E8F0',
          }}
        />

        {/* Inquiries & Mailing Address */}
        <div style={{ maxWidth: '650px', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '8px', color: '#1E293B', fontWeight: 500 }}>
            For general inquiries — contact Museum&apos;s Executive Director{' '}
            <strong style={{ color: '#0F172A', fontWeight: 700 }}>David Senater</strong>
          </p>
          <p style={{ marginBottom: '16px' }}>
            Email:{' '}
            <a
              href="mailto:david.senater@newyorkautomuseum.com"
              style={{ color: '#DC2626', textDecoration: 'none', fontWeight: 700 }}
            >
              david.senater@newyorkautomuseum.com
            </a>
          </p>

          <div
            style={{
              marginTop: '24px',
              padding: '24px',
              borderRadius: '12px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
            }}
          >
            <p style={{ fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              Mailing Address:
            </p>
            <p style={{ color: '#475569' }}>New York Auto Museum Experience Center Inc</p>
            <p style={{ color: '#475569' }}>767 Broadway #1671</p>
            <p style={{ color: '#475569' }}>New York, New York, Manhattan 10003 USA</p>
            <p style={{ marginTop: '10px', color: '#DC2626', fontWeight: 800, fontSize: '1.05rem' }}>
              1-877-896-9269
            </p>
          </div>
        </div>

        {/* Association & Partner Logos */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
            marginTop: '10px',
            padding: '28px',
            backgroundColor: '#FFFFFF',
            borderRadius: '14px',
            border: '1px solid #E2E8F0',
            width: '100%',
            maxWidth: '900px',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
          }}
        >
          <a href="https://naammuseums.org/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/footer.png"
              alt="NAAM - National Association of Automobile Museums"
              width={240}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </a>
          <a
            href="https://www.nonprofitnewyork.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/nonprofit-newyork.jpg"
              alt="Nonprofit New York"
              width={160}
              height={50}
              style={{ objectFit: 'contain' }}
            />
          </a>
          <a href="https://nysmuseums.org/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/museum_association_of_NY_logo.jpg"
              alt="Museum Association of New York"
              width={260}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </a>
          <a href="https://www.aam-us.org/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/alliance-member-logo-full-color-RGB.webp"
              alt="American Alliance of Museums"
              width={260}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </a>
        </div>

        {/* Copyright & Legal Entities */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            fontSize: '0.85rem',
            color: '#64748B',
            marginTop: '16px',
          }}
        >
          <div>&copy; New York Auto Museum 2020–2025</div>
          <div>New York Auto Experience Inc. 501(c)(3)</div>
          <div>1125042 Ontario Limited dba New York Auto Museum Inc.</div>
        </div>
      </div>
    </footer>
  );
}
