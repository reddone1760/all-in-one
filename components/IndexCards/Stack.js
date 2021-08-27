import moment from "moment";
import styled, { css, keyframes } from "styled-components";
// import Header from "./Header";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SemiCircleProgressBar from "./SemiCircleProgressBar";
import { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../app/features/themeSlice";
import { Themes } from "../../styles/themes";
import { useRouter } from "next/router";
import {
  removeIndexCardsLearn,
  setIndexCardsColor,
  setIndexCardsLearn,
} from "../../app/features/indexCardsLearnSlice";
import { prozent } from "../../lib";
import ProgressBar from "./ProgressBar";
import { Divider } from "@material-ui/core";
import { motion } from "framer-motion";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { useLongHold, useOutsideClick } from "../../hooks";
import { useEffect, useRef } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FilterListIcon from "@material-ui/icons/FilterList";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const Stack = ({
  id,
  header,
  lang,
  cards,
  stats: { dailyGoal, weeklyGoal, dailyData, toDay, learnings, stacks },
  color,
  created,
  lastEdited,
}) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const heightNum = (arr) => arr.sort((a, b) => b.length - a.length)[0].length;

  const getIndexCards = (ids) => {
    let selectedCards = [];

    for (let i = 0; i < ids.length; i++) {
      for (let j = 0; j < cards.length; j++) {
        if (cards[j].id === ids[i]) selectedCards.push(cards[j]);
      }
    }

    return selectedCards;
  };

  const [statsShown, setStatsShown] = useState(1);

  const theme = useSelector(selectTheme);

  // ! ----------REMOVE--------- ! \\
  const [statsStack, setstatsStack] = useState(stacks);
  // ! ----------REMOVE--------- ! \\

  const [expandBtn, setExpandBtn] = useState(false);

  const navigate = (pathname, cards, header, color, query = {}) => {
    router.push({
      pathname: `${id}/${pathname}`,
      query: query,
    });
    dispatch(
      setIndexCardsLearn({
        cards,
        header,
      })
    );
    dispatch(setIndexCardsColor(color));
  };

  const [selectCards, setSelectCards] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectAllCards, setSelectAllCards] = useState(false);

  const longPressEvent = useLongHold(
    () => {
      setSelectCards(true);
    },
    () => {},
    {
      shouldPreventDefault: true,
      delay: 500,
    }
  );

  useEffect(() => {
    if (selectedCards.length === 0) setSelectCards(false);
  }, [selectedCards]);

  const [cardsFilter, setCardsFilter] = useState("");
  const [cardsSort, setCardsSort] = useState("");
  const [cardsFilterOpen, setCardsFilterOpen] = useState(false);

  const filterRef = useOutsideClick(() => setCardsFilterOpen(false));

  return (
    <Container>
      <Top color={color}>
        {!selectCards ? (
          <>
            <h1>
              <IconContainer
                onClick={() => {
                  header[1]
                    ? router.push(`/index-cards/${header[1]}`)
                    : router.back();
                }}
              >
                <ArrowBackIcon />
              </IconContainer>
              {header[0]}
            </h1>
            <StartBtn
              expanded={expandBtn}
              color={color}
              onClick={() => {
                setExpandBtn((prev) => !prev);
              }}
            >
              <span>Start</span> | <ExpandMoreIcon />
              {expandBtn && (
                <ExpandBtn color={color}>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <li
                      onClick={() => {
                        navigate("learn", cards, "Flashcards", color, {
                          type: "flashcards",
                        });
                      }}
                    >
                      Flashcards
                    </li>
                    <Divider />
                    <li
                      onClick={() => {
                        navigate("test", cards, "Test", color);
                      }}
                    >
                      Test
                    </li>
                    <Divider />
                    <li
                      onClick={() => {
                        navigate("learn", cards, "Match", color, {
                          type: "match",
                        });
                      }}
                    >
                      Match
                    </li>
                    <Divider />
                    <li
                      onClick={() => {
                        navigate("learn", cards, "Write", color, {
                          type: "write",
                        });
                      }}
                    >
                      Write
                    </li>
                  </motion.div>
                </ExpandBtn>
              )}
            </StartBtn>
          </>
        ) : (
          <>
            <SelectedCardsHeader color={color} active={selectAllCards}>
              <div onClick={() => setSelectAllCards((prev) => !prev)}>
                {getIndexCards(selectedCards).length === cards.length ||
                selectAllCards ? (
                  <>
                    <RadioButtonCheckedIcon />
                    <p>Selected all</p>
                  </>
                ) : (
                  <>
                    <RadioButtonUncheckedIcon />
                    <p>Select all</p>
                  </>
                )}
                <h3></h3>
              </div>
              <p>
                {selectAllCards
                  ? cards.length
                  : getIndexCards(selectedCards).length}{" "}
                / {cards.length}
              </p>
              <VerticalDivider height={"30%"} opacity={0.25} />
              <section>
                <DeleteIcon />
                Delete {/* //! MAKE THE FUNCTION WORK */}
              </section>
              <section>
                <FileCopyIcon />
                Copy to {/* //! MAKE THE FUNCTION WORK */}
              </section>
              <section>
                <TrendingFlatIcon />
                Move to {/* //! MAKE THE FUNCTION WORK */}
              </section>
            </SelectedCardsHeader>
            <StartActions color={color}>
              <li
                onClick={() => {
                  navigate(
                    "learn",
                    selectAllCards ? cards : getIndexCards(selectedCards),
                    "Flashcards",
                    color,
                    {
                      type: "flashcards",
                    }
                  );
                }}
              >
                Flashcards
              </li>
              <li
                onClick={() => {
                  navigate(
                    "test",
                    selectAllCards ? cards : getIndexCards(selectedCards),
                    "Test",
                    color
                  );
                }}
              >
                Test
              </li>
              <li
                onClick={() => {
                  navigate(
                    "learn",
                    selectAllCards ? cards : getIndexCards(selectedCards),
                    "Match",
                    color,
                    {
                      type: "match",
                    }
                  );
                }}
              >
                Match
              </li>
              <li
                onClick={() => {
                  navigate(
                    "learn",
                    selectAllCards ? cards : getIndexCards(selectedCards),
                    "Write",
                    color,
                    {
                      type: "write",
                    }
                  );
                }}
              >
                Write
              </li>
              <span>
                {/*//! ADD STYLES */}
                <li
                  onClick={() => {
                    navigate(
                      "learn",
                      selectAllCards ? cards : getIndexCards(selectedCards),
                      "Flashcards",
                      color,
                      {
                        type: "flashcards",
                      }
                    );
                  }}
                >
                  Flashcards
                </li>
                <li
                  onClick={() => {
                    navigate(
                      "test",
                      selectAllCards ? cards : getIndexCards(selectedCards),
                      "Test",
                      color
                    );
                  }}
                >
                  Test
                </li>
                <li
                  onClick={() => {
                    navigate(
                      "learn",
                      selectAllCards ? cards : getIndexCards(selectedCards),
                      "Match",
                      color,
                      {
                        type: "match",
                      }
                    );
                  }}
                >
                  Match
                </li>
                <li
                  onClick={() => {
                    navigate(
                      "learn",
                      selectAllCards ? cards : getIndexCards(selectedCards),
                      "Write",
                      color,
                      {
                        type: "write",
                      }
                    );
                  }}
                >
                  Write
                </li>
              </span>
              <div onClick={() => setSelectCards((prev) => !prev)}>
                <CloseIcon />
              </div>
            </StartActions>
          </>
        )}
      </Top>
      <App>
        <Informations color={color}>
          <Day>
            <h2>Daily Goal: </h2>
            <ProgressBar color={color} status={prozent(dailyGoal, toDay)}>
              <span>{`${toDay} / ${dailyGoal}`}</span>
            </ProgressBar>
          </Day>
          <StatsContainer>
            <h2
              onClick={() => {
                // setStatsShown((prev) => (prev === 0 ? 1 : 0));
              }}
            >
              Stats:{" "}
            </h2>
            {statsShown === 0 ? (
              <ProgressBar
                color={"redLight"}
                status={prozent(cards.length, learnings[0])}
                child={[
                  {
                    color: "redLight",
                    status: prozent(cards.length, learnings[0]),
                    start: 0,
                    left: true,
                    middle: false,
                    right: false,
                  },
                  {
                    color: "orange",
                    status: prozent(cards.length, learnings[1]),
                    start: prozent(cards.length, learnings[0]),
                    left: false,
                    middle: true,
                    right: false,
                  },
                  {
                    color: "greenLight",
                    status: prozent(cards.length, learnings[2]),
                    start:
                      prozent(cards.length, learnings[0]) +
                      prozent(cards.length, learnings[1]),
                    left: false,
                    middle: false,
                    right: true,
                  },
                ]}
              />
            ) : (
              statsShown === 1 && (
                <>
                  <ProcessBarRounded>
                    <SemiCircleProgressBar
                      score={prozent(cards.length, learnings[0])}
                      text={learnings[0]}
                      titel={"Not learned"}
                      color={Themes[theme.toUpperCase()].redLight}
                    />
                    <SemiCircleProgressBar
                      score={prozent(cards.length, learnings[1])}
                      text={learnings[1]}
                      titel={"In Progress"}
                      color={Themes[theme.toUpperCase()].orange}
                    />
                    <SemiCircleProgressBar
                      score={prozent(cards.length, learnings[2])}
                      text={learnings[2]}
                      titel={"Learned"}
                      color={Themes[theme.toUpperCase()].greenLight}
                    />
                  </ProcessBarRounded>
                </>
              )
            )}
          </StatsContainer>
          <InfosContainer>
            <section>
              <StartBtn
                color={color}
                onClick={() => {
                  navigate("learn", cards, "Flashcards", color, {
                    type: "flashcards",
                  });
                }}
              >
                Flashcards
              </StartBtn>
              <StartBtn
                color={color}
                onClick={() => {
                  navigate("test", cards, "Test", color);
                }}
              >
                Test
              </StartBtn>
              <StartBtn
                color={color}
                onClick={() => {
                  navigate("learn", cards, "Match", color, { type: "match" });
                }}
              >
                Match
              </StartBtn>
              <StartBtn
                color={color}
                onClick={() => {
                  navigate("learn", cards, "Write", color, { type: "write" });
                }}
              >
                Write
              </StartBtn>
            </section>
          </InfosContainer>
          <IndexCards>
            {statsStack?.map((data, index) => (
              <Preview
                key={index}
                height={prozent(heightNum(statsStack), data.length, 75)}
              >
                <h3>
                  {index === 0
                    ? "Today"
                    : index === 1
                    ? "Tomorrow"
                    : index >= 2 && `In ${index} days`}
                </h3>
                <p />
                <span>{data.length}</span>
              </Preview>
            ))}
          </IndexCards>
        </Informations>
        <H1>Index Cards</H1>
        <Stacks>
          {statsStack.map((data, index) => (
            <StackContainer
              key={index}
              onClick={() => {
                navigate(
                  "learn",
                  getIndexCards(data),
                  index === 0
                    ? "Today"
                    : index === 1
                    ? "Tomorrow"
                    : index >= 2 && `In ${index} days`,
                  color
                );
              }}
            >
              {data.length >= 10 ? (
                <>
                  <StackPiec z={10} />
                  <StackPiec z={9} />
                  <StackPiec z={8} />
                  <StackPiec z={7} />
                  <StackPiec z={6} />
                  <StackPiec z={5} />
                  <StackPiec z={4} />
                  <StackPiec z={3} />
                  <StackPiec z={2} />
                  <StackPiec z={1}>
                    <h3>
                      {index === 0
                        ? "Today"
                        : index === 1
                        ? "Tomorrow"
                        : index >= 2 && `In ${index} days`}
                    </h3>
                    <p>Cards: {data.length}</p>
                  </StackPiec>
                </>
              ) : (
                <>
                  {data.map((inner, index) => (
                    <StackPiec key={index} z={data.length - index + 1} />
                  ))}
                  <StackPiec z={1}>
                    <h3>
                      {index === 0
                        ? "Today"
                        : index === 1
                        ? "Tomorrow"
                        : index >= 2 && `In ${index} days`}
                    </h3>
                    <p>Cards: {data.length}</p>
                  </StackPiec>
                </>
              )}
            </StackContainer>
          ))}
        </Stacks>
        <H1 filterActive={null} ref={filterRef}>
          <span>
            {selectCards ? (
              <RadioButtonCheckedIcon
                onClick={() => {
                  setSelectCards(false);
                }}
              />
            ) : (
              <RadioButtonUncheckedIcon
                onClick={() => {
                  setSelectCards(true);
                }}
              />
            )}
            <span>Cards</span>
          </span>
          <FilterContainer>
            <FilterListIcon
              onClick={() => {
                setCardsFilterOpen((prev) => !prev);
              }}
            />
            {cardsFilterOpen && (
              <FilterOptions>
                <h3>Sort: </h3>
                <FilterOption
                  active={cardsSort === "ascending"}
                  onClick={() =>
                    cardsSort === "ascending"
                      ? setCardsSort("")
                      : setCardsSort("ascending")
                  }
                >
                  <CheckIcon fontSize="small" />
                  <span>Ascending</span>
                </FilterOption>
                <FilterOption
                  active={cardsSort === "descending"}
                  onClick={() =>
                    cardsSort === "descending"
                      ? setCardsSort("")
                      : setCardsSort("descending")
                  }
                >
                  <CheckIcon fontSize="small" />
                  <span>Descending</span>
                </FilterOption>
                <h3>Filter: </h3>
                <FilterOption
                  active={cardsFilter === "stared"}
                  onClick={() =>
                    cardsFilter === "stared"
                      ? setCardsFilter("")
                      : setCardsFilter("stared")
                  }
                >
                  <CheckIcon fontSize="small" />
                  <span>Stared</span>
                </FilterOption>
                <FilterOption
                  active={cardsFilter === "not learned"}
                  onClick={() =>
                    cardsFilter === "not learned"
                      ? setCardsFilter("")
                      : setCardsFilter("not learned")
                  }
                >
                  <CheckIcon fontSize="small" />
                  <span>Not learned</span>
                </FilterOption>
              </FilterOptions>
            )}
          </FilterContainer>
        </H1>
        <CardList>
          {cards
            .filter((card) => {
              if (cardsFilter === "not learned") return card.status === 0;
              if (cardsFilter === "stared") return card.favorite;
              return card;
            })
            .sort((a, b) => {
              if (cardsSort === "ascending") {
                if (
                  a.front.header.toLowerCase() < b.front.header.toLowerCase()
                ) {
                  return -1;
                }
                if (
                  a.front.header.toLowerCase() > b.front.header.toLowerCase()
                ) {
                  return 1;
                }
                return 0;
              }
              if (cardsSort === "descending") {
                return b.front.header
                  .toLowerCase()
                  .localeCompare(a.front.header.toLowerCase());
              }
              return null;
            })
            .map(({ id, front, back, favorite, status, lang }) => (
              <CardListCard
                key={id}
                {...longPressEvent}
                selectCards={selectCards}
                selected={selectedCards.includes(id) || selectAllCards}
                onClick={() => {
                  if (selectCards) {
                    setSelectedCards((prev) => {
                      let arr = [...prev];
                      if (arr.includes(id)) {
                        arr.splice(arr.indexOf(id), 1);
                      } else {
                        arr.push(id);
                      }
                      return arr;
                    });
                  }
                }}
                onTouchEnd={() => {
                  setSelectedCards((prev) => {
                    let arr = [...prev];
                    arr.push(id);
                    return arr;
                  });
                }}
              >
                {selectCards && (
                  <>
                    {selectAllCards || selectedCards.includes(id) ? (
                      <RadioButtonCheckedIcon />
                    ) : (
                      <RadioButtonUncheckedIcon />
                    )}
                  </>
                )}
                <p>{front.header}</p>
                <VerticalDivider>
                  <span />
                </VerticalDivider>
                <p>{back.header}</p>
                <div />
                <div>
                  {favorite ? <StarIcon /> : <StarBorderIcon />}
                  <MoreVertIcon />
                </div>
              </CardListCard>
            ))}
        </CardList>
        {/* <IndexCardCarosell></IndexCardCarosell> */}
      </App>
    </Container>
  );
};

