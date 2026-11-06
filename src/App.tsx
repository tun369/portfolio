import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Terminal, Award, BookOpen, Coffee, Code, ExternalLink, X, ZoomIn } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/tun369', icon: <GithubIcon /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tuan936', icon: <LinkedinIcon /> },
  { name: 'Email', url: 'mailto:tuanhoang6944@gmail.com', icon: <Mail size={20} /> },
];

export default function App() {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsZoomOpen(false);
      }
    };
    if (isZoomOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isZoomOpen]);

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Looking for a job
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hello world! <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Welcome to my profile!
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm a final-year student in Vietnam, aspiring to be a Fresher Developer. 
            Passionate about learning new technologies and building impactful projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all text-gray-300 hover:text-white"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 space-y-32">
        
        {/* About Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-cyan-400 mb-2">
              <Terminal size={24} />
              <h2 className="text-3xl font-bold text-white">About Me</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a final-year student living in the Socialist Republic of Vietnam. 
              With over 6 months of hands-on programming experience, I am actively seeking 
              opportunities to grow as a fresher. My goal is to build my career path in Natural Language Processing (NLP) and Computer Vision (CV), while also exploring how to apply AI to IoT systems.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-900/60 px-4 py-2 rounded-full border border-gray-800">
                <MapPin size={16} className="text-blue-400" />
                Ho Chi Minh City, Vietnam
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-900/60 px-4 py-2 rounded-full border border-gray-800">
                <Code size={16} className="text-green-400" />
                6+ Months Experience
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-gray-800 bg-gray-900/30 p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Coffee size={20} className="text-yellow-500" />
                  Coding Activity
                </h3>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <ZoomIn size={14} /> Click to zoom
                </span>
              </div>
              
              <div className="flex flex-col gap-4">
                <button 
                  type="button"
                  onClick={() => setIsZoomOpen(true)}
                  className="group relative block w-full text-left cursor-zoom-in rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  aria-label="Enlarge Coding Activity chart"
                >
                  <img 
                    src="https://wakatime.com/share/@tun6944/6798bd34-ca76-481c-a41b-5cff1a6428b2.svg" 
                    alt="Wakatime stats" 
                    className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm backdrop-blur-[1px] rounded-lg">
                    <ZoomIn size={18} /> Click to zoom in
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* GitHub Statistics */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 text-blue-400 mb-6">
            <Award size={28} />
            <h2 className="text-3xl font-bold text-white">GitHub Statistics</h2>
          </div>
          
          {/* OSSInsight Dashboard Widget */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-5 hover:border-gray-700 transition-colors flex items-center justify-center overflow-hidden">
            <picture className="w-full max-w-3xl flex justify-center">
              <source 
                media="(prefers-color-scheme: dark)" 
                srcSet="https://next.ossinsight.io/widgets/official/compose-user-dashboard-stats/thumbnail.png?user_id=116370663&image_size=auto&color_scheme=dark" 
                width="771" 
                height="auto" 
              />
              <img 
                alt="Dashboard stats of @tun369" 
                src="https://next.ossinsight.io/widgets/official/compose-user-dashboard-stats/thumbnail.png?user_id=116370663&image_size=auto&color_scheme=light" 
                width="771" 
                height="auto" 
                className="w-full h-auto rounded-lg"
              />
            </picture>
          </div>

          {/* Languages & Repos Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-4 hover:border-gray-700 transition-colors flex items-center justify-center">
              <img 
                src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=tun369&theme=algolia" 
                alt="Most Commit Languages" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-4 hover:border-gray-700 transition-colors flex items-center justify-center">
              <img 
                src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=tun369&theme=algolia" 
                alt="Repositories per Language" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Highlighted Projects */}
        <section className="space-y-12 pb-24">
          <div className="flex items-center gap-3 text-cyan-400 mb-8">
            <BookOpen size={28} />
            <h2 className="text-3xl font-bold text-white">Highlighted Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                name: 'Coffee Leaves Diseases using CNN & ViT', 
                repoPath: 'tun369/ViT_Coffee_Leaves_Diseases',
                desc: 'An end-to-end computer vision project for detecting and classifying coffee leaf diseases. It uses YOLOv11 to find and locate infected areas on leaves, and then applies a Vision Transformer (ViT) model to classify specific disease types with high accuracy, helping farmers protect plant health early.' 
              },
              { 
                name: 'Violence-Detection', 
                repoPath: 'tiao051/Violence-Detection',
                desc: 'A comprehensive deep learning-based violence detection system designed for intelligent video surveillance. The system implements a 3-stage spatiotemporal feature extraction pipeline (RemoNet: SME -> STE -> GTE) that analyzes video streams with lightweight CNN backbones to identify violent behavior in real-time with minimal latency and high accuracy.' 
              },
              { 
                name: 'Pharmaceutical processing management system', 
                repoPath: 'Johnyyd/DoAnTotNghiep',
                desc: 'The Pharmaceutical Processing Management System (PPMS) is a comprehensive platform for managing drug manufacturing processes compliant with GMP-WHO (Good Manufacturing Practice - World Health Organization) standards. The system integrates production management, quality control, traceability, and data integrity assurance in a closed pharmaceutical manufacturing environment.' 
              },
              { 
                name: 'University Admission Chatbot', 
                repoPath: 'tun369/admission_chatbot',
                desc: 'An intelligent university admission counseling chatbot built with Retrieval-Augmented Generation (RAG). It crawls official admission data from the university website using BeautifulSoup, processes and chunks text using LangChain, and stores vectors in Qdrant for semantic search. It features a clean Flask web interface that allows prospective students to ask questions and receive quick, accurate answers about admission requirements, majors, and deadlines.' 
              },
            ].map((repo) => (
              <a 
                key={repo.name}
                href={`https://github.com/${repo.repoPath}`}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-xl border border-gray-800 bg-gray-900/40 hover:bg-gray-800 transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {repo.name}
                  </h3>
                  <ExternalLink size={20} className="text-gray-500 group-hover:text-blue-400" />
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{repo.desc}</p>
                <div className="text-xs text-gray-500 font-mono">
                  {repo.repoPath}
                </div>
              </a>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Tuan (tun369). Built with React & Tailwind CSS.</p>
        <p className="text-sm mt-2">Ho Chi Minh City, Vietnam 🇻🇳</p>
      </footer>

      {/* Lightbox Modal for Coding Activity */}
      <AnimatePresence>
        {isZoomOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900/95 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-950/60">
                <div className="flex items-center gap-2">
                  <Coffee size={20} className="text-yellow-500" />
                  <h3 className="text-lg font-semibold text-white">Coding Activity Breakdown</h3>
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://wakatime.com/@tun6944" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 px-3 py-1.5 rounded-lg border border-blue-500/20 transition-colors"
                  >
                    <span>Open on WakaTime</span>
                    <ExternalLink size={14} />
                  </a>
                  <button 
                    type="button"
                    onClick={() => setIsZoomOpen(false)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none"
                    aria-label="Close dialog"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Body / Image View */}
              <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-gray-950/40">
                <img 
                  src="https://wakatime.com/share/@tun6944/6798bd34-ca76-481c-a41b-5cff1a6428b2.svg" 
                  alt="Wakatime detailed stats" 
                  className="w-full max-w-3xl h-auto object-contain rounded-lg shadow-lg border border-gray-800/60"
                />
              </div>

              {/* Modal Footer info */}
              <div className="px-6 py-3 border-t border-gray-800 bg-gray-950/60 text-xs text-gray-500 text-center">
                Press <kbd className="px-1.5 py-0.5 rounded bg-gray-800 border border-gray-700 text-gray-300 font-mono">Esc</kbd> or click outside to close
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
