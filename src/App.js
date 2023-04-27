import { useParams } from "react-router-dom";
import { Header } from "./Layout";

const App = (props) => {
  const params = useParams();
  const { links = [], paramKey = "pageName" } = props;

  return (
    <>
      <Header
        tabs={links?.map((value) => ({
          title: value?.title,
          active: value?.pageName === params?.[paramKey],
          href: `/${value?.pageName}`,
          icon: value?.icon,
        }))}
      />
      {links?.find((o) => o?.pageName === params?.[paramKey])?.render}
    </>
  );
};

export default App;
