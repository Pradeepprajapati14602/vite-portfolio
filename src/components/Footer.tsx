import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/pradeepkumarp14',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/pradeepkumarp14', // Replace with actual GitHub URL
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'Email',
      url: 'mailto:prajapatipradeep14602@gmail.com',
      icon: <Mail className="w-5 h-5" />
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      
      <div className="relative z-10">
        <motion.div
          className="container mx-auto px-6 py-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left Section - Name and tagline */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pradeepkumar Prajapati
              </h3>
              <p className="text-gray-400 mb-4">
                Full Stack Software Engineer
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building innovative solutions with modern technologies. 
                Always excited to take on new challenges and collaborate on interesting projects.
              </p>
            </motion.div>

            {/* Center Section - Social Links */}
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
            >
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-3 rounded-full transition-all duration-300 group"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="group-hover:text-white transition-colors duration-300">
                      {link.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Section - Quick Links and Scroll to Top */}
            <motion.div 
              className="text-center md:text-right"
              variants={itemVariants}
            >
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-3 text-gray-300">Quick Links</h4>
                <div className="space-y-2">
                  {[
                    { name: 'About', href: '#about' },
                    { name: 'Skills', href: '#skills' },
                    { name: 'Experience', href: '#experience' },
                    { name: 'Projects', href: '#projects' },
                    { name: 'Contact', href: '#contact' }
                  ].map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                      whileHover={{ x: -5 }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-3 rounded-full shadow-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="border-t border-gray-800 my-8"
            variants={itemVariants}
          />

          {/* Bottom Section - Copyright */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              © {currentYear} Pradeepkumar Prajapati. Made with{' '}
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              {' '}and lots of ☕
            </p>
            {/* <p className="text-gray-500 text-xs mt-2">
              Built with React, TypeScript, Tailwind CSS, and Framer Motion
            </p> */}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;