import { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getCommunity } from '../../api';
import { NavListItem } from '../../components/products/NavListItem';

export const NavContainer = ({
  review,
  classIntro,
  curriculum,
  creator,
  community,
}) => {
  // 커뮤니티 data
  const { data: communityData } = useQuery('community', getCommunity);

  // Nav
  const navigation = {
    review: '후기',
    classIntro: '클래스 소개',
    curriculum: '커리큘럼',
    creator: '크리에이터',
    community: '커뮤니티',
  };
  const keys = Object.keys(navigation);
  const tabs = useRef();

  const handleMoveTo = (_target) => (e) => {
    const headerH =
      document.querySelector('header').clientHeight + tabs.current.offsetHeight;

    window.scrollTo({
      top: eval(_target).current.offsetTop - headerH,
      behavior: 'smooth',
    });
    Array.from(e.target.offsetParent.children).map((item) =>
      item.classList.remove('active'),
    );
    e.target.parentNode.classList.add('active');
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerH =
        document.querySelector('header').clientHeight +
        tabs.current?.offsetHeight;
      let scrollY = window.scrollY;
      let top = keys.map((item) => eval(item).current?.offsetTop);

      if (tabs.current) {
        Array.from(tabs.current.children).map((item) =>
          item?.classList.remove('active'),
        );
      }
      if (top[0] <= scrollY + headerH && top[1] > scrollY + headerH) {
        tabs.current.children[0].classList.add('active');
      } else if (top[1] <= scrollY + headerH && top[2] > scrollY + headerH) {
        tabs.current.children[1].classList.add('active');
      } else if (top[2] <= scrollY + headerH && top[3] > scrollY + headerH) {
        tabs.current.children[2].classList.add('active');
      } else if (top[3] <= scrollY + headerH && top[4] > scrollY + headerH) {
        tabs.current.children[3].classList.add('active');
      } else if (
        top[4] <= scrollY + headerH &&
        top[4] + community.current.clientHeight > scrollY + headerH
      ) {
        tabs.current.children[4].classList.add('active');
      } else {
        if (tabs.current) {
          Array.from(tabs.current.children).map((item) =>
            item.classList.remove('active'),
          );
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // clean up
      window.removeEventListener('resize', handleScroll); // clean up
    };
  }, [community, keys]);

  return (
    <Tabs ref={tabs}>
      {keys.map((item, index) => (
        <NavListItem
          item={item}
          key={index}
          communityData={communityData}
          handleMoveTo={handleMoveTo}
          navigation={navigation}
        />
      ))}
    </Tabs>
  );
};

const Tabs = styled.ul`
  position: sticky;
  top: 78px;
  z-index: 5;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    line-height: 1;
    padding: 10px 0;
  }
`;
