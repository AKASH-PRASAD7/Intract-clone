const Hero = () => {
  return (
    <div
      className="hero-section bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url(/path/to/your/image.png)" }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded text-center">
        <h1 className="text-4xl mb-4">Intract Academy</h1>
        <p className="mb-4">
          Intract users have together made more than{" "}
          <strong>$100 million</strong> in web3. Join them and learn how to earn
          crypto!
        </p>
        <button className="bg-purple-600 text-white rounded px-5 py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
