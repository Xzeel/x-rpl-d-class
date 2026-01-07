import { Instagram, Twitter, Github, Youtube, MessageCircleHeart } from 'lucide-react';
import logoImg from '@/assets/logo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Instagram,
    href: 'https://www.instagram.com/astarplderise_',
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
    icon: MessageCircleHeart,
    href: 'https://whatsapp.com/channel/0029VaIT4EMCBtxFIb4mHu1u',
    label: 'WhatsApp Channel'
  }, {
    icon: Youtube,
    href: 'https://www.youtube.com/@XzeelArcadia',
    label: 'YouTube'
  }];

  return (
    <footer className="py-12 mt-20 px-4">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 rounded-2xl bg-secondary">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-3">
            <img src={logoImg} alt="X RPL D Logo" className="w-10 h-10 rounded-lg object-cover" />
            <span className="text-lg font-bold text-secondary-foreground">X RPL D</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {socialLinks.map(social => (
              <a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 md:p-3 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:scale-110 transition-all duration-300 group" 
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 md:w-5 md:h-5 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>

          <div className="text-center space-y-1">
            <p className="text-xs md:text-sm text-secondary-foreground/80">
              © 2025 - {currentYear}{' '}
              <a target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors underline decoration-primary/50 hover:decoration-primary" href="https://xzeelarcadia.carrd.co/">
                XzeelArcadia
              </a>
              . All Rights Reserved.
            </p>
            <p className="text-[10px] md:text-xs text-secondary-foreground/60">
              Dibuat dengan 💖 oleh XzeelArcadia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
