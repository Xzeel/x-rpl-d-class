import { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, Info, User, Image, Volume2, VolumeX } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import logoImg from '@/assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      const attemptPlay = () => {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            const handleFirstInteraction = () => {
              audio.play();
              setIsPlaying(true);
              document.removeEventListener('click', handleFirstInteraction);
              document.removeEventListener('touchstart', handleFirstInteraction);
            };
            document.addEventListener('click', handleFirstInteraction);
            document.addEventListener('touchstart', handleFirstInteraction);
            setIsPlaying(false);
          });
        }
      };
      attemptPlay();
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const navLinks = [
    { href: '#about', label: 'About', icon: Info },
    { href: '#teacher', label: 'Teacher', icon: User },
    { href: '#gallery', label: 'Gallery', icon: Image },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4">
      <div
        className={`max-w-4xl mx-auto px-4 md:px-6 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-md shadow-lg border border-border/50'
            : 'bg-background/40 backdrop-blur-sm'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <img src={logoImg} alt="X RPL D Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover" />
            <div>
              <h1 className="text-base md:text-lg font-bold text-foreground">X RPL D</h1>
              <p className="text-[10px] md:text-xs text-muted-foreground">SMK Negeri 8 Malang</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium text-foreground transition-colors relative flex items-center gap-1.5"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleMusic}
              className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-all duration-300 hover:scale-110"
              aria-label={isPlaying ? 'Matikan musik' : 'Nyalakan musik'}
            >
              {isPlaying ? (
                <Volume2 className="w-5 h-5 text-foreground animate-pulse" />
              ) : (
                <VolumeX className="w-5 h-5 text-foreground" />
              )}
            </button>
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
          <audio ref={audioRef} src="/audio/Mejikuhibiniu.mp3" loop />

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleMusic}
              className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-all duration-300"
              aria-label={isPlaying ? 'Matikan musik' : 'Nyalakan musik'}
            >
              {isPlaying ? (
                <Volume2 className="w-5 h-5 text-foreground animate-pulse" />
              ) : (
                <VolumeX className="w-5 h-5 text-foreground" />
              )}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
