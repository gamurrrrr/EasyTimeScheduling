import React, { useState, useRef, useEffect } from "react";

interface Message {
  text: string;
  sender: "user" | "other";
  time: string;
}

export default function TeamChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hey team! Don’t forget to check next week’s schedule.",
      sender: "other",
      time: "9:02 AM",
    },
    { text: "Got it! Thanks :)", sender: "user", time: "9:04 AM" },
  ]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = input.trim();
    if (!msg) return;

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [...prev, { text: msg, sender: "user", time }]);
    setInput("");

    // Simulate reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message!",
          sender: "other",
          time,
        },
      ]);
    }, 1000);
  };

  const green = "#47a868";
  const border = "#d4d4d4";

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f8f9f9",
        color: "#0b0b0c",
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Inter, Ubuntu, Helvetica Neue, Arial",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: `1px solid ${border}`,
          padding: "14px 20px",
          fontWeight: 600,
          fontSize: "18px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          ⏱️ EasyTime
          <button
            onClick={() => alert("Back to dashboard")}
            style={{
              backgroundColor: green,
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "6px 10px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#3b8e59")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = green)
            }
          >
            ← Back to Dashboard
          </button>
        </div>

        <div>Team Chat</div>
      </header>

      {/* Main Chat Section */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        {/* Chat window */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                maxWidth: "75%",
                padding: "10px 14px",
                borderRadius: "14px",
                fontSize: "14px",
                lineHeight: 1.4,
                color: msg.sender === "user" ? "#fff" : "#0b0b0c",
                backgroundColor:
                  msg.sender === "user" ? green : "#e6e6e6",
                borderBottomRightRadius:
                  msg.sender === "user" ? "4px" : "14px",
                borderBottomLeftRadius:
                  msg.sender === "other" ? "4px" : "14px",
                wordBreak: "break-word",
              }}
            >
              {msg.text}
              <small
                style={{
                  display: "block",
                  fontSize: "11px",
                  marginTop: "4px",
                  opacity: 0.8,
                  color: msg.sender === "user" ? "#f0f0f0" : "#555",
                }}
              >
                {msg.sender === "user" ? "You" : "Manager Serena"} • {msg.time}
              </small>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input bar */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "8px",
            padding: "14px",
            borderTop: `1px solid ${border}`,
            backgroundColor: "#ffffff",
            flexShrink: 0,
          }}
        >
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
            style={{
              flex: 1,
              padding: "10px",
              border: `1px solid ${border}`,
              borderRadius: "8px",
              font: "inherit",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: green,
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 16px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#3b8e59")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = green)
            }
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
