// Tokens de marca de Briffi para todas las composiciones (ver marca/identidad.md).
import { staticFile } from 'remotion'

export const C = {
  azul: '#1E51E0', azulA: '#2F6FEB', azulB: '#0D34D6',
  noche: '#0B0C10', tinta: '#18191B', texto: '#3A3D44', gris: '#8A8D94',
  niebla: '#F4F5F7', linea: '#E6E8EC', blanco: '#FFFFFF',
  verde: '#16A34A', verdeSuave: '#E8F7EE', naranja: '#DF7A1E',
}
export const GRAD = `linear-gradient(135deg, ${C.azulA}, ${C.azulB})`
export const FUENTE = 'Geist, Helvetica, Arial, sans-serif'

// Carga Geist desde public/fonts (sin depender de internet al renderizar).
export const estiloFuente = `@font-face{font-family:Geist;src:url(${staticFile('fonts/geist-latin.woff2')}) format('woff2');font-weight:100 900;font-display:block}`
