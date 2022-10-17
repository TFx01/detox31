import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Section } from 'styles/section';
import styled, { css } from 'styled-components';

import {
  Avaliations,
  Benefits,
  BenefitsPopOver,
  Client,
  HeaderDescritive,
  MainHeader,
  Product,
  ProductRow,
  StyledCarouselItem,
  Tabs,
} from './styles';

import Button from 'app/components/Button/Button.index';
import Carousel, { CarouselItem } from 'app/containers/Carousel/Carousel.index';
import Flex from 'app/components/layout/Flex/Flex.index';
import PopOver, { makePop } from 'app/containers/PopOver/PopOver.index';
import { Collapse } from 'app/containers/Collapse/Collapse.index';
import { createModalWrapper } from 'app/containers/Modal/Modal.index';
import { createGalleryWrapper } from 'app/containers/Gallery/Gallery.index';
import A from 'app/components/A/A.index';

const photos = [
  {
    key: '0',
    src: require('assets/img/webp/clientes/analaura/photo1-846w.webp'),
    large: {
      width: 846,
      src: require('assets/img/webp/clientes/analaura/photo1-846w.webp'),
    },
    medium: {
      width: 635,
      src: require('assets/img/webp/clientes/analaura/photo1-635w.webp'),
    },
    small: {
      width: 423,
      src: require('assets/img/webp/clientes/analaura/photo1-423w.webp'),
    },
    thumb: require('assets/img/webp/clientes/analaura/photo1-thumb.webp'),
    alt: 'Foto do cliente',
  },
  {
    key: '1',
    src: require('assets/img/webp/clientes/analaura/photo2-936w.webp'),
    large: {
      width: 936,
      src: require('assets/img/webp/clientes/analaura/photo2-936w.webp'),
    },
    medium: {
      width: 702,
      src: require('assets/img/webp/clientes/analaura/photo2-702w.webp'),
    },
    small: {
      width: 468,
      src: require('assets/img/webp/clientes/analaura/photo2-468w.webp'),
    },
    thumb: require('assets/img/webp/clientes/analaura/photo2-thumb.webp'),
    alt: 'Foto do cliente',
  },
  {
    key: '2',
    src: require('assets/img/webp/clientes/analaura/photo3-800w.webp'),
    large: {
      width: 800,
      src: require('assets/img/webp/clientes/analaura/photo3-800w.webp'),
    },
    medium: {
      width: 600,
      src: require('assets/img/webp/clientes/analaura/photo3-600w.webp'),
    },
    small: {
      width: 400,
      src: require('assets/img/webp/clientes/analaura/photo3-400w.webp'),
    },
    thumb: require('assets/img/webp/clientes/analaura/photo3-thumb.webp'),
    alt: 'Foto do cliente',
  },

  {
    key: '3',
    src: require('assets/img/webp/clientes/kemilly/kemilly1.webp'),
    large: {
      width: 761,
      src: require('assets/img/webp/clientes/kemilly/kemilly1-761w.webp'),
    },
    medium: {
      width: 571,
      src: require('assets/img/webp/clientes/kemilly/kemilly1-571w.webp'),
    },
    small: {
      width: 381,
      src: require('assets/img/webp/clientes/kemilly/kemilly1-381w.webp'),
    },
    thumb: require('assets/img/webp/clientes/kemilly/kemilly1-thumb.webp'),
    alt: 'Foto do cliente',
  },
  {
    key: '4',
    src: require('assets/img/webp/clientes/kemilly/kemilly2.webp'),
    large: {
      width: 722,
      src: require('assets/img/webp/clientes/kemilly/kemilly2-722w.webp'),
    },
    medium: {
      width: 542,
      src: require('assets/img/webp/clientes/kemilly/kemilly2-542w.webp'),
    },
    small: {
      width: 361,
      src: require('assets/img/webp/clientes/kemilly/kemilly2-361w.webp'),
    },
    thumb: require('assets/img/webp/clientes/kemilly/kemilly2-thumb.webp'),
    alt: 'Foto do cliente',
  },
  {
    key: '5',
    src: require('assets/img/webp/clientes/kemilly/kemilly3.webp'),
    large: {
      width: 752,
      src: require('assets/img/webp/clientes/kemilly/kemilly3-752w.webp'),
    },
    medium: {
      width: 564,
      src: require('assets/img/webp/clientes/kemilly/kemilly3-564w.webp'),
    },
    small: {
      width: 376,
      src: require('assets/img/webp/clientes/kemilly/kemilly3-376w.webp'),
    },
    thumb: require('assets/img/webp/clientes/kemilly/kemilly3-thumb.webp'),
    alt: 'Foto do cliente',
  },

  {
    key: '6',
    src: require('assets/img/webp/clientes/marimaciel/mari1-800w.webp'),
    large: {
      width: 800,
      src: require('assets/img/webp/clientes/marimaciel/mari1-800w.webp'),
    },
    medium: {
      width: 600,
      src: require('assets/img/webp/clientes/marimaciel/mari1-600w.webp'),
    },
    small: {
      width: 400,
      src: require('assets/img/webp/clientes/marimaciel/mari1-400w.webp'),
    },
    thumb: require('assets/img/webp/clientes/marimaciel/mari1-thumb.webp'),
    alt: 'Foto do cliente',
  },
  {
    key: '7',
    src: require('assets/img/webp/clientes/marimaciel/mari2-800w.webp'),
    large: {
      width: 800,
      src: require('assets/img/webp/clientes/marimaciel/mari2-800w.webp'),
    },
    medium: {
      width: 600,
      src: require('assets/img/webp/clientes/marimaciel/mari2-600w.webp'),
    },
    small: {
      width: 400,
      src: require('assets/img/webp/clientes/marimaciel/mari2-400w.webp'),
    },
    thumb: require('assets/img/webp/clientes/marimaciel/mari2-thumb.webp'),
    alt: 'Foto do cliente',
  },
  {
    key: '8',
    src: require('assets/img/webp/clientes/marimaciel/mari3-800w.webp'),
    large: {
      width: 800,
      src: require('assets/img/webp/clientes/marimaciel/mari3-800w.webp'),
    },
    medium: {
      width: 600,
      src: require('assets/img/webp/clientes/marimaciel/mari3-600w.webp'),
    },
    small: {
      width: 400,
      src: require('assets/img/webp/clientes/marimaciel/mari3-400w.webp'),
    },
    thumb: require('assets/img/webp/clientes/marimaciel/mari3-thumb.webp'),
    alt: 'Foto do cliente',
  },
];
const videos = [
  {
    key: '1',
    ytCode: 'HDYN7gWWtcM',
    thumb: require('assets/img/webp/clientes/analaura/video1-thumb.webp'),
  },
  {
    key: '2',
    ytCode: 'Y9igULhfiIo',
    thumb: require('assets/img/webp/clientes/kemilly/kemilly-video-thumb.webp'),
  },
];

