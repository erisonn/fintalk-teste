import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import AuthHandler from "./components/AuthHandler";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthHandler>
          <Router />
        </AuthHandler>
      </BrowserRouter>
    </div>
  );
}

export default App;
