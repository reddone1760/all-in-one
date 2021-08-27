import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

import { useState } from "react";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

const SidebarLink = ({
  id,
  Icon,
  titel,
  type,
  nested,
  href,
  action,
  nestedNum,
}) => {
  const router = useRouter();

  const [open, setOpen] = useState(true);

  const paddingLeft = (num) => (num >= 3 ? num * 10 : 18);

  // console.log(router.pathname);

  return (
    <div
      onClick={() => {
        router.push({
          // pathname: `/${router.pathname.split("/")[1]}/${id}`,
          pathname: `/notes/${id}`,
          // query: "test",
        });
      }}
      style={{ width: "100%" }}
    >
      <Container
        style={{ paddingLeft: `${paddingLeft(nestedNum)}px` }}
        open={open}
      >
        {(type === "page" || type === "database") && (
          <div>
            <KeyboardArrowRightIcon
              fontSize="small"
              onClick={() => {
                setOpen(!open);
              }}
              className="rotate"
            />
            <div className="icon">
              {Icon ? (
                <Icon fontSize="small" />
              ) : (
                <></>
                // <DescriptionOutlinedIcon fontSize="small" />
              )}
            </div>
          </div>
        )}
        {type === "extra" && <Icon fontSize="small" />}

        <section>
          <p>{titel}</p>

          {(type === "page" || type === "database") && (
            <div className="hidden">
              <MoreHorizIcon fontSize="default" />
              <AddBoxOutlinedIcon fontSize="default" />
            </div>
          )}
        </section>
      </Container>
      <div>
        {open &&
          (nested.length > 0 ? (
            nested.map(({ id, Icon, titel, type, nested, href, action }) => (
              <SidebarLink
                key={id}
                id={id}
                Icon={Icon}
                titel={titel}
                type={type}
                nested={nested}
                href={href}
                action={action}
                nestedNum={id.split("-").length}
              />
            ))
          ) : (
            <p
              style={{ paddingLeft: `${paddingLeft(nestedNum + 1)}px` }}
              className="noPages"
            >
              No pages inside
            </p>
          ))}
      </div>
    </div>
  );
};

export default SidebarLink;

const Container = styled.div`
  max-width: 100%;
  display: flex;
  padding: 0.25rem 0.5rem;
  align-items: center;
  cursor: pointer;
  transition: all 75ms ease-in-out;
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => props.theme.text1};
  position: relative;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    font-size: 1.125rem;
  }

  :hover {
    background-color: ${(props) => props.theme.bg2};

    .hidden {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .hidden {
    display: none;
  }

  .icon {
    display: flex;
    align-items: center;
    padding: 0 0.25rem;
  }

  p {
    display: flex;
    /* width: 20px; */
    /* padding-left: 0.5rem; */
    overflow: hidden;
    /* text-overflow: ellipsis;
    white-space: nowrap; */
  }

  .noPages {
    font-weight: 600;
    color: ${(props) => props.theme.text1};
    opacity: 0.75;
    margin-left: 0.5rem;
    width: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${(props) =>
    props.open
      ? css`
          .rotate {
            transition: all 100ms ease;
            transform: rotate(90deg);
          }
        `
      : css`
          .rotate {
            transition: all 100ms ease;
            transform: rotate(0deg);
          }
        `}
`;
