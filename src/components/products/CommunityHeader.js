import styled from 'styled-components';

export function CommunityHeader({ item, dateFormat }) {
  return (
    <SlideTop>
      <Avatar>
        <Image src={item.avatar} alt={item.alt} />
      </Avatar>
      <UserBox>
        <Name>{item.name}</Name>
        <Date>{dateFormat(item.date)}</Date>
      </UserBox>
    </SlideTop>
  );
}

const SlideTop = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  max-height: 100%;
  object-fit: cover;
`;
const Avatar = styled.span`
  position: relative;
  display: inline-block;
  margin-right: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
`;
const UserBox = styled.div``;
const Name = styled.p`
  font-size: 11px;
  line-height: 16px;
  letter-spacing: normal;
  margin: 0px;
  font-weight: 600;
  color: rgb(26, 26, 26);
`;
const Date = styled.p`
  font-size: 9px;
  font-weight: normal;
  line-height: 12px;
  letter-spacing: normal;
  margin: 0px;
  color: rgb(202, 202, 202);
`;
