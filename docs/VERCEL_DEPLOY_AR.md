# نشر المشروع على Vercel (خطوات مهمة)

## إذا ظهر خطأ `dist/routes-manifest.json couldn't be found`

سبب الخطأ: حقل **Output Directory** في Vercel مضبوط على `dist` بينما Next.js يبني في `.next`.

### الحل (من لوحة Vercel)

1. افتح المشروع **privanta-site** على [vercel.com](https://vercel.com)
2. **Settings** → **Build and Deployment**
3. انزل إلى **Output Directory**
4. **امسح الحقل بالكامل** (اتركه فاضي — لا تكتب `dist` ولا `.next`)
5. تأكد **Framework Preset** = **Next.js**
6. **Build Command** = `node scripts/vercel-build.mjs` (أو اتركه من `vercel.json`)
7. **Save**
8. **Deployments** → **Redeploy**

### Node.js

**Settings** → **General** → **Node.js Version** → **20.x**

### متغيرات البيئة (Production)

| المتغير | مثال |
|---------|------|
| `NEXT_PUBLIC_APP_URL` | `https://privanta-site.vercel.app` |
| `DATABASE_URL` | من Neon |
| `RESEND_API_KEY` | من Resend |
| `UPSTASH_REDIS_REST_URL` | من Upstash |
| `UPSTASH_REDIS_REST_TOKEN` | من Upstash |
