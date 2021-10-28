import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// Components
import App from "./components/App";

// Theme
import ThemeContext from "./theme";

//  Material UI supports Roboto font by defaults
//  https://mui.com/components/typography/#general
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Apollo GraphQL
import { ApolloProvider } from "@apollo/client";
import client from "./graphql";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeContext>
        <App />
      </ThemeContext>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
