import styled from "styled-components";
import Block from "./Block";

const NoteBody = () => {
  return (
    <Container>
      <Block
        value={"das ist ein Block"}
        blockDataId={"000000001"}
        type={"h1"}
      />
      <Block
        value={"das ist ein Block"}
        blockDataId={"000000002"}
        type={"h2"}
      />
      <Block
        value={"das ist ein Block"}
        blockDataId={"000000003"}
        type={"h3"}
      />
      <Block
        value={"das ist ein Block"}
        blockDataId={"000000004"}
        type={"h3"}
      />
      <Block
        value={"das ist ein Block"}
        blockDataId={"000000005"}
        type={"h3"}
      />
    </Container>
  );
};

export default NoteBody;

const Container = styled.div`
  overflow: auto;
  background-color: ${(props) => props.theme.bg0};
  height: 92.5vh;
  width: 100%;
  padding: 0 10%;
  color: ${(props) => props.theme.text1};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
