import { Composition } from 'remotion'
import { PagoConfirmado } from './composiciones/PagoConfirmado'

// Cada composición nueva se registra aquí. Formato vertical para Reels y TikTok.
export const Raiz = () => (
  <>
    <Composition id="PagoConfirmado" component={PagoConfirmado} durationInFrames={210} fps={30} width={1080} height={1920}
      defaultProps={{ cliente: 'Carolina', monto: '$600', proyecto: 'Identidad · Café Altura' }} />
  </>
)
