import { useState } from "react";

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [tenure, setTenure] = useState(72);
  const [interest, setInterest] = useState(0);
  const [emi, setEmi] = useState(0);
  const [interestPayable, setInterestPayable] = useState(0);

  const handleLoanChange = (event) => {
    setLoanAmount(event.target.value);
    calculateResults(loanAmount, interest, tenure);
  };

  const handleTenureChange = (event) => {
    setTenure(event.target.value);
    calculateResults(loanAmount, interest, tenure);
  };

  const handleInterestChange = (event) => {
    setInterest(event.target.value);
    calculateResults(loanAmount, interest, tenure);
  };

  // function to calculate the data
  // const calculateResults = ({ amount, interest, years }) => {
  const calculateResults = (loanAmount, interest, tenure) => {
    const userAmount = Number(loanAmount);
    const calculatedInterest = Number(interest) / 100 / 12;
    // const calculatedPayments = Number(years) * 12;
    const calculatedPayments = Number(tenure);
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      const totalInterestCalculated = (
        monthly * calculatedPayments -
        userAmount
      ).toFixed(2);

      // setResults({
      //   monthlyPayment: monthlyPaymentCalculated,
      //   totalPayment: totalPaymentCalculated,
      //   totalInterest: totalInterestCalculated,
      //   isResult: true,
      // });

      setEmi(monthlyPaymentCalculated);
      setInterestPayable(totalInterestCalculated);
    }

    return;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateResults(loanAmount, interest, tenure);
  };

  //
  return (
    <div className="container p-5 text-bg-danger">
      <div className="row">
        <p style={{ textTransform: "uppercase" }}>loan Calculator</p>
        {/* <h1>Hello world</h1> */}
      </div>
      <form
        action=""
        className="row align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-12 row">
            <div className="col-4">
              <label htmlFor="loanAmount" className="form-label">
                Loan Amount
              </label>
              <ul className="position-relative">
                <li className="position-absolute start-0">
                  <span className="">{loanAmount}</span>
                </li>
              </ul>
              <input
                type="range"
                className="form-range"
                min="50000"
                max="5000000"
                step="1"
                id="loanAmount"
                value={loanAmount}
                onChange={handleLoanChange}
              ></input>
              {/* <div className="container"> */}
              <ul className="position-relative">
                <li className="position-absolute start-0">
                  <span>₹ 50,000</span>
                </li>
                <li className="position-absolute end-0">
                  <span>₹ 50,00,000</span>
                </li>
              </ul>
              {/* </div> */}
            </div>
            <div className="col-4">
              <label htmlFor="tenure" className="form-label">
                Tenure (Months)
              </label>
              <ul className="position-relative">
                <li className="position-absolute start-0">
                  <span className="">{tenure}</span>
                </li>
              </ul>
              <input
                type="range"
                className="form-range"
                min="12"
                max="72"
                step="1"
                id="tenure"
                value={tenure}
                onChange={handleTenureChange}
              ></input>
              {/* <div className="container"> */}
              <ul className="position-relative">
                <li className="position-absolute start-0">
                  <span>12 M</span>
                </li>
                <li className="position-absolute end-0">
                  <span>72 M</span>
                </li>
              </ul>
              {/* </div> */}
            </div>
            <div className="col-4">
              <label htmlFor="interest" className="form-label">
                Interest Rate (In Percentage)
              </label>
              <ul className="position-relative">
                <li className="position-absolute start-0">
                  <span className="">{interest}</span>
                </li>
              </ul>
              <input
                type="range"
                className="form-range"
                min="0"
                max="20"
                step="0.01"
                id="interest"
                value={interest}
                onChange={handleInterestChange}
              ></input>
              {/* <div className="container"> */}
              <ul className="position-relative">
                <li className="position-absolute start-0">
                  <span>0% PA</span>
                </li>
                <li className="position-absolute end-0">
                  <span>20% PA</span>
                </li>
              </ul>
              {/* </div> */}
            </div>
          </div>
        </div>
        <br />
        <div className="row pt-5">
          <div className="col-6 row">
            <div className="col-6">
              <label htmlFor="emi" className="form-label">
                EMI Amount
              </label>
              <h5>
                <span>₹</span>
                {emi}
                <span>*</span>
              </h5>
            </div>
            <div className="col-6">
              <label htmlFor="interestPayable" className="form-label">
                Interest Payable
              </label>
              <h5>
                <span></span>
                {interestPayable}
                <span></span>
              </h5>
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <div>
              <button
                type="submit"
                className="btn btn-warning mb-3"
                style={{ textTransform: "uppercase" }}
              >
                Apply for Personal Loan
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
