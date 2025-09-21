import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: "OPS Combinator Pvt. Ltd.",
    position: "Full Stack Software Engineer",
    duration: "April 2023 – Present",
    location: "Mumbai, India",
    achievements: [
      "Designed and implemented CI/CD automation pipelines, reducing deployment time by 60% and improving system reliability",
      "Developed a comprehensive QR code-based attendance system with real-time tracking and analytics dashboard",
      "Integrated multiple payment gateways (Razorpay, PayPal) with robust error handling and transaction monitoring",
      "Built advanced geolocation-based search functionality with proximity algorithms and map integration",
      "Created a dynamic product comparison engine with real-time data synchronization across multiple vendors",
      "Optimized database queries and implemented caching strategies, improving application performance by 40%",
      "Collaborated with cross-functional teams using Agile methodologies and conducted comprehensive code reviews"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const achievementVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Building scalable solutions and driving innovation in software development
            </p>
          </motion.div>

          <motion.div
            className="relative"
            variants={itemVariants}
          >
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {/* Experience card */}
            <div className="relative pl-16">
              {/* Timeline dot */}
              <motion.div
                className="absolute left-3 top-8 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />

              <motion.div
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {experience.position}
                  </h3>
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {experience.company}
                  </h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Achievements & Responsibilities:
                  </h5>
                  
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        variants={achievementVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.div
                          className="mt-1"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </motion.div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies used */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies & Tools:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Node.js", "Spring Boot", "MySQL", "AWS", "Docker", "Kubernetes", "Jenkins", "Redis", "Git", "Github"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;