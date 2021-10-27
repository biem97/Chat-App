// Theme
import ThemeContext from "../theme";

// Layout
import Layout from "./Layout";

// Components
import MainSection from "../containers/MainSection";

const App = () => {
  return (
    <ThemeContext>
      <Layout>
        <MainSection />
      </Layout>
    </ThemeContext>
  );
};

export default App;
