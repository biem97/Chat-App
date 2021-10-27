import { InMemoryCache } from "@apollo/client";

// Cache
import { themeMode } from "./themeCache";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        themeMode: {
          read() {
            return themeMode();
          },
        },
      },
    },
  },
});
