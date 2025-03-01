const Home = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-6">
      <div className="max-w-5xl mx-auto text-center p-8 bg-white shadow-lg rounded-lg">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Real-Time Communication Techniques
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Explore different real-time communication methods like WebSocket,
          Socket.IO, SSE, gRPC, and MQTT. Learn their setup, implementation, and
          best practices for seamless integration into web apps, microservices,
          and IoT projects.
        </p>

        {/* Grid of Technologies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[
            { name: "WebSocket", color: "bg-blue-500" },
            { name: "Socket.IO", color: "bg-green-500" },
            { name: "SSE (Server-Sent Events)", color: "bg-purple-500" },
            { name: "gRPC", color: "bg-yellow-500" },
            { name: "MQTT", color: "bg-red-500" },
          ].map((tech, index) => (
            <div
              key={index}
              className={`p-6 ${tech.color} text-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105`}
            >
              <h2 className="text-2xl font-semibold">{tech.name}</h2>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10 space-y-4 sm:space-y-0 sm:flex sm:space-x-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-300">
            Start Learning
          </button>
          {/* <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 focus:ring-2 focus:ring-gray-300">
            Documentation
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
