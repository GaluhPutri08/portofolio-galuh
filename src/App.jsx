import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import CvModal from './components/CvModal';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // IntersectionObserver to observe sections and update active link in navbar
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Education />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onShowToast={showToast}
        />
      )}

      {/* Curriculum Vitae Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}