const Clients = () => {
  const [galleryWrappers, setGalleryWrappers] = React.useState({
    1: { tab: 'photos' },
    2: { tab: 'photos' },
    3: { tab: 'photos' },
  });

  return (
    <>
      <Flex
        css={{
          gap: '15px',
          justifyContent: 'space-between',
          width: 'auto',
          margin: '50px auto',
          flexFlow: 'wrap row',
        }}
      >
        <Client key="1">
          <header>
            <img
              loading="lazy"
              src={require('assets/img/webp/clientes/analaura/analaura.webp')}
              alt=""
            />
            <h2>@analauracampos</h2>
          </header>
          <Tabs>
            <div className="tabs">
              <button
                className={
                  galleryWrappers[1].tab === 'photos' ? 'selected' : ''
                }
                onClick={() => {
                  setGalleryWrappers(curr => ({
                    ...curr,
                    1: { tab: 'photos' },
                  }));
                }}
              >
                Fotos
              </button>
              <button
                className={
                  galleryWrappers[1].tab === 'videos' ? 'selected' : ''
                }
                onClick={() => {
                  setGalleryWrappers(curr => ({
                    ...curr,
                    1: { tab: 'videos' },
                  }));
                }}
              >
                Videos
              </button>
            </div>
            <div className="tab__photos">
              {photos.slice(0, 3).map((photo, index) => (
                <img
                  loading="lazy"
                  key={photo.key}
                  src={photo.thumb || photo.src}
                  alt={photo.alt}
                  style={{
                    display:
                      galleryWrappers[1].tab === 'photos' ? 'inherit' : 'none',
                  }}
                  onClick={() => {
                    callGallery({
                      type: 'photos',
                      data: photos.slice(0, 3),
                      dataIndex: index,
                    });
                  }}
                />
              ))}
            </div>
            <div className="tab__videos">
              {videos.slice(0, 1).map((video, index) => (
                <div
                  key={video.key}
                  onClick={() =>
                    callGallery({
                      type: 'videos',
                      data: videos.slice(0, 1),
                      dataIndex: index,
                    })
                  }
                  style={{
                    display:
                      galleryWrappers[1].tab === 'videos' ? 'inherit' : 'none',
                  }}
                >
                  <img loading="lazy" src={video.thumb} alt="video" />
                  <svg width="70" viewBox="0 0 64 64">
                    <g>
                      <g
                        id="Icon-Play"
                        transform="translate(128.000000, 278.000000)"
                      >
                        <path
                          d="M-95.9-222c-13.2,0-23.9-10.7-23.9-23.9s10.7-23.9,23.9-23.9S-72-259.1-72-245.9     S-82.7-222-95.9-222L-95.9-222z M-95.9-267.2c-11.7,0-21.3,9.6-21.3,21.3c0,11.7,9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3     C-74.6-257.7-84.2-267.2-95.9-267.2L-95.9-267.2z"
                          id="Fill-124"
                        />
                        <path
                          d="M-103-233.6v-24.7l21.2,12.4L-103-233.6L-103-233.6z M-100.2-253.4v14.9l12.7-7.4     L-100.2-253.4L-100.2-253.4z"
                          id="Fill-125"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              ))}
            </div>
          </Tabs>
        </Client>
        <Client key="2">
          <header>
            <img
              loading="lazy"
              src={require('assets/img/webp/clientes/kemilly/kemilly.webp')}
              alt=""
            />
            <h2>@kemillymenezes</h2>
          </header>
          <Tabs>
            <div className="tabs">
              <button
                className={
                  galleryWrappers[2].tab === 'photos' ? 'selected' : ''
                }
                onClick={() => {
                  setGalleryWrappers(curr => ({
                    ...curr,
                    2: { tab: 'photos' },
                  }));
                }}
              >
                Fotos
              </button>
              <button
                className={
                  galleryWrappers[2].tab === 'videos' ? 'selected' : ''
                }
                onClick={() => {
                  setGalleryWrappers(curr => ({
                    ...curr,
                    2: { tab: 'videos' },
                  }));
                }}
              >
                Videos
              </button>
            </div>
            <div className="tab__photos">
              {photos.slice(3, 6).map((photo, index) => (
                <img
                  loading="lazy"
                  key={photo.key}
                  src={photo.thumb || photo.src}
                  alt={photo.alt}
                  style={{
                    display:
                      galleryWrappers[2].tab === 'photos' ? 'inherit' : 'none',
                  }}
                  onClick={() =>
                    callGallery({
                      type: 'photos',
                      data: photos.slice(3, 6),
                      dataIndex: index,
                    })
                  }
                />
              ))}
            </div>
            <div className="tab__videos">
              {videos.slice(1, 2).map((video, index) => (
                <div
                  key={video.key}
                  onClick={() =>
                    callGallery({
                      type: 'videos',
                      data: videos.slice(1, 2),
                      dataIndex: index,
                    })
                  }
                  style={{
                    display:
                      galleryWrappers[2].tab === 'videos' ? 'inherit' : 'none',
                  }}
                >
                  <img loading="lazy" src={video.thumb} alt="video" />
                  <svg width="70" viewBox="0 0 64 64">
                    <g>
                      <g
                        id="Icon-Play"
                        transform="translate(128.000000, 278.000000)"
                      >
                        <path
                          d="M-95.9-222c-13.2,0-23.9-10.7-23.9-23.9s10.7-23.9,23.9-23.9S-72-259.1-72-245.9     S-82.7-222-95.9-222L-95.9-222z M-95.9-267.2c-11.7,0-21.3,9.6-21.3,21.3c0,11.7,9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3     C-74.6-257.7-84.2-267.2-95.9-267.2L-95.9-267.2z"
                          id="Fill-124"
                        />
                        <path
                          d="M-103-233.6v-24.7l21.2,12.4L-103-233.6L-103-233.6z M-100.2-253.4v14.9l12.7-7.4     L-100.2-253.4L-100.2-253.4z"
                          id="Fill-125"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              ))}
            </div>
          </Tabs>
        </Client>
        <Client key="3">
          <header>
            <img
              loading="lazy"
              src={require('assets/img/webp/clientes/marimaciel/mari.webp')}
              alt=""
            />
            <h2>@marimaciel04</h2>
          </header>
          <Tabs>
            <div className="tabs">
              <button
                className={
                  galleryWrappers[3].tab === 'photos' ? 'selected' : ''
                }
                onClick={() => {
                  setGalleryWrappers(curr => ({
                    ...curr,
                    3: { tab: 'photos' },
                  }));
                }}
              >
                Fotos
              </button>
              <button
                className={
                  galleryWrappers[3].tab === 'videos' ? 'selected' : ''
                }
                onClick={() => {
                  setGalleryWrappers(curr => ({
                    ...curr,
                    3: { tab: 'videos' },
                  }));
                }}
              >
                Videos
              </button>
            </div>
            <div className="tab__photos">
              {photos.slice(6, 9).map((photo, index) => (
                <img
                  loading="lazy"
                  key={photo.key}
                  src={photo.thumb || photo.src}
                  alt={photo.alt}
                  style={{
                    display:
                      galleryWrappers[3].tab === 'photos' ? 'inherit' : 'none',
                  }}
                  onClick={() =>
                    callGallery({
                      type: 'photos',
                      data: photos.slice(6, 9),
                      dataIndex: index,
                    })
                  }
                />
              ))}
            </div>
            <div className="tab__videos">
              <div
                className="no__video"
                style={{
                  display:
                    galleryWrappers[3].tab === 'videos' ? 'inherit' : 'none',
                }}
              >
                <p>nenhum video enviado.</p>
              </div>
            </div>
          </Tabs>
        </Client>
      </Flex>

      <GalleryContainer />
    </>
  );
};

