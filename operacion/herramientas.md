# Cómo configurar las herramientas (una sola vez)

## 1. Skills de Claude (lo más importante)
Guarda las 3 skills de Briffi desde las tarjetas que te mandó el Estratega:
- `/briffi-estratega` — Estratega, Growth, Analista, Operación.
- `/briffi-contenido` — Planificador, Guionista, Diseño de piezas, briefs de Motion.
- `/briffi-producto` — Product Manager, QA, Soporte.
Cada una ya trae la marca, los mensajes oficiales y lo que se puede prometer. Se combinan con tus otras skills (ganchos, carruseles, estrategia de contenido): la skill de Briffi le dice al chat cuáles usar y con qué reglas.

## 2. Proyectos de Claude ("oficinas" por área)
Crea 3 Proyectos y sube a cada uno, como conocimiento: `LEEME-PRIMERO.md`, `marca/voz.md` y `marca/brandbook/01-brand-book-maestro.md`.
| Proyecto | Para | Agrega también |
|---|---|---|
| Briffi · Dirección | Estrategia, crecimiento, cifras, precios | `estrategia/lanzamiento-90-dias.md`, `operacion/decisiones.md` |
| Briffi · Contenido | Redes, guiones, piezas | `estrategia/lanzamiento-90-dias.md`, `marca/identidad.md`, `marca/brandbook/04-copy-deck.md` |
| Briffi · Producto | Mejoras de la app, soporte | `marca/brandbook/05-experiencia-y-journey.md`, `marca/brandbook/06-qa-y-reputacion.md` |
Así tus chats de Briffi no se mezclan con los de tus clientes. Cuando cambie algo importante en el repo, vuelve a subir ese archivo.

## 3. Notion
Tablero **"Briffi · Centro de operaciones"** → base **Tareas** (vista por estado y por área). Conecta Notion a Claude para que los chats lean y actualicen tareas.

## 4. Claude Code y Codex
- Sobre el repo `briffi-hq`: leen `AGENTS.md` solos. Úsalos para Motion (Remotion), ordenar entregas y actualizar documentos.
- Sobre el repo `Boclik` (la app): Desarrollo y QA. Siempre en una rama; tú dices "une a main".

## 5. ChatGPT
Proyecto **"Briffi · Diseño"** con `LEEME-PRIMERO.md`, `marca/identidad.md` y `agentes/05-diseno-piezas.md`. Para imágenes de apoyo y como respaldo si se acaban los créditos en Claude.

## 6. Canva / Adobe
Brand Kit con colores, Geist y logos de `marca/assets/`, y plantillas fijas: carrusel 4:5, portada de reel, historia.

## Para ahorrar créditos
Claude: estrategia, textos, producto y desarrollo principal · Codex: tareas mecánicas, QA, Remotion, desarrollo en paralelo · ChatGPT: imágenes · Un chat por tarea.
