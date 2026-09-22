import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Terminal, Award, BookOpen, Coffee, Code, ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/tun369', icon: <GithubIcon /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/me', icon: <LinkedinIcon /> },
  { name: 'Email', url: 'mailto:tuanhg136@gmail.com', icon: <Mail size={20} /> },
];

const platforms = [
  { name: 'Coursera', url: 'https://www.coursera.org/user/1ef3fa40dee335ebc46b89cd655dae07', image: 'https://cdn.simpleicons.org/coursera/0056D2' },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/tun874', image: 'https://cdn.simpleicons.org/hackerrank/00EA64' },
  { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/tun874', image: 'https://cdn.simpleicons.org/freecodecamp/0A0A23' },
  { name: 'Codecademy', url: 'https://www.codecademy.com/profiles/tun487', image: 'https://cdn.simpleicons.org/codecademy/1F243A' },
  { name: 'DataCamp', url: 'https://www.datacamp.com/portfolio/tun874', image: 'https://cdn.simpleicons.org/datacamp/03E849' },
  { name: 'StackOverflow', url: 'https://stackoverflow.com/users/20314865/tuan784', image: 'https://cdn.simpleicons.org/stackoverflow/F58025' },
  { name: 'LeetCode', url: 'https://leetcode.com/Tuan784/', image: 'https://cdn.simpleicons.org/leetcode/FFA116' },
];

export default function App() {
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
            Available for work
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
              I am a senior university student based in the Socialist Republic of Vietnam. 
              With over 6 months of hands-on programming experience, I am actively seeking 
              opportunities to grow as a fresher. My journey involves solving algorithmic challenges 
              and building modern web applications.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800">
                <MapPin size={16} className="text-blue-400" />
                Vietnam
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800">
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
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Coffee size={20} className="text-yellow-500" />
                Coding Activity
              </h3>
              <div className="flex flex-col gap-4">
                <a href="https://wakatime.com/@tun6944" target="_blank" rel="noreferrer" className="block hover:opacity-80 transition-opacity">
                  <img 
                    src="https://wakatime.com/share/@tun6944/6798bd34-ca76-481c-a41b-5cff1a6428b2.svg" 
                    alt="Wakatime stats" 
                    className="w-full h-auto rounded-lg"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills & Platforms */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Learning & Profiles</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I actively learn and practice on various platforms to sharpen my problem-solving skills and domain knowledge.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, idx) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-800 bg-gray-900/40 hover:bg-gray-800/80 transition-all w-32"
              >
                <div className="h-12 w-12 flex items-center justify-center bg-white rounded-lg p-2 group-hover:scale-110 transition-transform">
                  <img src={platform.image} alt={platform.name} className="max-h-full max-w-full object-contain" />
                </div>
                <span className="text-sm font-medium text-gray-300 text-center">{platform.name}</span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* GitHub Statistics */}
        <section className="space-y-12">
          <div className="flex items-center gap-3 text-blue-400 mb-8">
            <Award size={28} />
            <h2 className="text-3xl font-bold text-white">GitHub Statistics</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-4 hover:border-gray-700 transition-colors">
              <img 
                src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=tun369&theme=algolia&utcOffset=8" 
                alt="Productive Time" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-4 hover:border-gray-700 transition-colors">
              <img 
                src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=tun369&theme=algolia" 
                alt="Most Commit Languages" 
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-4 hover:border-gray-700 transition-colors">
               <img 
                src="https://github-readme-streak-stats.herokuapp.com?user=tun369&theme=algolia&hide_border=true" 
                alt="GitHub Streak" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-4 hover:border-gray-700 transition-colors">
              <img 
                src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=tun369&theme=algolia" 
                alt="Repositories per Language" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-4 hover:border-gray-700 transition-colors">
            <img 
              src="https://github-readme-activity-graph.vercel.app/graph?username=tun369&theme=react-dark" 
              alt="Github activity graph" 
              className="w-full h-auto"
            />
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
              { name: 'ViT Coffee Leaves Diseases', owner: 'tun369', desc: 'Vision Transformer implementation for detecting diseases in coffee leaves.' },
              { name: 'Violence-Detection', owner: 'tiao051', desc: 'Machine learning model for real-time violence detection in video streams.' },
              { name: 'DoAnTotNghiep', owner: 'Johnyyd', desc: 'Graduation project focusing on applying modern technologies.' },
            ].map((repo) => (
              <a 
                key={repo.name}
                href={`https://github.com/${repo.owner}/${repo.name}`}
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
                <p className="text-gray-400 text-sm mb-6 flex-grow">{repo.desc}</p>
                <div className="text-xs text-gray-500 font-mono">
                  {repo.owner}/{repo.name}
                </div>
              </a>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Tuan (tun369). Built with React & Tailwind CSS.</p>
        <p className="text-sm mt-2">Vietnam 🇻🇳</p>
      </footer>
    </div>
  );
}