const { ModalContainer, callModal } = createModalWrapper();
const { GalleryContainer, callGallery } = createGalleryWrapper();

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Detox31</title>
        <meta
          name="description"
          content="Emagreça de forma rápida e definitiva!"
        />
      </Helmet>
      <Section>
        <MainHeader>
          <div style={{ position: 'relative' }}>
            <h1>Emagreça de forma rápida e definitiva!</h1>
            <h2>Elimine até 15Kg de gordura em 8 semanas</h2>
            <Benefits>
              <li>
                <svg height="22px" viewBox="0 0 512 512" width="22px">
                  <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                </svg>
                Controla o colesterol
              </li>
              <li>
                <svg height="22px" viewBox="0 0 512 512" width="22px">
                  <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                </svg>
                Queima gordura rapidamente
              </li>
              <li>
                <svg height="22px" viewBox="0 0 512 512" width="22px">
                  <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                </svg>
                Aumenta a energia e disposição
              </li>
              <li>
                <svg height="22px" viewBox="0 0 512 512" width="22px">
                  <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                </svg>
                Reduz o apetite
              </li>
              <li>
                <svg height="22px" viewBox="0 0 512 512" width="22px">
                  <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                </svg>
                Destrói gordura localizada
              </li>

              <li>
                <svg height="22px" viewBox="0 0 512 512" width="22px">
                  <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                </svg>
                Aumenta a líbido
              </li>
              <li>
                <svg height="22px" viewBox="0 0 512 512" width="22px">
                  <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                </svg>
                Regula o intestino
              </li>
              <li>
                <svg height="22px" viewBox="0 0 512 512" width="22px">
                  <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                </svg>
                Acelera o metabolismo
              </li>
              <li>
                <svg height="22px" viewBox="0 0 512 512" width="22px">
                  <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                </svg>
                Controla a ansiedade
              </li>
              <li>
                <svg height="22px" viewBox="0 0 512 512" width="22px">
                  <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                </svg>
                Aumenta a imunidade
              </li>
              <li>
                <svg height="22px" viewBox="0 0 512 512" width="22px">
                  <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                </svg>
                Acaba com a retenção de líquido
              </li>
            </Benefits>
            {/* <Button title="Conheça os benefícios" /> */}
          </div>

          {/* <picture>
          <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
          <source media="(min-width: 800px)" srcset="elva-800w.jpg">
          <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
          </picture> */}

          <img
            sizes="(max-width: 601px) 360px, (max-width: 1280px) 500px, 560px"
            src={require('assets/img/webp/Detox31-1080x1080.webp')}
            srcSet={`
            ${require('assets/img/webp/Detox31-450x450.webp')} 450w,
            ${require('assets/img/webp/Detox31-720x720.webp')} 720w,
            ${require('assets/img/webp/Detox31-1080x1080.webp')} 1080w,
            ${require('assets/img/webp/Detox31-1080x1080.webp')},
          `}
            alt="detox31"
          />
        </MainHeader>
      </Section>
      <Section>
        <HeaderDescritive>
          <div>
            <h2>O Segredo...</h2>
            <p>
              Além de ser o mais completo e avançado emagrecedor, sua composição
              conta com ingredientes recomendados por diversos nutricionistas.
            </p>
          </div>
        </HeaderDescritive>

        <Carousel
          control={{
            eachPerContainer: 3,
            arrows: true,
            responsive: {
              1024: {
                eachPerContainer: 3,
              },
              600: {
                eachPerContainer: 1,
              },
            },
          }}
        >
          <CarouselItem>
            <StyledCarouselItem>
              <header>
                <div>
                  <p>Café Verde</p>
                </div>
                <img
                  loading="lazy"
                  src={require('assets/img/webp/cafeverde.webp')}
                  alt=""
                />
              </header>
              <div>
                <p>
                  É um poderoso aliado para o emagrecimento, pois, além de
                  termogênico, o Café verde diminui a absorção de glicose,
                  fazendo o organismo funcionar em estado de lipólise. Deste
                  modo a queima de gordura se torna constante e acelerada.
                </p>
              </div>
            </StyledCarouselItem>
          </CarouselItem>
          <CarouselItem>
            <StyledCarouselItem>
              <header>
                <div>
                  <p>Gengibre</p>
                </div>
                <img
                  loading="lazy"
                  src={require('assets/img/webp/gengibre.webp')}
                  alt=""
                />
              </header>
              <div>
                <p>
                  Muito comum em tratamentos para problemas estomacais, o
                  Gengibre apresenta ação bactericida, desintoxicante e é uma
                  excelente e poderosa fonte de benefícios para o sistema
                  digestivo, respiratório e circulatório.
                </p>
              </div>
            </StyledCarouselItem>
          </CarouselItem>
          <CarouselItem>
            <StyledCarouselItem>
              <header>
                <div>
                  <p>Chá Verde</p>
                </div>
                <img
                  loading="lazy"
                  src={require('assets/img/webp/chaverde-1080x1080.webp')}
                  alt=""
                />
              </header>
              <div>
                <p>
                  Consumido há mais de mil anos pelos orientais, o chá verde é
                  muito conhecido por elevar o metabolismo, acelerar o
                  emagrecimento e por ser rico em anti-oxidantes que combatem os
                  radicais livres, prevenindo o envelhecimento precoce.
                </p>
              </div>
            </StyledCarouselItem>
          </CarouselItem>
          <CarouselItem>
            <StyledCarouselItem>
              <header>
                <div>
                  <p>Guaraná</p>
                </div>
                <img
                  loading="lazy"
                  src={require('assets/img/webp/guarana.webp')}
                  alt=""
                />
              </header>
              <div>
                <p>
                  Está diretamente relacionado com a diminuição do apetite o que
                  é ótimo para quem está em uma dieta para perder peso! Isso se
                  deve ao chamado efeito termogênico, que acelerada a queima de
                  gordura localizada em todo o corpo.
                </p>
              </div>
            </StyledCarouselItem>
          </CarouselItem>
          <CarouselItem>
            <StyledCarouselItem>
              <header>
                <div>
                  <p>Beringela</p>
                </div>
                <img
                  loading="lazy"
                  src={require('assets/img/webp/beringela.webp')}
                  alt=""
                />
              </header>
              <div>
                <p>
                  Incluir a berinjela no dia a dia é uma forma eficiente de
                  perder barriga, já que esse alimento diminui bastante a fome e
                  ajuda na eliminação da gordura no organismo. Alem de ser rica
                  em vitaminas B1, B2 e B6 essenciais para o sistema nervoso.
                </p>
              </div>
            </StyledCarouselItem>
          </CarouselItem>
          <CarouselItem>
            <StyledCarouselItem>
              <header>
                <div>
                  <p>Cafeína</p>
                </div>
                <img
                  loading="lazy"
                  src={require('assets/img/webp/cafeina.webp')}
                  alt=""
                />
              </header>
              <div>
                <p>
                  Acelerando o metabolismo e estimulando a quebra da gordura
                  corporal localizada, a Cafeína apresenta excelentes resultados
                  para o emagrecimento e definição muscular, trabalhando
                  diretamente no aumento da energia e disposição do dia a dia.
                </p>
              </div>
            </StyledCarouselItem>
          </CarouselItem>
        </Carousel>
      </Section>
      <Section>
        <HeaderDescritive>
          <div>
            <h2>Quem usa, recomenda!</h2>
            <p>Algumas das pessoas que usam e recomendam o Detox31: </p>
          </div>
        </HeaderDescritive>
        <Clients />
      </Section>
      <Section>
        <header>
          <h2>
            Quer maiores resultados? O{' '}
            <span style={{ textDecoration: 'underline' }}>Detox31</span> vai ser
            seu aliado na perda peso
          </h2>
        </header>
        <Avaliations>
          <Client>
            <header>
              <img
                loading="lazy"
                src={require('assets/img/webp/clientes/rosy/rosy.webp')}
                alt=""
              />
              <div>
                <h2>@rosyfitnessturbo</h2>
                {/* <div className="stars">
                  {Array.from(new Array(5)).map((el, index) => (
                    <svg
                      fill="#fff"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                    >
                      <g>
                        <g>
                          <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" />
                        </g>
                      </g>
                    </svg>
                  ))}
                </div> */}
              </div>
            </header>
            <div>
              <p>
                Esse produto é tão sensacional, tão sensacional... que não falta
                aqui!
              </p>
            </div>
          </Client>
          <Client>
            <header>
              <img
                loading="lazy"
                src={require('assets/img/webp/clientes/mariana/mariana.webp')}
                alt=""
              />
              <div>
                <h2>@marifariacosta</h2>
              </div>
            </header>
            <div>
              <p>
                Já to tomando faz um tempinho, to amando e não quero ficar mais
                sem! ... Além de todos os benefícios que ele traz, o que eu mais
                senti diferença foi que ele ajuda mesmo a desinchar o corpo, e
                quando eu tomo ele pra poder ir pra academia ele me da muito
                mais ânimo
              </p>
            </div>
          </Client>
        </Avaliations>
      </Section>
      <Section style={{ marginTop: '40px' }}>
        <Flex css={GarantiesRowStyle}>
          <div>
            <div>
              <img
                loading="lazy"
                src={require('assets/img/webp/anvisa.webp')}
                alt="anvisa"
              />
            </div>
            <div>
              <p>Aprovado pela anvisa</p>
            </div>
          </div>
          <div>
            <div>
              <svg
                fill="var(--main-green-color)"
                height="100"
                viewBox="0 0 256 256"
                width="100"
              >
                <title />
                <g id="body-figure-waist-measurement">
                  <path d="M203.8,131.72a1.331,1.331,0,0,0-.05-.19.613.613,0,0,0-.05-.12,89.116,89.116,0,0,0-14.067-26.53.555.555,0,0,1-.07-.09v-.01c-.33-.42-.65-.84-.98-1.25l-.12-.16a42.6,42.6,0,0,1-3.852-5.8A8.022,8.022,0,0,0,190.031,90V70a1.338,1.338,0,0,0-.01-.2,8,8,0,0,0-7.994-7.8h-4.112c1.171-23.07,9.515-51.14,9.6-51.43a1.947,1.947,0,0,0-.31-1.76,1.981,1.981,0,0,0-1.6-.81H70.391a2,2,0,0,0-1.911,2.57c.09.29,8.434,28.35,9.6,51.43H67.969a2.006,2.006,0,0,0-2,2V75.52A22.006,22.006,0,0,0,51.961,96v26a2.006,2.006,0,0,0,2,2h1.131c-1.05,2.42-1.981,4.89-2.791,7.39a.59.59,0,0,0-.06.14,1.331,1.331,0,0,0-.05.19c-10.4,32.3-1.441,71.04,26.7,115.35a2.011,2.011,0,0,0,1.691.93h94.828a2.011,2.011,0,0,0,1.691-.93C205.278,202.7,214.2,164.05,203.8,131.72ZM127.99,218.08a121.507,121.507,0,0,0-10.415-31.67,26.58,26.58,0,0,0,20.85-.08A121.626,121.626,0,0,0,127.99,218.08ZM55.963,120v-4H71.971v4H55.963Zm132.1-1.53c-2.911,1.36-5.853,2.63-8.764,3.79a1.921,1.921,0,0,1-.74.15,2.021,2.021,0,0,1-1.861-1.26,2,2,0,0,1,1.121-2.6c2.831-1.13,5.713-2.38,8.544-3.71a2,2,0,0,1,1.7,3.63Zm-17.739,7.06c-3.042,1-6.133,1.91-9.175,2.69a1.681,1.681,0,0,1-.5.07,2,2,0,0,1-.5-3.94c2.962-.76,5.963-1.64,8.925-2.62a2,2,0,0,1,1.251,3.8Zm-56.428,6.19c-.08,0-.15-.01-.23-.01-3.141-.36-6.333-.83-9.475-1.41a2,2,0,1,1,.73-3.93c3.052.56,6.143,1.02,9.185,1.36a2,2,0,0,1-.21,3.99Zm7.394-1.38a2.021,2.021,0,0,1,2.081-1.92c3.071.11,6.193.11,9.275-.01a2,2,0,1,1,.15,4c-1.621.06-3.262.09-4.883.09-1.561,0-3.141-.03-4.692-.09A2.007,2.007,0,0,1,121.286,130.34Zm18.849-.41a1.987,1.987,0,0,1,1.761-2.21c3.051-.34,6.143-.8,9.185-1.36a2,2,0,1,1,.73,3.93c-3.142.58-6.323,1.05-9.465,1.4a1.789,1.789,0,0,1-.23.02A2,2,0,0,1,140.136,129.93Zm-42.851-3.14a2,2,0,0,1-1.931,1.5,1.8,1.8,0,0,1-.51-.07c-3.041-.78-6.133-1.69-9.175-2.69a2,2,0,1,1,1.261-3.8c2.961.97,5.963,1.86,8.925,2.62A2,2,0,0,1,97.284,126.79Zm87.564-21.54c-36.138,16.6-72.757,17.32-108.875,2.12V98H180.306A48.208,48.208,0,0,0,184.848,105.25ZM186.029,90a4.006,4.006,0,0,1-4,4H76.084a18.072,18.072,0,0,1,11.9-14.97V86a2,2,0,0,0,4,0V78.11a18.867,18.867,0,0,1,2-.11h10.005v4a2,2,0,0,0,4,0V78H120v8a2,2,0,0,0,4,0V78H136v4a2,2,0,0,0,4,0V78h12.006v8a2,2,0,0,0,4,0V78H168.02v4a2,2,0,0,0,4,0V78h10.005a7.913,7.913,0,0,0,4-1.08ZM73.042,12H182.957c-2.171,7.82-8.464,31.95-9.114,51.8a1.273,1.273,0,0,0-.01.2,96.636,96.636,0,0,0,.2,10H81.966a96.636,96.636,0,0,0,.2-10,1.273,1.273,0,0,0-.01-.2C81.506,43.95,75.213,19.82,73.042,12ZM55.963,96A18.025,18.025,0,0,1,73.972,78h7.384a21.31,21.31,0,0,0-4.042,3.66c-.02.01-.02.01-.02.02a2.1,2.1,0,0,0-.2.24c-.02.02-.04.03-.04.05A21.833,21.833,0,0,0,71.981,95.8a1.338,1.338,0,0,0-.01.2v16H55.963Zm-.5,38.73a109.894,109.894,0,0,1,55.308,47.44,2.24,2.24,0,0,0,.39.69c.01.01.02.01.02.02,7.494,13.28,13.147,29.88,14.807,50.5q-.405,5.145-.47,10.62H81.686C55.2,201.97,46.419,165.29,55.463,134.73ZM174.313,244H129.52c.05-3.59.2-7.07.48-10.44a.419.419,0,0,1,.01-.16c1.641-20.64,7.3-37.25,14.777-50.54a.177.177,0,0,0,.05-.04,1.9,1.9,0,0,0,.48-.88,109.871,109.871,0,0,1,55.2-47.2C209.54,165.36,200.786,201.97,174.313,244Z" />
                </g>
              </svg>
            </div>
            <div
              style={{
                display: 'flex',
                flexFlow: 'nowrap column',
                alignItems: 'center',
              }}
            >
              <p>Mais de 10 benefícios para seu corpo</p>
              <Button
                onClick={() => makePop()}
                size="auto"
                title="Visualizar"
              />

              <PopOver>
                <BenefitsPopOver>
                  <li>
                    <svg height="22px" viewBox="0 0 512 512" width="22px">
                      <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                    </svg>
                    <span>Controla o colesterol</span>
                  </li>
                  <li>
                    <svg height="22px" viewBox="0 0 512 512" width="22px">
                      <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                    </svg>
                    <span>Queima gordura rapidamente</span>
                  </li>
                  <li>
                    <svg height="22px" viewBox="0 0 512 512" width="22px">
                      <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                    </svg>
                    <span>Aumenta a energia e disposição</span>
                  </li>
                  <li>
                    <svg height="22px" viewBox="0 0 512 512" width="22px">
                      <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                    </svg>
                    <span>Reduz o apetite</span>
                  </li>
                  <li>
                    <svg height="22px" viewBox="0 0 512 512" width="22px">
                      <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                    </svg>
                    <span>Destrói gordura localizada</span>
                  </li>

                  <li>
                    <svg height="22px" viewBox="0 0 512 512" width="22px">
                      <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                    </svg>
                    <span>Aumenta a líbido</span>
                  </li>
                  <li>
                    <svg height="22px" viewBox="0 0 512 512" width="22px">
                      <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                    </svg>
                    <span>Regula o intestino</span>
                  </li>
                  <li>
                    <svg height="22px" viewBox="0 0 512 512" width="22px">
                      <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                    </svg>
                    <span>Acelera o metabolismo</span>
                  </li>
                  <li>
                    <svg height="22px" viewBox="0 0 512 512" width="22px">
                      <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                    </svg>
                    <span>Controla a ansiedade</span>
                  </li>
                  <li>
                    <svg height="22px" viewBox="0 0 512 512" width="22px">
                      <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                    </svg>
                    <span>Aumenta a imunidade</span>
                  </li>
                  <li>
                    <svg height="22px" viewBox="0 0 512 512" width="22px">
                      <path d="M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z" />
                    </svg>
                    <span>Acaba com a retenção de líquido</span>
                  </li>
                </BenefitsPopOver>
              </PopOver>
            </div>
          </div>
          <div>
            <div>
              <svg
                fill="var(--main-green-color)"
                id="outline"
                width="100"
                viewBox="0 0 340 340"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M224.757,215.928a18.771,18.771,0,0,0,17.46-3.614l16.294-13.656a36.568,36.568,0,0,0,9.159-11.518l1.764-3.47A36.548,36.548,0,0,0,273.38,168.9l.472-9.172a28.722,28.722,0,0,1,5.346-15.278l4.3-6a19.03,19.03,0,0,0,3.582-11.149V113.055a19.194,19.194,0,0,0-9.093-16.294,103.906,103.906,0,0,0-10-5.372,57.489,57.489,0,0,1-11.154-7.008A86.313,86.313,0,0,0,238.462,73.5a4,4,0,0,0-3.234,7.318,78.166,78.166,0,0,1,16.662,9.853,66.239,66.239,0,0,0,12.7,7.963,95.561,95.561,0,0,1,9.222,4.956,11.145,11.145,0,0,1,5.266,9.468v14.237A11.086,11.086,0,0,1,277,133.783l-4.3,6a36.7,36.7,0,0,0-6.832,19.524l-.473,9.172a28.6,28.6,0,0,1-3.087,11.562l-1.764,3.47a28.63,28.63,0,0,1-7.167,9.012l-16.294,13.656a10.785,10.785,0,0,1-10.035,2.079,4,4,0,1,0-2.286,7.666Z" />
                <path d="M219.913,224.989l-1.075-5.371c-.53-2.451-1.576-9.921-.075-14.99a4,4,0,0,0-7.669-2.273c-2.386,8.05-.17,18.513-.088,18.893l1.062,5.31a8.7,8.7,0,0,1-1.023,6.2c-3.621,6.047-10.12,10.728-14.935,13.589a19.2,19.2,0,0,0-9.393,16.4v9.513a13.014,13.014,0,0,1-3.356,8.5,29.77,29.77,0,0,0-6.882,16.132c-1.335,8.612,4.606,15.04,8.284,18.115a5.357,5.357,0,0,1,1.953,4.113c0,.167-.01.333-.023.494a5.1,5.1,0,0,1-1.872,3.525,5.691,5.691,0,0,1-4.2,1.277c-13.848-1.473-19.038-8.789-20.9-13.019a125.646,125.646,0,0,0-5.9-11.191,30.563,30.563,0,0,1-4.1-15.255V247.333a52.227,52.227,0,0,1,.862-9.438,60.255,60.255,0,0,0,1-10.887V206.1a47.86,47.86,0,0,0-2.611-15.755,79.6,79.6,0,0,0-12.148-22.208,67.272,67.272,0,0,0-14.4-13.769c-26.256-18.742-39.361-36-39.488-36.171-.06-.079-.122-.157-.187-.232-8.893-10.2-4.5-22.139-4.329-22.6,2.917-7.3,3.109-15.65,2.756-21.373a21.343,21.343,0,0,1,6.04-16.39l.188-.188a29.416,29.416,0,0,0,8.582-18.142l.819-8.872a7.379,7.379,0,0,1,.38-1.9c1.545-4.087,6.752-8.059,14.66-11.186a25.64,25.64,0,0,1,9.476-1.773h19.3a26.129,26.129,0,0,1,17.288,6.533l3.356,2.96a4,4,0,1,0,5.291-6L163.2,16.08a34.13,34.13,0,0,0-22.579-8.532h-19.3A33.609,33.609,0,0,0,108.9,9.881C101.8,12.687,92.71,17.7,89.7,25.677a14.87,14.87,0,0,0-.864,3.993l-.819,8.872a21.406,21.406,0,0,1-6.25,13.2l-.078.077-.151.151A29.344,29.344,0,0,0,73.185,74.49c.3,4.905.166,12-2.211,17.937-.266.681-6.368,16.791,5.643,30.69,1.331,1.75,14.679,18.869,41.152,37.765A59.284,59.284,0,0,1,130.461,173a71.653,71.653,0,0,1,10.944,19.971,39.883,39.883,0,0,1,2.167,13.129v20.905a52.342,52.342,0,0,1-.862,9.438,60.222,60.222,0,0,0-1,10.887v37.623a38.571,38.571,0,0,0,5.173,19.254c2.55,4.419,4.455,8.02,5.508,10.414,2.558,5.814,9.516,15.852,27.374,17.752a13.453,13.453,0,0,0,1.417.076,13.75,13.75,0,0,0,8.741-3.151,13.034,13.034,0,0,0,4.74-9.046c.027-.34.043-.687.047-1.036a13.257,13.257,0,0,0-4.82-10.344c-2.394-2-6.291-6.073-5.5-10.85.022-.13.038-.282.047-.415a21.791,21.791,0,0,1,4.936-11.578,21.007,21.007,0,0,0,5.334-13.772v-9.513a11.164,11.164,0,0,1,5.481-9.527c5.607-3.333,13.231-8.876,17.71-16.355A16.682,16.682,0,0,0,219.913,224.989Z" />
                <path d="M101.655,87.562a11.687,11.687,0,0,1,10.193-9.528l.3-.036a19.779,19.779,0,0,0,9.256-3.593l9.888-7.125a11.8,11.8,0,0,1,5.174-2.094,4,4,0,0,0-1.155-7.916,19.826,19.826,0,0,0-8.7,3.52l-9.889,7.125a11.761,11.761,0,0,1-5.509,2.137l-.3.036A19.647,19.647,0,0,0,93.789,86.105l-2.01,10.854a19.782,19.782,0,0,0,4.8,16.877,77.674,77.674,0,0,0,13.384,11.3,12.211,12.211,0,0,1,1.61,1.308c3.125,3.046,13.9,13.658,21.367,22.363.2.231.383.465.56.708,2.162,2.981,13.745,17.91,29.411,19q.625.043,1.252.043a19.458,19.458,0,0,0,9.179-2.358l9.882-5.3a11.7,11.7,0,0,1,8.578-1l10.168,2.712a19.829,19.829,0,0,0,17.424-3.66l5.117-4.095a19.65,19.65,0,0,0,7.412-15.419v-2.212a11.682,11.682,0,0,1,3.327-8.191,19.714,19.714,0,0,0,5.5-15.661l-.066-.676a19.735,19.735,0,0,0-6.047-12.419l-3.408-3.241a4,4,0,1,0-5.513,5.8l3.408,3.242a11.746,11.746,0,0,1,3.6,7.389l.066.676a11.727,11.727,0,0,1-3.274,9.315,19.641,19.641,0,0,0-5.593,13.77v2.212a11.69,11.69,0,0,1-4.409,9.173l-5.117,4.094a11.785,11.785,0,0,1-10.365,2.176l-10.169-2.712a19.7,19.7,0,0,0-14.42,1.678l-9.881,5.3a11.337,11.337,0,0,1-6.1,1.386c-12.374-.858-22.388-14.195-23.491-15.715-.306-.422-.623-.822-.962-1.218-7.683-8.955-18.669-19.778-21.855-22.883a20.134,20.134,0,0,0-2.67-2.176,69.737,69.737,0,0,1-12-10.106,11.743,11.743,0,0,1-2.837-10.019Z" />
                <path d="M185.362,28.833a38.385,38.385,0,0,0-38.34,38.228c-2.151,39.928,34.519,65.473,36.083,66.541a4,4,0,0,0,4.514,0c1.564-1.068,38.234-26.613,36.083-66.541A38.385,38.385,0,0,0,185.362,28.833ZM215.708,67.4c1.672,30.056-22.7,51.837-30.35,57.9-7.658-6.05-32.018-27.766-30.342-57.9q.006-.109.006-.222a30.34,30.34,0,1,1,60.68,0Q215.7,67.286,215.708,67.4Z" />
                <path d="M185.362,49.444a17.729,17.729,0,1,0,17.73,17.729A17.749,17.749,0,0,0,185.362,49.444Zm0,27.458a9.729,9.729,0,1,1,9.73-9.729A9.739,9.739,0,0,1,185.362,76.9Z" />
                <path d="M48.444,188.472a16.743,16.743,0,0,0,9.667,2.853,16.75,16.75,0,0,0,9.668-2.853,9.854,9.854,0,0,1,11.1,0,16.747,16.747,0,0,0,9.668,2.853,4,4,0,0,0,0-8A9.023,9.023,0,0,1,83,181.612a17.806,17.806,0,0,0-19.335,0,9.852,9.852,0,0,1-11.1,0,16.743,16.743,0,0,0-9.667-2.853,16.742,16.742,0,0,0-9.666,2.853,9.019,9.019,0,0,1-5.551,1.713,9.014,9.014,0,0,1-5.547-1.712,16.729,16.729,0,0,0-9.664-2.854,4,4,0,0,0,0,8,9.014,9.014,0,0,1,5.547,1.712,16.729,16.729,0,0,0,9.664,2.854,16.743,16.743,0,0,0,9.667-2.853,9.015,9.015,0,0,1,5.55-1.713A9.016,9.016,0,0,1,48.444,188.472Z" />
                <path d="M118.646,203.084a9.019,9.019,0,0,1-5.552-1.712,17.806,17.806,0,0,0-19.335,0,9.857,9.857,0,0,1-11.1,0,17.8,17.8,0,0,0-19.333,0,9.851,9.851,0,0,1-11.1,0,16.733,16.733,0,0,0-9.665-2.854,4,4,0,0,0,0,8,9.015,9.015,0,0,1,5.548,1.712,16.735,16.735,0,0,0,9.664,2.853,16.754,16.754,0,0,0,9.667-2.852,9.849,9.849,0,0,1,11.1,0,17.809,17.809,0,0,0,19.334,0,9.855,9.855,0,0,1,11.105,0,16.754,16.754,0,0,0,9.667,2.852,4,4,0,1,0,0-8Z" />
                <path d="M256.333,276.554a17.8,17.8,0,0,0,19.334,0,9.855,9.855,0,0,1,11.105,0,16.747,16.747,0,0,0,9.668,2.853,4,4,0,0,0,0-8,9.023,9.023,0,0,1-5.553-1.713,17.806,17.806,0,0,0-19.335,0,9.852,9.852,0,0,1-11.1,0,17.8,17.8,0,0,0-19.334,0,9.845,9.845,0,0,1-11.1,0,16.729,16.729,0,0,0-9.664-2.854,4,4,0,0,0,0,8,9.014,9.014,0,0,1,5.547,1.712,17.8,17.8,0,0,0,19.331,0,9.849,9.849,0,0,1,11.1,0Z" />
                <path d="M326.535,291.166a9.02,9.02,0,0,1-5.552-1.713,17.806,17.806,0,0,0-19.335,0,9.852,9.852,0,0,1-11.1,0,17.8,17.8,0,0,0-19.334,0,9.845,9.845,0,0,1-11.1,0,16.73,16.73,0,0,0-9.665-2.854,4,4,0,1,0,0,8A9.015,9.015,0,0,1,256,296.312a17.795,17.795,0,0,0,19.33,0,9.849,9.849,0,0,1,11.1,0,17.806,17.806,0,0,0,19.335,0,9.855,9.855,0,0,1,11.105,0,16.753,16.753,0,0,0,9.667,2.853,4,4,0,0,0,0-8Z" />
                <path d="M242.116,17.524a9.85,9.85,0,0,1-11.1,0,16.734,16.734,0,0,0-9.663-2.853,4,4,0,0,0,0,8,9.008,9.008,0,0,1,5.547,1.712,17.8,17.8,0,0,0,19.33,0,9.853,9.853,0,0,1,11.1,0,17.807,17.807,0,0,0,19.334,0,9.855,9.855,0,0,1,11.105,0,16.75,16.75,0,0,0,9.668,2.852,4,4,0,0,0,0-8,9.023,9.023,0,0,1-5.553-1.713,17.811,17.811,0,0,0-19.335,0,9.854,9.854,0,0,1-11.1,0,17.8,17.8,0,0,0-19.332,0Z" />
                <path d="M327.535,39a9.02,9.02,0,0,1-5.552-1.713,17.806,17.806,0,0,0-19.335,0,9.852,9.852,0,0,1-11.1,0,17.8,17.8,0,0,0-19.334,0,9.845,9.845,0,0,1-11.1,0,16.73,16.73,0,0,0-9.665-2.854,4,4,0,0,0,0,8A9.015,9.015,0,0,1,257,44.142a17.795,17.795,0,0,0,19.33,0,9.849,9.849,0,0,1,11.1,0,17.806,17.806,0,0,0,19.335,0,9.855,9.855,0,0,1,11.105,0A16.746,16.746,0,0,0,327.535,47a4,4,0,0,0,0-8Z" />
              </svg>
            </div>
            <div>
              <p>Frete grátis para todo o Brasil</p>
            </div>
          </div>
        </Flex>
      </Section>
      <Section>
        <HeaderDescritive>
          <div>
            <h2>Garanta sua compra!</h2>
            <p>
              Os 6 maiores termogênicos naturais concentrados em cápsulas 8x
              mais potente, 100% comprovado, 100% garantido.
            </p>
          </div>
        </HeaderDescritive>
        <ProductRow>
          <Product>
            <div className="top">
              <h3>Experimente</h3>
              <div className="discount">
                <p>DESCONTO ESPECIAL DE 10%</p>
              </div>
            </div>
            <div className="product">
              {/* <picture>
                <img
                  sizes="(max-width: 3700px) 40vw, 1480px"
                  // srcSet={require('assets/imgDetox31_i647ic_c_scale,w_250.webp 250w')
                  //   require('Detox31_i647ic_c_scale,w_726.webp 726w')
                  //   require('Detox31_i647ic_c_scale,w_1047.webp 1047w')
                  //   require('Detox31_i647ic_c_scale,w_1479.webp 1479w')
                  //   require('Detox31_i647ic_c_scale,w_1480.webp 1480w')}
                  src={require('assets/img/webp/Detox31_i647ic_c_scale,w_1480.webp')}
                  alt="Detox31"
                />
              </picture> */}
              <img
                loading="lazy"
                src={require('assets/img/webp/Detox31-1080x1080.webp')}
                alt="detox31"
              />
            </div>
            <div className="cta">
              <p>
                De <span>R$197,00</span> por apenas <span>R$117,00</span>, em
                até 12x de:
              </p>
              <p>R$11,75</p>
            </div>
            <div className="btn">
              <A
                title="Comprar"
                href="https://ev.braip.com/ref?pl=pla0n19l&ck=chedn5r5&af=afigvq8p1"
                target="_blank"
                size="full"
              />
            </div>
          </Product>
          <Product>
            <div className="top">
              <h3>Evolua</h3>
            </div>
            <div className="product">
              <img
                loading="lazy"
                src={require('assets/img/webp/Detox31-1080x1080.webp')}
                alt="detox31"
              />
              <img
                loading="lazy"
                src={require('assets/img/webp/Detox31-1080x1080.webp')}
                alt="detox31"
              />
            </div>
            <div className="cta">
              <p>
                Por apenas <span>R$267,00</span>, em até 12x de:
              </p>
              <p>R$26,81</p>
            </div>
            <div className="btn">
              <A
                title="Comprar"
                href="https://ev.braip.com/ref?pl=pla0nymm&ck=chedn5r5&af=afigvq8p1"
                target="_blank"
                size="full"
              />
            </div>
          </Product>
          <Product>
            <div className="top">
              <h3>Evolução constante</h3>
            </div>
            <div className="product">
              <img
                loading="lazy"
                src={require('assets/img/webp/Detox31-1080x1080.webp')}
                alt="detox31"
              />
              <img
                loading="lazy"
                src={require('assets/img/webp/Detox31-1080x1080.webp')}
                alt="detox31"
              />
              <img
                loading="lazy"
                src={require('assets/img/webp/Detox31-1080x1080.webp')}
                alt="detox31"
              />
            </div>
            <div className="cta">
              <p>
                Por apenas <span>R$387,00</span>, em até 12x de:
              </p>
              <p>R$38,86</p>
            </div>
            <div className="btn">
              <A
                title="Comprar"
                href="https://ev.braip.com/ref?pl=plakr16l&ck=chedn5r5&af=afigvq8p1"
                target="_blank"
                size="full"
              />
            </div>
          </Product>
          <Product>
            <div className="top">
              <h3>Mantenha a evolução</h3>
            </div>
            <div className="product">
              <img
                loading="lazy"
                src={require('assets/img/webp/Detox31-1080x1080.webp')}
                alt="detox31"
              />
              <img
                loading="lazy"
                src={require('assets/img/webp/Detox31-1080x1080.webp')}
                alt="detox31"
              />
              <img
                loading="lazy"
                src={require('assets/img/webp/Detox31-1080x1080.webp')}
                alt="detox31"
              />
              <img
                loading="lazy"
                src={require('assets/img/webp/Detox31-1080x1080.webp')}
                alt="detox31"
              />
              <img
                loading="lazy"
                src={require('assets/img/webp/Detox31-1080x1080.webp')}
                alt="detox31"
              />
            </div>
            <div className="cta">
              <p>
                Por apenas <span>R$647,00</span>, em até 12x de:
              </p>
              <p>R$64,96</p>
            </div>
            <div className="btn">
              <A
                title="Comprar"
                href="https://ev.braip.com/ref?pl=plazzxjz&ck=chedn5r5&af=afigvq8p1"
                target="_blank"
                size="full"
              />
            </div>
          </Product>
        </ProductRow>
      </Section>
      <Section>
        <HeaderDescritive>
          <div>
            <h2>E fique tranquila(o)!</h2>
            <p>
              Se após o tratamento completo com DETOX31 e os resultados não
              forem satisfatórios, você poderá pedir seu dinheiro de volta.
              Neste período, basta enviar um E-mail para nós e devolveremos o
              valor investido.
            </p>
          </div>
        </HeaderDescritive>
      </Section>
      <Section>
        <HeaderDescritive>
          <div>
            <h2>Principais Dúvidas</h2>
          </div>
        </HeaderDescritive>

        <Collapse offset={5}>
          {collapseQuestion.map((item, index) => (
            <Collapse.Item key={index}>
              <Collapse.Header>
                <h3>{item.question}</h3>
              </Collapse.Header>
              <Collapse.Body>
                <p>{item.answer}</p>
              </Collapse.Body>
            </Collapse.Item>
          ))}
        </Collapse>
      </Section>
      <Footer>
        <Section>
          <div className="footer__info__blocks">
            <div className="footer__info__block">
              <h4>Informações legais</h4>

              <ul>
                <li>
                  <p>DAPLOS LTDA</p>
                </li>
                <li>
                  <p>
                    <strong>CNPJ: </strong>45.096.934/0001-07
                  </p>
                </li>
              </ul>
            </div>
            <div className="footer__info__block">
              <h4>Atendimento</h4>

              <ul>
                <li>
                  <p>sac@daplos.com</p>
                </li>
                <li>
                  <p>Whatsapp (31) 9 7190-4137</p>
                </li>
                <li>
                  <p>Segunda a Sexta: 08h as 18h</p>
                </li>
              </ul>
            </div>
            <div className="footer__info__block">
              <h4>Links úteis</h4>
              <ul>
                <li
                  className="open__modal"
                  onClick={() =>
                    callModal({
                      headerTitle: 'Termos de uso',
                      body: <TermosDeUso />,
                    })
                  }
                >
                  <p>Termos de uso</p>
                </li>
                <li
                  className="open__modal"
                  onClick={() =>
                    callModal({
                      headerTitle: 'Política de Privacidade',
                      body: <PoliticaPrivacidade />,
                    })
                  }
                >
                  <p>Política de privacidade</p>
                </li>
                <li
                  className="open__modal"
                  onClick={() =>
                    callModal({
                      headerTitle: 'Política de Devolução',
                      body: <PoliticaDevolucao />,
                    })
                  }
                >
                  <p>Política de devolução</p>
                </li>
              </ul>
            </div>
            <div className="footer__info__block">
              <h4>Entrega segura</h4>
              <ul>
                <li>
                  <p>Prazo de 7 a 12 dias úteis</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="signature">
            <span>COPYRIGHT © DAPLOS LTDA. TODOS OS DIREITOS RESERVADOS.</span>
          </div>
        </Section>
      </Footer>
      <ModalContainer />
    </>
  );
}

