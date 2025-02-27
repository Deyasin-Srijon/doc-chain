import React from "react";
import "../Styles/Chatbot.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-container">
        {/* Chatbot Header */}
        <div className="chatbot-header">
          <FontAwesomeIcon icon={faHeartbeat} className="chatbot-icon" />
          <div className="chatbot-header-text">
            <span className="chatbot-title">Health AI Chatbot</span>
            <span className="chatbot-subtitle">Your Smart Healthcare Assistant</span>
          </div>
        </div>

        {/* Embedded Dialogflow Chatbot */}
        <iframe
          src="https://console.dialogflow.com/api-client/demo/embedded/4f1d456c-025a-437a-b209-733a81e1b648"
          title="Dialogflow Chatbot"
          className="chatbot-iframe"
          allow="microphone"
        ></iframe>
      </div>
    </div>
  );
};

export default Chatbot;