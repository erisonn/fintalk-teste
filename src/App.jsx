import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import AuthHandler from "./components/AuthHandler";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./clientConfig";

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthHandler>
            <Router />
          </AuthHandler>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
