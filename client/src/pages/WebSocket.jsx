import { useNavigate } from "react-router-dom";
// import Chat from "../components/chatApp/index.jsx";

const WebSocket = () => {
  const navigate = useNavigate();

  const options = [
    { title: "📈 Stock Market Live Updates", path: "/stock-market" },
    { title: "📢 Real-time Notifications", path: "/notifications" },
    { title: "🎮 Multiplayer Gaming", path: "/multiplayer-game" },
    { title: "🚗 Live GPS Tracking", path: "/gps-tracking" },
    { title: "💬 Live Chat App", path: "/websocket/chat" },
  ];

  return (
    <>
      {/* <Chat /> */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            WebSocket Use Cases 🚀
          </h1>
          <p className="text-gray-600 mb-6">
            Explore real-time communication with WebSockets in different
            applications!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {options.map((option, index) => (
              <button
                key={index}
                className="p-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                onClick={() => navigate(option.path)}
              >
                {option.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WebSocket;
