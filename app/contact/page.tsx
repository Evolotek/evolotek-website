'use client';

import { useForm, ValidationError } from '@formspree/react';
import ContactHero from '@/app/components/contact/ContactHero';

export default function ContactPage() {
  const [state, handleSubmit] = useForm('mgvjazjy');

  return (
    <>
      <ContactHero />
      
      <div className="bg-white">
        <div className="pb-20 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">info@Evolotek.ai</p>
                  </div>
                  <div> 
                    <h3 className="text-gray-900 font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (866) 671-5329</p>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-2">Locations</h3>
                    <p className="text-gray-600">USA • ISRAEL • INDIA</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {state.succeeded && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}

                {state.errors && !state.succeeded && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium mb-2">Oops! There was an error submitting your form:</p>
                    <p className="text-red-700 text-sm">Please check the form fields and try again.</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError field="name" prefix="Name" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError field="email" prefix="Email" errors={state.errors} />
                </div>  

                <div>
                  <label htmlFor="company" className="block text-gray-900 font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    disabled={state.submitting}
                  />
                  <ValidationError field="company" prefix="Company" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    required
                    disabled={state.submitting}
                  ></textarea>
                  <ValidationError field="message" prefix="Message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
