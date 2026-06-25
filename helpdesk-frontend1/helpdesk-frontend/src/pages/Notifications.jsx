import { useEffect, useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/notifications")
      .then((response) => response.json())
      .then((data) => {
        setNotifications(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <h1>Notifications</h1>

      {notifications.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        notifications.map((notification) => (
          <div
            key={notification.id}
            style={{
              backgroundColor: "white",
              padding: "15px",
              marginTop: "15px",
              borderRadius: "10px",
            }}
          >
            🔔 {notification.message}
          </div>
        ))
      )}
    </div>
  );
}

export default Notifications;