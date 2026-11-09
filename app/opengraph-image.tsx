import { ImageResponse } from 'next/og';

export const alt = 'PcIdeal: monte seu PC sem medo de comprar a peça errada';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'linear-gradient(135deg, #7C3AED 0%, #5B21B6 60%, #2E1065 100%)',
          color: '#FFFFFF',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '16px',
              backgroundColor: '#FFFFFF',
              color: '#6D28D9',
              fontSize: '34px',
              fontWeight: 800,
            }}
          >
            P
          </div>
          <div style={{ fontSize: '40px', fontWeight: 700 }}>PcIdeal</div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '980px',
          }}
        >
          <div
            style={{
              fontSize: '76px',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-2px',
            }}
          >
            Monte seu PC sem medo de comprar a peça errada.
          </div>
          <div style={{ fontSize: '30px', color: '#EDE9FE' }}>
            Peças que encaixam, dentro do seu orçamento.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '28px',
            color: '#EDE9FE',
          }}
        >
          <span>3 builds</span>
          <span>·</span>
          <span>preços na KaBuM</span>
          <span>·</span>
          <span>sem cadastro</span>
        </div>
      </div>
    ),
    size,
  );
}
