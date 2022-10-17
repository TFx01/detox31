import React, { useEffect, useRef } from 'react';
import { Container, DraggableArea, MainContainer } from './Carousel.style';

export const CarouselItem = ({ children }) => {
  return <div className="carousel--item">{children}</div>;
};

const Arrows = ({ onNext, onPrev }) => {
  return (
    <div style={{ display: 'flex', margin: '40px 0' }}>
      <svg
        onClick={onPrev}
        height="36px"
        viewBox="0 0 256 256"
        fill="var(--main-green-color)"
        width="36px"
        style={{
          cursor: 'pointer',
        }}
      >
        <path d="M149.974,191.146c-1.638,0-3.276-0.625-4.524-1.875l-56.748-56.746c-2.5-2.499-2.5-6.552,0-9.05l56.748-56.747  c2.496-2.5,6.553-2.5,9.049,0c2.5,2.499,2.5,6.552,0,9.05L102.278,128l52.22,52.222c2.5,2.499,2.5,6.552,0,9.05  C153.25,190.521,151.611,191.146,149.974,191.146z M256,128C256,57.42,198.58,0,128,0C57.42,0,0,57.42,0,128  c0,70.58,57.42,128,128,128C198.58,256,256,198.58,256,128z M243.2,128c0,63.521-51.679,115.2-115.2,115.2  c-63.522,0-115.2-51.679-115.2-115.2C12.8,64.478,64.478,12.8,128,12.8C191.521,12.8,243.2,64.478,243.2,128z" />
      </svg>
      <svg
        onClick={onNext}
        height="36px"
        viewBox="0 0 256 256"
        fill="var(--main-green-color)"
        style={{
          transform: `rotate(180deg)`,
          margin: '0 0 0 7px',
          cursor: 'pointer',
        }}
        width="36px"
      >
        <path d="M149.974,191.146c-1.638,0-3.276-0.625-4.524-1.875l-56.748-56.746c-2.5-2.499-2.5-6.552,0-9.05l56.748-56.747  c2.496-2.5,6.553-2.5,9.049,0c2.5,2.499,2.5,6.552,0,9.05L102.278,128l52.22,52.222c2.5,2.499,2.5,6.552,0,9.05  C153.25,190.521,151.611,191.146,149.974,191.146z M256,128C256,57.42,198.58,0,128,0C57.42,0,0,57.42,0,128  c0,70.58,57.42,128,128,128C198.58,256,256,198.58,256,128z M243.2,128c0,63.521-51.679,115.2-115.2,115.2  c-63.522,0-115.2-51.679-115.2-115.2C12.8,64.478,64.478,12.8,128,12.8C191.521,12.8,243.2,64.478,243.2,128z" />
      </svg>
    </div>
  );
};

export default function Carousel({ children, control }) {
  const containerRef = useRef<any>();
  const draggableRef = useRef<any>();
  const carouseControl = useRef({
    index: 0,
    distance: 0,
    distances: calcDistances(),
    baseWidth: 0,
    startedX: 0,
    stoppedX: 0,
  });

  function calcDistances() {
    const totalChildren = children.length ?? 1;
    const eachPerContainer = control.eachPerContainer;

    if (control.responsive) {
      const windowWidth = window.innerWidth;

      control.responsive[Symbol.iterator] = function* () {
        const values = Object.entries(control.responsive);

        for (const value of values) {
          yield { size: value[0], value: value[1] };
        }
      };

      const sizes = [...control.responsive];
      const sizes_ = [...sizes];

      let selectedSize: any = null;

      const getSize = () =>
        sizes.find((curr, index) => {
          sizes_.splice(index, 1);

          if (sizes_.length === 0) {
            return true;
          }

          const currSize = Number(curr.size);

          const restSizes = sizes_.filter(size => {
            return currSize < size.size;
          });

          if (restSizes.length === 0 && currSize < windowWidth) {
            return true;
          }

          return false;
        });

      while (selectedSize === null) {
        selectedSize = getSize() ?? null;
      }

      const eachPerContainer =
        control.responsive[selectedSize.size].eachPerContainer;
      const exactDistance = Math.ceil(totalChildren / eachPerContainer);

      return exactDistance;
    }

    const exactDistance = Math.ceil(totalChildren / eachPerContainer);

    return exactDistance;
  }

  const calcNextDistance = flow => {
    const baseWidth = carouseControl.current.baseWidth;
    const distances = carouseControl.current.distances;
    const distance = carouseControl.current.distance;

    const nextDistance = flow === 'next' ? distance + 1 : distance - 1;

    if (nextDistance + 1 > distances || nextDistance === -1) {
      return;
    }
    const distanceInPixels = baseWidth * nextDistance;

    carouseControl.current.distance = nextDistance;

    containerRef.current.style = `transform: translateX(-${distanceInPixels}px)`;
  };

  const onNext = () => {
    calcNextDistance('next');
  };

  const onPrev = () => {
    calcNextDistance('prev');
  };

  function resizeListener() {
    const distances = calcDistances();

    carouseControl.current.distances = distances;
    carouseControl.current.baseWidth =
      containerRef.current.getBoundingClientRect().width;
  }

  function mouseDown(e) {
    carouseControl.current.startedX = e.offsetX;
  }

  function mouseUp(e) {
    carouseControl.current.stoppedX = e.offsetX;
    e.preventDefault();
    if (carouseControl.current.stoppedX < carouseControl.current.startedX) {
      calcNextDistance('next');
    } else {
      calcNextDistance('prev');
    }
  }

  useEffect(() => {
    carouseControl.current.baseWidth =
      containerRef.current.getBoundingClientRect().width;
    const draggableRemainingLeft =
      draggableRef.current.getBoundingClientRect().left;

    draggableRef.current.style.left = `${-draggableRemainingLeft}px`;
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeListener);

    if (window.PointerEvent) {
      draggableRef.current.addEventListener('pointerdown', mouseDown);
      draggableRef.current.addEventListener('pointerup', mouseUp);
    } else {
      draggableRef.current.addEventListener('mousedown', mouseDown);
      draggableRef.current.addEventListener('mouseup', mouseUp);
      draggableRef.current.addEventListener('touchup', mouseUp);
      draggableRef.current.addEventListener('touchdown', mouseDown);
    }

    return () => {
      window.removeEventListener('resize', resizeListener);
      if (window.PointerEvent) {
        draggableRef.current.removeEventListener('pointerdown', mouseDown);
        draggableRef.current.removeEventListener('pointerup', mouseUp);
      } else {
        draggableRef.current.removeEventListener('mousedown', mouseDown);
        draggableRef.current.removeEventListener('mouseup', mouseUp);
        draggableRef.current.removeEventListener('touchup', mouseUp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        draggableRef.current.removeEventListener('touchdown', mouseUp);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainContainer>
        <DraggableArea ref={draggableRef} />
        <Container ref={containerRef} alocate={control.eachPerContainer}>
          {children}
        </Container>
      </MainContainer>
      {control.arrows && <Arrows onNext={onNext} onPrev={onPrev} />}
    </>
  );
}
