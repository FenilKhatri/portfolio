import { LucideIcon } from 'lucide-react';

interface AdminCountCardProps {
  title: string;
  count: number;
  icon: LucideIcon;
  color?: string;
}

const AdminCountCard = ({ title, count, icon: Icon, color = "text-orange-500 dark:text-emerald-500" }: AdminCountCardProps) => {
  return (
    <div className="flex items-center p-6 bg-white/60 dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-2xl shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <div className={`p-4 bg-black/5 dark:bg-white/5 rounded-xl ${color}`}>
        <Icon size={32} />
      </div>
      <div className="ml-6">
        <h3 className="text-gray-500 dark:text-gray-400 font-code text-sm font-medium uppercase tracking-wider">{title}</h3>
        <p className="text-3xl font-bold text-black dark:text-white mt-1">{count}</p>
      </div>
    </div>
  );
};

export default AdminCountCard;