const Footer = styled.footer`
  height: auto;
  background: #fff;
  margin-top: 100px;
  padding: 40px 0;
  border-top: 1px solid rgba(225, 225, 225, 1);

  .footer__info__blocks {
    width: auto;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    flex-flow: wrap row;

    .footer__info__block {
      h4 {
        font-family: 'Jones Bold';
        font-size: 2.2rem;
      }

      > ul {
        list-style: none;
        padding: 0;
        .open__modal {
          cursor: pointer;
          p {
            text-decoration: underline;
          }
        }
        li {
          p {
            font-family: 'Jones Book';
            font-size: 1.4rem;
            margin: 2px 0;

            strong {
              font-family: 'Jones Bold';
            }
          }
        }
      }
    }
  }

  .signature {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 80px;
  }
`;

const GarantiesRowStyle = css`
  gap: 50px;
  justify-content: flex-start;
  flex-flow: wrap row;
  height: auto;
  width: 100%;
  > div {
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    height: auto;
    flex-flow: nowrap column;
    padding: 10px 20px;
    border-radius: 15px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 100vw;
      flex-grow: 1;
      flex-shrink: 0;
      flex-basis: auto;
    }
    p {
      flex-grow: 1;
      flex-shrink: 0;
      flex-basis: auto;
      font-family: 'Jones Bold';
      color: var(--main-font-color);
      font-size: 2rem;
      max-width: 230px;
      margin-left: 10px;
      text-align: center;
      line-height: 1.2;
    }
  }
`;

