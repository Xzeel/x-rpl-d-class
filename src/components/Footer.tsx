const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">X</span>
            </div>
            <span className="text-lg font-bold">X RPL D</span>
          </div>
          <p className="text-sm text-secondary-foreground/80">
            © {currentYear} X RPL D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
