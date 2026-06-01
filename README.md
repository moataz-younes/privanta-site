# Privanta Site

واجهة `React + Vite + TypeScript` جاهزة للتطوير والنشر كملفات ثابتة.

## التشغيل محليًا

```bash
npm install
npm run dev
```

التطبيق يعمل على:
- `http://localhost:8080`

## فحص الجودة قبل النشر

```bash
npm run host:ready
```

## تجربة نسخة الإنتاج محليًا

```bash
npm run host:test
```

نسخة الإنتاج تعمل على:
- `http://localhost:4173`

### تشغيل سريع بملف BAT (ويندوز)

- شغّل الملف `run-site.bat` من جذر المشروع.
- الملف يقوم تلقائيًا بـ:
  - تثبيت الحزم (إذا غير موجودة)
  - بناء المشروع
  - فتح الرابط
  - تشغيل نسخة الإنتاج

## النشر على أي هوست (Static Hosting)

1. شغّل:
   ```bash
   npm run build
   ```
2. ارفع **محتويات** مجلد `dist` إلى مجلد الموقع على الهوست (`public_html` أو ما يعادله).
3. ملفات إعادة التوجيه مضبوطة تلقائيًا:
   - `dist/.htaccess` لاستضافات Apache.
   - `dist/web.config` لاستضافات IIS/Windows.
4. لو هوستك Nginx استخدم:
   - `try_files $uri /index.html;`
