import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin/dashboard'); // সফল হলে ড্যাশবোর্ডে নিয়ে যাবে
    } catch (err) {
      setError(i18n.language === 'en' ? 'Invalid credentials. Please try again.' : 'ইমেইল বা পাসওয়ার্ড ভুল। আবার চেষ্টা করুন।');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary px-6">
      <div className="w-full max-w-md bg-surface p-8 rounded-2xl border border-white/10 shadow-2xl animate-fade-in">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-accent-primary/10 flex items-center justify-center rounded-full mb-4">
            <Lock className="text-accent-primary" size={24} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-text-primary">
            {i18n.language === 'en' ? 'Admin Portal' : 'অ্যাডমিন পোর্টাল'}
          </h2>
          <p className="text-text-secondary text-sm mt-1">
            {i18n.language === 'en' ? 'Sign in to manage your portfolio' : 'পোর্টফোলিও ম্যানেজ করতে লগইন করুন'}
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-secondary border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-secondary border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-accent-primary text-primary font-medium py-3 rounded-lg hover:bg-white transition-colors disabled:opacity-70"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}