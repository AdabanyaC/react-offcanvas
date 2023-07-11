import React from "react";
import { Button } from "./Button";

const WaitlistForm = () => {
  return (
    <form>
      <div className="mt-5">
        <label className="font-semibold text-sm text-gray-700">
          Your full name
        </label>
        <div>
          <input
            type="text"
            name="full_name"
            className="p-4 w-full bg-gray-100 text-sm rounded-md mt-2 focus:outline-none"
            placeholder="Enter your first name"
          />
        </div>
      </div>
      <div className="mt-5">
        <label className="font-semibold text-sm text-gray-700">
          Your email
        </label>
        <div>
          <input
            type="email"
            name="email"
            className="p-4 w-full bg-gray-100 text-sm rounded-md mt-2 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div className="mt-5">
        <Button btnText="Submit" bgColor="bg-zinc-700" />
      </div>
    </form>
  );
};

export default WaitlistForm;
