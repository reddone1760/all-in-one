import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled, { css, keyframes } from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { motion, useMotionValue, useTransform } from "framer-motion";
import TinderCard from "react-tinder-card";
import SemiCircleProgressBar from "./SemiCircleProgressBar";
import { prozent } from "../../lib";
import { Themes } from "../../styles/themes";
import { useSelector } from "react-redux";
import { selectTheme } from "../../app/features/themeSlice";
import ReplayIcon from "@material-ui/icons/Replay";
import { selectIndexCardsColor } from "../../app/features/indexCardsLearnSlice";
import ProgressBar from "./ProgressBar";
import { useRouter } from "next/router";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { Divider } from "@material-ui/core";

const defaultArr = [
  {
    id: "00001",
    front: { header: "Tisch", body: "", img: "" },
    back: { header: "tabel", body: "", img: "" },
    favorite: false,
    status: 0,
    lang: null,
  },
  {
    id: "00002",
    front: { header: "Tisch", body: "", img: "" },
    back: { header: "tabel", body: "", img: "" },
    favorite: false,
    status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
    lang: null, //? null = initalStackLang
  },
  {
    id: "00003",
    front: { header: "Tisch", body: "", img: "" },
    back: { header: "tabel", body: "", img: "" },
    favorite: false,
    status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
    lang: null, //? null = initalStackLang
  },
  {
    id: "00004",
    front: { header: "Tisch", body: "", img: "" },
    back: { header: "tabel", body: "", img: "" },
    favorite: false,
    status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
    lang: null, //? null = initalStackLang
  },
  {
    id: "00005",
    front: { header: "Tisch", body: "", img: "" },
    back: { header: "tabel", body: "", img: "" },
    favorite: false,
    status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
    lang: null, //? null = initalStackLang
  },
  {
    id: "00006",
    front: { header: "Tisch", body: "", img: "" },
    back: { header: "tabel", body: "", img: "" },
    favorite: false,
    status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
    lang: null, //? null = initalStackLang
  },
  {
    id: "00007",
    front: { header: "Tisch", body: "", img: "" },
    back: { header: "tabel", body: "", img: "" },
    favorite: false,
    status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
    lang: null, //? null = initalStackLang
  },
  {
    id: "00008",
    front: { header: "Tisch", body: "", img: "" },
    back: { header: "tabel", body: "", img: "" },
    favorite: false,
    status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
    lang: null, //? null = initalStackLang
  },
  {
    id: "00009",
    front: { header: "Tisch", body: "", img: "" },
    back: { header: "tabel", body: "", img: "" },
    favorite: false,
    status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
    lang: null, //? null = initalStackLang
  },
  {
    id: "00010",
    front: { header: "Tisch", body: "", img: "" },
    back: { header: "tabel", body: "", img: "" },
    favorite: false,
    status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
    lang: null, //? null = initalStackLang
  },
  {
    id: "00011",
    front: { header: "Tisch", body: "", img: "" },
    back: { header: "tabel", body: "", img: "" },
    favorite: false,
    status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
    lang: null, //? null = initalStackLang
  },
  {
    id: "00012",
    front: { header: "Tisch", body: "", img: "" },
    back: { header: "tabel", body: "", img: "" },
    favorite: false,
    status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
    lang: null, //? null = initalStackLang
  },
  {
    id: "00013",
    front: { header: "Tisch", body: "", img: "" },
    back: { header: "tabel", body: "", img: "" },
    favorite: false,
    status: 0, //? 0 === Not learned | 1 === In Progress | 2 === Learned
    lang: null, //? null = initalStackLang
  },
];

