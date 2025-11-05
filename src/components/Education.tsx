import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = {
    degree: "Bachelor of Science in Computer Science",
    institution: "Thakur College of Science & Commerce",
    duration: "2019 - 2022",
    gpa: "8.5/10",
    description: "Focused on software engineering, data structures, algorithms, and modern web technologies"
  };

  const certifications = [
    {
      title: "AWS Academy Introduction to Cloud Semester 1",
      issuer: "Amazon Web Services (AWS)",
      date: "Dec 2022",
      description: "Foundation knowledge of cloud computing concepts, AWS core services, and basic cloud architecture principles",
      icon: "☁️",
      credentialUrl: "https://www.credly.com/badges/f9519d6b-7434-48e6-a900-4e32c773756a/linked_in_profile" // Replace with your actual credential URL
    },
    {
      title: "AWS Academy Introduction to Cloud Semester 2",
      issuer: "Amazon Web Services (AWS)",
      date: "Dec 2022",
      description: "Advanced cloud services, security best practices, and hands-on experience with AWS infrastructure deployment",
      icon: "☁️",
      credentialUrl: "https://www.credly.com/badges/eae58b18-1523-4455-b86b-16f706ddf00d/linked_in_profile" // Replace with your actual credential URL
    },
    {
      title: "AWS Academy Machine Learning Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "Dec 2022",
      description: "Machine learning concepts, AWS ML services, and practical implementation of ML solutions on AWS platform",
      icon: "🤖",
      credentialUrl: "https://www.credly.com/badges/c920f1d2-756b-47dd-8922-87e63aeac885/linked_in_profile" // Replace with your actual credential URL
    },
    {
      title: "MySQL Database Optimization",
      issuer: "Oracle",
      date: "2023",
      description: "Advanced database optimization techniques, query performance tuning, and indexing strategies",
      icon: "🗄️"
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Continuous learning and professional development in technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                  <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>

              <motion.div
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-gray-600"
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {education.degree}
                    </h4>
                    <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {education.institution}
                    </h5>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{education.duration}</span>
                    </div>
                    <div className="text-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                      GPA: {education.gpa}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {education.description}
                </p>

                <div className="mt-6 pt-6 border-t border-blue-200 dark:border-gray-600">
                  <h6 className="font-semibold text-gray-900 dark:text-white mb-3">Key Subjects:</h6>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Algorithms", "Software Engineering", "Database Systems", "Web Development", "Object-Oriented Programming", "Computer Networks", "Operating Systems"].map((subject, index) => (
                      <motion.span
                        key={subject}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {subject}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mr-4">
                  <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                    variants={cardVariants}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl mt-1">{cert.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {cert.title}
                          </h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {cert.date}
                          </span>
                        </div>
                        <h5 className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                          {cert.issuer}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {cert.description}
                        </p>
                        
                        {cert.credentialUrl && (
                          <motion.a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-3 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Show credential
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Learning */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100 dark:border-purple-800"
                variants={cardVariants}
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Continuous Learning
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Actively pursuing additional certifications and staying updated with the latest technologies:
                </p>
                <div className="space-y-2">
                  {["Advanced React Patterns", "Kubernetes Administration", "System Design", "DevOps Best Practices"].map((course, index) => (
                    <motion.div
                      key={course}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {course}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;