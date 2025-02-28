import React, { useState } from "react";
import axios from "axios";
import "../Styles/Chatbot.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  const [userInput, setUserInput] = useState({});
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/predict", userInput);
      setPrediction(res.data);
    } catch (error) {
      console.error("Prediction error:", error);
    }
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <FontAwesomeIcon icon={faHeartbeat} className="chatbot-icon" />
          <div className="chatbot-header-text">
            <span className="chatbot-title">DOC-Chain AI</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="chatbot-form">
          <input type="number" name="Follicle No. (R)" placeholder="Follicle No. (R)" onChange={handleChange} required />
          <input type="number" name="Follicle No. (L)" placeholder="Follicle No. (L)" onChange={handleChange} required />
          <select name="Skin darkening (Y/N)" onChange={handleChange} required>
            <option value="">Skin Darkening</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
          <select name="hair growth(Y/N)" onChange={handleChange} required>
            <option value="">Hair Growth</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
          <select name="weight gain(Y/N)" onChange={handleChange} required>
            <option value="">Weight Gain</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
          <input type="number" name="Cycle(R/I)" placeholder="Cycle(R/I)" onChange={handleChange} required />
          <select name="fast food(Y/N)" onChange={handleChange} required>
            <option value="">Fast Food</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
          <select name="pimples(Y/N)" onChange={handleChange} required>
            <option value="">Pimples</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
          <input type="number" name="AMH (ng/ml)" placeholder="AMH (ng/ml)" onChange={handleChange} required />
          <input type="number" name="Weight (Kg)" placeholder="Weight (Kg)" onChange={handleChange} required />
          <button type="submit">Predict</button>
        </form>

        {prediction && (
          <div className="prediction-result">
            <p><strong>Diagnosis:</strong> {prediction.prediction}</p>
            <p><strong>PCOS Probability:</strong> {prediction.probability}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