const collapseQuestion = [
  {
    question: 'Mais como vou saber se vou emagrecer mesmo?',
    answer:
      'Nosso tratamento tem mais de 98% de aprovação no mercado, foi testado e criado por 47 médicos endoclinologistas, nossa empresa já dá os 30 dias de garantia pois sabe da qualidade do produto.',
  },
  {
    question: 'Como vou saber se chega realmente o produto?',
    answer: `
    Nosso site tem 4 blindadores de segunça inclusive os blindadores
    de segurança do Google, nossa empresa já está bastante tempo no
    mercado. Vou te mandar o CNPJ da empresa que fabrica o produto e
    também faz as postagens. A postagem é feita pela: Gold Club
    26.747.518/0001-87 Ele é fabricado por: BCM IND E TERCEIRIZACAO
    DE SUPLEMENTOS EIRELI 05.534.395/0001-26
    `,
  },
  {
    question: 'Se eu emagrecer vou engordar novamente?',
    answer: `
    O nosso tratamento não tem efeito rebote. O detox31 vai diminuir a sua fome e tambem sua ansiedade, asim quando você emagrecer não vai engordar de novo, pois seu organismo vai estar adaptado a mesma alimentaçao. Desta forma não ter porque você ganhar peso novamente.
    `,
  },
  {
    question: 'De onde é a Empresa?',
    answer: `
    A empresa é de Pompéu-MG
    `,
  },

  {
    question: 'Quantos kilos vou perder por mês? ',
    answer: `
    Em media você vai perder entre 4 a 7 kilos por mês, dependendo do seu metabolismo você consegue perder até mais.
    `,
  },

  {
    question: 'Qual a composição?',
    answer: `
    ✅Café Verde
    ✅Chá Verde
    ✅Berinjela
    ✅ Gengibre
    ✅ Guaraná
    ✅ Cafeína
    `,
  },

  {
    question: 'Tem garantia?',
    answer: `
    SIM! Se após o tratamento completo com DETOX31 e os resultados não forem satisfatórios, você poderá pedir seu dinheiro de volta. Neste período, basta enviar um E-mail para nós e devolveremos o valor investido.
    `,
  },

  {
    question: 'Qual o prazo de entrega?',
    answer: `
    De 7 a 17 dias úteis para qualquer lugar do Brasil.
    `,
  },
  {
    question: 'Pago frete?',
    answer: `
    O frete é grátis para todo Brasil.
    `,
  },
  {
    question: 'Como funciona a garantia?',
    answer: `
    Fazendo tratamento corretamente, sem exagerar na alimentação, e não tendo resultados, a empresa devolve seu dinheiro 100% de volta.
    `,
  },
  {
    question: 'Entrega na minha cidade?',
    answer: `
    Sim, entrega para todo Brasil com frete grátis.
    `,
  },
  {
    question: 'Tenho pressão alta posso tomar? ',
    answer: `
    Sim o tratamento é 100% natural, não vai alterar sua pressão.
    `,
  },
  {
    question: 'Tenho diabetes posso tomar?',
    answer: `
    Sim, o tratamento não tem restrição para quem tem diabetes pois ele é 100% natural.
    `,
  },
  {
    question: 'Quem tem alergia a frutos do mar pode tomar?',
    answer: `
    Não, o tratamento não é indicado para quem tem alergia a frutos do mar ou alergia à algum componente que esteja na composição.
    `,
  },
  {
    question: 'Tenho câncer posso tomar?',
    answer: `
    Pode sim, porém o indicado é conversar com seu médico primeiro.
    `,
  },
  {
    question: 'Tenho tireóide posso tomar? ',
    answer: `
    Pode sim, porém deve ser tomado com uma alimentação balanceada, pois o seu metabolismo é mais lento do que o normal.
    `,
  },
  {
    question: 'Parcela no cartão? ',
    answer: `
    Sim em até 12x
    `,
  },
  {
    question: 'Parcela no boleto? ',
    answer: `
    Não, apenas pagamento à vista no boleto
    `,
  },
  {
    question: 'Parcela no PIX? ',
    answer: `
    Não, apenas pagamento à vista no PIX
    `,
  },
  {
    question: 'Qual a forma de pagamento? ',
    answer: `
    Parcelamento em 12x no cartão, boleto bancário e pix à vista.
    `,
  },
  {
    question: 'Posso consumir bebida alcoólica? ',
    answer: `
    O correto é não consumir bebida ALCOÓLICA, caso beber, tomar o tratamento normalmente, porém deixar só para finais de semana, e sem exageros.
    `,
  },
  {
    question: 'Estou grávida posso tomar? ',
    answer: `
    Não, somente com autorização médica
    `,
  },
  {
    question: 'Estou amamentando, posso tomar?',
    answer: `
    Somente se o bebê tiver 9 meses de vida.
    `,
  },
  {
    question: 'Corta o efeito do anticoncepcional?',
    answer: `
    Não, por ser um suplemento alimentar natural, o DETOX31, não corta efeito do seu anticoncepcional.
    `,
  },
];

