function LastSec() {
  const handleButtonClick = () => {
    window.location.href = "/login";
  };
  return (
    <div className="last-sec">
      <span>
      Sell your tailored products for our clients <br />
      Deliver the promised quality by efficiency <br />
      Buy online to save your energy and time
      </span>
      <button className="btn2" onClick={handleButtonClick}>
        REGISTER NOW
      </button>
    </div>
  );
}

export default LastSec;