export default Stack;

const Container = styled.div`
  width: 100%;
  /* height: 92.5vh; */
  height: 100%;
  overflow: none;
  background-color: ${(props) => props.theme.bg0};
  position: relative;
  top: 0;
  left: 0;
`;

const App = styled.div`
  width: 100%;
  height: 92.5vh;
  overflow: auto;
`;

const H1 = styled.h1`
  margin: 2rem 2rem 0 2rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.hover1};
  /* background-color: red; */
  display: flex;
  justify-content: space-between;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      margin-left: 1rem;
    }

    .MuiSvgIcon-root {
      font-size: 2rem;
      color: ${(props) => props.filterActive && props.theme.text1};
      cursor: pointer;
      transition: all 200ms ease-in-out;
      height: 100%;

      :hover {
        transform: scale(1.05);
      }
    }
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7.5vh;

  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.bg0};
  padding: 0 2rem;
  /* margin-bottom: 1rem; */
  z-index: 20;

  > h1 {
    color: ${(props) => props.theme[props.color]};
    font-size: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    /* font-size: 4rem; */
  }
`;

const IconContainer = styled.div`
  cursor: pointer;
  border-radius: 50px;
  height: 50px;
  width: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  transition: all 100ms ease-in-out;

  .MuiSvgIcon-root {
    font-size: 2rem;
  }

  :hover {
    background-color: ${(props) => props.theme.hover2};
  }
`;

