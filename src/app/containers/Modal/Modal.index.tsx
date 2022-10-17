import React, { useEffect, useRef, useState } from 'react';
import { Container, ModalStyled } from './Modal.styles';

function Modal({ content: { headerTitle, body }, close }) {
  const modalRef = useRef<any>();

  function centerModal() {
    const parentElementHalfHeight =
      modalRef.current.parentElement.getBoundingClientRect().height / 2;
    const modalElementHalfHeight =
      modalRef.current.getBoundingClientRect().height / 2;
    const top = parentElementHalfHeight - modalElementHalfHeight;
    if (top < 0) {
      modalRef.current.style.transform = `translateY(0)`;
    } else {
      modalRef.current.style.transform = `translateY(${top}px)`;
    }
  }

  useEffect(() => {
    modalRef.current.style.margin = `0 auto`;
    centerModal();
  }, []);

  return (
    <ModalStyled ref={modalRef}>
      <header>
        <h2>{headerTitle}</h2>
        <svg
          onClick={() => close()}
          className="close"
          fill="#000"
          viewBox="0 0 32 32"
        >
          <g id="cross">
            <line className="cls-1" x1="7" x2="25" y1="7" y2="25" />
            <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
          </g>
        </svg>
      </header>

      {body}
    </ModalStyled>
  );
}

const createModalWrapper = () => {
  let setModal__;

  function setModal(modal) {
    setModal__(modal);
  }

  function close() {
    setModal__(null);
  }

  function ModalContainer() {
    const [modal, setModal] = useState(null);

    setModal__ = setModal;

    return <Container hasModal={modal}>{modal}</Container>;
  }

  const callModal = props => {
    setModal(<Modal content={props} close={close} />);
  };

  return {
    ModalContainer,
    callModal,
  };
};

export { createModalWrapper };
