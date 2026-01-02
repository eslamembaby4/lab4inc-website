import { useState } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'organization':
        return value.trim().length < 2 ? 'Organization must be at least 2 characters' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, organization: true, message: true });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', organization: '', message: '' });
      setTouched({});
      setErrors({});

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName: string) => `
    w-full px-4 py-3 border-2 transition-all duration-200 focus:outline-none focus:ring-2 rounded-lg
    ${errors[fieldName] && touched[fieldName]
      ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
      : 'border-slate-200 focus:border-emerald-600 focus:ring-emerald-200'
    }
  `;

  return (
    <section id="contact" className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-emerald-900 tracking-widest uppercase mb-4">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-light text-emerald-950 mb-6">
            Contact Lab 4 Inc.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            For consulting inquiries, partnerships, or project discussions, please reach out using the form below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-12 shadow-xl border border-slate-200 mb-12 rounded-lg"
        >
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-emerald-50 border-2 border-emerald-500 flex items-start gap-3 rounded-lg"
            >
              <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-emerald-900 font-medium">Thank you for reaching out!</p>
                <p className="text-emerald-700 text-sm">We'll get back to you soon.</p>
              </div>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border-2 border-red-500 flex items-start gap-3 rounded-lg"
            >
              <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-red-900 font-medium">Oops! Something went wrong.</p>
                <p className="text-red-700 text-sm">Please try again or email us directly.</p>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClasses('name')}
                disabled={isSubmitting}
              />
              {errors.name && touched.name && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-600 flex items-center gap-1"
                >
                  <AlertCircle size={14} />
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClasses('email')}
                disabled={isSubmitting}
              />
              {errors.email && touched.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-600 flex items-center gap-1"
                >
                  <AlertCircle size={14} />
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                Organization <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClasses('organization')}
                disabled={isSubmitting}
              />
              {errors.organization && touched.organization && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-600 flex items-center gap-1"
                >
                  <AlertCircle size={14} />
                  {errors.organization}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={6}
                className={`${inputClasses('message')} resize-none`}
                disabled={isSubmitting}
              />
              {errors.message && touched.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-600 flex items-center gap-1"
                >
                  <AlertCircle size={14} />
                  {errors.message}
                </motion.p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full px-10 py-4 bg-emerald-900 text-white hover:bg-emerald-800 transition-colors font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-lg"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="group relative bg-white p-10 border-2 border-slate-100 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl rounded-lg"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-600 to-teal-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-l-lg"></div>
            <Mail className="text-emerald-900 mb-4" size={28} />
            <h3 className="text-lg font-semibold text-emerald-900 mb-4 uppercase tracking-wide">Email</h3>
            <a href="mailto:info@lab4inc.com" className="text-xl text-slate-700 hover:text-emerald-900 transition-colors font-light">
              info@lab4inc.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="group relative bg-white p-10 border-2 border-slate-100 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl rounded-lg"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-600 to-teal-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-l-lg"></div>
            <MapPin className="text-emerald-900 mb-4" size={28} />
            <h3 className="text-lg font-semibold text-emerald-900 mb-4 uppercase tracking-wide">Location</h3>
            <p className="text-xl text-slate-700 font-light">Dartmouth, Nova Scotia, Canada</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
