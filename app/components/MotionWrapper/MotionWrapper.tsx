import { classed } from '@tw-classed/react';
import { ReactNode, memo, useContext } from 'react';
import { ThemeContext } from '~/context/ThemeContext';

interface MotionWrapperProps {
  children: ReactNode;
  motionType?: 'default' | 'slow';
}

const StyledWrapper = classed('div', '', {
  variants: {
    hasMotion: {
      true: '',
      false: 'animation-none',
    },
    motionType: {
      default: 'animate-float',
      slow: 'animate-floatSlow',
    },
  },
  compoundVariants: [
    {
      hasMotion: true,
      motionType: 'slow',
      className: 'animate-floatSlow',
    },
    {
      hasMotion: true,
      motionType: 'default',
      className: 'animation-float',
    },
    {
      hasMotion: false,
      motionType: 'default',
      className: 'animation-none',
    },
    {
      hasMotion: false,
      motionType: 'slow',
      className: 'animation-none',
    },
  ],
});

const BaseMotionWrapper = ({
  children,
  motionType = 'default',
}: MotionWrapperProps) => {
  const hasMotion = useContext(ThemeContext) === 'hasMotion';

  return (
    <StyledWrapper hasMotion={hasMotion} motionType={motionType}>
      {children}
    </StyledWrapper>
  );
};

export const MotionWrapper = memo(BaseMotionWrapper);