const LearnApp = (props) => {
  const router = useRouter();
  const type = router?.query?.type;

  const [cardFlip, setCardFlip] = useState(false);
  const [cards, setCards] = useState(props.cards);
  const [index, setIndex] = useState(0);

  const updateCards = (cardStatus, i) => {
    setCards((prev) =>
      prev.map((card) => {
        if (card && card?.id === cards[i]?.id) card.status = cardStatus;
        return card;
      })
    );
    setIndex(i - 1);
  };

  const mixArr = (array) => {
    let mixedArr = [...array];
    if (mixedArr) {
      for (let i = mixedArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mixedArr[i], mixedArr[j]] = [mixedArr[j], mixedArr[i]];
      }
    }
    return mixedArr;
  };

  useEffect(() => {
    setTimeout(() => {
      setCards(mixArr(cards));
    }, 10);
  }, []);

  const setFav = () => {
    setCards((prev) =>
      prev.map((card) => {
        if (card && card?.id === cards[index]?.id)
          card.favorite ? (card.favorite = false) : (card.favorite = true);
        return card;
      })
    );
  };

  const [cardsStatus, setCardsStatus] = useState(
    Array(cards?.length).fill(null)
  );
  const [refresh, setRefresh] = useState(false);

  // const cardVarients =
  //   cardsStatus[index] !== null
  //     ? cardsStatus[index]
  //       ? {
  //           hidden: { x: 0, scale: 1 },
  //           visible: { y: -10, x: "150%", scale: 1 },
  //         }
  //       : {
  //           hidden: { x: 0, scale: 1 },
  //           visible: { y: -10, x: "-150%", scale: 1 },
  //         }
  //     : {
  //         hidden: { scale: 0.8 },
  //         visible: { scale: 1 },
  //       };

  const theme = useSelector(selectTheme);
  const accentColor = useSelector(selectIndexCardsColor);

  const setCardsStatusFunc = (status, id = index) => {
    setCardsStatus((prev) => {
      let arr = prev;
      arr[index] = [status, id];
      return arr;
    });
    setRefresh((prev) => !prev);
    setIndex((prev) => prev + 1);
    setCardFlip(false);
  };

  const [replyInput, setReplyInput] = useState("");
  const [firstReplyInput, setFirstReplyInput] = useState("");
  const [replyInputPlaceholder, setReplyInputPlaceholder] =
    useState("Write here");
  const [replyStatus, setReplyStatus] = useState(null);
  const [replySecoundInput, setReplySecoundInput] = useState(false);

  const writeCheck = (e) => {
    e.preventDefault();

    if (replyStatus === null) {
      setCardFlip(true);
      setFirstReplyInput(replyInput);
      setReplyInputPlaceholder(cards[index].back.header);
      setReplyInput("");
      setReplyStatus(replyInput === cards[index].back.header);
    } else {
      setReplyStatus(null);
      setReplyInput("");

      if (replyStatus) {
        setCardsStatusFunc(true);
        setReplyInputPlaceholder("Write here");
      } else {
        setReplyInput("");
        setCardsStatusFunc(false);
        setReplyInputPlaceholder("Write here");
      }
    }
  };

  const possibleSets = cards.length / 4;

  const matchCardsSplit = (arr) => {
    let globalIndex = 0;
    let endArr = [];

    for (let i = 0; i < possibleSets; i++) {
      endArr.push(arr.slice(globalIndex, globalIndex + 4));
      globalIndex += 4;
    }

    return endArr;
  };

  const [matchCards, setMatchCards] = useState(matchCardsSplit(mixArr(cards)));

  useEffect(() => {
    setMatchCards(matchCardsSplit(mixArr(cards)));
    console.log(matchCards);
  }, []);

  return (
    <Container>
      {index >= cards?.length ? (
        <>
          <Stats>
            <ProcessBarRounded>
              <SemiCircleProgressBar
                score={prozent(
                  cards?.length,
                  cardsStatus.filter((status) => status[0] === false).length
                )}
                text={
                  cardsStatus.filter((status) => status[0] === false).length
                }
                titel={"Wrong"}
                color={Themes[theme.toUpperCase()].red}
              />
              <SemiCircleProgressBar
                score={prozent(
                  cards?.length,
                  cardsStatus.filter((status) => status[0] === true).length
                )}
                text={cardsStatus.filter((status) => status[0] === true).length}
                titel={"Learned"}
                color={Themes[theme.toUpperCase()].greenLight}
              />
            </ProcessBarRounded>

            <StartBtn
              color={accentColor}
              onClick={() => {
                setIndex(0);
                setCards(mixArr(cards));
              }}
            >
              Repeat <ReplayIcon />
            </StartBtn>
            <StartBtn
              color={accentColor}
              onClick={() => {
                setIndex(0);
                setCards((prev) => {
                  let filterd = cardsStatus
                    .filter((status) => status[0] === false)
                    .map((card) => card[1]);

                  let endCards = [];

                  filterd.map((card) => {
                    endCards.push(prev[card]);
                  });

                  return mixArr(endCards);
                });
              }}
            >
              Repeat wrong <ReplayIcon />
            </StartBtn>
            <StartBtn
              color={accentColor}
              onClick={() => {
                router.push(`/index-cards/${props.finished[0]}`);
                props.finished[1]();
              }}
            >
              Finish
            </StartBtn>
          </Stats>
        </>
      ) : (
        <>
          <ProgressBar
            color={accentColor}
            status={prozent(
              type === "match" ? possibleSets : cards?.length,
              index
            )}
            rounded={false}
            hover={false}
          >
            <span />
          </ProgressBar>
          {(type === "flashcards" ||
            type === "write" ||
            type === undefined) && (
            <>
              <Middle>
                {cards
                  ?.slice(index, index + 1)
                  .reverse()
                  .map(({ id, front, back }, index) => (
                    <motion.div key={id}>
                      <Card
                        cardFlip={cardFlip}
                        onClick={() => {
                          type !== "write" && setCardFlip(!cardFlip);
                        }}
                        border={
                          replyStatus !== null
                            ? replyStatus
                              ? "green"
                              : "red"
                            : "bg4"
                        }
                      >
                        <div className="cardInner">
                          <div className="border">
                            <div className="frontCard">
                              <p>{front.header}</p>
                            </div>
                            <div className="backCard">
                              {replyStatus !== null ? (
                                <div>
                                  <ReplyStatus
                                    color={replyStatus ? "green" : "red"}
                                  >
                                    <p>{replyStatus ? "Right" : "Wrong"}</p>
                                  </ReplyStatus>
                                  <span>
                                    {!replyStatus && (
                                      <div>
                                        <h2>Your Answer: </h2>
                                        <p>{firstReplyInput}</p>
                                        {/* <p>{back.body}</p> */}
                                      </div>
                                    )}
                                    <div>
                                      <h2>Correct Answer: </h2>
                                      <p>{`${front.header} - ${back.header}`}</p>
                                      {/* <p>{back.body}</p> */}
                                    </div>
                                  </span>
                                  <div>
                                    <p>Fav</p>
                                  </div>
                                </div>
                              ) : (
                                // !-------ADD STYLES-------! \\
                                <div>
                                  <p>{back.header}</p>
                                </div>
                                // !-------ADD STYLES-------! \\
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
              </Middle>
              {type !== "write" ? (
                <Bottom>
                  <CloseIcon
                    className="red"
                    fontSize="large"
                    onClick={() => {
                      setCardsStatusFunc(false);
                    }}
                  />
                  <ArrowBackIcon
                    fontSize="large"
                    onClick={() => {
                      setIndex((prev) => prev - 1);
                    }}
                  />
                  {cards && cards[index]?.favorite ? (
                    <StarIcon fontSize="large" onClick={() => setFav()} />
                  ) : (
                    <StarBorderIcon fontSize="large" onClick={() => setFav()} />
                  )}
                  <ArrowForwardIcon
                    fontSize="large"
                    onClick={() => {
                      setCardsStatusFunc(false);
                    }}
                  />
                  <DoneIcon
                    className="green"
                    fontSize="large"
                    onClick={() => {
                      setCardsStatusFunc(true);
                    }}
                  />
                </Bottom>
              ) : (
                <Bottom inputStyle={replySecoundInput}>
                  <form>
                    <input
                      placeholder={replyInputPlaceholder}
                      type="text"
                      autoFocus
                      value={replyInput}
                      onChange={(e) => {
                        setReplyInput(e.target.value);
                      }}
                    />
                    <button
                      hidden
                      onClick={(e) => {
                        if (
                          replyStatus ||
                          replyStatus === null ||
                          replyInput === cards[index].back.header
                        ) {
                          writeCheck(e);
                          setReplySecoundInput(false);
                        } else {
                          e.preventDefault();

                          if (replyInput !== cards[index].back.header) {
                            setReplyInput("");
                            setReplySecoundInput(true);
                          }
                        }
                      }}
                      type="submit"
                    />
                    <p
                      onClick={() => {
                        setCardsStatusFunc(false);
                        setReplyStatus(null);
                        setReplySecoundInput(false);
                        setReplyInputPlaceholder("Write here");
                        setReplyInput("");
                      }}
                    >
                      Skip
                    </p>
                  </form>
                  <DoneIcon
                    className="green"
                    fontSize="large"
                    onClick={(e) => {
                      if (
                        replyStatus ||
                        replyStatus === null ||
                        replyInput === cards[index].back.header
                      ) {
                        writeCheck(e);
                        setReplySecoundInput(false);
                      } else {
                        e.preventDefault();

                        if (replyInput !== cards[index].back.header) {
                          setReplySecoundInput(true);
                        }
                      }
                    }}
                  />
                </Bottom>
              )}
            </>
          )}
          {type === "match" && (
            <Match>
              <h2>{index}</h2>
              {matchCards[index]?.map((card) => (
                <div key={card.id}>
                  <div style={{ display: "flex" }}>
                    <p>{card.front.header}</p>
                    <p>{"--->"}</p>
                    <p>{card.back.header}</p>
                  </div>
                </div>
              ))}
              <button onClick={() => setIndex((prev) => prev + 1)}>
                Next set
              </button>
            </Match>
          )}
        </>
      )}
    </Container>
  );
};

export default LearnApp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92.5vh;
  position: relative;
  overflow: hidden;
`;

const Middle = styled.div`
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.bg2};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5%;
  padding-bottom: 5%;
  margin-bottom: -5%;

  > div {
    height: 60%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .cardStyles {
      position: absolute;
      width: 70%;
      height: 60%;
    }
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  perspective: 1000px;
  cursor: pointer;
  box-sizing: border-box;
  margin-bottom: 2rem;
  position: absolute;

  .cardInner {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    background-color: ${(props) => props.theme[props.border]};
    /* solid; */
  }

  .border {
    position: relative;
    border-radius: 16px;
    width: 99%;
    height: 98.5%;
  }

  ${(props) =>
    props.cardFlip &&
    css`
      .cardInner {
        transform: rotateY(180deg);
      }
    `}

  .frontCard,
  .backCard {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .frontCard {
    background-color: ${(props) => props.theme.bg4};
    color: ${(props) => props.theme.text1};
  }

  .backCard {
    background-color: ${(props) => props.theme.bg4};
    color: ${(props) => props.theme.text1};
    transform: rotateY(180deg);

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      > div {
        height: 10%;
      }

      > span {
        height: 85%;
        /* background-color: red; */
        display: flex;
        gap: 2rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        h2 {
          margin-bottom: 0.5rem;
          font-size: 1.4rem;
        }

        p {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

const ReplyStatus = styled.div`
  background-color: ${(props) => props.theme[props.color]};
  color: ${(props) => props.theme.text3};
  border-radius: 15px 15px 0 0;
  /* padding: 0.5rem; */
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
`;

const Bottom = styled.div`
  background-color: transparent;
  width: 100%;
  height: 12.5vh;

  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  gap: 2rem;

  > form {
    height: 50%;
    width: 60%;
    display: flex;
    align-items: center;
    padding-right: 1rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme.bg1};
    border: 0.25rem
      ${(props) => (props.inputStyle ? props.theme.red : props.theme.bg1)} solid;
    box-sizing: border-box;

    > input {
      height: 100%;
      width: 100%;
      padding: 1rem 0.5rem;
      border-radius: 8px;
      background-color: transparent;
      color: ${(props) => props.theme.text1};
      border: none;
      outline: none;
      font-size: 1.6rem;
    }

    > p {
      color: ${(props) => props.theme.red};
      font-weight: 600;
      cursor: pointer;
      transition: all 100ms ease-in-out;

      :hover {
        transform: scale(1.05);
      }
      /* background-color: blueviolet; */
    }
  }

  .MuiSvgIcon-root {
    border-radius: 40px;
    width: 50px;
    height: 50px;
    padding: 0.25rem;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    :hover {
      background-color: ${(props) => props.theme.bg5};

      color: ${(props) => props.theme.text3};
    }
  }

  .red {
    color: ${(props) => props.theme.red};
  }

  color: ${(props) => props.theme.default};

  .green {
    color: ${(props) => props.theme.greenLight};
  }
`;

const Stats = styled.div`
  background-color: ${(props) => props.theme.bg2};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem;
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

const StartBtn = styled.div`
  background-color: ${(props) => props.theme[props.color]};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.text3};
  font-weight: 600;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }

  > span {
    margin-right: 1rem;
  }

  > .MuiSvgIcon-root {
    margin-left: 0.5rem;
  }
`;

const Match = styled.div`
  > button {
    width: 20%;
  }
`;
