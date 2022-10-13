import styled from 'styled-components';

export const NavListItem = ({
  item,
  handleMoveTo,
  navigation,
  communityData,
}) => {
  return (
    <ItemList>
      <ListButton onClick={handleMoveTo(item)}>
        {navigation[item]}&nbsp;
        {item === 'community' ? `${communityData?.length}개` : null}
      </ListButton>
    </ItemList>
  );
};

const ItemList = styled.li`
  &.active button {
    color: #000;
  }
`;

const ListButton = styled.button`
  text-decoration: none;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  padding: 14px 0;
  display: flex;
  align-items: center;
  color: rgb(162, 162, 162);
`;
