import React from 'react';
import "../Styles/SubscriptionCard.css"

const SubscriptionCard = ({ isPopular, onSubscribe }) => {
  return (
    <div className={`subscription-card ${isPopular ? 'popular' : ''}`}>
      {isPopular && <span className="popular-badge">Most Popular</span>}

      {/* Plan Details */}
      <div className="plan-details">
        <h3 className="plan-title">{isPopular ? 'Pro' : 'Basic'}</h3>
        <p className="plan-price">
          ${isPopular ? '500' : '100'}
          <span className="price-period">/month</span>
        </p>
      </div>

      {/* Static Features */}
      <div className="features-static">
        <p className="feature-item">
          <svg
            className="check-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {isPopular ? 'All features' : 'Limited features'}
        </p>
        <p className="feature-item">
          <svg
            className="check-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {isPopular ? 'Access to all data' : 'Limited to 100 patients'}
        </p>
        <p className="feature-item">
          <svg
            className="check-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {isPopular ? 'Advanced Insights' : 'No Insights'}
        </p>
        <p className="feature-item">
          <svg
            className="check-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {isPopular ? 'Unlimited Users' : '1 User'}
        </p>
      </div>

      {/* Subscribe Button */}
      <button className="subscribe-button" onClick={onSubscribe}>
        Get Started
      </button>
    </div>
  );
};
export default SubscriptionCard;