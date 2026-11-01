export const projectsData = [
  {
    id: 'digital-agro',
    title: { en: 'DigitalAgro Farm PWA', bn: 'ডিজিটাল এগ্রো ফার্ম পিডব্লিউএ' },
    description: {
      en: 'A comprehensive Progressive Web App for cattle farm management, featuring feed protein calculators, daily expense tracking, and invoice exports.',
      bn: 'খামার পরিচালনার জন্য একটি পিডব্লিউএ, যেখানে ফিড প্রোটিন ক্যালকুলেটর, খরচ ট্র্যাকিং এবং ইনভয়েস এক্সপোর্ট সুবিধা রয়েছে।'
    },
    category: 'Web App',
    techStack: ['React', 'TypeScript', 'Tailwind', 'PWA'],
    image: 'https://images.unsplash.com/photo-1592982537447-6f2334222f00?q=80&w=800&auto=format&fit=crop',
    liveLink: '#',
    githubLink: 'https://github.com/rashid-hash'
  },
  {
    id: 'private-vault',
    title: { en: 'Private Vault App', bn: 'প্রাইভেট ভল্ট অ্যাপ' },
    description: {
      en: 'A calculator-style private vault Android application using Kotlin, Jetpack Compose, Material 3, and Android Keystore encryption.',
      bn: 'কোটলিন এবং অ্যান্ড্রয়েড কিস্টোর এনক্রিপশন ব্যবহার করে তৈরি একটি ক্যালকুলেটর-স্টাইলের প্রাইভেট ভল্ট অ্যান্ড্রয়েড অ্যাপ।'
    },
    category: 'Mobile App',
    techStack: ['Kotlin', 'Jetpack Compose', 'Android Keystore'],
    image: 'https://images.unsplash.com/photo-1614064641913-6eb0f8a3380b?q=80&w=800&auto=format&fit=crop',
    liveLink: '#',
    githubLink: 'https://github.com/rashid-hash'
  },
  {
    id: 'autosuite',
    title: { en: 'AutoSuite Desktop', bn: 'অটোস্যুট ডেস্কটপ' },
    description: {
      en: 'Desktop automation software interface developed in Python, incorporating advanced CAPTCHA solving and web automation integration.',
      bn: 'পাইথনে তৈরি ডেস্কটপ অটোমেশন সফটওয়্যার, যেখানে ক্যাপচা সলভিং এবং ওয়েব অটোমেশন ইন্টিগ্রেশন রয়েছে।'
    },
    category: 'Automation',
    techStack: ['Python', 'Automation', 'CAPTCHA API'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    liveLink: '#',
    githubLink: 'https://github.com/rashid-hash'
  },
  {
    id: 'encrypted-chat',
    title: { en: 'Encrypted Chat PWA', bn: 'এনক্রিপ্টেড চ্যাট পিডব্লিউএ' },
    description: {
      en: 'End-to-end encrypted real-time chat app featuring Firestore sync, encrypted voice notes, and biometric app locking.',
      bn: 'এন্ড-টু-এন্ড এনক্রিপ্টেড রিয়েল-টাইম চ্যাট অ্যাপ, যেখানে ফায়ারস্টোর সিঙ্ক, ভয়েস নোট এবং বায়োমেট্রিক অ্যাপ লকিং রয়েছে।'
    },
    category: 'Web App',
    techStack: ['React', 'Firebase', 'Cryptography', 'PWA'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    liveLink: '#',
    githubLink: 'https://github.com/rashid-hash'
  },
  {
    id: 'cyberpunk-tts',
    title: { en: 'Cyberpunk TTS Engine', bn: 'সাইবারপাঙ্ক টিটিএস ইঞ্জিন' },
    description: {
      en: 'A Cyberpunk-themed Text-to-Speech web application supporting high-quality Bangla and English speech synthesis.',
      bn: 'বাংলা এবং ইংরেজি স্পিচ সিন্থেসিস সাপোর্ট সহ একটি সাইবারপাঙ্ক-থিমের টেক্সট-টু-স্পিচ ওয়েব অ্যাপ্লিকেশন।'
    },
    category: 'Web App',
    techStack: ['Next.js', 'Tailwind', 'Web Audio API'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    liveLink: '#',
    githubLink: 'https://github.com/rashid-hash'
  },
  {
    id: '3d-gift',
    title: { en: 'Interactive 3D Surprise', bn: 'ইন্টারেক্টিভ থ্রিডি সারপ্রাইজ' },
    description: {
      en: 'Interactive 3D web animations including a rotating heart screen and a blooming rose, crafted as digital surprise presentations.',
      bn: 'ডিজিটাল সারপ্রাইজ প্রেজেন্টেশন হিসেবে তৈরি থ্রিডি ওয়েব অ্যানিমেশন, যেখানে রোটেটিং হার্ট এবং ব্লুমিং রোজ রয়েছে।'
    },
    category: 'UI/3D',
    techStack: ['Three.js', 'Framer Motion', 'React'],
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop',
    liveLink: '#',
    githubLink: 'https://github.com/rashid-hash'
  }
];

// Extract unique categories dynamically
export const projectCategories = ['All', ...Array.from(new Set(projectsData.map(p => p.category)))];