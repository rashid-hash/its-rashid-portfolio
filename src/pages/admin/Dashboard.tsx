import { FolderGit2, MessageSquare, Eye } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: 'Total Projects', value: '12', icon: FolderGit2, color: 'text-accent-primary', bg: 'bg-accent-primary/10' },
    { title: 'Unread Messages', value: '4', icon: MessageSquare, color: 'text-accent-secondary', bg: 'bg-accent-secondary/10' },
    { title: 'Profile Views', value: '1.2k', icon: Eye, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-serif font-bold mb-2">Dashboard Overview</h1>
      <p className="text-text-secondary mb-8">Welcome back! Here's what's happening with your portfolio.</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-surface border border-white/5 rounded-2xl p-6 flex items-center gap-4">
              <div className={`p-4 rounded-xl ${stat.bg}`}>
                <Icon className={stat.color} size={24} />
              </div>
              <div>
                <p className="text-text-secondary text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity Section */}
      <div className="bg-surface border border-white/5 rounded-2xl p-6">
        <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
        <div className="text-text-secondary text-sm flex items-center justify-center py-12 border border-dashed border-white/10 rounded-xl bg-primary/30">
          No recent activity to show yet.
        </div>
      </div>
    </div>
  );
}