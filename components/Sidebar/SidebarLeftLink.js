import { useRouter } from "next/router";
import styled, { css } from "styled-components";

const SidebarLeftLink = ({ id, Icon, titel, showText, href }) => {
  const router = useRouter();

  return (
    <Container
      onClick={() => {
        id && router.push(href);
      }}
      active={router.pathname === href}
      style={{
        paddingTop: showText ? "8px" : "16px",
        paddingBottom: showText ? "8px" : "16px",
      }}
    >
      <Icon className="" />
      {showText && <p>{titel}</p>}
    </Container>
  );
};

export default SidebarLeftLink;

const Container = styled.div`
  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) => props.theme.bg5};
    `}

  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.text1};
  transition: all 75ms ease-in-out;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.bg5};
  }

  > p {
    text-align: center;
  }
`;
