import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { ReactComponent as CloseIcon } from '../../assets/products/svg_close.svg';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

export const VisualSlider = ({ data, selectedId, setSelectedId }) => {
  // popup
  const handleSwiper = (swiper) => {
    swiper.slideTo(selectedId);
  };

  return (
    <AnimatePresence>
      {selectedId && (
        <VisualLayer layoutId={selectedId} onClick={() => setSelectedId(null)}>
          <LayerInner
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.5,
              y: -1000,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                delay: 0.2,
              },
            }}
          >
            <CloseButton onClick={() => setSelectedId(null)}>
              <CloseIcon />
            </CloseButton>
            <VisualSwiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              navigation
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
  );
};

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
