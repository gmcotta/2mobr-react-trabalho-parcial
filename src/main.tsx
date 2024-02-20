import React from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./pages/Home.tsx";
import { StyledComponentsWrapper } from "./components/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledComponentsWrapper>
      <Home />
    </StyledComponentsWrapper>
  </React.StrictMode>
);
