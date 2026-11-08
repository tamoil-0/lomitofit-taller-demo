---
name: quality-gate
description: Verifica de forma repetible la calidad del MVP de Lomito Fit antes de compartir: catálogo, carrito, tallas, tests, build y errores, con evidencia real.
---
# Puerta de calidad
1. Ejecuta `npm test` si el entorno está disponible.
2. Ejecuta `npm run build` si el entorno está disponible.
3. Revisa flujo manual: filtros, búsqueda, tallas, carrito y móvil; si no tienes navegador, indica NO VERIFICADO.
4. Busca secretos, promesas engañosas de pagos y formularios que parezcan enviar correos de verdad.
5. Devuelve tabla: Prueba | Resultado | Evidencia | Acción. No marques PASS sin comprobar.
