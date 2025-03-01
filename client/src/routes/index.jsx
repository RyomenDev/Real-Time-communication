import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import { Home } from "../pages";

import WebSocketLayout from "../Layout/websocket.jsx";
import Chat from "../components/chatApp/index.jsx";
import WebSocketPage from "../pages/WebSocket.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="websocket" element={<WebSocketLayout />}>
        <Route index element={<WebSocketPage />} />
        <Route path="chat" element={<Chat />} />
      </Route>
    </Route>
  )
);

export { router };
