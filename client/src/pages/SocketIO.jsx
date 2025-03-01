import { useNavigate } from "react-router-dom";

const SocketIO = () => {
  const navigate = useNavigate();

  const options = [
    { title: "🔔 Real-time Notifications", path: "/socketio/notification" },
    { title: "💬 Live Chat Application", path: "/socketio/chat" },
    { title: "📡 Live Sports Score Updates", path: "/socketio/sports-scores" },
    { title: "📊 Collaborative Whiteboard", path: "/socketio/whiteboard" },
    { title: "📍 Real-time Location Sharing", path: "/socketio/location" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Socket.IO Use Cases ⚡
        </h1>
        <p className="text-gray-600 mb-6">
          Experience real-time, bi-directional communication with Socket.IO!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              className="p-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
              onClick={() => navigate(option.path)}
            >
              {option.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocketIO;
