import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CurriculumWrap = styled.section`
  padding: 48px 0px;
`;
const CurriculumH3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  color: rgb(26, 26, 26);
`;
const Description = styled.p`
  margin: 12px 0px 16px;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  color: rgb(26, 26, 26);
`;
const OrderList = styled.ol``;
const OrderListItem = styled.li`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgb(248, 248, 248);
  &:first-child {
    padding-top: 0;
    border-top: none;
  }
`;
const OrderTitle = styled.h4`
  font-size: 18px;
  line-height: 28px;
  margin: 0px;
  color: rgb(162, 162, 162);
  font-weight: normal;
`;
const CurriculumList = styled.ol``;
const CurriculumListItem = styled.li`
  margin-top: 12px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 13px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;
    margin: 0px;
    color: rgb(26, 26, 26);
  }
`;
const Badge = styled.span`
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(58, 58, 58);
  border-radius: 3px;
  padding: 4px 5px;
  color: #fff;
  margin-left: auto;
  white-space: nowrap;
`;
const Sequence = styled.span`
  font-size: 10px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;
  margin: 0px 16px 0px 0px;
  background-color: rgb(248, 248, 248);
  color: rgb(98, 98, 98);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
`;

export function Curriculum() {
  return (
    <CurriculumWrap id="curriculum">
      <CurriculumH3>커리큘럼</CurriculumH3>
      <Description>
        클래스를 신청하신 분들이 배우고 있는 커리큘럼입니다. 콘텐츠는 배우기
        쉽게 영상, 수업노트, 첨부파일로 구성되어있습니다.
      </Description>

      <OrderList>
        <OrderListItem>
          <OrderTitle>WELCOME2022년 유튜브 수익화 전략</OrderTitle>
          <CurriculumList>
            <CurriculumListItem>
              <Link to="#">
                <Sequence>1</Sequence>내가 인건비를 낮출 수 있는 이유 - 신사임당
                회사의 주입식 유튜브 교육법 공개
                <Badge>무료 공개</Badge>
              </Link>
            </CurriculumListItem>
            <CurriculumListItem>
              <Link to="#">
                <Sequence>2</Sequence>2022년에 새로 만든 채널들의 성과 -
                2022년은 무엇이 달라졌는가? 무료 공개
                <Badge>무료 공개</Badge>
              </Link>
            </CurriculumListItem>
            <CurriculumListItem>
              <Link to="#">
                <Sequence>3</Sequence>요즘 신사임당 채널에서 돈을 만드는 방법
              </Link>
            </CurriculumListItem>
          </CurriculumList>
        </OrderListItem>
        <OrderListItem>
          <OrderTitle>01 신사임당 채널 WORK FLOW 공개!</OrderTitle>
          <CurriculumList>
            <CurriculumListItem>
              <Link to="#">
                <Sequence>1</Sequence>주제선정 : 존리가 나와도 조회수가 적게
                나오는 채널의 이유 - 1
              </Link>
            </CurriculumListItem>
            <CurriculumListItem>
              <Link to="#">
                <Sequence>2</Sequence>제목선정 : 구독자가 적은 채널이 대박 나는
                방법
              </Link>
            </CurriculumListItem>
            <CurriculumListItem>
              <Link to="#">
                <Sequence>3</Sequence>섭외 : 작은 채널에서 섭외하는 방법
              </Link>
            </CurriculumListItem>
          </CurriculumList>
        </OrderListItem>
      </OrderList>
    </CurriculumWrap>
  );
}
