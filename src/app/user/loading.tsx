const loading = () => {
  return (
    <main className="h-screen">
      <div className="spinnerContainer">
        <div className="spinner"></div>
        <div className="loader">
          <p>Loading</p>
          <div className="words">
            <span className="word">Balance</span>
            <span className="word">Savings</span>
            <span className="word">Deposits</span>
            <span className="word">Withdrawals</span>
            <span className="word">Offers</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default loading;
