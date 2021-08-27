import styled from "styled-components";

const SidebarGroup = ({ id, titel, href, children, action }) => {
  return (
    <Container>
      <p>{titel}</p>

      {children}
    </Container>
  );
};

export default SidebarGroup;

const Container = styled.div`
  margin-top: 0.75rem;
  position: relative;

  > p {
    background-color: ${(props) => props.theme.bg4};
    z-index: 10;
    position: sticky;
    top: -1px;
    left: 0;
    font-weight: 600;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.text1};
    font-size: 13px;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
`;
