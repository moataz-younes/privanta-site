# نشر المشروع على Vercel

## الطريقة الأوتوماتيك (مرة واحدة)

### 1) إنشاء Token من Vercel

1. [https://vercel.com/account/tokens](https://vercel.com/account/tokens)
2. **Create** → اسم مثل `privanta-setup` → انسخ التوكن

### 2) جهّز ملف `.env` محلياً

انسخ `.env.example` إلى `.env` واملأ القيم (Neon, Resend, Upstash).

### 3) شغّل السكربت

**PowerShell:**

```powershell
cd "c:\Users\Moataz\Downloads\privanta site"

$env:VERCEL_TOKEN = "ضع_التوكن_هنا"
$env:VERCEL_PROJECT = "privanta-site"

npm run vercel:setup
```

السكربت يعمل تلقائياً:

- يمسح **Output Directory** (يضبط `null` = Next.js auto)
- **Node.js 20.x**
- **Build Command** = `node scripts/vercel-build.mjs`
- يرفع متغيرات `.env` إلى Vercel (مشفّرة)
- يطلق **Production deployment**

**لو المشروع تحت Team:**

```powershell
$env:VERCEL_TEAM_ID = "team_xxxxxxxx"
```

**بدون إعادة نشر:**

```powershell
$env:VERCEL_REDEPLOY = "0"
npm run vercel:setup
```

---

## يدوي (لو السكربت مش متاح)

**Settings → Build and Deployment → Output Directory** → **فاضي** → Save → Redeploy

---

## بعد النشر

```powershell
npm run db:push
```

(مرة واحدة على قاعدة Neon — من جهازك مع `DATABASE_URL` في `.env`)
