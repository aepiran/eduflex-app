import React from "react";

// src/lib/types/cart.types.ts
export interface CartCourse {
  id: number;
  title: string;
  instructor: string;
  category: string;
  rating: number;
  totalStudents: number;
  duration: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges: string[];
  isFeatured: boolean
}

export interface Instructor {
    id: number;
    name: string;
    title: string;
    specialization: string;
    avatar: string;
    students: number;
    courses: number;
    rating: number;
}

export interface InfoFeatureCard {
    id: string;
    icon: React.JSX.Element;
    title: string;
    description: string;
}

export interface CartItem {
  id: string
  courseId: string
  title: string
  description: string
  price: number
  discountedPrice?: number
  thumbnailUrl?: string
  instructorName: string
  category: string
  quantity: number
  addedAt: Date
}

export interface CartState {
  items: CartItem[]
  totalItems: number
  subtotal: number
  discount: number
  total: number
  isLoading: boolean
}

export interface DiscountCode {
  code: string
  type: 'percentage' | 'fixed'
  value: number
  minOrder?: number
  expiresAt?: Date
  isActive: boolean
}

export interface StatProp {
  color: string;
  icon: React.JSX.Element;
  value: string | number;
  label: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}


