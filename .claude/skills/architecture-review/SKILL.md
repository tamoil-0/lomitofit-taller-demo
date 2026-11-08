---
name: architecture-review
description: Evalúa la estructura del frontend React/Vite de Lomito Fit, detecta responsabilidades mezcladas y recomienda refactor incremental de bajo riesgo.
---
# Revisión de arquitectura de frontend
1. Lee README, CLAUDE.md, package.json y estructura de src.
2. Identifica lógica de negocio, datos de catálogo, componentes y estilos.
3. Propón arquitectura mínima: components/, features/catalog/, features/cart/, lib/.
4. Entrega plan en máximo 6 pasos, identificando archivos afectados y riesgos.
5. No migres ni reescribas automáticamente; pide aprobación para cada paso.
6. Conserva comportamiento, accesibilidad y pruebas actuales.
