import { useRouter } from "next/router";
import Stack from "../../../components/IndexCards/Stack";
import { Cards } from "../../../constants/IndexCards";
import IndexCardsLayout from "../../../layouts/indexCards";
import Layout from "../../../layouts/Standart";

const IndexCardORFolder = () => {
  const router = useRouter();

  const ID = router.query.indexCardORFolder;
  const StackORFolder = Cards.filter((data) => data.id === ID)[0];
  return (
    <Layout>
      {ID?.split("+")[0] !== "s" ? (
        <IndexCardsLayout
          id={ID}
          header={[StackORFolder?.titel, " "]}
        ></IndexCardsLayout>
      ) : (
        <Stack
          id={ID}
          header={[StackORFolder?.titel, StackORFolder.parent]}
          lang={StackORFolder?.lang}
          cards={StackORFolder?.cards}
          stats={StackORFolder?.stats}
          color={StackORFolder?.color}
          created={StackORFolder?.created}
          lastEdited={StackORFolder?.lastEdited}
        />
      )}
    </Layout>
  );
};

export default IndexCardORFolder;
