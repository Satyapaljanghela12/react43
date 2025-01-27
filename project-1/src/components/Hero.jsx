const HeroSection = () => {
  
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FAVOURITE BOOKS ONLINE INSTANTLY</h1>
        <p>
          You can develop by reading books and you can said to be wise because by reading books only.
        </p>
        
        <div className="hero-btn">
          <button className="firstbtn">Get Started</button>
          <button className="secondary-btn">Contact Seller</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/img2.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
