import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-[#0a3d2e] mb-6">Contact Lab 4 Inc.</h1>
        <p className="text-lg text-gray-600 mb-12">
          For consulting inquiries, partnerships, or project discussions, please reach out using the form below.
        </p>
        <ContactForm />

        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-[#0a3d2e] mb-3">Email</h3>
              <a href="mailto:info@lab4inc.com" className="text-gray-600 hover:text-[#0a3d2e] transition-colors">
                info@lab4inc.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#0a3d2e] mb-3">Location</h3>
              <p className="text-gray-600">Halifax, Nova Scotia, Canada</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
