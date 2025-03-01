import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import { Home } from "../pages";

import WebSocketLayout from "../Layout/websocket.jsx";
import WebSocketPage from "../pages/WebSocket.jsx";
import Chat_Websocket from "../components/WebSocket/chatApp/index.jsx";
import Notification_Websocket from "../components/WebSocket/Notification/index.jsx";

import SocketLayout from "../Layout/socket.jsx";
import SocketPage from "../pages/SocketIO";
// import Chat_Websocket from "../components/WebSocket/chatApp/index.jsx";
import Notification_Socket from "../components/SocketIO/Notification/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/*  */}
      <Route path="websocket" element={<WebSocketLayout />}>
        <Route index element={<WebSocketPage />} />
        <Route path="chat" element={<Chat_Websocket />} />
        <Route path="notification" element={<Notification_Websocket />} />
      </Route>
      {/*  */}
      <Route path="socketio" element={<SocketLayout />}>
        <Route index element={<SocketPage />} />
        {/* <Route path="chat" element={<Chat_Websocket />} /> */}
        <Route path="notification" element={<Notification_Socket />} />
      </Route>
    </Route>
  )
);

export { router };
