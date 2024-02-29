import { useState } from "react";
import "./Styles.css";

export default function Google() {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    setTimeout(() => {
      window.location.href = `https://www.google.com/search?q=${search.trim()}`;
    }, 700);
  };
  return (
    <div>
      <div className="google-logo">
        <img
          src="https://i.ibb.co/Hgsmj8Y/17d24139aeae0cb5663809159e457347-removebg-preview.png"
          alt="google"
        />
      </div>

      <div className="chat-container">
        <div className="chat-input">
          <input
            type="text"
            id="messageInput"
            placeholder="Search here..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button id="sendMessageButton" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
