import React, { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center my-7 py-10 bg-[#D3DAD9] rounded-md">
      <h2 className="text-2xl text-center font-bold py-4">
        Subscribe To Our Newsletter
      </h2>
      <form onSubmit={handleSubscribe}>
        <div className="join">
          <label className="input join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mail@site.com"
              required
            />
          </label>

          <div className="validator-hint hidden">Enter valid email address</div>
          <button
            type="submit"
            className="btn join-item bg-linear-to-br from-[#7A85C1] to-[#9F62F2] text-white"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
