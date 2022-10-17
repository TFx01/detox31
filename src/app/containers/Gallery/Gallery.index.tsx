import React, { useEffect, useRef, useState } from 'react';
import { GalleryStyled, GalleryWrapper } from './Gallery.styles';

function createGalleryWrapper() {
  let setGallery__;
  let galleryContainerRef__;

  const typesSet = new Set(['photos', 'videos']);
  const typesMap = new Map();

  const scrollToChild = async (ref, dataIndex) => {
    const children = [...ref.current.children];
    const childrenBefore = children.slice(0, dataIndex);

    if (childrenBefore.length === 0) {
      return;
    }

    const images = new Promise(resolve => {
      let imgsToBeLoaded = children.length;
      let imgsLoaded: any = [];

      children.forEach(
        img =>
          (img.onload = () => {
            imgsLoaded = [...imgsLoaded, img];

            if (imgsLoaded.length === imgsToBeLoaded) {
              resolve(true);
            }
          }),
      );
    });

    await images;

    const totalInPixelsToScroll = childrenBefore.reduce((acc, curr) => {
      acc += curr.getBoundingClientRect().height + 10;

      return acc;
    }, 0);

    galleryContainerRef__.current.scrollTo(0, totalInPixelsToScroll);
  };

  const Photos = ({ data, dataIndex }) => {
    const ref = useRef<any>();

    useEffect(() => {
      document.body.classList.add('block--scroll');
      scrollToChild(ref, dataIndex);
    }, [dataIndex]);

    return (
      <GalleryStyled ref={ref}>
        {data.map(image => {
          if (image.large) {
            return (
              <img
                key={image.key}
                src={image.src}
                sizes="(max-width: 601px) 100vw, (min-width: 602px) 1100px"
                srcSet={`${image.large.src} ${image.large.width}w, ${image.medium.src} ${image.medium.width}w, ${image.small.src} ${image.small.width}w`}
                alt={image.alt}
              />
            );
          }
          return <img key={image.key} src={image.src} alt={image.alt} />;
        })}
      </GalleryStyled>
    );
  };
  const Videos = ({ data, dataIndex }) => {
    const ref = useRef<any>();

    useEffect(() => {
      document.body.classList.add('block--scroll');
      scrollToChild(ref, dataIndex);
    }, [dataIndex]);

    return (
      <GalleryStyled ref={ref}>
        {data.map(video => (
          <div key={video.key}>
            <iframe
              loading="lazy"
              width="100%"
              height="576"
              src={`https://www.youtube.com/embed/${video.ytCode}`}
              title="YouTube video player"
            ></iframe>
          </div>
        ))}
      </GalleryStyled>
    );
  };

  const checkWhichRender = type => {
    return type === 'photos' ? Photos : Videos;
  };

  const callGallery = ({ type, data, dataIndex }) => {
    if (!typesSet.has(type)) {
      throw new Error('Type is wrong');
    }

    typesMap.set(type, checkWhichRender(type));

    const Component = typesMap.get(type);

    setGallery__(<Component data={data} dataIndex={dataIndex} />);
  };

  function GalleryContainer(): any {
    const galleryContainerRef = useRef<any>();
    const [gallery, setGallery] = useState(null);

    setGallery__ = setGallery;
    galleryContainerRef__ = galleryContainerRef;

    return (
      <GalleryWrapper ref={galleryContainerRef} active={gallery}>
        {gallery}

        <svg
          onClick={() => {
            document.body.classList.toggle('block--scroll');
            setGallery__(null);
          }}
          viewBox="0 0 32 32"
        >
          <g id="cross">
            <line className="cls-1" x1="7" x2="25" y1="7" y2="25" />
            <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
          </g>
        </svg>
      </GalleryWrapper>
    );
  }

  return {
    GalleryContainer,
    callGallery,
  };
}

export { createGalleryWrapper };
