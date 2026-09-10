'use client';

import { useState } from 'react';
import Image from 'next/image';
import advisorsData from '@/data/advisors.json';

interface Member {
  name: string;
  position: string;
  bio: string;
  linkedin: string;
}

interface CategoryGroup {
  category: string;
  members: Member[];
}

function getInitials(name: string): string {
  const parts = name.replace(/^(Dr\.|Mr\.|Ms\.)\s+/i, '').trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return (parts[0] ? parts[0].slice(0, 2) : 'NY').toUpperCase();
}

export default function AdvisoryBoard() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedBios, setExpandedBios] = useState<{ [key: string]: boolean }>({});

  const categories = advisorsData as CategoryGroup[];

  const toggleBio = (uniqueKey: string) => {
    setExpandedBios((prev) => ({
      ...prev,
      [uniqueKey]: !prev[uniqueKey],
    }));
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((c) => c.category === selectedCategory);

  const totalMembers = categories.reduce((sum, c) => sum + c.members.length, 0);

  return (
    <section
      id="advisors"
      style={{
        padding: '80px 0 120px 0',
        backgroundColor: '#F8FAFC',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <span className="section-tag">Governance &amp; Leadership</span>
          <h2 className="section-title">The Board &amp; Advisors</h2>
          <p className="section-subtitle">
            An extraordinary assembly of former automotive OEM executives, curatorial directors, legal scholars, cultural storytellers, and motorsports icons.
          </p>
        </div>

        {/* Modern Pill Navigation */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '56px',
            maxWidth: '1100px',
            margin: '0 auto 56px auto',
          }}
        >
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '10px 20px',
              borderRadius: '9999px',
              border:
                selectedCategory === 'all'
                  ? '1px solid #DC2626'
                  : '1px solid #CBD5E1',
              backgroundColor:
                selectedCategory === 'all' ? '#DC2626' : '#FFFFFF',
              color: selectedCategory === 'all' ? '#FFFFFF' : '#1E293B',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
            }}
          >
            All Departments ({totalMembers})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              style={{
                padding: '10px 20px',
                borderRadius: '9999px',
                border:
                  selectedCategory === cat.category
                    ? '1px solid #DC2626'
                    : '1px solid #CBD5E1',
                backgroundColor:
                  selectedCategory === cat.category ? '#DC2626' : '#FFFFFF',
                color: selectedCategory === cat.category ? '#FFFFFF' : '#1E293B',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
              }}
            >
              {cat.category} ({cat.members.length})
            </button>
          ))}
        </div>

        {/* Grouped Department Blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {displayedCategories.map((group) => (
            <div key={group.category}>
              {/* Department Header with Accent Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '32px',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '32px',
                    backgroundColor: '#DC2626',
                    borderRadius: '3px',
                  }}
                />
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: '#0F172A',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {group.category}
                </h3>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    backgroundColor: '#E2E8F0',
                    color: '#475569',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                  }}
                >
                  {group.members.length} Members
                </span>
                <div
                  style={{
                    flex: 1,
                    height: '1px',
                    backgroundColor: '#E2E8F0',
                  }}
                />
              </div>

              {/* Modern Cards Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                  gap: '24px',
                }}
              >
                {group.members.map((member, idx) => {
                  const uniqueKey = `${group.category}-${member.name}-${idx}`;
                  const isExpanded = !!expandedBios[uniqueKey];
                  const hasLongBio = member.bio.length > 260;
                  const displayBio =
                    !hasLongBio || isExpanded
                      ? member.bio
                      : `${member.bio.slice(0, 260)}...`;

                  return (
                    <div
                      key={uniqueKey}
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '16px',
                        padding: '30px',
                        boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      }}
                    >
                      <div>
                        {/* Top: Avatar Monogram + Name + Fixed Readable LinkedIn Button */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            gap: '14px',
                            marginBottom: '16px',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <div
                              style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                                color: '#FFFFFF',
                                fontWeight: 800,
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.15)',
                              }}
                            >
                              {getInitials(member.name)}
                            </div>
                            <div>
                              <h4
                                style={{
                                  fontSize: '1.25rem',
                                  fontWeight: 800,
                                  color: '#0F172A',
                                  lineHeight: 1.2,
                                  letterSpacing: '-0.02em',
                                }}
                              >
                                {member.name}
                              </h4>
                              <div
                                style={{
                                  color: '#DC2626',
                                  fontSize: '0.85rem',
                                  fontWeight: 700,
                                  marginTop: '4px',
                                }}
                              >
                                {member.position}
                              </div>
                            </div>
                          </div>

                          {/* HIGHLY READABLE OFFICIAL LINKEDIN BADGE */}
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${member.name} LinkedIn Profile`}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px',
                                padding: '6px 12px',
                                borderRadius: '8px',
                                backgroundColor: '#0A66C2',
                                color: '#FFFFFF',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                textDecoration: 'none',
                                flexShrink: 0,
                                boxShadow: '0 2px 8px rgba(10, 102, 194, 0.25)',
                                transition: 'all 0.2s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#004182';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#0A66C2';
                                e.currentTarget.style.transform = 'translateY(0)';
                              }}
                            >
                              <Image
                                src="/images/social-linkedin.svg"
                                alt="LinkedIn"
                                width={14}
                                height={14}
                                style={{ filter: 'brightness(0) invert(1)' }}
                              />
                              <span>LinkedIn</span>
                            </a>
                          )}
                        </div>

                        {/* Bio Content */}
                        {member.bio && (
                          <p
                            style={{
                              fontSize: '0.94rem',
                              color: '#475569',
                              lineHeight: 1.75,
                              whiteSpace: 'pre-line',
                              marginTop: '8px',
                            }}
                          >
                            {displayBio}
                          </p>
                        )}
                      </div>

                      {/* Read More / Read Less Toggle */}
                      {hasLongBio && (
                        <div
                          style={{
                            marginTop: '16px',
                            paddingTop: '14px',
                            borderTop: '1px solid #F1F5F9',
                          }}
                        >
                          <button
                            onClick={() => toggleBio(uniqueKey)}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: '#0284C7',
                              fontSize: '0.85rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              padding: 0,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            {isExpanded ? 'Show less ↑' : 'Read full biography ↓'}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
