import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, Minus } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { sendMessage } from "../services/chat.service";
import "./SiteStyles.css";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface ChatDrawerProps {
  open: boolean;
  onClose: () => void;
}

const quickQuestions = [
  "What courses do you offer?",
  "Tell me about placements",
  "What is the fee structure?",
  "How to apply for admissions?",
];

export default function ChatDrawer({ open, onClose }: ChatDrawerProps) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Hi ${user?.name?.split(" ")[0] || "there"}! I'm EduReach Bot. Ask me anything about courses, fees, admissions, or campus life.`,
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || sending) return;

    const userMsg: Message = { id: Date.now(), text: messageText, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setSending(true);

    try {
      // sendMessage now returns { message: "answer text" }
      const data = await sendMessage(messageText);
      const botMsg: Message = { id: Date.now() + 1, text: data.message, sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: Message = { id: Date.now() + 1, text: "Sorry, something went wrong. Please try again.", sender: "bot" };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!open) return null;

  return (
    <div className="chat-drawer">
      {/* Header */}
      <div className="chat-header">
        <div className="chat-brand">
          <div className="chat-brand-icon">
            <Bot size={16} />
          </div>
          <div>
            <h3>EduReach Bot</h3>
            <p>Ask me anything</p>
          </div>
        </div>
        <div className="chat-actions">
          <button onClick={onClose} className="chat-action">
            <Minus size={16} />
          </button>
          <button onClick={onClose} className="chat-action">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-message-row ${msg.sender === "user" ? "chat-message-row--user" : ""}`}>
            {msg.sender === "bot" && (
              <div className="chat-avatar chat-avatar--bot">
                <Bot size={12} />
              </div>
            )}
            <div className={`chat-bubble ${msg.sender === "user" ? "chat-bubble--user" : "chat-bubble--bot"}`}>
              {msg.text}
            </div>
            {msg.sender === "user" && (
              <div className="chat-avatar chat-avatar--user">
                <User size={12} />
              </div>
            )}
          </div>
        ))}

        {sending && (
          <div className="chat-message-row">
            <div className="chat-avatar chat-avatar--bot">
              <Bot size={12} />
            </div>
            <div className="chat-typing">
                <span />
                <span />
                <span />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick questions */}
      {messages.length === 1 && (
        <div className="chat-quick">
          <p className="chat-quick-label">Quick questions:</p>
          <div className="chat-quick-list">
            {quickQuestions.map((q) => (
              <button key={q} onClick={() => handleSend(q)}
                className="chat-quick-button">
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="chat-composer">
        <div className="chat-composer-inner">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}
            placeholder="Ask a question..." disabled={sending}
            className="chat-input" />
          <button onClick={() => handleSend()} disabled={!input.trim() || sending}
            className="chat-send">
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}