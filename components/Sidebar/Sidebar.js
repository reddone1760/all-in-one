import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import AppsIcon from "@material-ui/icons/Apps";
import NotesIcon from "@material-ui/icons/Notes";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ListIcon from "@material-ui/icons/List";
import TodayIcon from "@material-ui/icons/Today";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import TranslateIcon from "@material-ui/icons/Translate";

import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";

import SidebarLeftLink from "./SidebarLeftLink";
import SidebarLink from "./SidebarLink";
import SidebarGroup from "./SidebarGroup";
import { useRouter } from "next/router";

// ! ------------REMOVE-------------
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, changeTheme } from "../../app/features/themeSlice";
import styled from "styled-components";
// ! ------------REMOVE-------------

const Sidebar = ({ width, sidebarRight }) => {
  // ! ------------REMOVE-------------
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  // ! ------------REMOVE-------------

  const router = useRouter();

  const sidebarLeft = [
    {
      id: "l+001",
      Icon: AppsIcon,
      titel: "Dashboard",
      href: "/dashboard",
    },
    {
      id: "l+002",
      Icon: NotesIcon,
      titel: "Notes",
      href: "/notes",
    },
    {
      id: "l+003",
      Icon: NotificationsNoneIcon,
      titel: "Reminder",
      href: "/reminder",
    },
    {
      id: "l+004",
      Icon: ListIcon,
      titel: "TODO",
      href: "/todo",
    },
    {
      id: "l+005",
      Icon: TodayIcon,
      titel: "Calendar",
      href: "/calendar",
    },
    {
      id: "l+006",
      Icon: TranslateIcon,
      titel: "Vocabular Trainer",
      href: "/vocabular-trainer",
    },
    {
      id: "l+007",
      Icon: ViewCarouselIcon,
      titel: "Index Cards",
      href: "/index-cards",
    },
    {
      id: "l+008",
      Icon: CheckBoxIcon,
      titel: "Tests",
      href: "/tests",
    },
    {
      id: "l+009",
      Icon: TrendingUpIcon,
      titel: "Tracker",
      href: "/tracker",
    },
  ];

  const capitalLetter = (string) => {
    if (string.length < 2) return null;

    const firstLetter = string[0].toUpperCase();
    const restWord = string.split("").slice(1, string.length).join("");

    return firstLetter + restWord;
  };

  //TODO 1. if element is scrolling make a top border

  return (
    <Container
      style={{
        width: `${sidebarRight?.length > 0 && width}px`,
        display: sidebarRight?.length > 0 && width < 220 ? "none" : "block",
      }}
    >
      <Section>
        {/* //? Top */}
        <Top>
          <div style={{ justifyContent: sidebarRight && "Top" }}>
            <ImageContainer>
              <Image
                src="https://lh4.googleusercontent.com/-18kKLa6OHtU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclqgiZlY1uXibigZ-h2uFUA5d_aNA/s100/photo.jpg"
                alt="Profile Picture"
              />
            </ImageContainer>
            {sidebarRight && (
              <UserName>
                Dion Zeqiri
                <span>
                  <ExpandLessIcon fontSize="small" />
                  <ExpandMoreIcon fontSize="small" />
                </span>
              </UserName>
            )}
          </div>
        </Top>

        <Bottom>
          {/* //? Left */}
          <Left>
            <div>
              {sidebarLeft?.map(({ id, Icon, titel, href }) => (
                <SidebarLeftLink
                  key={id}
                  id={id}
                  Icon={Icon}
                  titel={titel}
                  showText={width > 280}
                  href={href}
                />
              ))}
            </div>
            {/* //!-------------REMOVE------------- */}
            <section className="flex flex-col items-center">
              <button
                className="border-none bg-black dark:bg-white rounded-sm text-white dark:text-black p-2 mx-auto"
                onClick={() => {
                  dispatch(changeTheme());
                }}
              >
                {theme}
              </button>
            </section>
            {/* //!-------------REMOVE------------- */}
            <div>
              {[NotificationsIcon, SettingsIcon].map((Icon, i) => (
                <SidebarLeftLink key={i} Icon={Icon} />
              ))}
            </div>
          </Left>
          {/* //? Right */}
          {sidebarRight && (
            <Right>
              {/* <div /> */}
              <SearchBar>
                {/* //TODO Searchbar Responsive machen */}
                <SearchIcon className="mx-2" />
                <input
                  type="text"
                  placeholder={`Search in ${capitalLetter(
                    router.pathname.split("/")[1]
                  )}`}
                  style={{ width: width > 360 ? "auto" : "80px" }}
                />
              </SearchBar>
              <section>
                {sidebarRight?.map(
                  ({ id, titel, type, href, nested, action }) => (
                    <SidebarGroup
                      key={id}
                      id={id}
                      type={type}
                      titel={titel}
                      href={href}
                      action={action}
                    >
                      {nested?.map(
                        ({ id, Icon, titel, type, nested, href, action }) => (
                          <SidebarLink
                            key={id}
                            id={id}
                            Icon={Icon}
                            titel={titel}
                            href={href}
                            type={type}
                            nested={nested}
                            nestedNum={id.split("-").length}
                            action={action}
                          />
                        )
                      )}
                    </SidebarGroup>
                  )
                )}
              </section>
            </Right>
          )}
        </Bottom>
      </Section>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.bg0};
  position: sticky;
  top: 0;
  left: 0;
`;

const Section = styled.section`
  height: 100vh;
`;

const Top = styled.section`
  height: 7.5vh;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    /* padding: 0.5rem; */

    /* background-color: red; */
  }
`;

const ImageContainer = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* background-color: blue; */
`;

const Image = styled.img`
  margin: 0.5rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: transparent;
  object-fit: contain;
`;

const UserName = styled.p`
  display: flex;
  padding-left: 0.75rem;
  flex: 1;
  font-weight: 700;
  color: ${(props) => props.theme.text2};
  align-items: center;

  > span {
    padding-left: 0.5rem;
    display: flex;
    flex-direction: column;

    > .MuiSvgIcon {
      color: ${(props) => props.theme.text1};
    }
  }
`;

const Bottom = styled.section`
  display: flex;
  height: 92.5vh;
`;

const Left = styled.div`
  max-width: 80px;
  height: 100%;
  max-height: 92.5vh;
  background-color: ${(props) => props.theme.bg1};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Right = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.bg4};
  border: none;
  height: 100%;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > section {
    flex: 1;
    overflow: auto;
  }
`;

const SearchBar = styled.div`
  height: 5%;
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0 0.5rem;
  margin-bottom: 1rem;
  border-radius: 20px;
  background-color: ${(props) => props.theme.bg2};
  color: ${(props) => props.theme.text1};

  > input {
    background-color: transparent;
    flex: 1;
    margin-left: 0.25rem;
    min-width: 100px;
    outline: none;
    border: none;
    margin-right: 0.5rem;
    color: ${(props) => props.theme.text1};
  }
`;
