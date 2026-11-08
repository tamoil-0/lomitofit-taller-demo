# LOMITO FIT · tienda demostrativa del taller

Ecommerce educativo hecho con React + Vite. Catálogo de productos ficticios, filtros, selección de talla, carrito persistido **solo en localStorage**, guía de tallas orientativa, formulario de newsletter de demostración y diseño responsive.

No incluye pedidos reales, backend, pagos ni envío de emails. Las fotos fueron generadas para este taller. Los precios y datos son ficticios.

## Requisitos
Node.js compatible con Vite 7 (20.19+ o 22.12+), npm, Git opcional.

```bash
npm install
npm run dev
npm test
npm run build
```

Abre la dirección local que muestre Vite. Para subir a GitHub, **crea primero un repositorio nuevo vacío** y sigue `../07_DESPLIEGUE/INSTRUCCIONES_GITHUB_VERCEL.md`. No se ha publicado ninguna web automáticamente.

## Verificación manual
1. Elegir categoría: los productos cambian.
2. Buscar "Hoodie" y ver un resultado.
3. Elegir talla y añadir al carrito. Cambiar cantidad y recargar: se conserva localmente.
4. Abrir la guía de tallas y calcular una medida.
5. Probar en móvil; verificar que los elementos se ajustan.
6. Newsletter muestra aviso local; no envía correo.

## Aprendizaje profesional
Consulta `.claude/skills` y `.claude/agents` para automatizar revisiones, no para sustituir las pruebas humanas. Configuración CI: `.github/workflows/ci.yml`.
