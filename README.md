

```markdown
# 🚀 Interactive DSA Visualizer | محاكي هياكل البيانات والخوارزميات التفاعلي

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS" />
</p>

---

## 📝 وصف المشروع | Project Description

**محاكي هياكل البيانات والخوارزميات التفاعلي** هو منصة تعليمية متقدمة مصممة لسد الفجوة بين الأكواد البرمجية النظرية والتمثيل المرئي الحي. يتيح التطبيق للمطورين والطلاب فهم كواليس عمل الخوارزميات وهياكل البيانات من خلال بيئة تفاعلية فريدة لا تكتفي بعرض الحركة فقط، بل تمنح المستخدم القدرة على **تعديل الكود البرمجي حياً ومباشرة** من الواجهة ومراقبة تأثير ذلك على حركة البيانات خطوة بخطوة.

**Interactive DSA Visualizer** is an advanced educational platform built to bridge the gap between theoretical code and visual execution. Unlike static visualizers, this tool empowers developers and students to **edit code snippets live** directly from the UI, synchronizing every code branch with real-time, step-by-step animations of foundational computer science concepts.

---

## ✨ الميزات الرئيسية | Key Features

* **✍️ تحرير الكود الحي (Live Code Editing):** شاشة تتبع برمجية ذكية تتيح للمستخدم النقر داخل أي سطر وكتابة وتعديل الكود، مما يعزز الفهم التجريبي لتغيير المتغيرات والقيم.
* **⏱️ التحكم الدقيق بالتنفيذ (Execution Control Engine):** محرك محاكاة متزامن يدعم التجميد (Pause)، التشغيل (Play)، وإعادة الضبط (Reset)، مما يسمح بفحص البيانات عند كل دورة (Iteration) أو عملية ذاكرة بشكل دقيق.
* **📊 تظليل الأسطر المتزامن (Real-time Line Highlighting):** مزامنة كاملة بالملي ثانية بين السطر البرمجي الجاري تنفيذه في شاشة الكود وبين العنصر المتحرك في لوحة العرض.
* **💡 محاكاة الخوارزميات والهياكل (Algorithms & Structures Implemented):**
    * **Bubble Sort:** محاكاة حركية للأعمدة مع وميض بصري يوضح مقارنة العناصر وتبديلها (Swapping).
    * **Stack Data Structure:** تمثيل مرئي لصندوق الذاكرة يوضح بدقة عمليات الدفع والرفع (`push` & `pop`) بشكل تفاعلي.
* **🎨 واجهة مستخدم داكنة وعصرية (Premium Dark UI):** تجربة بصرية مريحة للعين ومبنية بالكامل باستخدام Tailwind CSS بتخطيط شبكي مرن ومقاوم للخطأ البرمجي.

---

## 🛠️ التقنيات المستخدمة | Tech Stack

* **Frontend Library:** React.js (Hooks, Refs, state management)
* **Styling:** Tailwind CSS (Modern Slate & Indigo Palette)
* **Build Tool:** Vite (Super fast bundling and HMR)
* **Version Control:** Git & GitHub

---

## 🚀 تشغيل المشروع محلياً | Installation & Setup

لصيانة وتطوير المشروع أو تشغيله على جهازك الشخصي، اتبع الخطوات التالية:

```bash
# 1. استنساخ المستودع
git clone [https://github.com/1324Sa/dsa-visualizer.git](https://github.com/1324Sa/dsa-visualizer.git)

# 2. الانتقال إلى مجلد المشروع
cd dsa-visualizer

# 3. تثبيت الحزم والاعتماديات
npm install

# 4. تشغيل سيرفر التطوير المحلي
npm run dev

```

---

## 📂 هيكلية المشروع | Project Architecture

```text
src/
├── components/
│   ├── Sidebar.jsx           # لوحة التحكم، واختيار الخوارزميات وأزرار التنفيذ
│   ├── VisualizerCanvas.jsx  # لوحة الرسم الحركية لعرض الأعمدة والمكدس (Canvas)
│   └── CodeViewer.jsx        # شاشة تتبع الكود البرمجي القابلة للتعديل الحي
├── App.jsx                   # المحرك الرئيسي وإدارة حالات المحاكاة والتوقيت
├── main.jsx                  # نقطة الانطلاق للتطبيق
└── index.css                 # التنسيقات العامة المدعومة بـ Tailwind

```

---

## 🤝 المساهمة | Contributing

المساهمات تجعل المجتمع التقني مكاناً رائعاً للتعلم والابتكار. إذا كان لديك أي تحسينات أو خوارزميات جديدة تود إضافتها (مثل Merge Sort أو Linked Lists)، يسعدني جداً استقبال الـ **Pull Requests** الخاصة بك!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 الترخيص | License

المشروع مفتوح المصدر ومتاح تحت رخصة **MIT License**.

```

---

### 💡 نصيحة إضافية لزيادة قوة الـ README:
بعد أن تقوم برفع هذا الملف إلى GitHub، يفضل جداً أن تأخذ **لقطة شاشة (Screenshot)** واضحة للتطبيق وهو يعمل، ثم ترفع الصورة في مجلد داخل المشروع وتضيف رابطها في قسم الـ Description تحت سطر العنوان ليصبح المستودع مذهلاً وبصرياً لأي زائر!

```
