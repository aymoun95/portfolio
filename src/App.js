import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";
import ApolloClient from "apollo-boost";

import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjo4pjczv0kzm0125mp4xznqg"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Main />
      <Projects />
      <Footer />
    </ApolloProvider>
  );
};

export default App;
