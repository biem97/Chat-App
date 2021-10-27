import { makeVar, ReactiveVar } from "@apollo/client";
import { PaletteMode } from "@mui/material";

export const themeMode: ReactiveVar<PaletteMode> = makeVar<PaletteMode>("dark");
