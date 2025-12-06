import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import logoImg from '@/assets/logo.png';

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
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4">
      <div
        className={`max-w-4xl mx-auto px-6 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-md shadow-lg border border-border/50'
            : 'bg-background/40 backdrop-blur-sm'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logoImg} alt="X RPL D Logo" className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <h1 className="text-lg font-bold text-foreground">X RPL D</h1>
              <p className="text-xs text-muted-foreground">SMKN 8 Malang</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="nav-link text-sm font-medium text-foreground transition-colors relative"
            >
              About
            </a>
            <a
              href="#guru"
              className="nav-link text-sm font-medium text-foreground transition-colors relative"
            >
              Guru
            </a>
            <a
              href="#galeri"
              className="nav-link text-sm font-medium text-foreground transition-colors relative"
            >
              Galeri
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
