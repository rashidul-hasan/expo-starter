// components/ProtectedRoute.tsx
import React from 'react';
import { Redirect, } from 'expo-router';
import useAuthStore from '@/store/authStore';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { user } = useAuthStore();

    // If no user (i.e., not authenticated), redirect to login
    if (!user) {
        return <Redirect href="/login" />;
    }

    return <>{children}</>; // Show protected content if authenticated
};

export default ProtectedRoute;