const Informations = styled.div`
  width: 100%;
  padding: 0 2rem 0 2rem;
  padding-bottom: 1rem;
  background-color: ${(props) => props.theme["default"]};

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "day day day info" "stats stats stats stats";

  @media (min-width: 768px) {
    grid-template-areas: "day day day info" "stats stats prev prev";
  }

  @media (min-width: 1024px) {
    grid-template-areas: "day day day info" "stats stats prev prev";
  }

  @media (min-width: 1280px) {
    column-gap: 10rem;
    grid-template-areas: "day day day info" "stats stats prev prev";
  }

  > section {
    display: flex;
  }

  h2 {
    padding: 0.5rem 0;
    color: ${(props) => props.theme.text1};
  }
`;

const Day = styled.div`
  grid-area: day;
  width: 100%;
  /* padding-right: 10rem; */
  /* background-color: red; */
`;

const StatsContainer = styled.div`
  grid-area: stats;
  /* padding-right: 10rem; */
  /* background-color: blueviolet; */
`;

const IndexCards = styled.div`
  grid-area: prev;
  /* background-color: sandybrown; */
  display: none;

  @media (min-width: 768px) {
    /* grid-template-columns: 3fr 1fr; */
    grid-template-areas: "day day day info" "stats stats prev prev";
    display: flex;
  }
`;

