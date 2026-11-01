export const servicesData = [
  {
    id: 'portfolio-website',
    title: { en: 'Premium Portfolio Website', bn: 'প্রিমিয়াম পোর্টফোলিও ওয়েবসাইট' },
    description: {
      en: 'Professional digital identity platforms built with modern web technologies.',
      bn: 'আধুনিক ওয়েব প্রযুক্তির সমন্বয়ে তৈরি প্রফেশনাল ডিজিটাল আইডেন্টিটি প্ল্যাটফর্ম।'
    },
    details: {
      en: [
        "End-to-end development with modern tech stack (React, Next.js, Tailwind).",
        "Fully responsive design optimized for desktop, tablet, and mobile.",
        "Advanced animations and micro-interactions for a premium feel.",
        "Secure backend integration and custom admin dashboard setup."
      ],
      bn: [
        "আধুনিক টেক স্ট্যাক (React, Next.js, Tailwind) ব্যবহার করে সম্পূর্ণ ডেভেলপমেন্ট।",
        "ডেস্কটপ, ট্যাবলেট এবং মোবাইলের জন্য ফুল রেসপন্সিভ ডিজাইন।",
        "প্রিমিয়াম লুকের জন্য অ্যাডভান্সড অ্যানিমেশন এবং ইন্টারেকশন।",
        "সিকিউর ব্যাকএন্ড ইন্টিগ্রেশন এবং কাস্টম অ্যাডমিন ড্যাশবোর্ড সেটআপ।"
      ]
    },
    technologies: ['React 18', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Firebase'],
    process: [
      { step: '01', title: { en: 'Discovery & Planning', bn: 'পরিকল্পনা ও বিশ্লেষণ' }, desc: { en: 'Understanding your brand, goals, and target audience.', bn: 'আপনার ব্র্যান্ড, লক্ষ্য এবং অডিয়েন্স সম্পর্কে বিস্তারিত ধারণা নেওয়া।' } },
      { step: '02', title: { en: 'Design & Prototyping', bn: 'ডিজাইন ও প্রোটোটাইপিং' }, desc: { en: 'Creating premium wireframes and interactive UI mockups.', bn: 'প্রিমিয়াম ওয়্যারফ্রেম এবং ইন্টারেক্টিভ ইউআই মকআপ তৈরি করা।' } },
      { step: '03', title: { en: 'Development', bn: 'ডেভেলপমেন্ট' }, desc: { en: 'Writing clean, scalable code with modern tech stacks.', bn: 'আধুনিক টেক স্ট্যাক ব্যবহার করে ক্লিন এবং স্কেলেবল কোড লেখা।' } },
      { step: '04', title: { en: 'Testing & Launch', bn: 'টেস্টিং ও লঞ্চ' }, desc: { en: 'Rigorous bug fixing, performance tuning, and deployment.', bn: 'বাগ ফিক্সিং, পারফরম্যান্স অপ্টিমাইজেশন এবং চূড়ান্ত ডিপ্লয়মেন্ট।' } }
    ],
    faqs: [
      { q: { en: 'Do you provide domain and hosting?', bn: 'আপনারা কি ডোমেইন ও হোস্টিং প্রদান করেন?' }, a: { en: 'Hosting is included in the Premium package. For others, we guide you to buy the best ones.', bn: 'প্রিমিয়াম প্যাকেজে হোস্টিং অন্তর্ভুক্ত থাকে। অন্যগুলোর ক্ষেত্রে আমরা সেরাটি কেনার গাইডলাইন দিই।' } },
      { q: { en: 'Can I update the website content myself?', bn: 'আমি কি নিজেই ওয়েবসাইটের কন্টেন্ট আপডেট করতে পারব?' }, a: { en: 'Yes, Standard and Premium packages come with an Admin Dashboard / CMS for easy updates.', bn: 'হ্যাঁ, স্ট্যান্ডার্ড ও প্রিমিয়াম প্যাকেজে কন্টেন্ট আপডেটের জন্য অ্যাডমিন ড্যাশবোর্ড দেওয়া হয়।' } }
    ],
    relatedWorks: [
      { title: { en: 'AR. Personal Portfolio', bn: 'এআর. পার্সোনাল পোর্টফোলিও' }, desc: { en: 'Dark luxury themed React application.', bn: 'ডার্ক লাক্সারি থিমের রিঅ্যাক্ট অ্যাপ্লিকেশন।' } },
      { title: { en: 'Tech Blog Platform', bn: 'টেক ব্লগ প্ল্যাটফর্ম' }, desc: { en: 'Next.js & Firebase powered dynamic blog.', bn: 'নেক্সট.জেএস এবং ফায়ারবেস দ্বারা তৈরি ব্লগ।' } }
    ],
    packages: [
      { name: { en: 'Basic', bn: 'বেসিক' }, price: '$150', features: { en: ['Single Page Landing', 'Responsive Design', 'Contact Form', 'Basic SEO', '3 Days Delivery'], bn: ['সিঙ্গেল পেজ ল্যান্ডিং', 'রেসপন্সিভ ডিজাইন', 'কন্টাক্ট ফর্ম', 'বেসিক এসইও', '৩ দিনে ডেলিভারি'] }, isPopular: false },
      { name: { en: 'Standard', bn: 'স্ট্যান্ডার্ড' }, price: '$350', features: { en: ['Up to 5 Pages', 'Dark/Light Theme', 'CMS Integration', 'Advanced Animations', '7 Days Delivery'], bn: ['৫ টি পেজ পর্যন্ত', 'ডার্ক/লাইট থিম', 'সিএমএস যুক্ত', 'অ্যাডভান্সড অ্যানিমেশন', '৭ দিনে ডেলিভারি'] }, isPopular: true },
      { name: { en: 'Premium', bn: 'প্রিমিয়াম' }, price: '$600', features: { en: ['Full Custom PWA', 'Admin Dashboard', 'Database Setup', 'High-end 3D Elements', '14 Days Delivery'], bn: ['ফুল কাস্টম পিডব্লিউএ', 'অ্যাডমিন ড্যাশবোর্ড', 'ডাটাবেস সেটআপ', 'হাই-এন্ড থ্রিডি এলিমেন্ট', '১৪ দিনে ডেলিভারি'] }, isPopular: false }
    ]
  },
  {
    id: 'animation-gift',
    title: { en: 'Interactive Animation Gift', bn: 'ইন্টারঅ্যাক্টিভ অ্যানিমেশন গিফট' },
    description: { en: 'Custom digital surprise presentations and 3D web animations for your loved ones.', bn: 'প্রিয়জনদের চমকে দেওয়ার জন্য কাস্টম ডিজিটাল প্রেজেন্টেশন এবং থ্রিডি ওয়েব অ্যানিমেশন।' },
    details: {
      en: ["Unique digital gifts that stand out from traditional presents.", "Interactive 3D elements like rotating hearts and blooming roses.", "Personalized messages, background music, and secure private links.", "Mobile-friendly design for easy viewing on any device."],
      bn: ["ইউনিক ডিজিটাল গিফট যা সাধারণ উপহার থেকে সম্পূর্ণ আলাদা।", "ইন্টারেক্টিভ থ্রিডি এলিমেন্ট যেমন রোটেটিং হার্ট এবং ব্লুমিং রোজ।", "পার্সোনালাইজড মেসেজ, ব্যাকগ্রাউন্ড মিউজিক এবং সিকিউর প্রাইভেট লিংক।", "যেকোনো ডিভাইসে সহজে দেখার জন্য মোবাইল-ফ্রেন্ডলি ডিজাইন।"]
    },
    technologies: ['Three.js', 'Framer Motion', 'React', 'CSS3 Animations', 'Web Audio API'],
    process: [
      { step: '01', title: { en: 'Concept & Story', bn: 'কনসেপ্ট ও গল্প' }, desc: { en: 'Gathering your ideas, messages, and preferred themes.', bn: 'আপনার আইডিয়া, মেসেজ এবং পছন্দের থিম সংগ্রহ করা।' } },
      { step: '02', title: { en: '3D Modeling', bn: 'থ্রিডি মডেলিং' }, desc: { en: 'Crafting custom 3D models like hearts or flowers.', bn: 'হার্ট বা ফুলের মতো কাস্টম থ্রিডি মডেল ডিজাইন করা।' } },
      { step: '03', title: { en: 'Animation & Music', bn: 'অ্যানিমেশন ও মিউজিক' }, desc: { en: 'Adding interactive movements and background audio.', bn: 'ইন্টারেক্টিভ মুভমেন্ট এবং ব্যাকগ্রাউন্ড অডিও যুক্ত করা।' } },
      { step: '04', title: { en: 'Private Hosting', bn: 'প্রাইভেট হোস্টিং' }, desc: { en: 'Deploying to a secure, hidden link for the surprise.', bn: 'সারপ্রাইজের জন্য একটি নিরাপদ ও গোপন লিংকে হোস্ট করা।' } }
    ],
    faqs: [
      { q: { en: 'How long will the private link stay active?', bn: 'প্রাইভেট লিংকটি কতদিন অ্যাক্টিভ থাকবে?' }, a: { en: 'The link remains active permanently unless requested to be taken down.', bn: 'আপনার অনুরোধ ছাড়া লিংকটি স্থায়ীভাবে অ্যাক্টিভ থাকবে।' } },
      { q: { en: 'Can I add my own background voice or music?', bn: 'আমি কি নিজের ভয়েস বা মিউজিক যুক্ত করতে পারব?' }, a: { en: 'Yes, Premium packages support personalized audio integration.', bn: 'হ্যাঁ, প্রিমিয়াম প্যাকেজে পার্সোনালাইজড অডিও যুক্ত করার সুবিধা রয়েছে।' } }
    ],
    relatedWorks: [
      { title: { en: '3D Rotating Heart', bn: 'থ্রিডি রোটেটিং হার্ট' }, desc: { en: 'Interactive surprise presentation.', bn: 'ইন্টারেক্টিভ সারপ্রাইজ প্রেজেন্টেশন।' } },
      { title: { en: 'Blooming Rose Animation', bn: 'ব্লুমিং রোজ অ্যানিমেশন' }, desc: { en: 'Multi-step animated story UI.', bn: 'মাল্টি-স্টেপ অ্যানিমেটেড স্টোরি ইউআই।' } }
    ],
    packages: [
      { name: { en: 'Basic', bn: 'বেসিক' }, price: '$50', features: { en: ['Simple 2D Animation', 'Custom Message', 'Background Music', 'Hosted Link', '2 Days Delivery'], bn: ['সিম্পল টুডি অ্যানিমেশন', 'কাস্টম মেসেজ', 'ব্যাকগ্রাউন্ড মিউজিক', 'হোস্টেড লিংক', '২ দিনে ডেলিভারি'] }, isPopular: false },
      { name: { en: 'Standard', bn: 'স্ট্যান্ডার্ড' }, price: '$120', features: { en: ['Interactive 3D Heart', 'Click to Reveal', 'Custom Colors', 'Responsive Design', '4 Days Delivery'], bn: ['ইন্টারেক্টিভ থ্রিডি হার্ট', 'ক্লিক-টু-রিভিল ইফেক্ট', 'কাস্টম কালার', 'রেসপন্সিভ ডিজাইন', '৪ দিনে ডেলিভারি'] }, isPopular: true },
      { name: { en: 'Premium', bn: 'প্রিমিয়াম' }, price: '$250', features: { en: ['Blooming 3D Rose', 'Multi-step Story', 'Personalized Audio', 'Private Link', '7 Days Delivery'], bn: ['ব্লুমিং থ্রিডি রোজ', 'মাল্টি-স্টেপ স্টোরি', 'পার্সোনালাইজড অডিও', 'প্রাইভেট লিংক', '৭ দিনে ডেলিভারি'] }, isPopular: false }
    ]
  },
  {
    id: 'social-seo',
    title: { en: 'Social Media & SEO', bn: 'সোশ্যাল মিডিয়া ও এসইও' },
    description: { en: 'Grow your digital presence with strategic social media handling and search engine optimization.', bn: 'কৌশলগত সোশ্যাল মিডিয়া পরিচালনা এবং এসইও (SEO) এর মাধ্যমে আপনার ডিজিটাল উপস্থিতি বৃদ্ধি করুন।' },
    details: {
      en: ["Comprehensive SEO strategies to rank higher.", "Social media profile optimization and content planning.", "Keyword research, backlink building, and competitor analysis.", "Monthly performance reports."],
      bn: ["গুগল সার্চ রেজাল্টে র‍্যাংক করার জন্য কার্যকর এসইও।", "সোশ্যাল মিডিয়া অপ্টিমাইজেশন এবং কন্টেন্ট প্ল্যানিং।", "কিওয়ার্ড রিসার্চ, ব্যাকলিংক বিল্ডিং এবং প্রতিযোগী বিশ্লেষণ।", "মাসিক পারফরম্যান্স রিপোর্ট প্রদান।"]
    },
    technologies: ['Google Analytics', 'Ahrefs', 'Meta Business Suite', 'Hootsuite', 'SEMrush'],
    process: [
      { step: '01', title: { en: 'Initial Audit', bn: 'প্রাথমিক অডিট' }, desc: { en: 'Analyzing current digital presence and competitors.', bn: 'বর্তমান ডিজিটাল উপস্থিতি এবং প্রতিযোগীদের বিশ্লেষণ করা।' } },
      { step: '02', title: { en: 'Strategy Planning', bn: 'কৌশল নির্ধারণ' }, desc: { en: 'Developing a targeted SEO and content roadmap.', bn: 'টার্গেটেড এসইও এবং কন্টেন্ট রোডম্যাপ তৈরি করা।' } },
      { step: '03', title: { en: 'Execution', bn: 'কার্যক্রম শুরু' }, desc: { en: 'Optimizing profiles, building links, and scheduling posts.', bn: 'প্রোফাইল অপ্টিমাইজেশন, লিংক বিল্ডিং এবং পোস্ট শিডিউলিং।' } },
      { step: '04', title: { en: 'Monitoring', bn: 'মনিটরিং ও রিপোর্ট' }, desc: { en: 'Tracking growth metrics and providing monthly reports.', bn: 'গ্রোথ মেট্রিক্স ট্র্যাক করা এবং মাসিক রিপোর্ট প্রদান।' } }
    ],
    faqs: [
      { q: { en: 'How long does it take to see SEO results?', bn: 'এসইও (SEO) এর ফলাফল দেখতে কতদিন সময় লাগে?' }, a: { en: 'SEO is a long-term strategy. Significant results usually appear within 3-6 months.', bn: 'এসইও দীর্ঘমেয়াদী কৌশল। সাধারণত ৩-৬ মাসের মধ্যে ভালো ফলাফল দেখা যায়।' } },
      { q: { en: 'Do you create the content for social media?', bn: 'আপনারা কি সোশ্যাল মিডিয়ার জন্য কন্টেন্ট তৈরি করেন?' }, a: { en: 'Yes, we create graphics and copy based on your chosen package.', bn: 'হ্যাঁ, আপনার নির্বাচিত প্যাকেজের ওপর ভিত্তি করে আমরা গ্রাফিক্স ও কন্টেন্ট তৈরি করি।' } }
    ],
    relatedWorks: [
      { title: { en: 'Tech Brand Growth', bn: 'টেক ব্র্যান্ড গ্রোথ' }, desc: { en: 'Increased organic traffic by 150% in 4 months.', bn: '৪ মাসে অর্গানিক ট্রাফিক ১৫০% বৃদ্ধি করা হয়েছে।' } },
      { title: { en: 'Ad Campaign Setup', bn: 'অ্যাড ক্যাম্পেইন সেটআপ' }, desc: { en: 'High ROI Facebook & Google ads management.', bn: 'উচ্চ আরওআই (ROI) যুক্ত ফেসবুক ও গুগল অ্যাডস।' } }
    ],
    packages: [
      { name: { en: 'Basic', bn: 'বেসিক' }, price: '$100', features: { en: ['2 Social Profiles', 'Profile Setup', 'Basic Keyword SEO', 'Monthly Report'], bn: ['২ টি সোশ্যাল প্রোফাইল', 'প্রোফাইল সেটআপ', 'বেসিক কিওয়ার্ড এসইও', 'মাসিক রিপোর্ট'] }, isPopular: false },
      { name: { en: 'Standard', bn: 'স্ট্যান্ডার্ড' }, price: '$250', features: { en: ['4 Social Profiles', 'Content Strategy', 'On-page SEO', 'Automation Setup'], bn: ['৪ টি সোশ্যাল প্রোফাইল', 'কন্টেন্ট স্ট্র্যাটেজি', 'অন-পেজ এসইও', 'অটোমেশন সেটআপ'] }, isPopular: true },
      { name: { en: 'Premium', bn: 'প্রিমিয়াম' }, price: '$450', features: { en: ['All Social Profiles', 'Full Automation', 'Technical SEO', 'Competitor Analysis'], bn: ['সকল সোশ্যাল প্রোফাইল', 'ফুল অটোমেশন', 'টেকনিক্যাল এসইও', 'প্রতিযোগী বিশ্লেষণ'] }, isPopular: false }
    ]
  },
  {
    id: 'app-development',
    title: { en: 'App Development', bn: 'অ্যাপ ডেভেলপমেন্ট' },
    description: { en: 'Custom Android and Progressive Web Apps built with modern technologies.', bn: 'আধুনিক প্রযুক্তিতে তৈরি কাস্টম অ্যান্ড্রয়েড ও প্রগ্রেসিভ ওয়েব অ্যাপ (PWA)।' },
    details: {
      en: ["High-performance Progressive Web Apps (PWA) that work offline.", "Native Android application development.", "Seamless API integration and real-time database sync.", "App store deployment and support."],
      bn: ["হাই-পারফরম্যান্স প্রগ্রেসিভ ওয়েব অ্যাপ যা অফলাইনেও কাজ করে।", "নেটিভ অ্যান্ড্রয়েড অ্যাপ্লিকেশন ডেভেলপমেন্ট।", "রিয়েল-টাইম ডাটাবেস সিঙ্ক এবং এপিআই (API) ইন্টিগ্রেশন।", "অ্যাপ স্টোর ডিপ্লয়মেন্ট এবং সাপোর্ট।"]
    },
    technologies: ['Kotlin', 'Android Studio', 'React Native', 'Firebase', 'Jetpack Compose'],
    process: [
      { step: '01', title: { en: 'Wireframing', bn: 'ওয়্যারফ্রেমিং' }, desc: { en: 'Drafting the app layout and user flow structure.', bn: 'অ্যাপের লেআউট এবং ইউজার ফ্লো স্ট্রাকচার তৈরি করা।' } },
      { step: '02', title: { en: 'UI/UX Design', bn: 'ইউআই/ইউএক্স ডিজাইন' }, desc: { en: 'Designing intuitive and engaging mobile interfaces.', bn: 'আকর্ষণীয় এবং ব্যবহারকারীবান্ধব মোবাইল ইন্টারফেস ডিজাইন।' } },
      { step: '03', title: { en: 'Development', bn: 'অ্যাপ ডেভেলপমেন্ট' }, desc: { en: 'Coding the native or PWA application with backend sync.', bn: 'ব্যাকএন্ড সিঙ্ক সহ নেটিভ বা পিডব্লিউএ অ্যাপ্লিকেশন কোড করা।' } },
      { step: '04', title: { en: 'Store Launch', bn: 'স্টোর ডিপ্লয়মেন্ট' }, desc: { en: 'Publishing to Google Play Store and ensuring stability.', bn: 'গুগল প্লে স্টোরে পাবলিশ করা এবং স্ট্যাবিলিটি নিশ্চিত করা।' } }
    ],
    faqs: [
      { q: { en: 'Do you provide the source code?', bn: 'আপনারা কি সোর্স কোড প্রদান করেন?' }, a: { en: 'Yes, full source code is handed over upon final payment.', bn: 'হ্যাঁ, সম্পূর্ণ পেমেন্ট সম্পন্ন হওয়ার পর সোর্স কোড বুঝিয়ে দেওয়া হয়।' } },
      { q: { en: 'Will the PWA work exactly like a native app?', bn: 'পিডব্লিউএ (PWA) কি নেটিভ অ্যাপের মতোই কাজ করবে?' }, a: { en: 'PWAs look and feel like native apps, work offline, and can be installed directly from the browser.', bn: 'পিডব্লিউএ নেটিভ অ্যাপের মতোই কাজ করে, অফলাইনে চলে এবং ব্রাউজার থেকেই ইনস্টল করা যায়।' } }
    ],
    relatedWorks: [
      { title: { en: 'DigitalAgro Farm App', bn: 'ডিজিটাল এগ্রো ফার্ম অ্যাপ' }, desc: { en: 'PWA for cattle farm management & feed formulation.', bn: 'খামার পরিচালনা ও ফিড ফর্মুলেশনের জন্য পিডব্লিউএ (PWA)।' } },
      { title: { en: 'Private Vault App', bn: 'প্রাইভেট ভল্ট অ্যাপ' }, desc: { en: 'Encrypted calculator-style Android vault app.', bn: 'অ্যান্ড্রয়েড কিস্টোর এনক্রিপশন যুক্ত ভল্ট অ্যাপ।' } }
    ],
    packages: [
      { name: { en: 'Basic', bn: 'বেসিক' }, price: '$250', features: { en: ['Simple PWA', 'Mobile Responsive', 'Offline Support', '5 Days Delivery'], bn: ['সিম্পল পিডব্লিউএ', 'মোবাইল রেসপন্সিভ', 'অফলাইন সাপোর্ট', '৫ দিনে ডেলিভারি'] }, isPopular: false },
      { name: { en: 'Standard', bn: 'স্ট্যান্ডার্ড' }, price: '$500', features: { en: ['Advanced PWA', 'Push Notifications', 'Database Setup', '10 Days Delivery'], bn: ['অ্যাডভান্সড পিডব্লিউএ', 'পুশ নোটিফিকেশন', 'ডাটাবেস সেটআপ', '১০ দিনে ডেলিভারি'] }, isPopular: true },
      { name: { en: 'Premium', bn: 'প্রিমিয়াম' }, price: '$850', features: { en: ['Native Android App', 'Admin Panel', 'Play Store Upload', '20 Days Delivery'], bn: ['নেটিভ অ্যান্ড্রয়েড অ্যাপ', 'অ্যাডমিন প্যানেল', 'প্লে স্টোর আপলোড', '২০ দিনে ডেলিভারি'] }, isPopular: false }
    ]
  },
  {
    id: 'ethical-hack',
    title: { en: 'Ethical Hacking & Security', bn: 'ইথিক্যাল হ্যাকিং ও সিকিউরিটি' },
    description: { en: 'Protect your digital assets with advanced vulnerability assessments and penetration testing.', bn: 'অ্যাডভান্সড ভালনারেবিলিটি অ্যাসেসমেন্ট এবং পেনিট্রেশন টেস্টিংয়ের মাধ্যমে আপনার ডিজিটাল সম্পদ সুরক্ষিত রাখুন।' },
    details: {
      en: ["Comprehensive vulnerability scanning.", "Deep web application penetration testing based on OWASP Top 10.", "Source code review to ensure secure coding practices.", "Detailed security audit reports with patch recommendations."],
      bn: ["নিরাপত্তা ত্রুটি শনাক্ত করতে বিস্তারিত স্ক্যানিং।", "OWASP টপ ১০ এর উপর ভিত্তি করে ডিপ ওয়েব পেনিট্রেশন টেস্টিং।", "নিরাপদ কোডিং প্র্যাকটিস নিশ্চিত করতে সোর্স কোড রিভিউ।", "স্টেপ-বাই-স্টেপ প্যাচ সাজেশন সহ সিকিউরিটি অডিট রিপোর্ট।"]
    },
    technologies: ['Kali Linux', 'Burp Suite', 'Nmap', 'Metasploit', 'Wireshark'],
    process: [
      { step: '01', title: { en: 'Reconnaissance', bn: 'রিকনসেন্স' }, desc: { en: 'Gathering preliminary data and system intelligence.', bn: 'প্রাথমিক ডেটা এবং সিস্টেম ইন্টেলিজেন্স সংগ্রহ করা।' } },
      { step: '02', title: { en: 'Scanning', bn: 'স্ক্যানিং' }, desc: { en: 'Automated and manual checks for security flaws.', bn: 'নিরাপত্তা ত্রুটির জন্য অটোমেটেড এবং ম্যানুয়াল চেক।' } },
      { step: '03', title: { en: 'Exploitation', bn: 'এক্সপ্লয়টেশন টেস্টিং' }, desc: { en: 'Safely simulating attacks to verify vulnerabilities.', bn: 'ত্রুটি যাচাই করতে নিরাপদে অ্যাটাক সিমুলেশন করা।' } },
      { step: '04', title: { en: 'Reporting', bn: 'রিপোর্টিং ও প্যাচিং' }, desc: { en: 'Delivering audit logs and actionable fix recommendations.', bn: 'অডিট লগ এবং কার্যকরী সমাধানের সুপারিশ প্রদান করা।' } }
    ],
    faqs: [
      { q: { en: 'Is this process safe for my live website?', bn: 'এই প্রক্রিয়াটি কি আমার লাইভ ওয়েবসাইটের জন্য নিরাপদ?' }, a: { en: 'Yes, we conduct safe, non-destructive tests that do not harm your live data.', bn: 'হ্যাঁ, আমরা নিরাপদ এবং নন-ডেস্ট্রাক্টিভ টেস্ট করি যা আপনার লাইভ ডেটার কোনো ক্ষতি করে না।' } },
      { q: { en: 'Will you fix the vulnerabilities for me?', bn: 'আপনারা কি ত্রুটিগুলো ঠিক করে দেবেন?' }, a: { en: 'We provide detailed reports and patch recommendations. Fixing them is an additional service.', bn: 'আমরা বিস্তারিত রিপোর্ট এবং সাজেশন প্রদান করি। ত্রুটিগুলো ফিক্স করা একটি অতিরিক্ত সার্ভিস।' } }
    ],
    relatedWorks: [
      { title: { en: 'API Security Audit', bn: 'এপিআই (API) সিকিউরিটি অডিট' }, desc: { en: 'Identified and patched critical data leaks.', bn: 'ক্রিটিকাল ডেটা লিক শনাক্ত এবং প্যাচ করা হয়েছে।' } },
      { title: { en: 'E-commerce Pen-Test', bn: 'ই-কমার্স পেন-টেস্ট' }, desc: { en: 'OWASP Top 10 vulnerabilities assessment.', bn: 'OWASP টপ ১০ ভালনারেবিলিটি অ্যাসেসমেন্ট।' } }
    ],
    packages: [
      { name: { en: 'Basic', bn: 'বেসিক' }, price: '$200', features: { en: ['Vulnerability Scan', 'OWASP Top 10 Check', 'Basic Security Report', '3 Days Delivery'], bn: ['ভালনারেবিলিটি স্ক্যান', 'OWASP টপ ১০ চেক', 'বেসিক সিকিউরিটি রিপোর্ট', '৩ দিনে ডেলিভারি'] }, isPopular: false },
      { name: { en: 'Standard', bn: 'স্ট্যান্ডার্ড' }, price: '$450', features: { en: ['Web Penetration Testing', 'API Security Check', 'Patch Suggestions', '7 Days Delivery'], bn: ['ওয়েব পেনিট্রেশন টেস্টিং', 'এপিআই (API) সিকিউরিটি চেক', 'প্যাচ সাজেশন', '৭ দিনে ডেলিভারি'] }, isPopular: true },
      { name: { en: 'Premium', bn: 'প্রিমিয়াম' }, price: '$900', features: { en: ['Advanced Pen-Test', 'Source Code Review', 'Server Security Audit', '14 Days Delivery'], bn: ['অ্যাডভান্সড পেন-টেস্ট', 'সোর্স কোড রিভিউ', 'সার্ভার সিকিউরিটি অডিট', '১৪ দিনে ডেলিভারি'] }, isPopular: false }
    ]
  }
];