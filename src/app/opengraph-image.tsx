import { ImageResponse } from 'next/og';

export const alt = 'Soorya — Full-stack software engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#f4f2ea', color: '#17241f', padding: '72px 80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, color: '#2b6a50', fontSize: 24, letterSpacing: 2, textTransform: 'uppercase' }}>
        <span style={{ width: 10, height: 10, background: '#2b6a50' }} />
        Full-stack software engineer
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 72, lineHeight: 1.05, letterSpacing: -3 }}>
          <span>From the interface</span>
          <span>to everything behind it.</span>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#526159' }}>Interfaces · APIs · Data · AI</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #b8c4b6', paddingTop: 28, fontSize: 25 }}>
        <strong>Soorya.</strong>
        <span style={{ color: '#526159' }}>Thought through. Built with care.</span>
      </div>
    </div>,
    size,
  );
}
