import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
  onClick={toggleTheme}
  className="fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  aria-label="Toggle theme"
>
  <motion.div
    initial={false}
    animate={{ rotate: theme === 'dark' ? 180 : 0 }}
    transition={{ duration: 0.3 }}
  >
    {theme === 'light' ? (
      <Moon className="w-5 h-5 text-gray-700" />
    ) : (
      <Sun className="w-5 h-5 text-yellow-500" />
    )}
  </motion.div>
</motion.button>

    // <motion.button
    //   onClick={toggleTheme}
    //   className="fixed top-6 right-6 z-50 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
    //   whileHover={{ scale: 1.1 }}
    //   whileTap={{ scale: 0.95 }}
    //   aria-label="Toggle theme"
    // >
    //   <motion.div
    //     initial={false}
    //     animate={{ rotate: theme === 'dark' ? 180 : 0 }}
    //     transition={{ duration: 0.3 }}
    //   >
    //     {theme === 'light' ? (
    //       <Moon className="w-5 h-5 text-gray-700" />
    //     ) : (
    //       <Sun className="w-5 h-5 text-yellow-500" />
    //     )}
    //   </motion.div>
    // </motion.button>
  );
};

export default ThemeToggle;