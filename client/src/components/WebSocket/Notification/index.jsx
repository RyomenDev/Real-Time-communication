import { useEffect, useState } from "react";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");

    socket.onopen = () => {
      console.log("Connected to WebSocket");
    };

    // socket.onmessage = (event) => {
    //   const data = JSON.parse(event.data);
    //   setNotifications((prev) => [data, ...prev]);
    // }; // for JSON

    // socket.onmessage = async (event) => {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     try {
    //       const data = JSON.parse(reader.result);
    //       setNotifications((prev) => [data, ...prev]);
    //     } catch (error) {
    //       console.error("Error parsing JSON:", error);
    //     }
    //   };
    //   reader.readAsText(event.data);
    // };
    socket.onmessage = async (event) => {
      if (typeof event.data === "string") {
        // If data is already a string, parse it directly
        try {
          const data = JSON.parse(event.data);
          setNotifications((prev) => [data, ...prev]);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else if (event.data instanceof Blob) {
        // If it's a Blob, read it as text
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const data = JSON.parse(reader.result);
            setNotifications((prev) => [data, ...prev]);
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        };
        reader.readAsText(event.data);
      } else {
        console.error("Received unknown data type:", event.data);
      }
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const sendNotification = (message) => {
    if (ws) {
      ws.send(JSON.stringify({ type: "notification", message }));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>
        {notifications.length === 0 ? (
          <p className="text-gray-500">No notifications yet.</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map((notification, index) => (
              <li key={index} className="p-3 bg-blue-100 rounded shadow">
                {notification.message}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => sendNotification("New payment received!")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded shadow"
        >
          Send Test Notification
        </button>
      </div>
    </div>
  );
};

export default Notification;
