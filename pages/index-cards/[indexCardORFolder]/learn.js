import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  removeIndexCardsLearn,
  selectIndexCardsLearn,
  selectIndexCardsLearnHeader,
} from "../../../app/features/indexCardsLearnSlice";
import LearnApp from "../../../components/IndexCards/LearnApp";
import IndexCardsLearnLayout from "../../../layouts/indexCardsLearn";
import Layout from "../../../layouts/Standart";

const Learn = () => {
  const router = useRouter();
  const indexCardORFolder = router?.query?.indexCardORFolder;

  const indexCardsLearnData = useSelector(selectIndexCardsLearn);

  const indexCardsLearnHeader = useSelector(selectIndexCardsLearnHeader);

  const dispatch = useDispatch();

  return (
    <Layout sidebar={false}>
      <IndexCardsLearnLayout
        header={[indexCardsLearnHeader, indexCardORFolder]}
        action={() => dispatch(removeIndexCardsLearn())}
      >
        <LearnApp
          cards={indexCardsLearnData}
          finished={[
            indexCardORFolder,
            () => {
              // alert("finished");
            },
          ]}
        />
      </IndexCardsLearnLayout>
    </Layout>
  );
};

export default Learn;
