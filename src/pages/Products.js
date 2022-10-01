import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Aside } from '../components/products/aside/Aside';
import { Review } from '../components/products/contents/Review';
import { Visual } from '../components/products/contents/Visual';
import { ClassIntro } from '../components/products/contents/ClassIntro';
import { Curriculum } from '../components/products/contents/Curriculum';
import { Creator } from '../components/products/contents/Creator';
import { Community } from '../components/products/contents/Community';
import { TodayProducts } from '../components/products/contents/TodayProducts';
import { useQuery } from 'react-query';
import { getCommunity, getCurriculum, getLeaderBoard } from '../api';
import React, { useEffect, useRef } from 'react';

const Containers = styled.div`
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1216px;
  margin: 24px auto 0 auto;
`;
const Contents = styled.div`
  width: 800px;
`;
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
const ItemList = styled.li`
  button {
    text-decoration: none;
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;
    padding: 14px 0;
    display: flex;
    align-items: center;
    color: rgb(162, 162, 162);
  }
  &.active button {
    color: #000;
  }
`;
const LeaderBoard = styled.div`
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid rgb(248, 248, 248);
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    text-decoration: none;
    padding: 0 0 0 24px;
  }
`;
const Image = styled.img`
  max-width: 100%;
`;
const LeaderInfo = styled.dl``;
const LeaderInfoDT = styled.dt`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0px;
  font-weight: bold;
  color: inherit;
`;
const LeaderInfoDD = styled(LeaderInfoDT)`
  font-size: 11px;
`;
const LeaderLink = styled.div`
  width: 120px;
`;
const ClassInfo = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgb(248, 248, 248);
`;
const ClassInfoH2 = styled.h2`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0px 0px 16px;
  font-weight: bold;
  color: rgb(0, 0, 0);
`;
const ClassInfoDL = styled.dl`
  display: flex;
`;
const ClassInfoDT = styled.dt`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px 12px 0px 0px;
  color: rgb(162, 162, 162);
`;
const ClassInfoDD = styled(ClassInfoDT)`
  margin: 0px 48px 0px 0px;
  color: rgb(26, 26, 26);
`;
const RefBox = styled.div``;

const Products = () => {
  // 커뮤니티 data
  const { data: communityData } = useQuery('community', getCommunity);

  // 커리큘럼 data
  const { data: curriculumData } = useQuery('curriculum', getCurriculum);
  // 커리큘럼 세부강의 갯수
  const totalFn = () => {
    const total = [];
    curriculumData?.map((items) =>
      items?.menuLink.map((item, i) => total.push(i)),
    );
    return total.length;
  };

  // leaderBoard data
  const { data: leaderBoardData } = useQuery('leaderBoard', getLeaderBoard);

  // Nav
  const navigation = {
    review: '후기',
    classIntro: '클래스 소개',
    curriculum: '커리큘럼',
    creator: '크리에이터',
    community: '커뮤니티',
  };
  const keys = Object.keys(navigation);

  // scrollspy
  const review = useRef(),
    classIntro = useRef(),
    curriculum = useRef(),
    creator = useRef(),
    community = useRef(),
    tabs = useRef();

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
  }, [keys]);

  return (
    <Containers>
      <Visual />
      <Container>
        <Contents>
          <Tabs ref={tabs}>
            {keys.map((item) =>
              item === 'community' ? (
                <ItemList key={item}>
                  <button onClick={handleMoveTo(item)}>
                    {navigation[item]}&nbsp;
                    {communityData?.length}개
                  </button>
                </ItemList>
              ) : (
                <ItemList key={item}>
                  <button onClick={handleMoveTo(item)}>
                    {navigation[item]}
                  </button>
                </ItemList>
              ),
            )}
          </Tabs>

          <LeaderBoard>
            <Link to={`${leaderBoardData?.url}`} target={'_blank'}>
              <LeaderInfo>
                <LeaderInfoDT>{leaderBoardData?.title}</LeaderInfoDT>
                <LeaderInfoDD>{leaderBoardData?.description}</LeaderInfoDD>
              </LeaderInfo>
              <LeaderLink>
                <Image
                  src={leaderBoardData?.imageURL}
                  alt={leaderBoardData?.imageAlt}
                />
              </LeaderLink>
            </Link>
          </LeaderBoard>

          <ClassInfo>
            <ClassInfoH2>클래스 정보</ClassInfoH2>
            <ClassInfoDL>
              <ClassInfoDT>클래스 분량</ClassInfoDT>
              <ClassInfoDD>
                {curriculumData?.length}개 챕터,&nbsp;
                {totalFn()}개 세부강의
              </ClassInfoDD>
              <ClassInfoDT>수강 가능일</ClassInfoDT>
              <ClassInfoDD>{leaderBoardData?.coursesDate}</ClassInfoDD>
              <ClassInfoDT>자막 포함 여부</ClassInfoDT>
              <ClassInfoDD>{leaderBoardData?.coursesDate}</ClassInfoDD>
            </ClassInfoDL>
          </ClassInfo>

          {/* 후기 */}
          <RefBox ref={review}>
            <Review />
          </RefBox>

          {/* 클래스 소개 */}
          <RefBox ref={classIntro}>
            <ClassIntro />
          </RefBox>

          {/* 커리큘럼 */}
          <RefBox ref={curriculum}>
            <Curriculum />
          </RefBox>

          {/* 크리에이터 */}
          <RefBox ref={creator}>
            <Creator />
          </RefBox>

          {/* 커뮤니티 */}
          <RefBox ref={community}>
            <Community />
          </RefBox>
        </Contents>

        <Aside />
      </Container>

      <TodayProducts />
    </Containers>
  );
};

export default Products;
