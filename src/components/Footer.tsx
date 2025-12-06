import { Instagram, Twitter, Github, Youtube } from 'lucide-react';
import logoImg from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Instagram,
    href: 'https://www.instagram.com/xzeelarcadia.id',
    label: 'Instagram'
  }, {
    icon: Twitter,
    href: 'https://x.com/xzeelarcadia',
    label: 'Twitter'
  }, {
    icon: Github,
    href: 'https://github.com/Xzeel',
    label: 'Github'
  }, {
    icon: Youtube,
    href: 'https://www.youtube.com/@XzeelArcadia',
    label: 'YouTube'
  }];
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-3">
            <img src={logoImg} alt="X RPL D Logo" className="w-10 h-10 rounded-lg object-cover" />
            <span className="text-lg font-bold">X RPL D</span>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map(social => (
              <a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:scale-110 transition-all duration-300 group" 
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-secondary-foreground/80">
              © {currentYear}{' '}
              <a target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors underline decoration-primary/50 hover:decoration-primary" href="https://xzeelarcadia.carrd.co/">
                XzeelArcadia
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
