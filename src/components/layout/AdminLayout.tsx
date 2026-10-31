import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import RequireAuth from './RequireAuth';

export default function AdminLayout() {
  return (
    <RequireAuth>
      <div className="min-h-screen bg-primary text-text-primary flex">
        {/* Sidebar */}
        <AdminSidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-5xl mx-auto">
            {/* Outlet এর জায়গায় রাউটের ভেতরের পেজগুলো রেন্ডার হবে */}
            <Outlet />
          </div>
        </main>
      </div>
    </RequireAuth>
  );
}