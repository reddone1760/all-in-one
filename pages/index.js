// import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, changeTheme } from "../app/features/themeSlice";
import Layout from "../layouts/Standart";

export default function Home() {
  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);

  return (
    <Layout>
      <p>INDEX</p>
      <button
        onClick={() => {
          dispatch(changeTheme());
        }}
      >
        Change Theme
      </button>
    </Layout>
  );
}
