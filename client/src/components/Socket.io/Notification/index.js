import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Listen for real-time notifications
    socket.on("receiveNotification", (data) => {
      setNotifications((prev) => [data, ...prev]); // Add new notifications at the top
    });

    // Load initial notifications from server
    socket.on("initialNotifications", (data) => {
      setNotifications(data);
    });

    return () => {
      socket.off("receiveNotification");
      socket.off("initialNotifications");
    };
  }, []);

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
      </div>
    </div>
  );
};

export default Notification;
