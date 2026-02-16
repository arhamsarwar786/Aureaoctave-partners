// @ts-nocheck
"use client";
import React from "react";

const SectionCard = ({ title, children }) => (
  <div className="relative group rounded-2xl p-[1px] bg-[#0A1014]">
    <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 transition duration-300 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 shadow-lg group-hover:shadow-xl">
      <h2 className="text-xl font-semibold mb-3 bg-white bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="text-slate-600 dark:text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

const Disclosures = () => {
  return (
    <main className="relative overflow-hidden py-20 px-6">
      
      {/* Background Glow */}
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" /> */}
      <div className="absolute inset-0 -z-10 bg-[#0A1014]" />

      <div className="max-w-3xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center bg-white bg-clip-text text-transparent">
          Disclosures
        </h1>

        <p className="text-center text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
          Important legal, investment, and regulatory information regarding our services.
          Please read carefully before making financial decisions.
        </p>

        <div className="space-y-6">
          
          <SectionCard title="Investment Risks">
            <ul className="list-disc ml-5 space-y-2">
              <li>All investments involve risk, including the possible loss of principal.</li>
              <li>Past performance does not guarantee future results.</li>
            </ul>
          </SectionCard>

          <SectionCard title="Regulatory Information">
            <p>
              We comply with all applicable laws and regulations. This section
              may be updated periodically to reflect regulatory changes or new disclosures.
            </p>
          </SectionCard>

          <SectionCard title="Contact Us">
            <p>
              If you have questions regarding these disclosures, please reach out to our
              support team for clarification or additional information.
            </p>
          </SectionCard>

        </div>
      </div>
    </main>
  );
};

export default Disclosures;
