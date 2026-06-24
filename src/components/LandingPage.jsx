import React from 'react';
import Hero from './Hero';

// Simplified Landing Page component focusing on a clean, futuristic look.
// Currently only renders the Hero section. Additional sections can be added later.
function LandingPage() {
  return (
    <section className="landing-page min-h-screen flex flex-col justify-center items-center bg-black text-gray-200">
      <Hero />
    </section>
  );
}

export default LandingPage;
