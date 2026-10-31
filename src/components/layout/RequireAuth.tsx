import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function RequireAuth({ children }: { children: ReactNode }) {
  const { currentUser } = useAuth();

  // লাইভ সার্ভারের জন্য সিকিউরিটি চেক অন করে দেওয়া হলো
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}