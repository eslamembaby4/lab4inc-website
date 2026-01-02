import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Search, Leaf } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Sparkles,
    title: 'Critical Minerals Strategy & Roadmapping',
    description: 'We help clients prioritize feedstocks, evaluate technology options, and plan capital deployment for critical mineral and battery materials projects.'
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Process Design & Pilot Plant Consulting',
    description: 'We support bench, pilot, and demo-scale programs, helping teams design, troubleshoot, and scale clean, efficient process flowsheets.'
  },
  {
    number: '03',
    icon: Search,
    title: 'Technical Due Diligence for Investors',
    description: 'We provide independent technical reviews of projects, flowsheets, and claims to support investment decisions and risk assessments.'
  },
  {
    number: '04',
    icon: Leaf,
    title: 'ESG & Sustainability Advisory',
    description: 'We integrate low-waste, energy-efficient, and environmentally responsible approaches into project design and evaluation.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-emerald-900 tracking-widest uppercase mb-4">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-light text-emerald-950 mb-4">
            Consulting Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 border-l-4 border-emerald-900/20 hover:border-emerald-900 bg-slate-50/50 hover:bg-white transition-all duration-300 hover:shadow-2xl rounded-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 bg-emerald-900/10 group-hover:bg-emerald-900 transition-colors duration-300 rounded-lg"
                    >
                      <Icon className="text-emerald-900 group-hover:text-white transition-colors duration-300" size={24} />
                    </motion.div>
                    <div className="text-4xl font-light text-emerald-900/20 group-hover:text-emerald-900/40 transition-colors">
                      {service.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-emerald-950 mb-4 group-hover:text-emerald-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
