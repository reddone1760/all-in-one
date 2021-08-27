import styled, { css, keyframes } from "styled-components";

const ProgressBar = ({
  color,
  status,
  child,
  children,
  rounded = true,
  hover = true,
}) => {
  return (
    <ProcessBar rounded={rounded}>
      {children ? (
        <ProcessBarInner
          hover={hover}
          rounded={rounded}
          color={color}
          status={status}
        >
          {children}
        </ProcessBarInner>
      ) : (
        <>
          {child.map(
            (props = { color, status, start, left, middle, right }, index) => (
              <ProcessBarInner
                rounded={rounded}
                key={index}
                color={color}
                status={status}
                start={start}
                left={left}
                middle={middle}
                right={right}
              />
            )
          )}
        </>
      )}
    </ProcessBar>
  );
};

export default ProgressBar;

const ProcessBarAnim = keyframes`
  0% {
    width: 0; 
    opacity: 0;
    
  },
  100% {
    width: 100%;
    opacity: 1;
  },
`;

const ProcessBarAnimText = keyframes`
  0% { 
    opacity: 0;
    
  },
  100% {
    opacity: 1;
  },
`;

const ProcessBar = styled.div`
  width: 100%;
  height: 30px;
  border-radius: ${(props) => (props.rounded ? "20px" : "0px")};
  background-color: ${(props) => props.theme.bg1};
  position: relative;
  transition: all 200ms ease-in-out;
  cursor: pointer;
`;

const ProcessBarInner = styled.span`
  > span {
    transition: all 200ms ease-in-out;
    animation: ${ProcessBarAnim} 1000ms ease-in-out;
    position: absolute;
    top: 0;
    left: ${(props) => props.start}%;
    width: ${(props) => props.status}%;
    height: 100%;
    border-radius: ${(props) => (props.rounded ? "20px" : "0px")};

    ${(props) =>
      props.left
        ? `
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
            background-color: ${props.theme[props.color]};
          `
        : props.right
        ? `
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
            background-color: ${props.theme.green};
          `
        : props.middle &&
          `
            border-radius: 0px;
            background-color: ${props.theme.yellow};
          `}

    background-color: ${(props) => props.theme[props.color]};

    display: flex;
    align-items: center;
    padding-left: ${(props) => (props.status >= 5 ? "0.5rem" : "0rem")};
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.text3};
    border-radius: ${(props) => (props.rounded ? "20px" : "0px")};

    ${(props) =>
      props.hover &&
      css`
        :hover {
          transform: scaleX(1.05);
          z-index: 5;
        }
      `}

    > span {
      transition: all 200ms ease-in-out;
      animation: ${ProcessBarAnimText} 1000ms ease-in-out;
    }
  }
`;
