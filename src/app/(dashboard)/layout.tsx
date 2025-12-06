
import React from 'react'
import { PublicLayout } from '@/components/layout';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <PublicLayout>
            {children}
        </PublicLayout>
    )

}