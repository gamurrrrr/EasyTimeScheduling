import React, { useState } from "react";

export default function ShiftSwap() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    coworker: "",
    reason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Swap Request Submitted:", form);
    alert("Swap request submitted!\n(Check console for form data)");
    setForm({ name: "", date: "", time: "", coworker: "", reason: "" });
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
          backgroundColor: "#fff",
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
        <div>Shift Swap Request</div>
      </header>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#fff",
            border: `1px solid ${border}`,
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,.05)",
          }}
        >
          <h1
            style={{
              marginTop: 0,
              color: green,
              fontSize: "22px",
            }}
          >
            Request a Shift Swap
          </h1>

          <p
            style={{
              fontSize: "14px",
              color: "#555",
              marginBottom: "20px",
            }}
          >
            Fill out the form below to request swapping one of your shifts with
            another employee.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <label
              style={{
                display: "block",
                marginTop: "14px",
                fontSize: "14px",
                color: "#555",
              }}
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g., Alex Johnson"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: `1px solid ${border}`,
                borderRadius: "8px",
                marginTop: "6px",
                background: "#fff",
                font: "inherit",
              }}
            />

            {/* Date */}
            <label
              style={{
                display: "block",
                marginTop: "14px",
                fontSize: "14px",
                color: "#555",
              }}
            >
              Date of Your Current Shift
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: `1px solid ${border}`,
                borderRadius: "8px",
                marginTop: "6px",
                background: "#fff",
                font: "inherit",
              }}
            />

            {/* Time */}
            <label
              style={{
                display: "block",
                marginTop: "14px",
                fontSize: "14px",
                color: "#555",
              }}
            >
              Shift Time
            </label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: `1px solid ${border}`,
                borderRadius: "8px",
                marginTop: "6px",
                background: "#fff",
                font: "inherit",
              }}
            />

            {/* Coworker */}
            <label
              style={{
                display: "block",
                marginTop: "14px",
                fontSize: "14px",
                color: "#555",
              }}
            >
              Who Do You Want to Swap With?
            </label>
            <select
              name="coworker"
              value={form.coworker}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: `1px solid ${border}`,
                borderRadius: "8px",
                marginTop: "6px",
                background: "#fff",
                font: "inherit",
              }}
            >
              <option value="">Select coworker</option>
              <option>Jade</option>
              <option>Sam</option>
              <option>Ray</option>
            </select>

            {/* Reason */}
            <label
              style={{
                display: "block",
                marginTop: "14px",
                fontSize: "14px",
                color: "#555",
              }}
            >
              Reason for Swap (optional)
            </label>
            <textarea
              name="reason"
              placeholder="e.g., I have a class during that shift."
              value={form.reason}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                border: `1px solid ${border}`,
                borderRadius: "8px",
                marginTop: "6px",
                background: "#fff",
                font: "inherit",
                resize: "vertical",
                minHeight: "80px",
              }}
            />

            {/* Submit */}
            <button
              type="submit"
              style={{
                marginTop: "22px",
                backgroundColor: green,
                color: "#fff",
                border: "none",
                padding: "10px 16px",
                borderRadius: "8px",
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
              Submit Swap Request
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
