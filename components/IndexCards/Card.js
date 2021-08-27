import AddIcon from "@material-ui/icons/Add";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

const Card = ({
  id,
  type,
  parent,
  titel,
  color,
  initalLang,
  created,
  lastEdited,
  cards,
  lang,
}) => {
  const router = useRouter();

  return (
    <Container
      onClick={() => {
        // parent === null
        //   ? router.push(`/index-cards/${id}`)
        //   : router.push(`/index-cards/${parent}/${id}`);
        type === "new+folder" ||
          type === "new" ||
          router.push(`/index-cards/${id}`);
      }}
      color={color}
      type={type}
    >
      {(type === "new" || type === "new+folder") && (
        <p
          className={`${
            color === "default"
              ? "text-gray-700 dark:text-gray-300"
              : "text-gray-800"
          }`}
        >
          <AddIcon /> New
        </p>
      )}

      {titel}
    </Container>
  );
};

export default Card;

const Container = styled.div`
  background-color: ${(props) =>
    props.color === "red"
      ? props.theme.red
      : props.color === "blue"
      ? props.theme.blue
      : props.color === "green"
      ? props.theme.green
      : props.color === "yellow"
      ? props.theme.yellow
      : props.color === "pink"
      ? props.theme.pink
      : props.color === "purple"
      ? props.theme.purple
      : props.theme.default};

  ${({ type }) =>
    type === "g" || type === "new+folder"
      ? css`
          max-width: 240px;
          min-height: 80px;
          max-height: 80px;
        `
      : css`
          max-width: 320px;
          min-height: 180px;
          max-height: 240px;
        `}

  border-radius: 20px;
  /* //! ADD SHADOW */
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;

  :hover {
    transform: scale(1.05);
  }

  > p {
    ${({ color }) =>
      color === "default"
        ? css`
            color: ${(props) => props.theme.text1};
          `
        : css`
            color: ${(props) => props.theme.text3};
          `}
  }
`;
