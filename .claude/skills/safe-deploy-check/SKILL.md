---
name: safe-deploy-check
description: Prepara una checklist de despliegue educativo GitHub/Vercel para Lomito Fit, sin hacer push ni desplegar sin autorización expresa del usuario.
disable-model-invocation: true
---
# Verificación previa a despliegue
1. Confirma que la web es una DEMO educativa no comercial, sin pagos ni datos personales.
2. Ejecuta tests/build, revisa cambios `git status` y nunca subas `.env`.
3. Prepara el checklist de GitHub y Vercel, no realices push sin aprobación.
4. Si se autoriza, usa rama separada y PR; pide aprobación antes de merge a main.
5. Verifica la URL final navegándola; si no puedes hacerlo, marca despliegue como PENDIENTE.
