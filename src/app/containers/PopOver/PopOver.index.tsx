import React, { useState } from 'react';
import { Container, PopOverStyled } from './PopOver.style';

let popConfig: any = {
  open: false,
  setter: null,
};

let insertIntoState = (state: any, setter: any) => {
  popConfig = { ...state, setter };
};

export const makePop = (config?: any) => {
  if (popConfig.setter instanceof Function) {
    if (popConfig.open && config.open === false) {
      popConfig.setter({ ...config, open: true, animate: 'hide' });
      setTimeout(() => {
        popConfig.setter({ ...config, open: false });
      }, 350);
    } else {
      popConfig.setter({ ...config, animate: 'show', open: !popConfig.open });
    }
  }
};

const usePopOver = () => {
  const [state, setState] = useState<any>({});

  insertIntoState(state, setState);

  return { state };
};

export default function PopOver({ children }) {
  const { state } = usePopOver();

  return (
    <Container visible={state.open} animation={state.animate}>
      <PopOverStyled>
        <div className="close--wrapper">
          <svg
            onClick={() => makePop({ open: false })}
            className="close"
            fill="#000"
            viewBox="0 0 32 32"
          >
            <g id="cross">
              <line className="cls-1" x1="7" x2="25" y1="7" y2="25" />
              <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
            </g>
          </svg>
        </div>
        {children}
      </PopOverStyled>
    </Container>
  );
}
