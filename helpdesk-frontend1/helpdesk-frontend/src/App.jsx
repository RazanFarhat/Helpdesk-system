import {
BrowserRouter,
Routes,
Route,
} from "react-router-dom";

import Tickets from "./pages/Tickets";
import CreateTicket from "./pages/CreateTicket";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
return ( <BrowserRouter> <Routes>
<Route path="/" element={<Login />} />

```
    <Route
      path="/tickets"
      element={<Tickets />}
    />

    <Route
      path="/create-ticket"
      element={<CreateTicket />}
    />
    <Route
  path="/dashboard"
  element={<Dashboard />}
/>
  </Routes>
</BrowserRouter>


);
}

export default App;
