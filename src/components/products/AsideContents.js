import styled from 'styled-components';
// import { motion } from 'framer-motion';
import { priceFormat } from '../../utils/filter';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoBanner } from '../../assets/products/logo_banner.svg';
import { ReactComponent as QuestionIcon } from '../../assets/products/ico_question.svg';
import { ReactComponent as HeartIcon } from '../../assets/products/ico_heart.svg';
import { ReactComponent as ShareIcon } from '../../assets/products/ico_share.svg';
import { ReactComponent as GiftIcon } from '../../assets/products/ico_gift.svg';
import { ReactComponent as ContentsIcon } from '../../assets/products/ico_contents.svg';
import { ReactComponent as KitsIcon } from '../../assets/products/ico_kits.svg';
import { ReactComponent as NoviceIcon } from '../../assets/products/ico_novice.svg';
import { ReactComponent as SatisfactionIcon } from '../../assets/products/ico_satisfaction.svg';
import { ReactComponent as BigQuestionIcon } from '../../assets/products/ico_big_question.svg';

export const AsideContents = ({
  asideData,
  saleSelectedId,
  saleLayerToggle,
  bannerSelectedId,
  BannerLayerToggle,
}) => {
  return (
    <>
      <Section>
        <SubTitle>
          {asideData.channel} · {asideData.director}
        </SubTitle>
        <H2>{asideData.title}</H2>

        <Chips>
          {asideData.chips &&
            asideData.chips.map((item, i) =>
              i === 0 ? (
                <Chip key={item} color="red">
                  {item}
                </Chip>
              ) : (
                <Chip key={item}>{item}</Chip>
              ),
            )}
        </Chips>
        <Sale>{asideData.monthlyInstallment}개월 할부</Sale>

        <SaleInfo>
          <SaleModal>
            클래스 할인가
            <SaleButton layoutId={saleSelectedId} onClick={saleLayerToggle}>
              <BigQuestionIcon />
            </SaleButton>
          </SaleModal>

          <PriceBox>
            <Percent>{asideData.sale}%</Percent>
            <Price>월 {priceFormat(asideData.price)}원</Price>
          </PriceBox>
        </SaleInfo>

        <UserEvaluation>
          <UserList>
            {asideData.classInfo &&
              asideData.classInfo.map((item, i) => (
                <UserListItem key={item} as="li">
                  {i === 0 && <ContentsIcon />}
                  {i === 1 && <KitsIcon />}
                  {i === 2 && <NoviceIcon />}
                  {i === 3 && <SatisfactionIcon />}
                  {item}
                </UserListItem>
              ))}
          </UserList>
        </UserEvaluation>

        <Share>
          <ShareButton>
            <HeartIcon /> {asideData.goodNumber}
          </ShareButton>
          <ShareButton>
            <ShareIcon /> 공유하기
          </ShareButton>
          <ShareButton>
            <GiftIcon /> 선물하기
          </ShareButton>
        </Share>
        <AsideButtonPage>
          <Link to="/login">수강 옵션 구경하기</Link>
        </AsideButtonPage>
      </Section>

      <Section>
        <ServiceBanner layoutId={bannerSelectedId} onClick={BannerLayerToggle}>
          <ServiceTitle>
            <ServiceObj>{asideData.bannerTitle}</ServiceObj>
            <ServiceSbj>
              {asideData.bannerDesc}
              <QuestionIcon />
            </ServiceSbj>
          </ServiceTitle>
          <ServiceLogo>
            <LogoBanner />
          </ServiceLogo>
        </ServiceBanner>
      </Section>
    </>
  );
};

const SaleModal = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;
const Section = styled.div`
  padding: 24px;
  border-radius: 3px;
  box-shadow: rgb(41 42 43 / 16%) 0px 2px 6px -2px;
  border: 1px solid rgb(255, 255, 255);
  margin-bottom: 12px;
`;
const ServiceBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;
const ServiceTitle = styled.div``;
const ServiceLogo = styled.span`
  display: block;
  width: auto;
  height: 36px;

  svg {
    display: block;
    width: auto;
    height: 100%;
    fill: rgb(0, 0, 0);
  }
`;
const ServiceObj = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;
const ServiceSbj = styled.p`
  font-size: 11px;
  line-height: 16px;
  letter-spacing: normal;
  margin: 4px 0px 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 500;
  color: rgb(202, 202, 202);
  svg {
    margin: -2px 0 0 5px;
  }
`;
const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
`;
const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: rgb(26, 26, 26);
  line-height: 28px;
  margin: 5px 0 0 0;
`;
const Chips = styled.div`
  margin-bottom: -4px;
`;
const Chip = styled.span`
  display: inline-block;
  margin-right: 4px;
  border-radius: 3px;
  margin-top: 8px;
  padding: 3px 6px;
  background-color: rgb(248, 248, 248);
  font-size: 11px;
  font-weight: 600;
  line-height: 16px;
  color: ${(props) => props?.color || 'rgb(162, 162, 162)'};
`;
const Sale = styled.p`
  font-size: 11px;
  font-weight: normal;
  color: rgb(162, 162, 162);
  line-height: 16px;
  letter-spacing: normal;
  margin: 10px 0 0 0;
  display: flex;
  justify-content: flex-end;
`;
const SaleInfo = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`;
const PriceBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: auto;
`;
const Percent = styled.span`
  font-size: 16px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0 10px 0 0;
`;
const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: rgb(26, 26, 26);
  line-height: 24px;
  letter-spacing: -0.45px;
  margin: 0px;
`;

const SaleButton = styled.button`
  vertical-align: middle;
  margin: 3px 0 0 3px;
`;
const UserEvaluation = styled.div`
  margin-top: 16px;
  padding: 20px 0px;
  border-top: 1px solid rgb(248, 248, 248);
`;

const UserList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;
const UserListItem = styled(SaleModal)`
  width: calc(50% - 20px);
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`;
const Share = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  -webkit-box-align: center;
  align-items: center;
`;
const ShareButton = styled.button`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: rgb(26, 26, 26);
  background-color: rgb(248, 248, 248);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  padding: 16px;
  transition: background-color 0.1s ease 0s;
  text-decoration-line: none;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background-color: rgb(223, 223, 223);
  }
`;
const AsideButtonPage = styled.div`
  margin-top: 12px;
  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 86, 0);
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.2px;
    padding: 0px 20px;
    height: 48px;
    transition: background-color 0.1s ease 0s;
    text-decoration-line: none;
    &:hover,
    &:active {
      background-color: rgb(204, 69, 0);
    }
  }
`;
