const CreditCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-slate-50 text-[#064b8d] p-8 py-16 shadow-lg rounded flex">
        <img
          className="w-48 ml-8 mr-4 self-start"
          src="https://uploads-ssl.webflow.com/62285c67b85ea03190eb0406/6299541c2294016b152125f3_thursdays.svg"
        />
        <div className="mx-6">
          <small className="opacity-60">4/4</small>
          <h1 className="text-lg font-bold">Last Step!</h1>
          <p className="mb-4">Enter your payment info below.</p>
          <form action="submit">
            <div className="flex gap-2 mb-4">
              <div className="radioLabel px-4 py-2 bg-white text-blue-800 border border-slate-300 rounded focus:border-[#068d4a]">
                <label htmlFor="credit">Credit Card</label>
                <input className="ml-2 " type="radio" id="credit" name="payment" defaultValue="credit" defaultChecked />
              </div>
              <div className="radioLabel inline-flex px-4 py-2 bg-white text-blue-800 border border-slate-300 rounded">
                <img
                  className="w-20"
                  src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
                  alt="paypal"
                />
                <input className="ml-2" type="radio" id="paypal" name="payment" defaultValue="paypal" />
              </div>
            </div>
            {/* card number */}
            <div className="mb-4">
              <label className="block text-xs my-1" htmlFor="card_number">
                Card Number
              </label>
              <input
                className="border border-slate-200 rounded w-full py-2 placeholder:text-slate-400 placeholder:font-medium placeholder:text-sm px-4"
                type="text"
                name="card_number"
                id="card_number"
                placeholder="123 4567 8912 3456"
              />
            </div>
            {/* Exp date */}
            <div className="flex gap-3">
              <div className="inline-block">
                <label className="block text-xs my-1" htmlFor="exp">
                  Expiration Date
                </label>
                <select
                  className="border border-gray-300 rounded py-2 px-4 text-slate-400 font-medium text-sm"
                  name="month"
                  id="month"
                  aria-placeholder="month"
                >
                  <option disabled selected value="month">
                    Month
                  </option>
                  <option value="january">january</option>
                  <option value="february">february</option>
                  <option value="march">march</option>
                  <option value="april">april</option>
                  <option value="may">may</option>
                </select>
                <select
                  className="border border-gray-300 rounded p-2 text-slate-400 font-medium text-sm"
                  name="date"
                  id="date"
                >
                  <option disabled selected value="day">
                    Day
                  </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <div>
                <label className="block text-xs my-1" htmlFor="cvc">
                  CVC
                </label>
                <input className="border border-gray-300 rounded p-2" type="number" name="cvc" id="cvc" />
              </div>
            </div>
            <small className="block mb-4">
              By creating an account, you agree to Study.com‘s <strong>Terms of Use</strong> and{" "}
              <strong>Privacy Policy</strong>
            </small>
            <button className="rounded block py-2 w-64 text-white bg-[#064b8d]">Join Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
