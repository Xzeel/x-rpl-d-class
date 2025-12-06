interface ShineTextProps {
  children: React.ReactNode;
  className?: string;
}

const ShineText = ({ children, className = '' }: ShineTextProps) => {
  return (
    <span className={`shine-text ${className}`}>
      {children}
    </span>
  );
};

export default ShineText;
