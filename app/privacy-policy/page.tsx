// @ts-nocheck
"use client";
import React from "react";

const PolicyCard = ({ title, children }) => (
  <div className="relative group rounded-2xl p-[1px] bg-[#0A1014]">
    <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 shadow-lg transition duration-300 group-hover:shadow-2xl group-hover:bg-white/90 dark:group-hover:bg-slate-900/90">
      <h2 className="text-xl font-semibold mb-3 bg-[#E11D48] bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="text-slate-600 dark:text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <main className="relative overflow-hidden py-20 px-6">
      
      {/* Ambient glow background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="max-w-3xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center bg-white bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <p className="text-center text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
          Your privacy matters to us. This policy explains how we collect,
          use, and protect your information when you interact with our platform.
        </p>

        {/* Sections */}
        <div className="space-y-6">

          <PolicyCard title="Information We Collect">
            <ul className="list-disc ml-5 space-y-2">
              <li>Personal identification information (name, email, phone number, etc.).</li>
              <li>Usage data, analytics, and cookies to enhance performance.</li>
            </ul>
          </PolicyCard>

          <PolicyCard title="How We Use Your Information">
            <ul className="list-disc ml-5 space-y-2">
              <li>To provide and maintain our services.</li>
              <li>To improve website functionality and user experience.</li>
              <li>To communicate important updates or support messages.</li>
            </ul>
          </PolicyCard>

          <PolicyCard title="Contact Us">
            <p>
              If you have questions regarding this Privacy Policy or how your
              data is handled, please contact our support team anytime.
            </p>
          </PolicyCard>

        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
