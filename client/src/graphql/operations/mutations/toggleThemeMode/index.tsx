import { PaletteMode } from "@mui/material";
import { ReactiveVar } from "@apollo/client";

export default function createToggleThemeMode(
  themeMode: ReactiveVar<PaletteMode>
) {
  return () => {
    const newTheme = themeMode() === "light" ? "dark" : "light";

    return themeMode(newTheme);
  };
}
