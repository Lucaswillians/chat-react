import { createRoot } from "react-dom/client"

import App from "./App.jsx"
import GlobalStyle from "./styles/global.jsx"

const root = createRoot(document.querySelector("#root"))

root.render(
  <>
    <App/>
    <GlobalStyle/>
  </>
)
