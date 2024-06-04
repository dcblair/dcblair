import { classed } from '@tw-classed/react';
import { ReactNode, memo, useContext } from 'react';
import { ThemeContext } from '~/context/ThemeContext';

interface MotionWrapperProps {
  children: ReactNode;
}

const StyledWrapper = classed('div', '', {
  variants: {
    hasMotion: {
      true: 'animation-float',
      false: '',
    },
  },
});

const BaseMotionWrapper = ({ children }: MotionWrapperProps) => {
  const hasMotion = useContext(ThemeContext) === 'motion';

  return <StyledWrapper hasMotion={hasMotion}>{children}</StyledWrapper>;
};

export const MotionWrapper = memo(BaseMotionWrapper);
