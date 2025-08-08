import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [status, setStatus] = React.useState("");
  const ping = async () => {
    try {
      const res = await fetch((import.meta.env.VITE_API_BASE_URL || "") + "/health");
      setStatus(await res.text());
    } catch (e) {
      setStatus(String(e));
    }
  };
  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>LMS Frontend placeholder ✅</h1>
      <p>API base: {import.meta.env.VITE_API_BASE_URL || "(not set)"}</p>
      <button onClick={ping}>Ping API</button>
      <pre>{status}</pre>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
