const ForgotPassword = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen text-[#1e1a50]">
      <div className="relative bg-white p-5 px-36 py-20 shadow-md mx-10 max-w-2xl min-w-lg">
        <small className="absolute right-3 top-0 p-3 text-slate-500/75">
          you dont have an account?
          <span>
            <button className="border-none bg-transparent text-blue-400 hover:text-blue-500 text-xs font-semibold">
              Sign Up
            </button>
          </span>
        </small>
        <section className="text-center">
          <h2 className="mb-3 text-xl font-semibold tracking-wide">Did you forgot your password?</h2>
          <p className="mb-9 text-sm leading-5 text-slate-500/90">
            Enter your email address you‘re using for your account below and we will send you a password reset link
          </p>
          <form className="w-100 mb-3 flex flex-col text-left">
            <label className="pb-2 font-bold text-sm" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="myemail@address.com"
              className="mb-3 rounded border border-slate-400 px-4 py-2 focus:border-teal-500 focus:outline-none"
            />
            <button className="rounded bg-[#242e4c] px-4 py-2 text-white" type="submit">
              Request Reset Link
            </button>
          </form>
          <a className="text-blue-900/75 underline text-sm" href="/">
            Back to Sign In
          </a>
        </section>
      </div>
    </div>
  );
};

export default ForgotPassword;
