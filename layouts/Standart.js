import Sidebar from "../components/Sidebar/Sidebar";
import Draggable from "react-draggable";
import { useState } from "react";
import { useRouter } from "next/router";
import { sidebarRight } from "../constants/Sidebar";
import { useKeyPress } from "../hooks";
import styled from "styled-components";

const Layout = ({ children, sidebar = true }) => {
  const [leftWidth, setLeftWidth] = useState(320);
  const router = useRouter();

  const Shift = useKeyPress("Shift");
  const Control = useKeyPress("Control");

  const dashboard = useKeyPress("!");
  const notes = useKeyPress('"');
  const reminder = useKeyPress("§");
  const todo = useKeyPress("$");
  const calendar = useKeyPress("%");
  const vocabularTrainer = useKeyPress("&");
  const indexCards = useKeyPress("/");
  const tests = useKeyPress("(");
  const tracker = useKeyPress(")");

  if (true) {
    if (dashboard) router.push("/dashboard");
    if (notes) router.push("/notes");
    if (reminder) router.push("/reminder");
    if (todo) router.push("/todo");
    if (calendar) router.push("/calendar");
    if (vocabularTrainer) router.push("/vocabular-trainer");
    if (indexCards) router.push("/index-cards");
    if (tests) router.push("/tests");
    if (tracker) router.push("/tracker");
  }

  return (
    <Container>
      {sidebar && (
        <Sidebar
          width={leftWidth}
          sidebarRight={sidebarRight[router.pathname.split("/")[1]]}
        />
      )}
      {/* <Draggable
        axis="x"
        scale={1}
        position={null}
        defaultPosition={{
          x: sidebarRight[router.pathname.split("/")[1]]?.length > 0 ? 320 : 0,
          y: 0,
        }}
        onDrag={(e, data) => {
          setLeftWidth(data.x);
        }}
      >
        <div
          className="z-50 box h-[100vh] w-10 bg-red-500 active:bg-blue-700 transition duration-100 ease-in absolute top-0 left-0"
          style={{
            cursor: "w-resize",
          }}
        ></div>
      </Draggable> */}
      {children}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  position: relative;
`;
