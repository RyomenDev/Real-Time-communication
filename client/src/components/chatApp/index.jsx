import { useState, useEffect } from "react";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");

    ws.onopen = () => console.log("Connected to WebSocket");

    ws.onmessage = async (event) => {
      if (event.data instanceof Blob) {
        const text = await event.data.text(); // Convert Blob to text
        setMessages((prev) => [...prev, text]);
      } else {
        setMessages((prev) => [...prev, event.data]);
      }
    };

    ws.onclose = () => console.log("Disconnected from WebSocket");

    setSocket(ws);

    return () => ws.close();
  }, []);

  const sendMessage = () => {
    if (socket && message.trim()) {
      socket.send(message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Real-time Chat</h1>
        <div className="h-60 overflow-y-auto border rounded p-2 bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className="p-2 border-b">
              {msg}
            </div>
          ))}
        </div>
        <div className="flex mt-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 p-2 border rounded-l"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded-r"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
