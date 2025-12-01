import { Instagram, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Github, href: 'https://github.com', label: 'Github' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">X</span>
            </div>
            <span className="text-lg font-bold">X RPL D</span>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => (
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
              © {currentYear} X RPL D. All rights reserved.
            </p>
            <p className="text-xs text-secondary-foreground/60">
              Developed with ❤️ by X RPL D Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