const Preview = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
  color: ${(props) => props.theme.text1};

  > p {
    width: 80%;
    height: ${(props) => props.height}%;
    background-color: ${(props) => props.theme.bg1};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.5rem;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    :hover {
      transform: scale(1.05);
    }
  }

  > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 0 0 2px 20px rgba(0, 0, 0, 0.2);
  }

  > h3 {
    font-size: 1.125rem;
    margin-top: 0.25rem;
  }
`;

const InfosContainer = styled.div`
  grid-area: info;
  /* padding: 1rem; */
  padding-top: 1.5rem;
  display: flex;
  width: 100%;

  > section {
    display: grid;
    flex: 1;
    gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    > section {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    > section {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1280px) {
    > section {
      grid-template-columns: repeat(4, 1fr);
    }
    align-items: flex-end;
  }
`;

const Left = styled.div`
  flex: 3;
  > h2 {
    padding: 0.5rem 0;
    color: ${(props) => props.theme.text1};
  }
  padding: 0 2rem 1rem 0;

  /* background-color: red; */
`;

const Right = styled.div`
  flex: 1;
  color: ${(props) => props.theme.text1};
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  padding-bottom: 1rem;
  justify-content: flex-end;

  > p {
    opacity: 1;

    span {
      opacity: 0.75;
    }
  }

  /* background-color: blue; */
`;

const Padding = styled.div`
  width: 100%;
  padding: 1rem 0;
  /* background-color: green; */
`;

const ProcessBarRounded = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
  /* gap: 2rem; */
  /* max-width: 480px; */
`;

const Stacks = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
  padding-bottom: 0rem;
  min-height: ${({ recently }) => (recently ? "80px" : "80px")};
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const StackContainer = styled.div`
  /* background-color: blue; */
  position: relative;
  /* flex: 1; */
  width: 100%;
  padding-top: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 2rem; */
  /* margin: 1rem; */
  /* gap: 5%; */
  transition: all 200ms ease-in-out;
  justify-content: center;
  border-radius: 8px;

  :hover {
    transform: scale(1.05);
    /* background-color: royalblue; */
  }
`;

const StackPiec = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.bg2};
  width: 80%;
  height: 80%;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.05);
  transform: ${(props) => `translate(${props.z * 3}px, ${props.z * 2}px)`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text1};
