// import { useState } from "react";
// import logo from "../assets/easytime-logo.png";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Logging in with:", { email, password });
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           width: "90%",
//           maxWidth: "420px",
//           minHeight: "460px",
//           padding: "6%",
//           backgroundColor: "white",
//           borderRadius: "20px",
//           boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         {/* Logo */}
//         <img
//           src={logo}
//           alt="EasyTime Logo"
//           style={{
//             width: "80%",
//             marginTop: "-30px", 
//             marginBottom: "10px", 
//           }}
//         />

//         {/* Email input */}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           style={{
//             width: "100%",
//             padding: "12px",
//             marginBottom: "18px",
//             fontSize: "16px",
//             boxSizing: "border-box",
//           }}
//         />

//         {/* Password input */}
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={{
//             width: "100%",
//             padding: "12px",
//             marginBottom: "32px",
//             borderRadius: "10px",
//             fontSize: "16px",
//             boxSizing: "border-box",
//           }}
//         />

//         {/* Login button */}
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "12px",
//             borderRadius: "10px",
//             border: "none",
//             backgroundColor: "#47a868",
//             color: "white",
//             fontSize: "18px",
//             fontWeight: 600,
//             cursor: "pointer",
//           }}
//         >
//           Login
//         </button>

//         {/* Forgot password */}
//         <a
//           href="#"
//           style={{
//             marginTop: "16px",
//             color: "#47a868",
//             textDecoration: "none",
//             fontSize: "15px",
//           }}
//         >
//           Forgot password?
//         </a>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import logo from "../assets/easytime-logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "90%",
          maxWidth: "420px",
          minHeight: "50vh",
          padding: "6%",
          backgroundColor: "white",
          borderRadius: "1.25rem",
          boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="EasyTime Logo"
          style={{
            width: "80%",
            marginTop: "-3vh",
            marginBottom: "1vh",
          }}
        />

        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.8rem", 
            marginBottom: "1.2rem",
            fontSize: "1rem",
            borderRadius: "0.5rem",
            boxSizing: "border-box",
          }}
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.8rem",
            marginBottom: "2rem",
            borderRadius: "0.6rem",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
        />

        {/* Login button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.8rem",
            borderRadius: "0.6rem",
            border: "none",
            backgroundColor: "#47a868",
            color: "white",
            fontSize: "1.125rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3b8e59")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#47a868")}
        >
          Login
        </button>

        {/* Forgot password */}
        <a
          href="#"
          style={{
            marginTop: "1rem",
            color: "#47a868",
            textDecoration: "none",
            fontSize: "0.95rem",
          }}
        >
          Forgot password?
        </a>
      </form>
    </div>
  );
}
