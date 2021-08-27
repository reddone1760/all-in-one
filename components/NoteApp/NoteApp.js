import styled from "styled-components";
import Notebody from "./NoteBody";
import TopBar from "./TopBar";

const NoteApp = () => {
  return (
    <Container className="w-full h-full bg-white relative top-0 right-0">
      <TopBar />
      {/* //TODO 1. Create the Body of the Page */}
      <Notebody />
    </Container>
  );
};

export default NoteApp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bg0};
  position: relative;
  top: 0;
  right: 0;
`;
