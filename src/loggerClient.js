// src/loggerClient.js

export function setupClientLogging() {
  window.addEventListener("error", (event) => {
    if (import.meta.env.DEV) {
      fetch("/__error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          args: [event.message, event.filename, event.lineno, event.colno],
        }),
      }).catch(() => {});
    }
  });

  window.addEventListener("unhandledrejection", (event) => {
    if (import.meta.env.DEV) {
      fetch("/__error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          args: ["Unhandled Promise Rejection:", event.reason],
        }),
      }).catch(() => {});
    }
  });

  const originalLog = console.log;
  console.log = (...args) => {
    originalLog(...args); // still show in browser console

    if (import.meta.env.DEV) {
      fetch("/__log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ args }),
      }).catch(() => {});
    }
  };
}
