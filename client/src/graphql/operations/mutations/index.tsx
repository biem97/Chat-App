import createToggleThemeMode from "./toggleThemeMode";

import { themeMode } from "../../cache/themeCache";

export const toggleThemeMode = createToggleThemeMode(themeMode);
