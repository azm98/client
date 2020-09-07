import React from "react";
import { GlobalProvider } from "./GlobalContext";
import TopBar from "./layout/Topbar";
import SideBar from "./layout/sidebar";
import Content from "./layout/content";

function App() {
  return (
    <GlobalProvider>
      <TopBar />
      <SideBar />
      <Content />
    </GlobalProvider>
  );
}

export default App;
