import React, { useState } from "react";

interface Person {
  id: string;
  name: string;
  defaultRole: string;
}

interface Shift {
  id: string;
  personId: string;
  personName: string;
  role: string;
  location: string;
  start: string;
  end: string;
}

export default function Calendar() {
  const [people] = useState<Person[]>([
    { id: "u1", name: "Alex", defaultRole: "Lead" },
    { id: "u2", name: "Jade", defaultRole: "Floor" },
    { id: "u3", name: "Sam", defaultRole: "Keyholder" },
    { id: "u4", name: "Ray", defaultRole: "Budtender" },
  ]);

  const today = new Date();
  const [viewStart, setViewStart] = useState(startOfWeek(today));
  const [filterId, setFilterId] = useState("all");
  const [userRole, setUserRole] = useState<"admin" | "employee">("admin");
  const currentUserId = "u2";

  const [shifts, setShifts] = useState<Shift[]>([
    mkShift("Alex", "Lead", "Main", todayISO() + "T09:00:00", todayISO() + "T17:00:00"),
    mkShift("Jade", "Floor", "Main", ymd(addDays(today, 1)) + "T10:00:00", ymd(addDays(today, 1)) + "T18:00:00"),
    mkShift("Sam", "Keyholder", "Main", ymd(addDays(today, 2)) + "T12:00:00", ymd(addDays(today, 2)) + "T20:00:00"),
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newShift, setNewShift] = useState({
    personId: "",
    role: "",
    location: "",
    start: "",
    end: "",
  });

  const HOUR_START = 6;
  const HOUR_END = 22;

  // === Helpers ===
  function addDays(d: Date, n: number) {
    const x = new Date(d);
    x.setDate(x.getDate() + n);
    return x;
  }

  function startOfWeek(d: Date) {
    const x = new Date(d);
    const day = (x.getDay() + 6) % 7;
    x.setDate(x.getDate() - day);
    x.setHours(0, 0, 0, 0);
    return x;
  }

  function ymd(d: Date) {
    return d.toISOString().slice(0, 10);
  }

  function todayISO() {
    return ymd(new Date());
  }

  function mkShift(name: string, role: string, loc: string, start: string, end: string): Shift {
    return {
      id: Math.random().toString(36).slice(2),
      personId: name.toLowerCase(),
      personName: name,
      role,
      location: loc,
      start,
      end,
    };
  }

  function fmtTime(iso: string) {
    const d = new Date(iso);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  const days = Array.from({ length: 7 }, (_, i) => addDays(viewStart, i));

  const filteredShifts = shifts.filter((s) => {
    if (userRole === "admin") return true;
    if (filterId === "my") return s.personId === currentUserId.toLowerCase();
    return true;
  });

  // === Add Shift Handler ===
  const handleAddShift = (e: React.FormEvent) => {
    e.preventDefault();
    const person = people.find((p) => p.id === newShift.personId);
    if (!person) return alert("Select a person!");

    const shift = {
      id: Math.random().toString(36).slice(2),
      personId: newShift.personId,
      personName: person.name,
      role: newShift.role || person.defaultRole,
      location: newShift.location || "Main",
      start: newShift.start,
      end: newShift.end,
    };

    setShifts((prev) => [...prev, shift]);
    setShowModal(false);
    setNewShift({ personId: "", role: "", location: "", start: "", end: "" });
  };

  // === Styles ===
  const green = "#47a868";
  const border = "#d4d4d4";

  const button = {
    background: "#fff",
    color: green,
    border: `1px solid ${border}`,
    borderRadius: "10px",
    padding: "8px 10px",
    cursor: "pointer",
    fontWeight: 600,
  };

  const buttonIcon = {
    ...button,
    width: "36px",
    height: "36px",
    display: "grid",
    placeItems: "center",
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        color: "#0b0b0c",
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Inter, Ubuntu, Helvetica Neue, Arial",
        overflow: "hidden",
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
              padding: "8px 12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            ← Back to Dashboard
          </button>
        </div>
        <button
          onClick={() =>
            setUserRole((prev) => (prev === "admin" ? "employee" : "admin"))
          }
          style={{
            backgroundColor: "#f0f0f0",
            border: `1px solid ${border}`,
            borderRadius: "8px",
            padding: "6px 10px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Switch to {userRole === "admin" ? "Employee" : "Admin"}
        </button>
      </header>

      {/* Main */}
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px",
        }}
      >
        {/* Toolbar */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            marginBottom: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button onClick={() => setViewStart(addDays(viewStart, -7))} style={buttonIcon}>
              ⟨
            </button>
            <button onClick={() => setViewStart(addDays(viewStart, 7))} style={buttonIcon}>
              ⟩
            </button>
            <button
              onClick={() => setViewStart(startOfWeek(new Date()))}
              style={{ ...button, backgroundColor: green, color: "#fff", border: "none" }}
            >
              Today
            </button>
            <h1 style={{ fontSize: "18px", marginLeft: "8px", color: green }}>
              {days[0].toLocaleDateString(undefined, { month: "short", day: "numeric" })} –{" "}
              {days[6].toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </h1>
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {userRole === "employee" && (
              <select
                value={filterId}
                onChange={(e) => setFilterId(e.target.value)}
                style={{
                  background: "#fff",
                  color: "#0b0b0c",
                  border: `1px solid ${border}`,
                  borderRadius: "10px",
                  padding: "8px 10px",
                }}
              >
                <option value="all">Team Schedule</option>
                <option value="my">My Schedule</option>
              </select>
            )}

            {userRole === "admin" && (
              <button
                onClick={() => setShowModal(true)}
                style={{
                  background: green,
                  border: "none",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: "10px",
                  padding: "8px 14px",
                  cursor: "pointer",
                }}
              >
                New Shift
              </button>
            )}
          </div>
        </div>

        {/* Calendar */}
        <section
          style={{
            width: "100%",
            maxWidth: "1200px",
            background: "#fff",
            border: `1px solid ${border}`,
            borderRadius: "14px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Grid Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px repeat(7, minmax(120px,1fr))",
              background: "#f4f6f4",
              borderBottom: `1px solid ${border}`,
            }}
          >
            <div style={{ padding: "10px", fontSize: "12px", textAlign: "center", color: "#555" }}>
              Time
            </div>
            {days.map((d, i) => (
              <div
                key={i}
                style={{
                  padding: "10px",
                  fontSize: "12px",
                  textAlign: "center",
                  color: green,
                  fontWeight: 600,
                }}
              >
                {d.toLocaleDateString(undefined, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            ))}
          </div>

          {/* Time Rows */}
          <div style={{ position: "relative" }}>
            {Array.from({ length: HOUR_END - HOUR_START + 1 }, (_, h) => {
              const hour = HOUR_START + h;
              return (
                <div
                  key={hour}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px repeat(7, minmax(120px,1fr))",
                    height: "48px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      padding: "6px 8px",
                      color: "#777",
                      borderTop: `1px solid ${border}`,
                    }}
                  >
                    {`${String(hour).padStart(2, "0")}:00`}
                  </div>
                  {days.map((_, d) => (
                    <div
                      key={d}
                      style={{
                        borderTop: `1px solid ${border}`,
                        borderLeft: `1px solid ${border}`,
                        background: "#fff",
                      }}
                    ></div>
                  ))}
                </div>
              );
            })}

            {/* Shift Blocks */}
            {filteredShifts.map((s) => {
              const start = new Date(s.start);
              const end = new Date(s.end);
              const dayIndex = Math.floor(
                (start.getTime() - viewStart.getTime()) / (1000 * 60 * 60 * 24)
              );
              if (dayIndex < 0 || dayIndex > 6) return null;

              const startM = start.getHours() * 60 + start.getMinutes();
              const endM = end.getHours() * 60 + end.getMinutes();
              const top = ((startM - HOUR_START * 60) / 60) * 48;
              const height = ((endM - startM) / 60) * 48;

              return (
                <div
                  key={s.id}
                  style={{
                    position: "absolute",
                    left: `calc(80px + ${dayIndex} * (100% - 80px) / 7 + 4px)`,
                    right: "4px",
                    top: `${top}px`,
                    height: `${height}px`,
                    background: "#e8f5ec",
                    border: `1px solid ${green}`,
                    color: "#0b0b0c",
                    borderRadius: "10px",
                    padding: "6px 8px",
                    fontSize: "12px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ fontWeight: 600, color: green }}>
                    {s.personName}{" "}
                    <span style={{ color: "#666", fontWeight: 500 }}>
                      · {s.role}
                    </span>
                  </div>
                  <div style={{ color: "#666", fontSize: "11px" }}>
                    {fmtTime(s.start)}–{fmtTime(s.end)} · {s.location}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* === New Shift Modal === */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <form
            onSubmit={handleAddShift}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "24px",
              width: "90%",
              maxWidth: "400px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <h2 style={{ color: green, marginTop: 0 }}>Add New Shift</h2>

            <select
              value={newShift.personId}
              onChange={(e) => setNewShift({ ...newShift, personId: e.target.value })}
              required
              style={inputStyle}
            >
              <option value="">Select Employee</option>
              {people.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Role"
              value={newShift.role}
              onChange={(e) => setNewShift({ ...newShift, role: e.target.value })}
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Location"
              value={newShift.location}
              onChange={(e) => setNewShift({ ...newShift, location: e.target.value })}
              style={inputStyle}
            />

            <label style={{ fontSize: "14px", color: "#555" }}>Start Time</label>
            <input
              type="datetime-local"
              value={newShift.start}
              onChange={(e) => setNewShift({ ...newShift, start: e.target.value })}
              required
              style={inputStyle}
            />

            <label style={{ fontSize: "14px", color: "#555" }}>End Time</label>
            <input
              type="datetime-local"
              value={newShift.end}
              onChange={(e) => setNewShift({ ...newShift, end: e.target.value })}
              required
              style={inputStyle}
            />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                style={{
                  ...button,
                  border: `1px solid ${border}`,
                  color: "#555",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  backgroundColor: green,
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Add Shift
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

// === Reusable input style ===
const inputStyle: React.CSSProperties = {
  padding: "10px",
  border: "1px solid #d4d4d4",
  borderRadius: "8px",
  font: "inherit",
  background: "#fff",
  width: "100%",
};
