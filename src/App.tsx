import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';
import Home from './pages/public/Home';
import Services from './pages/public/Services';
import Login from './pages/auth/Login';
import Dashboard from './pages/admin/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import Lab from './pages/public/Lab';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          
          {/* Public Routes - এগুলোতে Navbar এবং Footer থাকবে */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/lab" element={<Lab />} />
            {/* ভবিষ্যতে /projects এবং /contact পেজ এখানেই যুক্ত হবে */}
          </Route>
          
          {/* Auth Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Admin Routes - এগুলোতে Sidebar থাকবে */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;