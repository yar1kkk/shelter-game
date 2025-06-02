import React from "react";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        textAlign: "center",
        backgroundColor: "#171717",
        color: "#ededed",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#febe10",
        }}
      >
        404 - Page Not Found
      </h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a
        style={{
          marginTop: "40px",
          textDecoration: "underline",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#a8a8a8",
        }}
        href="/"
      >
        Go back to Home
      </a>
    </div>
  );
}
