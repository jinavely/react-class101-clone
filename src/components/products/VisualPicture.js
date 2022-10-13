import styled from 'styled-components';

export const VisualPicture = ({ data, setSelectedId }) => {
  return (
    <>
      <Picture>
        {data.slice(0, 1).map((item) => (
          <Button key={item.id} onClick={() => setSelectedId(1)}>
            <Image src={item.imageUrl} alt={item.imageAlt} />
          </Button>
        ))}
      </Picture>
      <Grid>
        {data.slice(1).map((item) => (
          <GridList key={item.id}>
            <Button onClick={() => setSelectedId(item.id)}>
              <Image src={item.imageUrl} alt={item.imageAlt} />
            </Button>
          </GridList>
        ))}
      </Grid>
    </>
  );
};

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
