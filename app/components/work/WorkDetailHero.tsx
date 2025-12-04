'use client';

import Image from 'next/image';

interface WorkDetailHeroProps {
  client: string;
  title: string;
  tagline: string;
  coverImage: string;
  style?: 'clean' | 'watermark' | 'corner-logo' | 'side-by-side';
}

export default function WorkDetailHero({
  client,
  title,
  tagline,
  coverImage,
  style = 'clean',
}: WorkDetailHeroProps) {
  // Always use dark mode - no theme prop needed
  const isDark = true;

  // Style 1: Clean with gradient background and floating animation
  if (style === 'clean') {
    return (
      <section
        style={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '140px 60px 100px',
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Animated gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: isDark
              ? 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '500px',
            height: '500px',
            background: isDark
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'float 15s ease-in-out infinite reverse',
          }}
        />

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(30px, -30px) scale(1.1); }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        <div
          style={{
            maxWidth: '1000px',
            textAlign: 'center',
            zIndex: 2,
            animation: 'fadeInUp 0.8s ease-out',
          }}
        >
          {/* Client badge with subtle backdrop */}
          <div
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
              marginBottom: '32px',
            }}
          >
            <p
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: isDark ? '#a0a0a0' : '#666666',
                textTransform: 'uppercase',
                letterSpacing: '2.5px',
                margin: 0,
              }}
            >
              {client}
            </p>
          </div>

          {/* Title with gradient text effect */}
          <h1
            style={{
              fontFamily: 'Rosario, serif',
              fontSize: 'clamp(48px, 7vw, 84px)',
              fontWeight: 600,
              background: isDark
                ? 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)'
                : 'linear-gradient(135deg, #000000 0%, #404040 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '28px',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>

          {/* Tagline with enhanced styling */}
          <p
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 'clamp(18px, 2.2vw, 26px)',
              color: isDark ? '#cccccc' : '#525252',
              lineHeight: 1.7,
              maxWidth: '750px',
              margin: '0 auto 40px',
              fontWeight: 400,
            }}
          >
            {tagline}
          </p>

          {/* Decorative line */}
          <div
            style={{
              width: '80px',
              height: '3px',
              background: isDark
                ? 'linear-gradient(90deg, transparent, #8b5cf6, transparent)'
                : 'linear-gradient(90deg, transparent, #6366f1, transparent)',
              margin: '0 auto',
              borderRadius: '10px',
            }}
          />
        </div>
      </section>
    );
  }

  // Style 2: Watermark with enhanced effects
  if (style === 'watermark') {
    return (
      <section
        style={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '140px 60px 100px',
          background: '#0f0f0f',
          overflow: 'hidden',
        }}
      >
        {/* Enhanced watermark with glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            maxWidth: '1000px',
            opacity: isDark ? 0.04 : 0.03,
            zIndex: 0,
            pointerEvents: 'none',
            filter: isDark ? 'drop-shadow(0 0 60px rgba(139, 92, 246, 0.3))' : 'none',
          }}
        >
          <Image
            src={coverImage}
            alt=""
            width={1000}
            height={800}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: isDark
              ? 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)'
              : 'linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.5,
            zIndex: 1,
          }}
        />

        <div
          style={{
            maxWidth: '1000px',
            textAlign: 'center',
            zIndex: 2,
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(99, 102, 241, 0.08)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              border: isDark ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid rgba(99, 102, 241, 0.15)',
              marginBottom: '32px',
            }}
          >
            <p
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: isDark ? '#c4b5fd' : '#6366f1',
                textTransform: 'uppercase',
                letterSpacing: '2.5px',
                margin: 0,
              }}
            >
              {client}
            </p>
          </div>

          <h1
            style={{
              fontFamily: 'Rosario, serif',
              fontSize: 'clamp(48px, 7vw, 84px)',
              fontWeight: 600,
              color: isDark ? '#ffffff' : '#000000',
              marginBottom: '28px',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              textShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.5)' : 'none',
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 'clamp(18px, 2.2vw, 26px)',
              color: isDark ? '#cccccc' : '#525252',
              lineHeight: 1.7,
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            {tagline}
          </p>
        </div>
      </section>
    );
  }

  // Style 3: Corner Logo with card design
  if (style === 'corner-logo') {
    return (
      <section
        style={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '140px 60px 100px',
          background: 'linear-gradient(to bottom, #0f0f0f, #1a1a1a)',
        }}
      >
        {/* Enhanced corner logo with card background */}
        <div
          style={{
            position: 'absolute',
            top: '120px',
            right: '60px',
            padding: '20px',
            background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: isDark
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(0, 0, 0, 0.06)',
          }}
        >
          <div style={{ width: '100px', height: '100px' }}>
            <Image
              src={coverImage}
              alt={`${client} logo`}
              width={100}
              height={100}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>

        <div
          style={{
            maxWidth: '900px',
            textAlign: 'center',
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
              marginBottom: '32px',
            }}
          >
            <p
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: isDark ? '#a0a0a0' : '#666666',
                textTransform: 'uppercase',
                letterSpacing: '2.5px',
                margin: 0,
              }}
            >
              {client}
            </p>
          </div>

          <h1
            style={{
              fontFamily: 'Rosario, serif',
              fontSize: 'clamp(48px, 7vw, 84px)',
              fontWeight: 600,
              background: isDark
                ? 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)'
                : 'linear-gradient(135deg, #000000 0%, #404040 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '28px',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 'clamp(18px, 2.2vw, 26px)',
              color: isDark ? '#cccccc' : '#525252',
              lineHeight: 1.7,
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            {tagline}
          </p>
        </div>
      </section>
    );
  }

  // Style 4: Enhanced Side-by-Side with glassmorphism
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 60px 100px',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: isDark
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '100px',
          alignItems: 'center',
          width: '100%',
          zIndex: 2,
        }}
      >
        {/* Logo Side with glassmorphic card */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '450px',
              padding: '60px',
              background: isDark 
                ? 'rgba(255, 255, 255, 0.03)'
                : 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: isDark 
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: isDark
                ? '0 20px 60px rgba(0, 0, 0, 0.4)'
                : '0 20px 60px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Image
              src={coverImage}
              alt={`${client} logo`}
              width={450}
              height={450}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>

        {/* Content Side */}
        <div style={{ maxWidth: '600px' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: isDark ? 'rgba(139, 92, 246, 0.15)' : 'rgba(99, 102, 241, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              border: isDark ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(99, 102, 241, 0.2)',
              marginBottom: '32px',
            }}
          >
            <p
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: isDark ? '#c4b5fd' : '#6366f1',
                textTransform: 'uppercase',
                letterSpacing: '2.5px',
                margin: 0,
              }}
            >
              {client}
            </p>
          </div>

          <h1
            style={{
              fontFamily: 'Rosario, serif',
              fontSize: 'clamp(42px, 6vw, 72px)',
              fontWeight: 600,
              background: isDark
                ? 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)'
                : 'linear-gradient(135deg, #000000 0%, #404040 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '24px',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 'clamp(17px, 2vw, 22px)',
              color: isDark ? '#cccccc' : '#525252',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}
          >
            {tagline}
          </p>

          {/* Decorative element */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div
              style={{
                width: '60px',
                height: '3px',
                background: isDark ? '#8b5cf6' : '#6366f1',
                borderRadius: '10px',
              }}
            />
            <div
              style={{
                width: '30px',
                height: '3px',
                background: isDark ? 'rgba(139, 92, 246, 0.5)' : 'rgba(99, 102, 241, 0.5)',
                borderRadius: '10px',
              }}
            />
            <div
              style={{
                width: '15px',
                height: '3px',
                background: isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(99, 102, 241, 0.3)',
                borderRadius: '10px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}