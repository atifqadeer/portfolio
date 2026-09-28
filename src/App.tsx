/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitecturePhilosophy } from './components/ArchitecturePhilosophy';
import { TechStackMatrix } from './components/TechStackMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveResumeModal } from './components/InteractiveResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenContact={scrollToContact}
        />

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Featured Case Studies & Production Projects */}
        <ProjectsSection />

        {/* Architecture & Engineering Workbench */}
        <ArchitecturePhilosophy />

        {/* Skills & Technical Competencies Matrix */}
        <TechStackMatrix />

        {/* Contact & Transmission Form */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Full Curriculum Vitae & Printable Resume Modal */}
      <InteractiveResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
