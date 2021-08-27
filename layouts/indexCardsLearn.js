import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "../components/IndexCards/Header";

const IndexCardsLearnLayout = ({ children, header = null, action, id }) => {
  const router = useRouter();

  return (
    <Container>
      <Header header={header} action={action} />
      <Body>{children}</Body>
    </Container>
  );
};

export default IndexCardsLearnLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bg0};
  position: relative;
  top: 0;
  right: 0;
`;

const Body = styled.div`
  overflow: auto;
  background-color: ${(props) => props.theme.bg0};
  width: 100%;
  height: 92.5vh;
`;
