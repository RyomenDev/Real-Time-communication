import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Listen for real-time notifications
    socket.on("receiveNotification", (data) => {
      //   console.log({ data });
      setNotifications((prev) => [data.message.message, ...prev]); // Store message as a string
    });

    // Load initial notifications from server
    socket.on("initialNotifications", (data) => {
      setNotifications(data.map((notif) => notif.message)); // Extract messages
    });

    // console.log({ notifications });

    return () => {
      socket.off("receiveNotification");
      socket.off("initialNotifications");
    };
  }, []);

  // Function to send a new notification
  const sendNotification = () => {
    console.log("Sending Notification");
    const newNotification = { message: "🔔 New Notification Received!" };
    socket.emit("sendNotification", newNotification);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>

        {notifications.length === 0 ? (
          <p className="text-gray-500">No notifications yet.</p>
        ) : (
          <ul className="space-y-4">
            {notifications?.map((message, index) => (
              <li key={index} className="p-3 bg-blue-100 rounded shadow">
                {message}
              </li>
            ))}
          </ul>
        )}

        {/* Button to Send Notification */}
        <button
          onClick={sendNotification}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
        >
          Send Notification
        </button>
      </div>
    </div>
  );
};

export default Notification;
