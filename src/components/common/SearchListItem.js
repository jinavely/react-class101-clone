import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeImagePath } from '../../utils/filter';

export const SearchListItem = ({ item }) => {
  return (
    <>
      <ListItem>
        <Link to="/">
          {item.backdrop_path ? (
            <Image
              src={makeImagePath(item.backdrop_path, 'w500')}
              alt={item.original_title}
            />
          ) : (
            <EmptyImage />
          )}

          <Title>{item.title}</Title>
          <Desc>{item.overview}</Desc>
          <Info>
            <span>평점: {item.vote_average}</span>
            <span>조회수: {item.vote_count}</span>
          </Info>
        </Link>
      </ListItem>
    </>
  );
};

const ListItem = styled.li`
  width: calc(25% - 20px);
  margin: 20px 10px;
  &.no-data {
    font-size: 2rem;
    width: 100%;
    margin: 0;
    height: calc(100vh - 228px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    color: #000;
    text-decoration: none;
  }
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-radius: 4px;
`;
const EmptyImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: #d7d7d7;
  border-radius: 4px;
  &:after {
    content: '이미지 없음';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.25rem;
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Title = styled.h5`
  margin: 10px 0 0 0;
  font-size: 0.95rem;
`;
const Desc = styled.p`
  font-size: 0.8rem;
  line-height: 1.5;
  margin: 10px 0 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  word-break: keep-all;
`;
const Info = styled.p`
  font-size: 0.7rem;
  margin: 5px 0 0 0;
  > span {
    display: inline-block;
    margin-right: 10px;
  }
`;