`;

const IndexCardCarosell = styled.div``;

const StartBtn = styled.div`
  background-color: ${(props) => props.theme[props.color]};
  border-radius: ${(props) => (props.expanded ? "20px 20px 0 0px" : "20px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.text3};
  font-weight: 600;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  position: relative;

  :hover {
    /* transform: scale(1.025); */
  }

  > span {
    margin-right: 1rem;
  }

  > .MuiSvgIcon-root {
    margin-left: 0.5rem;
  }
`;

const ExpandBtn = styled.div`
  position: absolute;
  top: 41px;
  right: 0;
  list-style: none;
  padding: 0.5rem;
  width: 100%;
  border-radius: 0px 0 20px 20px;
  background-color: ${(props) => props.theme[props.color]};

  li {
    padding: 0.5rem 0.25rem;
    transition: all 200ms ease-in-out;

    :hover {
      padding-left: 0.5rem;
      transform: scale(1.05);
    }
  }
`;

const CardList = styled.div`
  flex-direction: column;
  padding-top: 2rem;
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CardListCard = styled.div`
  background-color: ${(props) => props.theme.bg2};
  color: ${(props) => props.theme.text2};
  display: grid;
  grid-template-columns: ${(props) =>
    props.selectCards ? "5% 30% 5% 30% 20% 10%" : "30% 5% 30% 25% 10%"};
  transition: all 200ms ease-in-out;
  ${(props) =>
    props.selected
      ? css`
          box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.4);
          transform: scale(1.01);
        `
      : css`
          box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
        `}
  margin: 0.5rem auto;
  width: 90%;
  padding: 1rem;
  border-radius: 12px;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: red; */
  }
`;

const VerticalDivider = styled.span`
  height: ${(props) => props.height || "100%"};
  opacity: ${(props) => props.opacity || 1};
  width: 2px;
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: ${(props) => props.theme.text2};
  color: ${(props) => props.theme.text2};
`;

const SelectedCardsHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${(props) => props.theme.text2};
  transition: all 200ms ease-in-out;

  > div {
    display: flex;
    align-items: center;
    margin-right: 1rem;

    background-color: transparent;
    padding: 0.5rem;
    border-radius: 8px;

    transition: all 200ms ease-in-out;
    cursor: pointer;

    background-color: ${(props) =>
      props.active ? props.theme[props.color] : "transparent"};

    color: ${(props) => props.active && props.theme.text3};

    > p {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      font-weight: 600;
    }

    :hover {
      background-color: ${(props) => props.theme[props.color]};
      color: ${(props) => props.theme.text3};
      font-weight: 700;
    }
  }

  > section {
    align-items: center;
    justify-content: center;
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
    /* background-color: red; */
    padding: 0.5rem;
    margin-left: 0.125rem;
    margin-right: 0.125rem;
    border-radius: 8px;
    cursor: pointer;

    ::first-of-type {
      margin-left: 0rem;
    }

    ::last-of-type {
      margin-right: 0rem;
    }

    .MuiSvgIcon-root {
      opacity: 0.5;
      transition: all 200ms ease-in-out;
      cursor: pointer;
      margin-right: 0.25rem;
    }

    :hover {
      background-color: ${(props) => props.theme.hover2};

      .MuiSvgIcon-root {
        opacity: 1;
      }
    }
  }
`;

const StartActions = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    display: block;

    @media (min-width: 1024px) {
      display: none;
    }
  }

  > li {
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }

    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin-left: 0.125rem;
    margin-right: 0.125rem;
    background-color: ${(props) => props.theme[props.color]};
    cursor: pointer;
    font-weight: 600;
    transition: all 200ms ease-in-out;

    :hover {
      transform: scale(1.05);
    }

    ::first-of-type {
      margin-left: 0rem;
    }

    ::last-of-type {
      margin-right: 0rem;
    }
  }

  > div {
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    border-radius: 50px;
    padding: 0.5rem;
    color: ${(props) => props.theme.text2};

    :hover {
      background-color: ${(props) => props.theme.bg2};
    }
  }
`;

const FilterContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  > .MuiSvgIcon-root {
    font-size: 2rem;
    color: ${(props) => props.filterActive && props.theme.text1};
    cursor: pointer;
    transition: all 200ms ease-in-out;
    height: 100%;

    :hover {
      transform: scale(1.05);
    }
  }
`;

const FilterOptions = styled.div`
  position: absolute;
  z-index: 5;
  top: 3rem;
  right: 0;
  background-color: ${(props) => props.theme.bg1};
  padding: 1rem 0.5rem;
  padding-top: 0rem;
  border-radius: 8px;
  color: ${(props) => props.theme.text2};
  font-weight: 500;
  min-width: 600%;

  > h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    margin-left: 0.5rem;
  }
`;

const FilterOption = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.125rem;
  transition: all 200ms ease-in-out;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 20% 1fr;
  /* justify-items: center; */
  align-items: center;

  .MuiSvgIcon-root {
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: all 200ms ease-in-out;
  }

  :hover {
    background-color: ${(props) => props.theme.hover1};

    .MuiSvgIcon-root {
      opacity: 1;
    }
  }
`;
