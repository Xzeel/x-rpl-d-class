import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      // Attempt autoplay
      const attemptPlay = () => {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented, try on first user interaction
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

  return (
    <>
      <audio ref={audioRef} src="/audio/Mejikuhibiniu.mp3" loop />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:scale-110"
        aria-label={isPlaying ? 'Matikan musik' : 'Nyalakan musik'}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 animate-pulse" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
