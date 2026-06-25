'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "BudgetBliss Ecosystem",
    type: "Fintech Application",
    description: "A comprehensive financial dashboard featuring real-time expense categorization, budget tracking, and responsive UI architecture.",
    tech: ["Next.js", "MongoDB", "Capacitor"],
    status: "Production"
  },
  {
    title: "Enterprise Library Architecture",
    type: "Internal Management System",
    description: "A secure organizational tool built with role-based access control, Google Sign-In, and live issuance tracking.",
    tech: ["React", "Firebase Auth", "Firestore"],
    status: "Deployed"
  },
  {
    title: "AyurSutra Platform",
    type: "Healthcare Scheduling",
    description: "A specialized management software designed for complex therapy scheduling and patient record administration.",
    tech: ["Node.js", "Express", "Tailwind"],
    status: "Research Phase"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto py-24 px-4 scroll-mt-32">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
          Featured <span className="font-bold text-[#5EEAD4]">Engineering.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          A selection of robust applications and internal tools architected for scale and efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                {project.type}
              </span>
              <span className="px-2 py-1 text-[10px] uppercase tracking-wider text-[#5EEAD4] bg-[#5EEAD4]/10 rounded-full">
                {project.status}
              </span>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-3">
              {project.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-8 flex-grow">
              {project.description}
            </p>
           npm 
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs text-gray-300 bg-[#151619] border border-white/5 px-3 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}