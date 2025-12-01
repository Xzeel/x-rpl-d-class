import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
          <div className="flex gap-6">
            <a
              href="#siswa"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Siswa
            </a>
            <a
              href="#guru"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Guru
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
