import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
}

const TypingAnimation = ({ text, className = '' }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const handleTyping = () => {
      if (!isDeleting && displayText === text) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        return;
      }

      const nextText = isDeleting
        ? text.substring(0, displayText.length - 1)
        : text.substring(0, displayText.length + 1);

      setDisplayText(nextText);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text, loopNum]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
