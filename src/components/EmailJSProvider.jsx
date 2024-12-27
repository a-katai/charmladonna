'use client'
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailJSProvider({ children }) {
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  return <>{children}</>;
} 