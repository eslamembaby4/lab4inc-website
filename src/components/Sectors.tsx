import { motion } from 'framer-motion';
import { Battery, Pickaxe, Zap, Building2 } from 'lucide-react';

const sectors = [
  {
    icon: Battery,
    title: 'Battery Recycling & Black Mass',
    description: 'Advisory on recycling flowsheets, black mass processing, and battery-grade output quality.'
  },
  {
    icon: Pickaxe,
    title: 'Mining & Refining',
    description: 'Support for primary mining, refining, and upgrading of critical mineral streams.'
  },
  {
    icon: Zap,
    title: 'Process Intensification & Clean-Tech',
    description: 'Guidance on implementing cleaner, more efficient process technologies and pilot programs.'
  },
  {
    icon: Building2,
    title: 'Government & Policy Stakeholders',
    description: 'Input on policy design, program evaluation, and technical assessments for public-sector initiatives.'
  }
];

export default function Sectors() {
  return (
    <section id="sectors" className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-emerald-900 tracking-widest uppercase mb-4">Industry Focus</p>
          <h2 className="text-4xl md:text-5xl font-light text-emerald-950 mb-4">
            Sectors We Support
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white p-8 hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-emerald-500/30 overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-emerald-900/10 group-hover:bg-emerald-900 flex items-center justify-center mb-6 transition-colors duration-300"
                  >
                    <Icon className="text-emerald-900 group-hover:text-white transition-colors duration-300" size={24} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-emerald-950 mb-4 min-h-[3.5rem] leading-tight group-hover:text-emerald-900 transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