const TermosDeUsoStyled = styled.div`
  padding: 0 0 20px;
  h3 {
    font-size: 1.8rem;
    font-family: 'Jones Bold';
  }
  p {
    font-size: 1.4rem;
  }
`;

const TermosDeUso = () => {
  return (
    <TermosDeUsoStyled>
      <p>
        Estes termos de serviço regulam o uso deste site. Ao acessá-lo você
        concorda com estes termos. Por favor, consulte regularmente os nossos
        termos de serviço.
      </p>

      <h3>Acesso ao site</h3>

      <p>
        Para acessar o conteúdo deste site poder ser solicitado ao usuário
        algumas informações pessoais como nome, e-mail e outros. Se acharmos que
        as informações não são corretas ou verdadeiras, temos o direito de
        recusar e/ou cancelar o acesso a qualquer tempo, sem notificação prévia.
      </p>

      <h3>Restrições ao uso</h3>

      <p>
        Você só poderá usar este site para propósitos permitidos por nós. Você
        não poderá usá-lo em qualquer outro objetivo, especialmente comercial,
        sem o nosso consentimento prévio. Não associe nossas marcas a nenhuma
        outra. Não exponha nosso nome, logotipo, logomarca entre outros,
        indevidamente e de forma a causar confusão.
      </p>

      <h3>Propriedade da informação</h3>
      <p>
        O conteúdo do site não pode ser copiado, distribuído, publicado,
        carregado, postado ou transmitido por qualquer outro meio sem o nosso
        consentimento prévio, a não ser que a finalidade seja apenas a
        divulgação.
      </p>

      <h3>Hyperlinks</h3>
      <p>
        Este site pode conter links para outros websites que não são mantidos ou
        relacionados à nossa empresa. Não somos responsáveis pelo conteúdo
        destes links. O usuário assume completamente o risco ao acessar estes
        hyperlinks.
      </p>

      <h3>Comentários</h3>
      <p>
        Ao postar algum comentário ou depoimento em nosso site você autoriza a
        publicação do mesmo em qualquer lugar que desejarmos, a fim de cooperar
        com a divulgação de nossos produtos.
      </p>
      <h3>Aviso legal</h3>
      <p>
        A informação obtida ao usar este site não é completa e não cobre todas
        as questões, tópicos ou fatos que possam ser relevantes para seus
        objetivos.O uso deste site é de sua total responsabilidade.O conteúdo é
        oferecido como está e sem garantias de qualquer tipo, expressas ou
        implícitas. O conteúdo deste site não é palavra final sobre qualquer
        assunto, e podemos fazer melhorias a qualquer momento. Você, e não a
        nossa empresa, assume o custo de qualquer serviço, reparo ou correção
        necessários no caso de qualquer perda ou dano consequente do uso deste
        site ou seu conteúdo. Você entende que nossa empresa não pode e não
        garante que arquivos disponíveis para download da Internet estejam
        livres de vírus, worms, cavalos de Tróia ou outro código que possa
        manifestar propriedades contaminadoras ou destrutivas.
      </p>

      <h3>Limitação de responsabilidade</h3>

      <p>
        A EMPRESA, SUAS FILIAIS, AFILIADOS, LICENCIANTES, PROVEDORES DE SERVIÇO,
        PROVEDORES DE CONTEÚDO, EMPREGADOS, AGENTES, ADMINISTRADORES E DIRETORES
        NÃO SERÃO RESPONSÁVEIS POR QUALQUER DANO EVENTUAL, DIRETO, INDIRETO,
        PUNITIVO, REAL, CONSEQUENTE, ESPECIAL, EXEMPLAR OU DE QUALQUER OUTRO
        TIPO, INCLUINDO PERDA DE RECEITA OU RENDA, DOR E SOFRIMENTO, ESTRESSE
        EMOCIONAL OU SIMILARES MESMO QUE A EMPRESA TENHA ACONSELHADO SOBRE A
        POSSIBILIDADE DE TAIS DANOS. DE NENHUMA FORMA A RESPONSABILDIADE
        COLETIVA DA EMPRESA E SUAS FILIAIS, AFILIADOS, LICENCIANTES, PROVEDORES
        DE SERVIÇO, PROVEDORES DE CONTEÚDO, EMPREGADOS, AGENTES, ADMINISTRADORES
        E DIRETORES EM RELAÇÃO A TERCEIROS (INDEPENDENTE DO TIPO DE AÇÃO, SEJA
        POR CONTRATO OU QUALQUER OUTRO) EXCEDERÁ A QUANTIA DE R$100 OU O VALOR
        PAGO À EMPRESA POR TAL CONTEÚDO, PRODUTO OU SERVIÇO DO QUAL A QUESTÃO
        TENHA SIDO LEVANTADA.
      </p>

      <h3>Indenização</h3>

      <p>
        Você vai indenizar e isentar a Empresa, suas filiais, afiliados,
        licenciantes, provedores de serviço, provedores de conteúdo, empregados,
        agentes, administradores e diretores (referidas agora como Partes
        Isentas) de qualquer violação desse Termo de Uso por você, incluindo o
        uso do Conteúdo diferente do expresso aqui. Você concorda que as Partes
        Isentas não têm responsabilidade ou conexão com qualquer violação ou uso
        não autorizado e você concorda em remediar toda e qualquer perda, dano,
        julgamento, prêmios, custo, despesas e honorários advogatícios das
        Partes Isentas ligadas a violação. Você também indenizará e isentará as
        Partes Isentas de qualquer reivindicação de terceiros resultante do uso
        da informação contida neste site.
      </p>

      <h3>Marcas registradas</h3>

      <p>
        Marcas e logos presentes neste site são propriedade da empresa ou da
        parte que as disponibilizaram para a empresa. A empresa e as partes que
        disponibilizaram marca e logo detém todos os direitos sobre as mesmas.
      </p>

      <h3>Informação provida pelo usuário</h3>

      <p>
        Você não pode publicar enviar, apresentar ou fazer conexão a esse site
        qualquer material que: você não tenha o direito de postar, incluindo
        material de propriedade de terceiros defenda atividade ilegal ou
        discutir a intenção de fazer algo ilegal; seja vulgar, obsceno,
        pornográfico ou indecente não diga respeito diretamente a este site;
        possa ameaçar ou insultar outros, difamar, caluniar, invadir
        privacidade, perseguir, ser obsceno, pornográfico, racista, assediar ou
        ofender; busca explorar ou prejudicar crianças expondo-as a conteúdo
        inapropriado, perguntar sobre informações pessoais ou qualquer outro do
        tipo; infrinja qualquer propriedade intelectual ou outro direito de
        pessoa ou entidade, incluindo violações de direitos autorais,marca
        registrada ou direitos de publicidade; violam qualquer lei ou podem ser
        considerados para violar a lei; personifique ou deturpar sua conexão com
        qualquer entidade ou pessoa; ou ainda manipula títulos ou
        identificadores para encobrir a origem do conteúdo promova qualquer
        empreendimento comercial (ex: oferecer produtos ou serviços em promoção)
        ou que engaje de qualquer forma em uma atividade comercial (ex: realizar
        sorteios ou concursos, expor banners patrocinadores e/ou solicitar bens
        e serviços) exceto que especificamente autorizado neste site; solicitar
        fundos, divulgações ou patrocinadores; inclua programas com vírus, worms
        e/ou Cavalos de Tróia ou qualquer outro código, arquivo ou programa de
        computador destinado a interromper, destruir ou limitar a funcionalidade
        de qualquer software ou hardware de computador ou telecomunicações;
        interrompa o fluxo normal da conversa, faça com que a tela “role” mais
        rápido que os os outros usuários conseguem acompanhar ou mesmo agir de
        modo a afetar a habilidade de outras pessoas de se engajar em atividades
        em tempo real neste site; inclua arquivos em formato MP3 desobedeça
        qualquer política ou regra estabelecida de tempos em tempos para o uso
        desse site ou qualquer rede conectada a ele; ou contenha hiperlinks para
        sites que contenham conteúdo que se enquadrem nas descrições acima.
        Mesmo sem a obrigação de faze-lo, nossa Empresa reserva o direito de
        monitorar o uso deste site para determinar o cumprimento desse Termo de
        Uso assim como o de remover ou vetar qualquer informação por qualquer
        razão. De qualquer forma você é completamente responsável pelo conteúdo
        de seus envios. Você sabe e concorda que nem a Empresa ou qualquer
        terceiro provendo conteúdo para a Empresa assumirá qualquer
        responsabilidade por nenhuma ação ou inação da Empresa ou referido
        terceiro a respeito de qualquer envio.
      </p>

      <h3>Segurança</h3>

      <p>
        Toda senha usada para este site é somente para uso individual. Você é
        responsável pela segurança de sua senha (se for o caso). A Empresa tem o
        direito de monitorar a segurança de sua senha e ao seu critério pode
        pedir que você a mude. Se você usar qualquer senha que a Empresa
        considere insegura, a Empresa tem o direito de requisitar que a senha
        seja modificada e/ou cancelar a sua conta. É proibido usar qualquer
        serviço ou ferramenta conectada a este site para comprometer a segurança
        ou mexer com os recursos do sistema e/ou contas. O uso ou distribuição
        de ferramentas destinadas para comprometer a segurança (ex: programas
        para descobrir senha, ferramentas de crack ou de sondagem da rede) são
        estritamente proibidos. Se você estiver envolvido em qualquer violação
        da segurança do sistema, a Empresa se reserva o direito de fornecer suas
        informações para os administradores de sistema de outros sites para
        ajudá-los a resolver incidentes de segurança. A Empresa se reserva o
        direito de investigar potenciais violações a esse Termo de Uso. A
        Empresa se reserva o direito de cooperar totalmente com as autoridades
        competentes ou pedidos da justiça para que a Empresa revele a identidade
        de qualquer pessoa que publique e-mail, mensagem ou disponibilize
        qualquer material que possa violar esse Termo de Uso.
      </p>

      <strong>
        AO ACEITAR ESSE ACORDO VOCÊ ISENTA A EMPRESA DE QUALQUER CONSEQUÊNCIA
        RESULTANTE DE QUALQUER AÇAO DA EMPRESA DURANTE OU COMO RESULTADO DE SUAS
        INVESTIGAÇÕES E/OU DE AÇÕES TOMADAS RESULTANTES DE INVESTIGAÇÕES TANTO
        DA EMPRESA QUANTO DAS AUTORIDADES DE JUSTIÇA COMPETENTES
      </strong>
    </TermosDeUsoStyled>
  );
};

