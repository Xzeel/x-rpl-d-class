import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">X</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">X RPL D</h1>
              <p className="text-xs text-muted-foreground">Rekayasa Perangkat Lunak</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#siswa"
              className="nav-link text-sm font-medium text-foreground transition-colors relative"
            >
              Siswa
            </a>
            <a
              href="#guru"
              className="nav-link text-sm font-medium text-foreground transition-colors relative"
            >
              Guru
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground transition-transform duration-300" />
              ) : (
                <Sun className="w-5 h-5 text-foreground transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
