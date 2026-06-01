import{c,S as d,w as l}from"./index-D8RMeJaj.js";import{B as u}from"./bot-DqH7Injc.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=c("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]),h="ai-risk-register-framework",m="ai",p=2,y=!0,f={en:"AI Governance",ar:"حوكمة الذكاء الاصطناعي"},v={en:"Building an AI Risk Register: A Step-by-Step Framework",ar:"بناء سجل مخاطر الذكاء الاصطناعي: إطار خطوة بخطوة"},b={en:"How to identify, classify, and govern AI systems across your organization before regulators force the issue.",ar:"كيفية تحديد وتصنيف وحوكمة أنظمة الذكاء الاصطناعي عبر مؤسستك قبل أن تجبرك الجهات التنظيمية."},_={en:"April 2025",ar:"أبريل 2025"},w={en:"10 min read",ar:"10 دقائق قراءة"},A={slug:h,categoryKey:m,order:p,published:y,category:f,title:v,description:b,date:_,readTime:w},I="control-gap-enforcement",k="security",P=3,$=!0,T={en:"Security Insights",ar:"رؤى أمنية"},S={en:"The Control Gap: Why Policies Fail Without Technical Enforcement",ar:"فجوة التحكم: لماذا تفشل السياسات بدون الفرض التقني"},M={en:"Most compliance failures aren't policy failures — they're enforcement failures. Here's how to fix the gap.",ar:"معظم إخفاقات الامتثال ليست إخفاقات سياسات بل إخفاقات فرض. إليك كيفية إصلاح الفجوة."},C={en:"April 2025",ar:"أبريل 2025"},x={en:"6 min read",ar:"6 دقائق قراءة"},F={slug:I,categoryKey:k,order:P,published:$,category:T,title:S,description:M,date:C,readTime:x},E="eu-ai-act-nist-comparison",L="ai",R=6,N=!0,D={en:"AI Governance",ar:"حوكمة الذكاء الاصطناعي"},K={en:"EU AI Act vs. NIST AI RMF: Which Framework Is Right for You?",ar:"EU AI Act مقابل NIST AI RMF: أي إطار مناسب لك؟"},j={en:"A comparison of two leading AI governance frameworks and how to choose your starting point.",ar:"مقارنة بين إطارين رئيسيين لحوكمة الذكاء الاصطناعي وكيفية اختيار نقطة البداية."},U={en:"February 2025",ar:"فبراير 2025"},O={en:"9 min read",ar:"9 دقائق قراءة"},W={slug:E,categoryKey:L,order:R,published:N,category:D,title:K,description:j,date:U,readTime:O},H="nca-ecc-v2-changes",B="regulatory",z=5,q=!0,G={en:"Regulatory Update",ar:"تحديث تنظيمي"},V={en:"NCA ECC v2.0: Key Changes and Implementation Timeline",ar:"NCA ECC v2.0: تغييرات رئيسية وجدول زمني للتنفيذ"},Y={en:"The Essential Cybersecurity Controls update is here. What changed, what stayed, and what to prioritize.",ar:"تحديث ضوابط الأمن السيبراني الأساسية هنا. ما تغيّر، ما بقي، وما يجب إعطاؤه الأولوية."},J={en:"March 2025",ar:"مارس 2025"},Q={en:"7 min read",ar:"7 دقائق قراءة"},X={slug:H,categoryKey:B,order:z,published:q,category:G,title:V,description:Y,date:J,readTime:Q},Z="pdpl-financial-institutions-2025",ee="regulatory",ne=1,te=!0,ae={en:"Regulatory Update",ar:"تحديث تنظيمي"},oe={en:"What Saudi PDPL Means for Financial Institutions in 2025",ar:"ماذا يعني PDPL السعودي للمؤسسات المالية في 2025"},ie={en:"A practical breakdown of latest PDPL enforcement guidelines and what compliance teams need to implement immediately.",ar:"تحليل عملي لأحدث إرشادات فرض PDPL وما تحتاج فرق الامتثال لتطبيقه فوراً."},re={en:"May 2025",ar:"مايو 2025"},se={en:"8 min read",ar:"8 دقائق قراءة"},ce={slug:Z,categoryKey:ee,order:ne,published:te,category:ae,title:oe,description:ie,date:re,readTime:se},de="regional-bank-audit-reduction",le="case-study",ue=4,ge=!0,he={en:"Case Study",ar:"دراسة حالة"},me={en:"How a Regional Bank Reduced Audit Preparation Time by 40%",ar:"كيف قلل بنك إقليمي وقت تحضير التدقيق بنسبة 40%"},pe={en:"A detailed look at how Privanta implemented a continuous compliance model for a SAMA-regulated institution.",ar:"نظرة مفصلة على كيفية تطبيق Privanta لنموذج امتثال مستمر لمؤسسة خاضعة لرقابة ساما."},ye={en:"March 2025",ar:"مارس 2025"},fe={en:"12 min read",ar:"12 دقيقة قراءة"},ve={slug:de,categoryKey:le,order:ue,published:ge,category:he,title:me,description:pe,date:ye,readTime:fe},be=`An AI risk register is not a spreadsheet side project. It is the operational index that tells legal, security, and product teams which models exist, what they can affect, and how they are controlled.

## Step 1: Discover what is actually running

Inventory every model and embedded AI feature in production, including vendor APIs, copilots, and shadow experiments. Capture owner, data sources, decision impact, and human oversight level. If you cannot name the owner, the system is already out of governance.

## Step 2: Classify by impact, not hype

- High: autonomous or regulated decisions (credit, hiring, medical adjacency)
- Medium: recommendations with human review
- Low: internal productivity with no external effect

> Classification should drive control depth, not committee theater.

## Step 3: Attach controls and evidence cadence

For each entry, define testing frequency, logging requirements, rollback paths, and documentation expected at audit time. Privanta maps these fields directly to EU AI Act and NIST AI RMF control families so teams do not maintain parallel registers.
`,_e=`Policies describe intent. Controls prove behavior. The gap between them is where audits hurt and incidents hide.

Teams often publish excellent standards while IAM rules, logging pipelines, and change management stay misaligned. The result is a compliance posture that looks mature in documents and fragile in production.

## Close the loop in three moves

- Map each policy statement to a technical control owner and test
- Automate evidence where possible; manual screenshots are debt
- Review drift weekly, not quarterly

> If a control cannot fail loudly, it is not a control.

Privanta's control engineering practice treats enforcement as infrastructure: policies versioned alongside detections, tickets, and evidence streams so gaps surface before regulators do.
`,we=`The EU AI Act is law-shaped: obligations, timelines, and penalties. The NIST AI Risk Management Framework is practice-shaped: functions, categories, and adaptable profiles. Most global enterprises need both lenses.

## When to lead with the AI Act

If you deploy or import high-risk AI in the EU, start with prohibited practices, classification, conformity assessments, and post-market monitoring requirements. Legal teams should own the interpretation; engineering teams should own the evidence.

## When to lead with NIST AI RMF

If you are building internal governance before regulators define your sector, NIST gives vocabulary for Govern, Map, Measure, and Manage without prescribing a single certification path.

> Use the Act for external defensibility. Use NIST for internal operating rhythm.

Privanta maps controls once and reports against both frameworks, avoiding duplicate registers that diverge over time.
`,Ae=`NCA ECC v2.0 reframes several control domains around supply chain risk, cloud shared responsibility, and continuous monitoring. Organizations already aligned with v1 should treat this as an evolution, not a restart.

## Prioritize these domains first

- Third-party and SaaS dependency governance
- Privileged access and session monitoring
- Incident response testing with board-visible metrics

Build a phased roadmap: 30 days for gap assessment, 60 days for high-risk remediation, 90 days for evidence automation. Privanta clients link each ECC control to owners and test results inside a single operational layer.
`,Ie=`Saudi Arabia's Personal Data Protection Law (PDPL) is no longer a planning exercise for financial institutions. Enforcement timelines, regulator expectations, and cross-border transfer rules now shape how banks, insurers, and fintech operators design data programs.

## What changed in 2025

The latest guidance emphasizes operational evidence: not only policies on paper, but proof that consent, retention, breach notification, and vendor oversight are executed in production systems. For SAMA-regulated entities, PDPL alignment must connect to existing cybersecurity and governance controls rather than living in a separate privacy silo.

- Map lawful bases and consent flows to actual product journeys
- Instrument data inventory with owners, systems, and retention clocks
- Align breach playbooks with SOC and legal escalation paths
- Treat processors and cloud vendors as control dependencies, not contracts alone

> Regulators are asking for traceability from obligation to control to evidence, not for another policy library.

## A practical 90-day entry point

Start with your highest-risk processing activities: customer onboarding, credit decisioning, and marketing analytics. For each, document the data elements, systems, and third parties involved, then attach measurable controls (access reviews, encryption standards, deletion workflows). Privanta clients typically compress this discovery into a single operational register that feeds both PDPL and ISO 27001 evidence cycles.

The institutions that move fastest treat PDPL as control engineering: fewer slide decks, more automated checks, and audit trails that update themselves as systems change.
`,ke=`A SAMA-regulated regional bank approached Privanta with a familiar problem: audit preparation consumed hundreds of analyst hours each cycle, yet findings still surfaced from controls that had drifted months earlier.

## Baseline: reactive evidence

Evidence lived in shared drives, email threads, and ad-hoc screenshots. Control owners were accountable on paper but had no single system showing status, failures, or upcoming tests.

## What we implemented

- Unified control register mapped to SAMA CSF and internal policies
- Automated evidence collectors for IAM, backup, and change tickets
- Executive dashboard with red/amber/green by domain owner

> Audit week became audit confirmation week.

Within two cycles, preparation time dropped 40% and repeat findings fell sharply because drift was visible weekly. The bank now runs compliance as an always-on function rather than a seasonal scramble.
`,Pe=`سجل مخاطر الذكاء الاصطناعي ليس مشروعاً جانبياً في جدول بيانات. هو الفهرس التشغيلي الذي يخبر الفرق القانونية والأمنية والمنتج أي نماذج موجودة وماذا يمكن أن تؤثر وكيف تُحكَم.

## الخطوة 1: اكتشف ما يعمل فعلياً

اجرد كل نموذج وميزة ذكاء اصطناعي في الإنتاج، بما في ذلك واجهات الموردين والمساعدين والتجارب غير الرسمية. سجّل المالك ومصادر البيانات وأثر القرار ومستوى الإشراف البشري.

## الخطوة 2: صنّف حسب الأثر لا الضجيج

- مرتفع: قرارات ذاتية أو خاضعة للتنظيم (ائتمان، توظيف، قرب طبي)
- متوسط: توصيات مع مراجعة بشرية
- منخفض: إنتاجية داخلية بلا أثر خارجي

> التصنيف يجب أن يوجّه عمق الضوابط، لا عروض اللجان.

## الخطوة 3: أرفق الضوابط وإيقاع الأدلة

لكل إدخال، حدد وتيرة الاختبار ومتطلبات السجل ومسارات التراجع والتوثيق المتوقع عند التدقيق. Privanta تربط هذه الحقول مباشرة بعائلات ضوابط EU AI Act وNIST AI RMF.
`,$e=`السياسات تصف النية. الضوابط تثبت السلوك. الفجوة بينهما هي حيث يؤلم التدقيق وتختبئ الحوادث.

غالباً تنشر الفرق معايير ممتازة بينما قواعد الهوية وخطوط السجلات وإدارة التغيير غير متوافقة. النتيجة وضع امتثال يبدو ناضجاً في الوثائق وهشاً في الإنتاج.

## أغلق الحلقة بثلاث خطوات

- اربط كل بند سياسة بمالك ضابط تقني واختبار
- أتمت الأدلة حيث أمكن؛ لقطات الشاشة دين
- راجع الانحراف أسبوعياً لا ربع سنوياً

> إذا لم يفشل الضابط بصوت عالٍ، فليس ضابطاً.

ممارسة هندسة الضوابط في Privanta تعامل الفرض كبنية تحتية: سياسات مُصدَرة مع الاكتشافات والتذاكر ومسارات الأدلة حتى تظهر الفجوات قبل الجهات التنظيمية.
`,Te=`قانون الذكاء الاصطناعي الأوروبي قانوني الشكل: التزامات وجداول وعقوبات. إطار NIST لمخاطر الذكاء الاصطناعي عملي الشكل: وظائف وفئات وملفات قابلة للتكييف. معظم المؤسسات العالمية تحتاج العدستين.

## متى تبدأ بقانون AI Act

إذا نشرت أو استوردت ذكاءاً اصطناعياً عالي المخاطر في الاتحاد الأوروبي، ابدأ بالممارسات المحظورة والتصنيف وتقييمات المطابقة ومراقبة ما بعد السوق. الفريق القانوني يملك التفسير؛ الهندسة تملك الأدلة.

## متى تبدأ بـ NIST AI RMF

إذا تبني حوكمة داخلية قبل أن يحدد المنظمون قطاعك، يعطيك NIST مفردات للحوكمة والرسم والقياس والإدارة دون مسار شهادة واحد.

> استخدم القانون للدفاع الخارجي. واستخدم NIST لإيقاع التشغيل الداخلي.

Privanta تربط الضوابط مرة واحدة وتُبلغ ضد الإطارين، متجنبة سجلات مزدوجة تتباعد مع الوقت.
`,Se=`يعيد ECC v2.0 صياغة عدة مجالات حول مخاطر سلسلة التوريد ومسؤولية السحابة المشتركة والمراقبة المستمرة. المؤسسات المتوافقة مع v1 يجب أن تعامل هذا تطوراً لا إعادة بناء.

## أولوية هذه المجالات أولاً

- حوكمة الاعتماد على الموردين وSaaS
- الوصول المميز ومراقبة الجلسات
- اختبار الاستجابة للحوادث بمقاييس مرئية للإدارة

ابنِ خارطة طريق مرحلية: 30 يوماً للفجوات، 60 للمعالجة عالية المخاطر، 90 لأتمتة الأدلة. عملاء Privanta يربطون كل ضابط ECC بمالك ونتائج اختبار في طبقة تشغيل واحدة.
`,Me=`لم يعد قانون حماية البيانات الشخصية السعودي (PDPL) مجرد تمرين تخطيطي للمؤسسات المالية. الجداول الزمنية للإنفاذ وتوقعات الجهات التنظيمية وقواعد النقل عبر الحدود تشكل اليوم تصميم برامج البيانات في البنوك وشركات التأمين والتقنية المالية.

## ما الذي تغيّر في 2025

تركز الإرشادات الأخيرة على الأدلة التشغيلية: ليس السياسات على الورق فقط، بل إثبات أن الموافقة والاحتفاظ والإخطار بالاختراق والإشراف على الموردين تُنفَّذ في الأنظمة الإنتاجية. بالنسبة للجهات الخاضعة لساما، يجب ربط PDPL بضوابط الأمن السيبراني والحوكمة القائمة بدلاً من عزله في صندوق خصوصية منفصل.

- ربط الأسس القانونية ومسارات الموافقة برحلات المنتج الفعلية
- توثيق جرد البيانات مع المالكين والأنظمة وساعات الاحتفاظ
- مواءمة خطط الاختراق مع مسارات التصعيد القانونية ومركز العمليات
- معاملة المعالجين ومزودي السحابة كاعتماديات رقابة لا كعقود فقط

> الجهات التنظيمية تطلب تتبعاً من الالتزام إلى الضابط إلى الدليل، لا مكتبة سياسات إضافية.

## نقطة دخول عملية خلال 90 يوماً

ابدأ بأنشطة المعالجة الأعلى مخاطرة: إعداد العملاء، قرارات الائتمان، وتحليلات التسويق. لكل نشاط، وثّق عناصر البيانات والأنظمة والأطراف الثالثة، ثم أرفق ضوابط قابلة للقياس. عملاء Privanta يضغطون عادة هذا الاكتشاف في سجل تشغيل واحد يغذي دورات أدلة PDPL وISO 27001 معاً.

المؤسسات الأسرع تعامل PDPL كهندسة رقابة: عروض أقل، فحوصات آلية أكثر، ومسارات تدقيق تتحدث مع تغيّر الأنظمة.
`,Ce=`بنك إقليمي خاضع لساما تواصل مع Privanta بمشكلة مألوفة: تحضير التدقيق يستهلك مئات الساعات كل دورة، ومع ذلك تظهر ملاحظات من ضوابط انحرفت قبل أشهر.

## خط الأساس: أدلة تفاعلية

الأدلة في مجلدات مشتركة ورسائل بريد ولقطات عشوائية. مالكو الضوابط مسؤولون على الورق بلا نظام واحد يوضح الحالة والإخفاقات والاختبارات القادمة.

## ما نفّذناه

- سجل ضوابط موحد مربوط بإطار ساما والسياسات الداخلية
- جامعات أدلة آلية للهوية والنسخ الاحتياطي وتذاكر التغيير
- لوحة تنفيذية بألوان حسب مالك المجال

> أسبوع التدقيق أصبح أسبوع تأكيد التدقيق.

خلال دورتين، انخفض وقت التحضير 40% وتراجعت الملاحظات المتكررة لأن الانحراف أصبح مرئياً أسبوعياً. البنك يدير الامتثال الآن كوظيفة دائمة لا سباق موسمي.
`,xe={regulatory:l,security:d,ai:u,"case-study":g},Fe=Object.assign({"../../content/articles/ai-risk-register-framework/index.json":A,"../../content/articles/control-gap-enforcement/index.json":F,"../../content/articles/eu-ai-act-nist-comparison/index.json":W,"../../content/articles/nca-ecc-v2-changes/index.json":X,"../../content/articles/pdpl-financial-institutions-2025/index.json":ce,"../../content/articles/regional-bank-audit-reduction/index.json":ve}),Ee=Object.assign({"../../content/articles/ai-risk-register-framework/en.md":be,"../../content/articles/control-gap-enforcement/en.md":_e,"../../content/articles/eu-ai-act-nist-comparison/en.md":we,"../../content/articles/nca-ecc-v2-changes/en.md":Ae,"../../content/articles/pdpl-financial-institutions-2025/en.md":Ie,"../../content/articles/regional-bank-audit-reduction/en.md":ke}),Le=Object.assign({"../../content/articles/ai-risk-register-framework/ar.md":Pe,"../../content/articles/control-gap-enforcement/ar.md":$e,"../../content/articles/eu-ai-act-nist-comparison/ar.md":Te,"../../content/articles/nca-ecc-v2-changes/ar.md":Se,"../../content/articles/pdpl-financial-institutions-2025/ar.md":Me,"../../content/articles/regional-bank-audit-reduction/ar.md":Ce});function Re(t){const e=t.match(/content\/articles\/([^/]+)\//);return(e==null?void 0:e[1])??""}function Ne(){const t=[];for(const[e,n]of Object.entries(Fe)){if(!n.published)continue;const a=Re(e),r=`../../content/articles/${a}/en.md`,s=`../../content/articles/${a}/ar.md`,o=Ee[r],i=Le[s];if(!o||!i){console.warn(`[resources] Missing markdown for article "${n.slug}"`);continue}t.push({...n,categoryIcon:xe[n.categoryKey],body:{en:o.trim(),ar:i.trim()}})}return t.sort((e,n)=>e.order-n.order)}const je=Ne();export{je as r};
