import { useParams } from "react-router-dom";
import { Header } from "./Layout";
import { AnimatePresence } from "framer-motion";

const Component = ({ component }) => {
  return component;
};

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
      <AnimatePresence mode="wait">
        {links?.map(
          (o) =>
            o?.pageName === params?.[paramKey] && (
              <Component key={o?.pageName} component={o?.render} />
            )
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
