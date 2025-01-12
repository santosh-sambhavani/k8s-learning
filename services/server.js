const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

// Function to get the system's IP address
function getSystemIP() {
  const networkInterfaces = os.networkInterfaces();
  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];
    for (const iface of interfaces) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address; // Return the first external IPv4 address
      }
    }
  }
  return "127.0.0.1"; // Fallback to localhost
}

// API endpoint to return the system IP
app.get("/api", (req, res) => {
  const ipAddress = getSystemIP();
  res.json({ ip: ipAddress });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

