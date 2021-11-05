import { useMemo, FC } from "react";

// Material UI
import {
  CssBaseline,
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material";

// Apollo Cache
import { GET_THEME_MODE } from "../graphql/operations/queries/getThemeMode";
import { useQuery } from "@apollo/client";

// Custom theme
// import shape from "./shape";
// import palette from "./palette";
// import typography from "./typography";
// import componentsOverride from "./overrides";
// import shadows, { customShadows } from "./shadows";

const ThemeContext: FC = ({ children }) => {
  const {
    data: { themeMode },
  } = useQuery(GET_THEME_MODE);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeContext;