const PoliticaPrivacidadeStyled = styled.div`
  h3 {
    font-size: 1.8rem;
    font-family: 'Jones Bold';
  }
  p {
    font-size: 1.4rem;
  }
`;

const PoliticaPrivacidade = () => {
  return (
    <PoliticaPrivacidadeStyled>
      <p>
        Todas as suas informações pessoais recolhidas, serão usadas para o
        ajudar a tornar a sua visita no nosso site o mais produtiva e agradável
        possível.
      </p>

      <p>
        A garantia da confidencialidade dos dados pessoais dos utilizadores do
        nosso site é importante.
      </p>
      <p>
        Todas as informações pessoais relativas a membros, assinantes, clientes
        ou visitantes que usem o nosso produto serão tratadas em concordância
        com a Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei
        n.º 67/98).
      </p>
      <p>
        A informação pessoal recolhida pode incluir o seu nome, e-mail, número
        de telefone e/ou telemóvel, morada, data de nascimento e/ou outros.
      </p>

      <p>
        O uso de tal pressupõe a aceitação deste Acordo de privacidade. A nossa
        equipa reserva-se ao direito de alterar este acordo sem aviso prévio.
        Deste modo, recomendamos que consulte a nossa política de privacidade
        com regularidade de forma a estar sempre atualizado.
      </p>

      <h3>Os anúncios</h3>

      <p>
        Tal como outros websites, coletamos e utilizamos informação contida nos
        anúncios. A informação contida nos anúncios, inclui o seu endereço IP
        (Internet Protocol), o seu ISP (Internet Service Provider, como o Sapo,
        Clix, ou outro), o browser que utilizou ao visitar o nosso website (como
        o Internet Explorer ou o Firefox), o tempo da sua visita e que páginas
        visitou dentro do nosso website.
      </p>

      <h3>Cookie DoubleClick Dart</h3>

      <p>
        O Google, como fornecedor de terceiros, utiliza cookies para exibir
        anúncios no nosso website;
      </p>
      <p>
        Com o cookie DART, o Google pode exibir anúncios com base nas visitas
        que o leitor fez a outros websites na Internet;
      </p>

      <p>
        Os utilizadores podem desativar o cookie DART visitando a Política de
        privacidade da rede de conteúdo e dos anúncios do Google.
      </p>

      <h3>Os Cookies e Web Beacons</h3>
      <p>
        Utilizamos cookies para armazenar informação, tais como as suas
        preferências pessoas quando visita o nosso website. Isto poderá incluir
        um simples popup, ou uma ligação em vários serviços que providenciamos,
        tais como fóruns.
      </p>
      <p>
        Em adição também utilizamos publicidade de terceiros no nosso website
        para suportar os custos de manutenção. Alguns destes publicitários,
        poderão utilizar tecnologias como os cookies e/ou web beacons quando
        publicitam no nosso website, o que fará com que esses publicitários
        (como o Google através do Google AdSense) também recebam a sua
        informação pessoal, como o endereço IP, o seu ISP, o seu browser, etc.
        Esta função é geralmente utilizada para geotargeting (mostrar
        publicidade de Lisboa apenas aos leitores oriundos de Lisboa por ex.) ou
        apresentar publicidade direcionada a um tipo de utilizador (como mostrar
        publicidade de restaurante a um utilizador que visita sites de culinária
        regularmente, por ex.).
      </p>

      <p>
        Você detém o poder de desligar os seus cookies, nas opções do seu
        browser, ou efetuando alterações nas ferramentas de programas
        Anti-Virus, como o Norton Internet Security. No entanto, isso poderá
        alterar a forma como interage com o nosso website, ou outros websites.
        Isso poderá afetar ou não permitir que faça logins em programas, sites
        ou fóruns da nossa e de outras redes.
      </p>

      <h3>Ligações a Sites de terceiros</h3>
      <p>
        Nosso produto possui ligações para outros sites, os quais, a nosso ver,
        podem conter informações / ferramentas úteis para os nossos visitantes.
        A nossa política de privacidade não é aplicada a sites de terceiros,
        pelo que, caso visite outro site a partir do nosso deverá ler a politica
        de privacidade do mesmo.
      </p>
      <p>
        Não nos responsabilizamos pela política de privacidade ou conteúdo
        presente nesses mesmos sites.
      </p>
    </PoliticaPrivacidadeStyled>
  );
};

