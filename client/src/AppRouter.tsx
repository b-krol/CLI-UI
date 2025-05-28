import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./routes/layout";

import NewConfiguration from "./routes/NewConfiguration";
import ManageConfigurations from "./routes/ManageConfigurations";
import Chat from "./routes/Chat";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/NewConfiguration" element={<NewConfiguration />} />
          <Route
            path="/ManageConfigurations"
            element={<ManageConfigurations />}
          />
          <Route path="/Chat" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}