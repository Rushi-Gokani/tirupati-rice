import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, ExternalLink } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);

    try {
      const getVal = (id: string) => (formRef.current!.querySelector(`#${id}`) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)?.value || '';

      const payload = {
        first_name: getVal('firstName'),
        last_name: getVal('lastName'),
        email: getVal('email'),
        subject: getVal('subject'),
        message: getVal('message'),
      };

      const response = await fetch('https://feed.ohmylead.com/api/webhook/4926babe-d549-4535-a783-cf98684fdf66', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset after showing success
        setTimeout(() => {
          setIsSubmitted(false);
          if (formRef.current) {
            formRef.current.reset();
          }
        }, 3000);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Corporate Office',
      content: 'Chopri Road, Village Kurak, Karnal,\nTaraori – 132116, Haryana, India',
      delay: 0,
    },
    {
      icon: Phone,
      title: 'Phone',
      links: [
        { label: '+91 9896342083', url: 'tel:+919896342083' },
        { label: '+1 (555) 123-4567', url: 'tel:+15551234567' },
      ],
      delay: 0.1,
    },
     {
      icon: Phone,
      title: 'WhatsApp',
      links: [
        { label: '+91 9896342083', url: 'https://wa.me/919896342083' },
      ],
      delay: 0.1,
    },
    {
      icon: Mail,
      title: 'Email',
      links: [
        { label: 'accounts@tirupatibasmatiexports.com', url: 'mailto:accounts@tirupatibasmatiexports.com' },
      ],
      delay: 0.2,
    },
  ];

  const formFields = [
    { id: 'firstName', label: 'First Name', type: 'text', half: true },
    { id: 'lastName', label: 'Last Name', type: 'text', half: true },
    { id: 'email', label: 'Email Address', type: 'email', half: false },
  ];

  return (
    <div ref={sectionRef} className="pt-32 md:pt-40 pb-16 md:pb-20 min-h-screen bg-rice-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-gold-600 tracking-widest uppercase text-xs font-bold mb-3 block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get in Touch
          </motion.span>
          <motion.h1
            className="text-3xl md:text-5xl font-serif text-stone-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Partner With Us
          </motion.h1>
          <motion.p
            className="text-stone-600 max-w-2xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            For export inquiries, distribution partnerships, or general questions about Tirupati Rice.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6 md:space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 md:p-8 rounded-lg shadow-sm flex items-start space-x-4 border-l-4 border-gold-500 group hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + info.delay }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="bg-rice-100 p-2 md:p-3 rounded-full text-gold-600 shrink-0 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <info.icon size={20} className="md:w-6 md:h-6" />
                </motion.div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-stone-900 mb-1 md:mb-2">{info.title}</h3>
                  {info.links ? (
                    <div className="flex flex-col space-y-1">
                      {info.links.map((link, lIndex) => (
                        <a 
                          key={lIndex}
                          href={link.url}
                          target={link.url.startsWith('http') ? "_blank" : undefined}
                          rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="text-stone-600 text-sm md:text-base hover:text-gold-600 transition-colors w-fit"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-stone-600 text-sm md:text-base whitespace-pre-line">{info.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-6 md:p-10 rounded-lg shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Success overlay */}
            <motion.div
              className="absolute inset-0 bg-stone-900 z-20 flex flex-col items-center justify-center text-white"
              initial={{ opacity: 0, pointerEvents: 'none' }}
              animate={{
                opacity: isSubmitted ? 1 : 0,
                pointerEvents: isSubmitted ? 'auto' : 'none'
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isSubmitted ? { scale: 1 } : { scale: 0 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              >
                <CheckCircle size={64} className="text-gold-500 mb-4" />
              </motion.div>
              <motion.h3
                className="text-2xl font-serif mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isSubmitted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                Message Sent!
              </motion.h3>
              <motion.p
                className="text-stone-400"
                initial={{ opacity: 0, y: 20 }}
                animate={isSubmitted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                We'll get back to you soon.
              </motion.p>
            </motion.div>

            <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900 mb-6">Send us a message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {formFields.slice(0, 2).map((field) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor={field.id} className="block text-sm font-medium text-stone-700 mb-1">
                      {field.label}
                    </label>
                    <motion.div
                      animate={{
                        scale: focusedField === field.id ? 1.02 : 1,
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <input
                        type={field.type}
                        id={field.id}
                        required
                        className="w-full px-4 py-2 border border-stone-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
                        onFocus={() => setFocusedField(field.id)}
                        onBlur={() => setFocusedField(null)}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                <motion.div
                  animate={{
                    scale: focusedField === 'email' ? 1.01 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-stone-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">Subject</label>
                <motion.div
                  animate={{
                    scale: focusedField === 'subject' ? 1.01 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-stone-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-sm md:text-base bg-white"
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                  >
                    <option>General Inquiry</option>
                    <option>Export / Bulk Order</option>
                    <option>Partnership</option>
                  </select>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.65 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <motion.div
                  animate={{
                    scale: focusedField === 'message' ? 1.01 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-stone-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-sm md:text-base resize-none"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                </motion.div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-stone-900 text-white py-3 rounded-md font-medium hover:bg-gold-500 transition-colors duration-300 uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Inquiry
                    </>
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gold-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-8 md:mb-10">
            <motion.span
              className="text-gold-600 tracking-widest uppercase text-xs font-bold mb-2 block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Find Us
            </motion.span>
            <motion.h2
              className="text-2xl md:text-3xl font-serif text-stone-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Visit Our Location
            </motion.h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-stone-100">
            <div className="flex flex-col lg:flex-row">
              {/* Map Info Panel */}
              <div className="w-full lg:w-1/3 p-6 md:p-8 lg:p-10 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold">Tirupati Basmati Exports</h3>
                      <p className="text-stone-400 text-sm">Private Limited</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-stone-300 leading-relaxed">
                      Chopri Road, Village Kurak, Karnal,<br />
                      Taraori – 132116, Haryana, India
                    </p>
                  </div>

                  <a
                    href="https://www.google.com/maps?q=TIRUPATI+BASMATI+EXPORTS+PRIVATE+LIMITED,+Chopri+Road,+Kurak,+Taraori,+Haryana+132116&ftid=0xcabc58e8a169861:0x2d51b11a22080d31&entry=gps&shh=CAE&lucs=,94259550,94297699,94284484,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjEyLjIuODg0NjExMjE2MBgAINeCAypRLDk0MjU5NTUwLDk0Mjk3Njk5LDk0Mjg0NDg0LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJJTg%3D%3D&skid=b68b932c-2077-41e9-8c9c-11787b0ce4ed&g_st=iw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-xl font-medium transition-all duration-300 group"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>

              {/* Map iframe */}
              <motion.div
                className="w-full lg:w-2/3 h-[300px] lg:h-[400px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.9!2d76.97!3d29.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xcabc58e8a169861%3A0x2d51b11a22080d31!2sTirupati%20Basmati%20Exports%20Private%20Limited!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tirupati Basmati Exports Location"
                  className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
