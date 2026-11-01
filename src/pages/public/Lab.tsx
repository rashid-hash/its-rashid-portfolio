import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Terminal, Sparkles, ShieldCheck, Zap, Calculator, Palette, Smartphone } from 'lucide-react';

export default function Lab() {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'bn';

  // Tool 1: Password Generator State
  const [password, setPassword] = useState('Click generate ->');
  
  // Tool 2: Agro Feed Calculator State
  const [cowWeight, setCowWeight] = useState('');
  const [feedResult, setFeedResult] = useState<number | null>(null);

  // Tool 3: Color Palette State
  const [bgColor, setBgColor] = useState('#8B9EFF'); // Default Accent Color
  
  // Terminal Typing Effect State
  const [text, setText] = useState('');
  const codeSnippet = `function initCreativeLab() {
  console.log("Loading modules...");
  const skills = ['React', 'Security', 'Agro-Tech'];
  return skills.map(skill => \`Initializing \${skill} Engine\`);
}
// System ready.`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(codeSnippet.slice(0, i));
      i++;
      if (i > codeSnippet.length) clearInterval(typingInterval);
    }, 50);
    return () => clearInterval(typingInterval);
  }, [codeSnippet]);

  // Handlers for Tools
  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let pass = "";
    for (let i = 0; i < 14; i++) pass += chars.charAt(Math.floor(Math.random() * chars.length));
    setPassword(pass);
  };

  const calculateFeed = () => {
    const weight = parseFloat(cowWeight);
    if (!isNaN(weight) && weight > 0) {
      // General rule of thumb for dry matter intake: approx 2.5% of body weight
      const feedNeeded = (weight * 2.5) / 100;
      setFeedResult(parseFloat(feedNeeded.toFixed(2)));
    } else {
      setFeedResult(null);
    }
  };

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    setBgColor(randomColor);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto animate-fade-in">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4 flex items-center justify-center gap-3">
            <Zap className="text-accent-primary animate-pulse" size={36} />
            {lang === 'en' ? 'Creative Lab' : 'ক্রিয়েটিভ ল্যাব'}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'A digital playground for my coding experiments, interactive UI components, and micro-tools.' 
              : 'আমার কোডিং এক্সপেরিমেন্ট, ইন্টারেক্টিভ ইউআই এবং মাইক্রো-টুলস এর একটি ডিজিটাল প্লেগ্রাউন্ড।'}
          </p>
        </div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Row 1, Box 1: Terminal/Code Simulation (Spans 2 cols) */}
          <div className="md:col-span-2 bg-surface border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 blur-[50px] rounded-full"></div>
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <Terminal size={20} className="text-accent-primary" />
              <span className="text-text-primary font-mono text-sm tracking-wider">creative_engine.ts</span>
            </div>
            <pre className="font-mono text-sm text-text-secondary whitespace-pre-wrap">
              <code className="text-[#a5b4fc]">{text}</code>
              <span className="animate-pulse text-accent-primary">_</span>
            </pre>
          </div>

          {/* Row 1, Box 2: Password Generator */}
          <div className="bg-surface-secondary/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-accent-primary/30 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck size={20} className="text-accent-primary" />
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-2">
                {lang === 'en' ? 'Secure Key Gen' : 'সিকিউর কি-জেন'}
              </h3>
              <p className="text-text-secondary text-sm mb-6 line-clamp-2">
                {lang === 'en' ? 'Client-side random password generator.' : 'ক্লায়েন্ট-সাইড র‍্যান্ডম পাসওয়ার্ড জেনারেটর।'}
              </p>
            </div>
            
            <div>
              <div className="bg-surface border border-white/10 rounded-xl p-4 mb-4 text-center font-mono text-accent-primary text-sm break-all h-12 flex items-center justify-center">
                {password}
              </div>
              <button 
                onClick={generatePassword}
                className="w-full py-3 rounded-xl bg-surface border border-white/10 text-text-primary hover:bg-accent-primary hover:text-primary transition-all text-sm font-medium"
              >
                {lang === 'en' ? 'Generate' : 'জেনারেট করুন'}
              </button>
            </div>
          </div>

          {/* Row 2, Box 1: Agro Feed Calculator */}
          <div className="bg-surface-secondary/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-accent-primary/30 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#4CAF50]/10 flex items-center justify-center mb-6">
                <Calculator size={20} className="text-[#4CAF50]" />
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-2">
                {lang === 'en' ? 'Agro Feed Calc' : 'এগ্রো ফিড ক্যালক'}
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                {lang === 'en' ? 'Estimate daily dry matter intake for cattle.' : 'গবাদি পশুর দৈনিক খাবারের আনুমানিক পরিমাণ বের করুন।'}
              </p>
            </div>

            <div>
              <div className="flex gap-2 mb-4">
                <input 
                  type="number" 
                  placeholder={lang === 'en' ? 'Weight (kg)' : 'ওজন (কেজি)'}
                  value={cowWeight}
                  onChange={(e) => setCowWeight(e.target.value)}
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-[#4CAF50]/50"
                />
                <button 
                  onClick={calculateFeed}
                  className="px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-primary hover:bg-[#4CAF50] hover:border-[#4CAF50] hover:text-white transition-all text-sm font-medium"
                >
                  Calc
                </button>
              </div>
              {feedResult !== null && (
                <div className="text-center text-sm">
                  <span className="text-text-secondary">{lang === 'en' ? 'Daily Feed:' : 'দৈনিক খাবার:'} </span>
                  <span className="text-[#4CAF50] font-bold text-lg">{feedResult} kg</span>
                </div>
              )}
            </div>
          </div>

          {/* Row 2, Box 2: Color Palette Picker */}
          <div className="bg-surface-secondary/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-accent-primary/30 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                <Palette size={20} className="text-white" style={{ color: bgColor }} />
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-2">
                {lang === 'en' ? 'UI Color Lab' : 'ইউআই কালার ল্যাব'}
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                {lang === 'en' ? 'Generate random HEX codes for UI design.' : 'ইউআই ডিজাইনের জন্য র‍্যান্ডম কালার কোড তৈরি করুন।'}
              </p>
            </div>

            <div 
              className="rounded-xl h-24 mb-4 flex items-center justify-center cursor-pointer transition-colors duration-500 shadow-inner group"
              style={{ backgroundColor: bgColor }}
              onClick={() => {
                navigator.clipboard.writeText(bgColor);
                generateRandomColor();
              }}
              title="Click to copy & change"
            >
              <span className="bg-black/40 px-3 py-1 rounded-md text-white font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Copy: {bgColor}
              </span>
            </div>
          </div>

          {/* Row 2, Box 3: PWA Status Module */}
          <div className="bg-surface-secondary/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-accent-primary/30 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#00D8FF]/10 flex items-center justify-center mb-6">
                <Smartphone size={20} className="text-[#00D8FF]" />
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-2">
                {lang === 'en' ? 'PWA Ready' : 'পিডব্লিউএ রেডি'}
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                {lang === 'en' ? 'Standard checklist for Progressive Web Apps.' : 'প্রগ্রেসিভ ওয়েব অ্যাপের স্ট্যান্ডার্ড চেকলিস্ট।'}
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <div className="w-2 h-2 rounded-full bg-[#00D8FF] shadow-[0_0_8px_#00D8FF]"></div>
                Manifest.json Configured
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <div className="w-2 h-2 rounded-full bg-[#00D8FF] shadow-[0_0_8px_#00D8FF]"></div>
                Service Worker Active
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <div className="w-2 h-2 rounded-full bg-[#00D8FF] shadow-[0_0_8px_#00D8FF]"></div>
                Offline Capability
              </li>
            </ul>
          </div>

          {/* Row 3: Interactive Glassmorphism UI (Spans all 3 cols on large screens) */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-surface to-surface-secondary border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-[0_0_30px_rgba(139,158,255,0.1)] transition-all duration-500 mt-2">
            <div className="max-w-md">
              <div className="flex items-center gap-2 text-accent-primary mb-4">
                <Sparkles size={18} />
                <span className="text-sm font-bold tracking-widest uppercase">Interaction Lab</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-text-primary mb-3">
                {lang === 'en' ? 'Fluid Glassmorphism' : 'ফ্লুইড গ্লাসমরফিজম'}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {lang === 'en' 
                  ? 'Modern web experiences require elegant interactions. Hover over the element to see dynamic lighting and backdrop blurs in action.' 
                  : 'আধুনিক ওয়েব অভিজ্ঞতার জন্য চমৎকার ইন্টারঅ্যাকশন প্রয়োজন। ডাইনামিক লাইটিং ইফেক্ট দেখতে কার্ডটির ওপর মাউস হোভার করুন।'}
              </p>
            </div>

            {/* Glowing Interactive Element */}
            <div className="relative group cursor-pointer w-full md:w-auto flex justify-center mt-6 md:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-[#ff4800] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-40 bg-surface/80 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent-primary/20 blur-[30px] group-hover:bg-accent-primary/40 transition-colors duration-500"></div>
                <span className="text-text-primary font-medium tracking-wide z-10 group-hover:scale-110 transition-transform duration-500">
                  Hover Me
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}