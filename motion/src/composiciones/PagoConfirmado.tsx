// "La última impresión": el cliente paga → confirmas → los archivos se entregan solos (7 s, 1080×1920).
// Escenas: 0–1.5 s tarjeta de pago · 1.5–3 s confirmado · 3–5 s archivos liberados · 5–7 s cierre de marca.
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion'
import { C, FUENTE, GRAD, estiloFuente } from '../marca'

type Props = { cliente: string; monto: string; proyecto: string }

const Tarjeta = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: C.blanco, borderRadius: 48, padding: '56px 60px', boxShadow: '0 30px 80px rgba(11,12,16,0.12)', border: `2px solid ${C.linea}`, ...style }}>{children}</div>
)

export const PagoConfirmado = ({ cliente, monto, proyecto }: Props) => {
  const f = useCurrentFrame()
  const { fps } = useVideoConfig()
  const entra = (desde: number) => spring({ frame: f - desde, fps, config: { damping: 16, mass: 0.8 } })
  const confirmado = f >= 50
  const liberado = f >= 100
  const cierre = interpolate(f, [150, 170], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const escenas = interpolate(f, [150, 168], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const pulso = 1 + 0.08 * Math.sin(f / 4)

  return (
    <AbsoluteFill style={{ background: C.niebla, fontFamily: FUENTE, color: C.tinta }}>
      <style>{estiloFuente}</style>

      <AbsoluteFill style={{ padding: '260px 80px 0', gap: 40, opacity: escenas }}>
        <p style={{ margin: 0, fontSize: 40, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.azul, opacity: entra(0) }}>{proyecto}</p>

        {/* 1 · El cliente envía el pago final */}
        <Tarjeta style={{ transform: `translateY(${(1 - entra(4)) * 300}px)`, opacity: entra(4) }}>
          <p style={{ margin: 0, fontSize: 38, color: C.gris, fontWeight: 600 }}>Pago final · {cliente}</p>
          <p style={{ margin: '10px 0 0', fontSize: 150, fontWeight: 700, letterSpacing: '-0.05em', color: confirmado ? C.verde : C.tinta }}>
            {confirmado ? '✓ ' : ''}{monto}
          </p>
          <div style={{ marginTop: 36, display: 'inline-flex', alignItems: 'center', gap: 16, padding: '20px 36px', borderRadius: 999,
            background: confirmado ? C.verdeSuave : GRAD, color: confirmado ? C.verde : C.blanco, fontSize: 40, fontWeight: 700,
            transform: `scale(${f > 40 && f < 50 ? 0.94 : 1})` }}>
            {confirmado ? 'Pago confirmado' : 'Confirmar pago'}
          </div>
        </Tarjeta>

        {/* 2 · Los archivos se liberan solos */}
        <Tarjeta style={{ transform: `translateY(${(1 - entra(78)) * 300}px)`, opacity: entra(78) }}>
          <p style={{ margin: 0, fontSize: 38, color: C.gris, fontWeight: 600 }}>Archivos finales</p>
          <p style={{ margin: '10px 0 26px', fontSize: 64, fontWeight: 700, letterSpacing: '-0.03em', color: liberado ? C.verde : C.naranja }}>
            {liberado ? 'Entregados solos' : 'Esperando el pago'}
          </p>
          {['Logo_final.ai', 'Manual_de_marca.pdf', 'Redes_sociales.zip'].map((n, i) => (
            <div key={n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 0', borderTop: `2px solid ${C.linea}`,
              fontSize: 40, opacity: liberado ? entra(100 + i * 6) : 0.35 }}>
              <span>{n}</span><span style={{ color: liberado ? C.verde : C.gris, fontWeight: 700 }}>{liberado ? '↓' : '🔒'}</span>
            </div>
          ))}
        </Tarjeta>
      </AbsoluteFill>

      {/* 3 · Cierre de marca */}
      <AbsoluteFill style={{ background: C.noche, opacity: cierre, justifyContent: 'center', alignItems: 'center', padding: 90, gap: 60 }}>
        <Img src={staticFile('personajes/mila-celebracion.png')} style={{ width: 520, filter: 'invert(1) hue-rotate(180deg)', opacity: 0.95 }} />
        <p style={{ margin: 0, color: C.blanco, fontSize: 92, lineHeight: 1.05, fontWeight: 700, letterSpacing: '-0.04em', textAlign: 'center' }}>
          La experiencia también es diseño<span style={{ display: 'inline-block', width: 26, height: 26, borderRadius: 13, background: GRAD, marginLeft: 8, transform: `scale(${pulso})` }} />
        </p>
        <p style={{ margin: 0, color: '#9CA0A8', fontSize: 48, fontWeight: 600 }}>briffi.com</p>
      </AbsoluteFill>
    </AbsoluteFill>
  )
}
