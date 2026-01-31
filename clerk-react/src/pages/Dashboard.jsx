import { useUser, UserButton } from "@clerk/clerk-react";
import { logUserEvent } from "../lib/supabase";

export default function Dashboard() {
  const { user } = useUser();

  const handleLogClick = async () => {
    if (!user) return;

    await logUserEvent(user.id, "clicked_test_button");
    alert("event was logged in supabase dashboard");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <UserButton />
      <h1>Welcome, {user?.firstName || "User"}!</h1>
      <p>Clerk ID: {user?.id}</p>

      <div style={{ marginTop: "30px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", display: "inline-block" }}>
        <h3>Event Logging Test</h3>
        <button
          onClick={handleLogClick}
          style={{ padding: "10px 20px", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Log "Button Click" Event
        </button>
      </div>
    </div>
  );
}