# الموقع الرسمي للحملة الانتخابية — بن صديق خلف الله

موقع حملة انتخابية عصري واحترافي للمترشح **بن صديق خلف الله** للمجلس الشعبي الوطني عن **ولاية تيارت** (التجمع الوطني الديمقراطي — RND).

> **معًا من أجل تيارت قوية وعادلة ومزدهرة**

## ✨ المميزات

- ⚡ **Next.js 15** (App Router) + **React 19**
- 🎨 **Tailwind CSS** مع نظام ألوان جزائري (أخضر، أبيض، أحمر) ولمسات ذهبية
- 🎞️ **Framer Motion** لانتقالات وحركات سلسة
- 🌙 **الوضع الداكن / الفاتح** (next-themes)
- 🧭 **دعم كامل للعربية RTL** وخطوط احترافية (Cairo + El Messiri)
- 🔍 **تحسين محركات البحث (SEO)**: Metadata, OpenGraph, JSON-LD, sitemap, robots, manifest
- 📱 **تصميم متجاوب بالكامل** (هاتف / لوحي / مكتبي)
- ♿ معايير إتاحة عالية (تباين، تركيز لوحة المفاتيح، تخطّي المحتوى، احترام `prefers-reduced-motion`)
- 📊 عدّادات إحصائيات، خط زمني للإنجازات، خارطة طريق تفاعلية، بطاقات مشاريع متحركة
- 📘 تكامل مع فيسبوك + نموذج تواصل + خريطة Google لتيارت

## 🗂️ الأقسام

الرئيسية • عن المترشح • المشاريع الاستراتيجية (17 محورًا) • البرنامج الانتخابي • الإنجازات • الأخبار • معرض الصور • تواصل معنا

## 🚀 التشغيل

```bash
npm install      # تثبيت الحزم
npm run dev      # وضع التطوير  → http://localhost:3000
npm run build    # بناء الإنتاج
npm run start    # تشغيل نسخة الإنتاج
```

## 📁 البنية

```
app/                # المسارات + التخطيط + SEO (sitemap/robots/manifest)
components/
  layout/           # Navbar, Footer
  sections/         # Hero, About, StrategicProjects, Program, ...
  ui/               # مكوّنات قابلة لإعادة الاستخدام (Counter, SectionHeading, ...)
  providers/        # ThemeProvider
lib/                # data.ts (كل المحتوى) + motion.ts
public/images/      # صور المترشح وشعار الحزب
```

## ✏️ تخصيص المحتوى

كل النصوص والبيانات (المشاريع، الأخبار، الإحصائيات، روابط التواصل) موجودة في
[`lib/data.ts`](lib/data.ts) — عدّلها لتحديث الموقع دون لمس الواجهة.

### الصور
- `public/images/candidate-profile.png` — الصورة الرسمية
- `public/images/candidate-wave.png` — صورة قسم البطل (Hero)
- `public/images/rnd-logo.png` — شعار الحزب

استبدل صور المعرض الحقيقية في قسم `components/sections/Gallery.tsx` (حاليًا بطاقات تدرّج لونية كعناصر نائبة).

### نموذج التواصل
النموذج يفتح بريد المستخدم عبر `mailto`. لربطه بخادم (API)، عدّل دالة
`handleSubmit` في [`components/sections/Contact.tsx`](components/sections/Contact.tsx).

---

© الحملة الانتخابية — **صوتكم أمانة... وخدمتكم مسؤولية**
