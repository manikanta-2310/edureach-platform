import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import ChatDrawer from "./ChatDrawer";
import "./SiteStyles.css";

export default function FloatingChatButton() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);

  const handleClick = () => {
    if (user) {
      setChatOpen(!chatOpen);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {/* Chat drawer popup */}
      <ChatDrawer open={chatOpen} onClose={() => setChatOpen(false)} />

      {/* Floating button */}
      <button
        onClick={handleClick}
        className={`chat-float ${chatOpen ? "chat-float--open" : "chat-float--closed"}`}
        title={user ? "Chat with EduReach Bot" : "Login to chat"}
      >
        {chatOpen ? (
          <MessageCircle size={24} />
        ) : (
          <MessageCircle size={24} className="chat-float-icon--animated" />
        )}
      </button>
    </>
  );
}