const PoliticaDevolucaoStyled = styled.div`
  h3 {
    font-size: 1.8rem;
    font-family: 'Jones Bold';
  }
  p {
    font-size: 1.4rem;
  }
`;

const PoliticaDevolucao = () => {
  return (
    <PoliticaDevolucaoStyled>
      <h3>Direito de arrependimento:</h3>
      <p>
        ao Cliente será facultado o exercício do direito de arrependimento da
        compra, com a finalidade de devolução do Produto, hipótese na qual
        deverão ser observadas as seguintes condições: o prazo de desistência da
        compra do produto é de até 7 (sete) dias corridos, a contar da data do
        recebimento; em caso de devolução, o produto deverá ser devolvido na
        embalagem original e acompanhado do DANFE (Documento Auxiliar da Nota
        Fiscal Eletrônica)
      </p>
      <h3>
        O Cliente deverá solicitar a devolução através do Serviço de Atendimento
        ao Cliente (SAC) pelo e-mail:
      </h3>
      <p>
        (e-mail na página inicial) e todas as despesas decorrentes de coleta ou
        postagem do produto serão de responsabilidade do cliente.
      </p>
      <h3>Após a chegada do produto ao Centro de Distribuição:</h3>
      <p>
        nossa equipe verificará se as condições supra citadas foram atendidas.
        Em caso afirmativo, providenciará a restituição no valor total da
        compra.
      </p>
      <h3>Solicite através do e-mail (e-mail na página inicial):</h3>
      <p>
        o endereço do nosso centro de distribuição para envio da mercadoria a
        ser devolvida.
      </p>
    </PoliticaDevolucaoStyled>
  );
};

// const PopulateOnClick = ({ data, children, customStyle }: any) => {
//   const [contents, setContents] = React.useState<any>({
//     elements: [],
//     remaining: data,
//   });

//   const handlePopulate = () => {
//     const total = contents.remaining;
//     const remains = new Array(...total);
//     const removed = remains.splice(0, 3);

//     const retrieved = { removed, remains };

//     setContents(current => {
//       return {
//         remaining: retrieved.remains,
//         elements: [...current.elements, retrieved.removed],
//       };
//     });
//     return false;
//   };

//   return (
//     <>
//       <Flex
//         css={
//           customStyle
//             ? customStyle
//             : {
//                 gap: '15px',
//                 justifyContent: 'space-between',
//                 width: 'auto',
//                 margin: '50px auto',
//                 flexFlow: 'wrap row',
//               }
//         }
//       >
//         {children}
//         {contents.elements}
//       </Flex>
//       <div className="center">
//         <Button
//           title={`Ver mais ${contents.remaining.length}`}
//           size="md"
//           onClick={handlePopulate}
//         />
//       </div>
//     </>
//   );
// };
