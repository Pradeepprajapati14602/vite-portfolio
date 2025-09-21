import { motion } from 'framer-motion';
import { 
  Database, 
  Cloud, 
  Server, 
  Smartphone, 
  Settings,
  Monitor
} from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Monitor className="w-6 h-6" />,
      items: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      items: ["Java", "Node.js", "Spring Boot", "RESTful APIs", "Microservices", "Express.js"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Design", "Query Optimization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Git", "Linux"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Tools & Technologies",
      icon: <Settings className="w-6 h-6" />,
      items: ["Apache Kafka", "Elasticsearch", "JUnit", "Maven", "Gradle", "Postman"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      category: "Mobile & Others",
      icon: <Smartphone className="w-6 h-6" />,
      items: ["React Native", "Machine Learning", "Data Structures", "Algorithms", "System Design"],
      color: "from-teal-500 to-blue-500"
    }
  ];

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

  const cardVariants = {
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

  const skillItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-16" variants={cardVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center mb-4">
                  <div className={`bg-gradient-to-r ${skillGroup.color} p-3 rounded-lg text-white mr-4`}>
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center"
                      variants={skillItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <motion.span
                        className={`inline-block px-3 py-1 text-sm bg-gradient-to-r ${skillGroup.color} text-white rounded-full mr-2 cursor-pointer`}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional skills as floating tags */}
          <motion.div
            className="mt-16 text-center"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Agile/Scrum", "Code Review", "Performance Optimization", "Security Best Practices", "Test-Driven Development", "API Design", "System Architecture"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full text-sm cursor-pointer hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;