import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const { currentUser } = useAuth();

  // ডিজাইন দেখার জন্য আমরা এই সিকিউরিটি চেক সাময়িকভাবে বন্ধ করে রাখছি:
  
  // if (!currentUser) {
  //   return <Navigate to="/login" replace />;
  // }

  return children;
}