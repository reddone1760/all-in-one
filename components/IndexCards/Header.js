import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { useRouter } from "next/router";

const Header = ({ header, action }) => {
  const router = useRouter();

  return (
    <Container>
      <HeaderLeft>
        {header ? (
          <>
            <IconContainer
              onClick={() => {
                header[1]
                  ? router.push(`/index-cards/${header[1]}`)
                  : router.back();
                action();
              }}
            >
              <ArrowBackIcon />
            </IconContainer>
            <p>{header[0]}</p>
          </>
        ) : (
          <p>Header</p>
        )}
      </HeaderLeft>
      <HeaderRight>
        <IconContainer>
          <FavoriteBorderIcon />
        </IconContainer>
        <IconContainer>
          <ShareIcon />
        </IconContainer>
        <IconContainer>
          <MoreHorizIcon />
        </IconContainer>
      </HeaderRight>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 7.5vh;
  padding: 0 1rem;
  width: 100%;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: ${(props) => props.theme.bg0};
  color: ${(props) => props.theme.text1};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  > p {
    margin-left: 0.25rem;
    font-weight: 600;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconContainer = styled.div`
  cursor: pointer;
  border-radius: 50px;
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  transition: all 100ms ease-in-out;

  :hover {
    background-color: ${(props) => props.theme.hover2};
  }
`;
