import SubscriptionCard from "../Components/SubscriptionCard"
const Subscription = () => {
    const handleSubscribe = (plan) => {
      alert(`Subscribed to ${plan}!`);
    };
  
    return (
        <section className="hero">
          <h1>Welcome to Our Service</h1>
          <p>Choose a plan that fits your needs</p>
          <div className="hero-cards">
            <SubscriptionCard onSubscribe={() => handleSubscribe('Basic')} />
            <SubscriptionCard
              isPopular
              onSubscribe={() => handleSubscribe('Pro')}
            />
          </div>
        </section>
      );
  };
  
  export default Subscription;