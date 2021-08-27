import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { useState } from "react";
import styled from "styled-components";

const TopBar = () => {
  const [pageTitel, setPageTitel] = useState("Untitled");

  return (
    <Container>
      <Left>
        <p>
          <Input
            value={pageTitel}
            onChange={(e) => setPageTitel(e.target.value)}
            style={{ color: pageTitel === "Untitled" && "gray" }}
            autoCorrect={false}
          />
        </p>
      </Left>
      <Right>
        <Icon>
          <ShareIcon fontSize="small" />
        </Icon>

        <Icon>
          <FavoriteBorderIcon fontSize="small" />
        </Icon>

        <Icon>
          <MoreHorizIcon fontSize="small" />
        </Icon>
      </Right>

      {/* //? MenuHover */}
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  width: 100%;
  height: 7.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.bg0};
  position: sticky;
  top: 0;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

const Left = styled.div`
  display: flex;
  gap: 0.25rem;

  > p {
    color: ${(props) => props.theme.text1};
    background-color: transparent;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    padding: 0.25rem 0.5rem;
    border-radius: 25%;

    :hover {
      background-color: ${(props) => props.theme.hover2};
    }
  }
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.125rem;
`;

const Right = styled.div`
  color: ${(props) => props.theme.text1};
  display: flex;
`;

const Icon = styled.div`
  background-color: transparent;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 100ms ease-in-out;

  :hover {
    background-color: ${(props) => props.theme.hover2};
  }
`;
