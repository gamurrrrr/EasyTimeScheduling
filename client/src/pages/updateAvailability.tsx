import React, { useState } from "react";

interface Availability {
  day: string;
  from: string;
  to: string;
  available: boolean;
}

export default function UpdateAvailability() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // store data for all days
  const [availability, setAvailability] = useState<Availability[]>(
    days.map((day) => ({
      day,
      from: "",
      to: "",
      available: false,
    }))
  );

  // handle changes
  const handleChange = (
    index: number,
    field: keyof Availability,
    value: string | boolean
  ) => {
    const updated = [...availability];
    (updated[index] as any)[field] = value;
    setAvailability(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Availability data:", availability);
    alert("Availability saved! Check console for details 😎");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9f9",
        color: "#0b0b0c",
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Inter, Ubuntu, Helvetica Neue, Arial",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #d4d4d4",
          padding: "14px 20px",
          fontWeight: 600,
          fontSize: "18px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        ⏱️ EasyTime
        <div>Availability Update</div>
      </header>

      {/* Main */}
      <main
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          backgroundColor: "white",
          border: "1px solid #d4d4d4",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            marginTop: 0,
            color: "#47a868",
            fontSize: "22px",
          }}
        >
          Update Your Weekly Availability
        </h1>

        <p
          style={{
            fontSize: "14px",
            color: "#555",
            marginBottom: "20px",
          }}
        >
          Select the times you’re available to work for each day of the week.
        </p>

        <form onSubmit={handleSubmit}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
              fontSize: "14px",
            }}
          >
            <thead>
              <tr>
                <th style={thStyle}>Day</th>
                <th style={thStyle}>Available From</th>
                <th style={thStyle}>Available To</th>
                <th style={thStyle}>Available?</th>
              </tr>
            </thead>

            <tbody>
              {availability.map((item, index) => (
                <tr key={item.day}>
                  <td style={tdStyle}>{item.day}</td>
                  <td style={tdStyle}>
                    <input
                      type="time"
                      value={item.from}
                      onChange={(e) =>
                        handleChange(index, "from", e.target.value)
                      }
                      style={inputStyle}
                      disabled={!item.available}
                    />
                  </td>
                  <td style={tdStyle}>
                    <input
                      type="time"
                      value={item.to}
                      onChange={(e) =>
                        handleChange(index, "to", e.target.value)
                      }
                      style={inputStyle}
                      disabled={!item.available}
                    />
                  </td>
                  <td style={tdStyle}>
                    <input
                      type="checkbox"
                      checked={item.available}
                      onChange={(e) =>
                        handleChange(index, "available", e.target.checked)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#27985f")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#47a868")
            }
          >
            Save Availability
          </button>
        </form>
      </main>
    </div>
  );
}

// style objects
const thStyle: React.CSSProperties = {
  border: "1px solid #d4d4d4",
  padding: "8px",
  background: "#eaf5ee",
  color: "#47a868",
};

const tdStyle: React.CSSProperties = {
  border: "1px solid #d4d4d4",
  padding: "8px",
  textAlign: "center",
};

const inputStyle: React.CSSProperties = {
  width: "110px",
  padding: "5px",
  border: "1px solid #d4d4d4",
  borderRadius: "6px",
  background: "white",
};

const buttonStyle: React.CSSProperties = {
  marginTop: "22px",
  backgroundColor: "#47a868",
  color: "white",
  border: "none",
  padding: "10px 16px",
  borderRadius: "8px",
  fontWeight: 600,
  cursor: "pointer",
};
