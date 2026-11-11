import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Terminal, Award, BookOpen, Coffee, Code, ExternalLink, X, ZoomIn, Cpu, Sun, Moon } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function App() {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme') as 'dark' | 'light';
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

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

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'bg-[#0D1117] text-[#E6EDF3]' : 'bg-[#F8FAFC] text-[#0F172A]'}`}>
      
      {/* Floating Theme Toggle (Top Right) */}
      <div className="fixed top-6 right-6 z-40">
        <button
          onClick={toggleTheme}
          type="button"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 transform hover:scale-105 ${
            isDark 
              ? 'bg-gray-900/80 border-gray-700/80 text-yellow-400 hover:bg-gray-800' 
              : 'bg-white/90 border-slate-200 text-slate-700 hover:bg-slate-100 shadow-slate-200/50'
          }`}
        >
          {isDark ? <Sun size={18} className="animate-spin-slow" /> : <Moon size={18} />}
          <span className={`text-xs font-semibold tracking-wide ${isDark ? 'text-gray-200' : 'text-slate-800'}`}>
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6 ${
            isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600 border border-blue-100'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Looking for a job
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hello world! <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Welcome to my profile!
            </span>
          </h1>
          
          <p className={`text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            I'm a final-year student in Vietnam, aspiring to be a Fresher Developer. 
            Passionate about learning new technologies and building impactful projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a 
              href="https://github.com/tun369" 
              target="_blank" 
              rel="noreferrer"
              className="hover:opacity-85 transition-opacity transform hover:-translate-y-0.5"
            >
              <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" title="GitHub" className="rounded h-7 w-auto" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tuan936" 
              target="_blank" 
              rel="noreferrer"
              className="hover:opacity-85 transition-opacity transform hover:-translate-y-0.5"
            >
              <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" title="LinkedIn" className="rounded h-7 w-auto" />
            </a>
            <a 
              href="https://gitlab.com/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:opacity-85 transition-opacity transform hover:-translate-y-0.5"
            >
              <img src="https://img.shields.io/badge/GitLab-E24329?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab" title="GitLab" className="rounded h-7 w-auto" />
            </a>
            <a 
              href="https://t.me/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:opacity-85 transition-opacity transform hover:-translate-y-0.5"
            >
              <img src="https://img.shields.io/badge/Telegram-229ED9?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" title="Telegram" className="rounded h-7 w-auto" />
            </a>
            <a 
              href="mailto:tuanhoang6944@gmail.com" 
              className="hover:opacity-85 transition-opacity transform hover:-translate-y-0.5"
            >
              <img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" title="Email" className="rounded h-7 w-auto" />
            </a>
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
            <div className="flex items-center gap-3 text-cyan-500 mb-2">
              <Terminal size={24} />
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>About Me</h2>
            </div>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              I'm a final-year student living in the Socialist Republic of Vietnam. 
              With over 6 months of hands-on programming experience, I am actively seeking 
              opportunities to grow as a fresher. My goal is to build my career path in Natural Language Processing (NLP) and Computer Vision (CV), while also exploring how to apply AI to IoT systems.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full border ${
                isDark ? 'text-gray-300 bg-gray-900/60 border-gray-800' : 'text-slate-700 bg-white border-slate-200 shadow-sm'
              }`}>
                <MapPin size={16} className="text-blue-500" />
                Ho Chi Minh City, Vietnam
              </div>
              <div className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full border ${
                isDark ? 'text-gray-300 bg-gray-900/60 border-gray-800' : 'text-slate-700 bg-white border-slate-200 shadow-sm'
              }`}>
                <Code size={16} className="text-emerald-500" />
                6+ Months Experience
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative rounded-2xl border p-8 overflow-hidden ${
              isDark 
                ? 'border-gray-800 bg-gray-900/30' 
                : 'border-slate-200 bg-white shadow-sm'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${
              isDark ? 'from-blue-500/5 to-cyan-500/5' : 'from-blue-500/5 to-cyan-500/10'
            }`} />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <h3 className={`text-xl font-semibold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  <Coffee size={20} className="text-amber-500" />
                  Coding Activity
                </h3>
                <span className={`text-xs flex items-center gap-1 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
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

        {/* Highlighted Projects */}
        <section className="space-y-12">
          <div className="flex items-center gap-3 text-cyan-500 mb-8">
            <BookOpen size={28} />
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Highlighted Projects</h2>
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
                className={`group p-6 rounded-xl border transition-all flex flex-col h-full ${
                  isDark 
                    ? 'border-gray-800 bg-gray-900/40 hover:bg-gray-800' 
                    : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm hover:shadow'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-xl font-bold transition-colors ${
                    isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
                  }`}>
                    {repo.name}
                  </h3>
                  <ExternalLink size={20} className={`transition-colors ${
                    isDark ? 'text-gray-500 group-hover:text-blue-400' : 'text-slate-400 group-hover:text-blue-600'
                  }`} />
                </div>
                <p className={`text-sm mb-6 leading-relaxed flex-grow ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{repo.desc}</p>
                <div className={`text-xs font-mono ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
                  {repo.repoPath}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Tech Stack & Skills */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 text-cyan-500 mb-6">
            <Cpu size={28} />
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Tech Stack & Skills</h2>
          </div>

          {/* Programming Languages & Tools */}
          <div className="space-y-4">
            <h3 className={`text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
              Languages, Tools & Technologies
            </h3>
            <div className={`flex flex-wrap items-center justify-center gap-4 p-6 rounded-2xl border ${
              isDark ? 'border-gray-800 bg-gray-900/30' : 'border-slate-200 bg-white shadow-sm'
            }`}>
              {[
                { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
                { name: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
                { name: 'C#', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
                { name: 'Git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
                { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg' },
                { name: 'Arduino', icon: 'https://cdn.worldvectorlogo.com/logos/arduino-1.svg' },
                { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
                { name: '.NET', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg' },
                { name: 'SQL Server', icon: 'https://github.com/tun369/tun369/assets/116370663/7c8a9126-9178-42ac-b360-762cca11b245' },
                { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
                { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
                { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
                { name: 'Unity', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQqdVBhWdV0fF2VQsUGpUqDmLwyQuLx_UGcVCigXEMde8ofqrQmY-Hyc&s=10' },
              ].map((tech) => (
                <div 
                  key={tech.name}
                  title={tech.name}
                  className={`group flex flex-col items-center justify-between p-3.5 w-24 h-24 rounded-xl border transition-all transform hover:-translate-y-1 select-none ${
                    isDark 
                      ? 'border-gray-800 bg-gray-900/50 hover:bg-gray-800 hover:border-gray-700' 
                      : 'border-slate-200 bg-slate-50/80 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex-1 flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-10 h-10 object-contain transition-transform group-hover:scale-110" 
                    />
                  </div>
                  <span className={`text-xs text-center leading-tight line-clamp-1 w-full ${
                    isDark ? 'text-gray-400 group-hover:text-gray-200' : 'text-slate-600 group-hover:text-slate-900'
                  }`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & AI Libraries */}
          <div className="space-y-4">
            <h3 className={`text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
              Frameworks & AI Libraries
            </h3>
            <div className={`flex flex-wrap items-center justify-center gap-4 p-6 rounded-2xl border ${
              isDark ? 'border-gray-800 bg-gray-900/30' : 'border-slate-200 bg-white shadow-sm'
            }`}>
              {[
                { name: 'PyTorch', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg' },
                { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
                { name: 'Qdrant', icon: 'https://cdn.simpleicons.org/qdrant/DC2626' },
                { name: 'YOLO', icon: 'https://raw.githubusercontent.com/ultralytics/assets/main/logo/Ultralytics-logomark-color.png' },
                { name: 'ViT', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/huggingface/huggingface-original.svg' },
              ].map((item) => (
                <div 
                  key={item.name}
                  title={item.name}
                  className={`group flex flex-col items-center justify-between p-3.5 w-24 h-24 rounded-xl border transition-all transform hover:-translate-y-1 select-none ${
                    isDark 
                      ? 'border-gray-800 bg-gray-900/50 hover:bg-gray-800 hover:border-gray-700' 
                      : 'border-slate-200 bg-slate-50/80 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex-1 flex items-center justify-center">
                    <img 
                      src={item.icon} 
                      alt={item.name} 
                      className="w-10 h-10 object-contain transition-transform group-hover:scale-110" 
                    />
                  </div>
                  <span className={`text-xs text-center leading-tight line-clamp-1 w-full ${
                    isDark ? 'text-gray-400 group-hover:text-gray-200' : 'text-slate-600 group-hover:text-slate-900'
                  }`}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GitHub Statistics */}
        <section className="space-y-8 pb-24">
          <div className="flex items-center gap-3 text-blue-500 mb-6">
            <Award size={28} />
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>GitHub Statistics</h2>
          </div>
          
          {/* OSSInsight Dashboard Widget */}
          <div className={`rounded-xl border p-5 transition-colors flex items-center justify-center overflow-hidden ${
            isDark ? 'border-gray-800 bg-gray-900/40 hover:border-gray-700' : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
          }`}>
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

          {/* Profile Details (Full Row / Large Size) */}
          <div className={`rounded-xl border p-4 sm:p-6 transition-colors flex items-center justify-center overflow-hidden ${
            isDark ? 'border-gray-800 bg-gray-900/40 hover:border-gray-700' : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
          }`}>
            <img 
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=tun369&theme=algolia&animation=fade" 
              alt="GitHub Profile Details" 
              className="w-full max-w-4xl h-auto rounded-lg"
            />
          </div>

          {/* GitHub Detailed Breakdown Grid (4 compact cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Repos Per Language (Excluding JS) */}
            <div className={`rounded-xl border p-4 transition-colors flex items-center justify-center ${
              isDark ? 'border-gray-800 bg-gray-900/40 hover:border-gray-700' : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
            }`}>
              <img 
                src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=tun369&theme=algolia&animation=fade&exclude=JavaScript" 
                alt="Repositories per Language" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Most Commit Language (Excluding JS) */}
            <div className={`rounded-xl border p-4 transition-colors flex items-center justify-center ${
              isDark ? 'border-gray-800 bg-gray-900/40 hover:border-gray-700' : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
            }`}>
              <img 
                src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=tun369&theme=algolia&animation=fade&exclude=JavaScript" 
                alt="Most Commit Languages" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Overall Stats */}
            <div className={`rounded-xl border p-4 transition-colors flex items-center justify-center ${
              isDark ? 'border-gray-800 bg-gray-900/40 hover:border-gray-700' : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
            }`}>
              <img 
                src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=tun369&theme=algolia&animation=fade" 
                alt="Overall GitHub Stats" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Productive Time (Asia/Ho_Chi_Minh) */}
            <div className={`rounded-xl border p-4 transition-colors flex items-center justify-center ${
              isDark ? 'border-gray-800 bg-gray-900/40 hover:border-gray-700' : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
            }`}>
              <img 
                src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=tun369&theme=algolia&animation=fade&timeZone=Asia%2FHo_Chi_Minh" 
                alt="Productive Time in Ho Chi Minh City" 
                className="w-full h-auto rounded-lg"
              />
            </div>

          </div>
        </section>

      </main>

      <footer className={`border-t py-8 text-center ${
        isDark ? 'border-gray-800 text-gray-500' : 'border-slate-200 text-slate-500'
      }`}>
        <p className="text-sm">Ho Chi Minh City, Vietnam 🇻🇳</p>
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
              className={`relative w-full max-w-4xl max-h-[90vh] border rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 ${
                isDark ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-slate-200'
              }`}
            >
              {/* Modal Header */}
              <div className={`flex items-center justify-between px-6 py-4 border-b ${
                isDark ? 'border-gray-800 bg-gray-950/60' : 'border-slate-200 bg-slate-50'
              }`}>
                <div className="flex items-center gap-2">
                  <Coffee size={20} className="text-amber-500" />
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Coding Activity Breakdown
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://wakatime.com/@tun6944" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-500 hover:text-blue-600 bg-blue-500/10 hover:bg-blue-500/20 px-3 py-1.5 rounded-lg border border-blue-500/20 transition-colors"
                  >
                    <span>Open on WakaTime</span>
                    <ExternalLink size={14} />
                  </a>
                  <button 
                    type="button"
                    onClick={() => setIsZoomOpen(false)}
                    className={`p-1.5 rounded-lg transition-colors focus:outline-none ${
                      isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'
                    }`}
                    aria-label="Close dialog"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Body / Image View */}
              <div className={`p-4 sm:p-6 overflow-auto flex items-center justify-center ${
                isDark ? 'bg-gray-950/40' : 'bg-slate-100/50'
              }`}>
                <img 
                  src="https://wakatime.com/share/@tun6944/6798bd34-ca76-481c-a41b-5cff1a6428b2.svg" 
                  alt="Wakatime detailed stats" 
                  className={`w-full max-w-3xl h-auto object-contain rounded-lg shadow-lg border ${
                    isDark ? 'border-gray-800/60' : 'border-slate-200'
                  }`}
                />
              </div>

              {/* Modal Footer info */}
              <div className={`px-6 py-3 border-t text-xs text-center ${
                isDark ? 'border-gray-800 bg-gray-950/60 text-gray-500' : 'border-slate-200 bg-slate-50 text-slate-500'
              }`}>
                Press <kbd className={`px-1.5 py-0.5 rounded border font-mono ${
                  isDark ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-slate-200 border-slate-300 text-slate-700'
                }`}>Esc</kbd> or click outside to close
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
