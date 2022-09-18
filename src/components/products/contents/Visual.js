import styled from 'styled-components';

const VisualWrap = styled.div`
  display: flex;
  gap: 6px;
  width: 1216px;
  margin: 0 auto;
  height: 520px;
`;
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

export function Visual() {
  return (
    <VisualWrap>
      <Picture>
        <Button>
          <Image
            src="https://cdn.class101.net/images/ea525942-0943-4ed5-93ca-83532da5c459"
            alt=""
          />
        </Button>
      </Picture>
      <Grid>
        <GridList>
          <Button>
            <Image
              src="https://cdn.class101.net/images/a116782d-efa0-4049-a7a8-75f51cd1e20c"
              alt=""
            />
          </Button>
        </GridList>
        <GridList>
          <Button>
            <Image
              src="https://cdn.class101.net/images/c2580a6e-45e8-4594-80a6-2ad95519cca0"
              alt=""
            />
          </Button>
        </GridList>
        <GridList>
          <Button>
            <Image
              src="https://cdn.class101.net/images/f58db5ef-35c3-4e29-b412-8955b3a4f972"
              alt=""
            />
          </Button>
        </GridList>
      </Grid>
    </VisualWrap>
  );
}
