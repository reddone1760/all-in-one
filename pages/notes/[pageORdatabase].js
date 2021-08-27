import { useRouter } from "next/router";
import Layout from "../../layouts/Standart";
import NoteApp from "../../components/NoteApp/NoteApp";

const PageORdatabase = () => {
  const router = useRouter();

  return (
    <Layout>
      {/* <p>{router.query.pageORdatabase}</p> */}
      <NoteApp />
    </Layout>
  );
};

export default PageORdatabase;
