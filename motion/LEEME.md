# Motion de Briffi con código (Remotion)

Las animaciones de la interfaz de Briffi se escriben como código: así salen siempre con la marca exacta (Geist, colores, personajes) y Codex o Claude Code pueden crear una nueva en minutos.

## Cómo se usa (en tu computadora)
```bash
cd motion
npm install          # solo la primera vez
npm run estudio      # abre el editor visual en el navegador: ves y ajustas cada composición
npx remotion render PagoConfirmado salida/pago-confirmado.mp4   # exporta el MP4
```
Las props (cliente, monto, proyecto) se cambian en el editor sin tocar código.

## Composiciones
| Nombre | Qué muestra | Duración |
|---|---|---|
| `PagoConfirmado` | Pago final → confirmado → archivos entregados solos → cierre de marca | 7 s |

**Ideas para las siguientes:** ronda aprobada con comentarios por pieza · propuesta con 3 opciones y el cliente elige · "Lo que sigue" cambiando de tarea · firma del contrato desde el teléfono · página pública con botón "Pedir cotización" · contador de horas ahorradas.

## Reglas para agentes
- Todo color y fuente sale de `src/marca.ts`. No escribas colores sueltos.
- 1080×1920, 30 fps. Deja libres ~250 px arriba y ~350 px abajo (interfaz de Reels/TikTok).
- Cada composición nueva: archivo en `src/composiciones/`, registrada en `src/Raiz.tsx`, fila en la tabla de arriba.
- Renderiza fotogramas de prueba (`npx remotion still <Nombre> salida/prueba.png --frame=60`) y muéstraselos a Gerardo antes del MP4.
- Los MP4 no se suben al repo (`salida/` está ignorada): van a Drive/Adobe.
- Sin conexión a internet, usa el Chrome que tengas: `--browser-executable=<ruta a chrome-headless-shell>`.
