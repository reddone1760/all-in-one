import Card from "../components/IndexCards/Card";
import { Cards } from "../constants/IndexCards";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { useRouter } from "next/router";
import Header from "../components/IndexCards/Header";

const IndexCardsLayout = ({ children, header = null, id }) => {
  const router = useRouter();

  const folders = Cards.filter((data) =>
    id
      ? data.parent === id && data.id.split("+")[0] === "g"
      : data.id.split("+")[0] === "g"
  );

  const stacks = Cards.filter((data) =>
    id
      ? data.parent === id && data.id.split("+")[0] !== "g"
      : data.id.split("+")[0] !== "g"
  );

  return (
    <Container>
      <Header header={header} />
      <Body>
        {folders.length > 0 && (
          <Section>
            <h1>Folders</h1>
            <div>
              {folders.map(
                ({
                  id,
                  parent,
                  titel,
                  color,
                  initalLang,
                  created,
                  lastEdited,
                }) => (
                  <Card
                    key={id}
                    id={id}
                    type={id.split("+")[0]}
                    color={color}
                    parent={parent}
                    titel={titel}
                    initalLang={initalLang}
                    created={created}
                    lastEdited={lastEdited}
                  />
                )
              )}

              <Card type="new+folder" data={null} color={"default"} />
            </div>
          </Section>
        )}
        {stacks.length > 0 && (
          <Section recently={true}>
            {/* {!id && ( */}
            <h1>Recently used</h1>
            {/* )} */}
            <div>
              {/* //? Cards */}
              {/* //? type = "new | group | stack | training" */}
              {/* //? data = {OBJECT} */}
              {/* //? bg = "red, blue, default, green, yellow, pink, purple" */}

              {stacks.map(
                ({
                  id,
                  parent,
                  titel,
                  color,
                  initalLang,
                  created,
                  lastEdited,
                  cards,
                  lang,
                }) => (
                  <Card
                    key={id}
                    id={id}
                    type={id.split("+")[0]}
                    color={color}
                    parent={parent}
                    titel={titel}
                    initalLang={initalLang}
                    created={created}
                    lastEdited={lastEdited}
                    cards={cards}
                    lang={lang}
                  />
                )
              )}

              <Card type="new" data={null} color={"default"} />
              {/* <Card type="new" data={null} color={"red"} />
            <Card type="new" data={null} color={"blue"} />
            <Card type="new" data={null} color={"green"} />
            <Card type="new" data={null} color={"yellow"} />
            <Card type="new" data={null} color={"pink"} />
            <Card type="new" data={null} color={"purple"} /> */}
            </div>
          </Section>
        )}
        <Section>
          <h1>Stacks</h1>
          {children}
        </Section>
      </Body>
    </Container>
  );
};

export default IndexCardsLayout;

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

const Section = styled.div`
  padding: 0.5rem 3rem;

  > h1 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: ${(props) => props.theme.text1};
    padding: 1rem 0;
  }

  > div {
    width: 100%;
    min-height: ${({ recently }) => (recently ? "80px" : "80px")};
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 2rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  }
`;
