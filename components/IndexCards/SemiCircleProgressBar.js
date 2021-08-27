import React from "react";
import SemiCircleProgressBarProvider from "./SemiCircleProgressBarProvider";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

const SemiCircleProgressBar = ({
  score,
  text = `${score} %`,
  titel,
  color,
}) => {
  const calcColor = (percent, start, end) => {
    let a = percent / 100,
      b = (end - start) * a,
      c = b + start;

    return "hsl(" + c + ", 100%, 50%)";
  };

  return (
    <Container>
      <SemiCircleProgressBarProvider valueStart={0} valueEnd={score}>
        {(value) => (
          <>
            <CircularProgressbar
              value={value}
              text={`${text}`}
              circleRatio={0.7}
              styles={{
                trail: {
                  strokeLinecap: "round",
                  transform: "rotate(-126deg)",
                  transformOrigin: "center center",
                },
                path: {
                  strokeLinecap: "round",
                  transform: "rotate(-126deg)",
                  transformOrigin: "center center",
                  // stroke: calcColor(value, 0, 120),
                  stroke: color,
                },
                text: {
                  fill: color,
                },
              }}
              strokeWidth={10}
            />
          </>
        )}
      </SemiCircleProgressBarProvider>
      <Titel>{titel}</Titel>
    </Container>
  );
};

export default SemiCircleProgressBar;

const Container = styled.div`
  max-width: 160px;
`;

const Titel = styled.h2`
  text-align: center;
  width: 100%;
  font-size: 1rem;
  margin-top: -25%;
`;
