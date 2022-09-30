import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../common/Loader';
import { getVisual } from '../../../api';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const VisualWrap = styled(motion.div)`
  display: flex;
  gap: 6px;
  width: 1216px;
  margin: 0 auto;
  height: 520px;
`;
const Picture = styled.picture`
  width: 58%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Grid = styled.div`
  width: 42%;
  display: grid;
  gap: 6px;
`;
const GridList = styled.div`
  grid-template-columns: 1fr;
  height: 257px;

  &:first-child {
    grid-column: 1 / span 2;
  }
`;
const Button = styled.button`
  width: 100%;
  height: 100%;
`;
const VisualLayer = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 10;
  inset: 0px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.72);
  opacity: 1;
  visibility: visible;
  overscroll-behavior: contain;
`;
const LayerInner = styled(motion.div)`
  position: relative;
  max-width: 896px;
  width: 100%;
`;
const CloseButton = styled(motion.button)`
  position: absolute;
  right: 0;
  top: -24px;
  z-index: 11;
  color: #fff;
`;
const VisualSwiper = styled(Swiper)`
  &:hover {
    .swiper-button-prev,
    .swiper-button-next {
      opacity: 1;
    }
  }
  .swiper-slide {
  }
  .swiper-button-prev,
  .swiper-button-next {
    transition: 0.3s;
    opacity: 0;

    &:after {
      font-size: 32px;
      color: #fff;
    }
  }
  .swiper-pagination {
    position: static;
    margin-top: 10px;
    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
      margin: 0px px 8px;
      border-radius: 3px;
      background-color: #fff;
      opacity: 0.56;
      transition: 0.3s;
      &.swiper-pagination-bullet-active {
        width: 24px;
        background-color: #fff;
        opacity: 1;
      }
    }
  }
`;

export function Visual() {
  // data
  const { data, isLoading } = useQuery('visual', getVisual);

  // popup
  const [selectedId, setSelectedId] = useState(null);
  const handleSwiper = (swiper) => {};

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <VisualWrap layoutId={selectedId}>
            <Picture>
              {data.slice(0, 1).map((item) => (
                <Button key={item.id} onClick={() => setSelectedId('modal')}>
                  <Image src={item.imageUrl} alt={item.imageAlt} />
                </Button>
              ))}
            </Picture>
            <Grid>
              {data.slice(1).map((item) => (
                <GridList key={item.id}>
                  <Button onClick={() => setSelectedId('modal')}>
                    <Image src={item.imageUrl} alt={item.imageAlt} />
                  </Button>
                </GridList>
              ))}
            </Grid>
          </VisualWrap>

          <AnimatePresence>
            {selectedId && (
              <VisualLayer
                layoutId={selectedId}
                onClick={() => setSelectedId(null)}
              >
                <LayerInner
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, scale: 0.5, y: -1000 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                >
                  <CloseButton onClick={() => setSelectedId(null)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18.5 4L12 10.5 5.5 4 4 5.5l6.5 6.5L4 18.5 5.5 20l6.5-6.5 6.5 6.5 1.5-1.5-6.5-6.5L20 5.5 18.5 4z"
                        fill="#FFF"
                      ></path>
                    </svg>
                  </CloseButton>
                  <VisualSwiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    autoplay={false}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => handleSwiper(swiper)}
                  >
                    {data.map((item) => (
                      <SwiperSlide key={item.id}>
                        <Image src={item.imageUrl} alt={item.imageAlt} />
                      </SwiperSlide>
                    ))}
                  </VisualSwiper>
                </LayerInner>
              </VisualLayer>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
