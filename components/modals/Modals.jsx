"use client";

import { useEffect, useState } from "react";
import CompareModal from "./CompareModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import LoginModal from "./LoginModal";
import NewsletterPopup from "./NewsletterPopup";
import QuickAddModal from "./QuickAddModal";
import QuickViewModal from "./QuickViewModal";
import RegisterModal from "./RegisterModal";
import ShoppingCartModal from "./ShoppingCartModal";
import SizeGuideModal from "./SizeGuideModal";

export default function Modals() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  // Show newsletter popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has already seen the popup
      if (typeof window !== "undefined") {
        const hasSeenPopup = localStorage.getItem("hasSeenNewsletterPopup");
        if (!hasSeenPopup) {
          setShowNewsletter(true);
          // Set flag in localStorage
          localStorage.setItem("hasSeenNewsletterPopup", "true");
        }
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoginModal />
      <RegisterModal />
      <ForgotPasswordModal />
      <QuickAddModal />
      <QuickViewModal />
      <ShoppingCartModal />
      <CompareModal />
      <SizeGuideModal />
      {showNewsletter && (
        <NewsletterPopup onClose={() => setShowNewsletter(false)} />
      )}
    </>
  );
}
