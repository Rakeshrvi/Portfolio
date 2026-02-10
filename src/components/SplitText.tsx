import React, { useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// The props interface is kept similar for compatibility, but the implementation is now manual and character-based.
interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: string; // Kept for compatibility, but implementation is char-based
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const ref = useRef<HTMLElement>(null);

  // Manually split the text into characters, wrapping each in a span.
  // useMemo prevents re-splitting on every render unless the text changes.
  const chars = useMemo(() => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="split-char-manual"
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [text]);

  useGSAP(
    () => {
      if (!ref.current) return;
      const el = ref.current;
      // Select the manually created character spans
      const targets = el.querySelectorAll('.split-char-manual');

      if (!targets || targets.length === 0) return;

      // Calculate ScrollTrigger start position
      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      const tl = gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
          },
          onComplete: () => {
            onLetterAnimationComplete?.();
          },
          willChange: 'transform, opacity',
          force3D: true,
        }
      );

      return () => {
        tl.revert(); // Reverting the timeline is a clean way to handle cleanup
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        onLetterAnimationComplete
      ],
      scope: ref
    }
  );

  const style: React.CSSProperties = {
    textAlign,
    willChange: 'transform, opacity',
  };
  const classes = `split-parent ${className}`;

  // Use React.createElement to render the container with the character spans
  return React.createElement(tag, { ref, style, className: classes }, ...chars);
};

export default SplitText;
