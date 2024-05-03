import { classed } from '@tw-classed/react';
import { memo } from 'react';

interface BaseDividerProps extends HTMLDivElement {
  position: 'horizontal' | 'vertical';
}

const StyledDivider = classed('div', 'bg-slate-800', {
  variants: {
    position: {
      horizontal: '',
      vertical: '',
    },
  },
});

const BaseDivider = ({ position }: BaseDividerProps) => {
  return <StyledDivider position={position} />;
};

export const Divider = memo(BaseDivider);
