import styled from 'styled-components';
import React, { useRef } from 'react';
import { AsideContainer } from '../containers/products/AsideContainer';
import { ReviewContainer } from '../containers/products/ReviewContainer';
import { ClassIntroContainer } from '../containers/products/ClassIntroContainer';
import { CurriculumContainer } from '../containers/products/CurriculumContainer';
import { CreatorContainer } from '../containers/products/CreatorContainer';
import { CommunityContainer } from '../containers/products/CommunityContainer';
import { VisualContainer } from '../containers/products/VisualContainer';
import { TodayProductsContainer } from '../containers/products/TodayProductsContainer';
import { NavContainer } from '../containers/products/NavContainer';
import { LeaderBoardContainer } from '../containers/products/LeaderBoardContainer';

export const Products = () => {
  // scrollspy
  const review = useRef(),
    classIntro = useRef(),
    curriculum = useRef(),
    creator = useRef(),
    community = useRef();

  return (
    <Containers>
      <VisualContainer />

      <Container>
        <Contents>
          <NavContainer
            review={review}
            classIntro={classIntro}
            curriculum={curriculum}
            creator={creator}
            community={community}
          />

          <LeaderBoardContainer />

          <BlockSection ref={review}>
            <ReviewContainer />
          </BlockSection>

          <BlockSection ref={classIntro}>
            <ClassIntroContainer />
          </BlockSection>

          <BlockSection ref={curriculum}>
            <CurriculumContainer />
          </BlockSection>

          <BlockSection ref={creator}>
            <CreatorContainer />
          </BlockSection>

          <BlockSection ref={community}>
            <CommunityContainer />
          </BlockSection>
        </Contents>

        <AsideContainer />
      </Container>

      <TodayProductsContainer />
    </Containers>
  );
};

export default Products;

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
const BlockSection = styled.div``;
