import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import { Home } from "../pages";

import WebSocketLayout from "../Layout/websocket.jsx";
import WebSocketPage from "../pages/WebSocket.jsx";
import Chat from "../components/WebSocket/chatApp/index.jsx";
import Notification from "../components/WebSocket/Notification/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="websocket" element={<WebSocketLayout />}>
        <Route index element={<WebSocketPage />} />
        <Route path="chat" element={<Chat />} />
        <Route path="notification" element={<Notification />} />
      </Route>
    </Route>
  )
);

export { router };
