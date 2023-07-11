import React, { useState } from "react";
import ReactLogo from "./../assets/react.svg";
import { Button } from "./Button";
import OffCanvasMenu from "./OffCanvasMenu";
import WaitlistForm from "./WaitlistForm";

const LandingPage = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const toggleOffCanvas = () => {
    setShowOffCanvas(!showOffCanvas);
  };

  return (
    <>
      {showOffCanvas && (
        <OffCanvasMenu
          title="Join our waitlist"
          description="Be the first to know when we launch"
          width="w-1/3"
          postition="right-0" /* Use 'left-0' to position the offcanvas menu to the left. */
          component={<WaitlistForm />}
          onRequestClose={toggleOffCanvas}
        />
      )}
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <img src={ReactLogo} alt="React Logo" />
        </div>
        <div className="text-center w-3/5">
          <h1 className="font-extrabold text-6xl mt-12 text-zinc-600">
            Be the first to know when our amazing product is launched.
          </h1>
          <p className="mt-5 text-black text-opacity-50 w-3/4 m-auto">
            Spectre is an ambitous startup that is seeking to disrupt the
            logistics tech industry. Moving goods from point A to B will become
            a thing of the past. We is building something great. We cannot wait
            to show the world what we've been cooking.
          </p>
        </div>
        <div className="mt-12">
          <Button
            btnText="Join our waitlist"
            bgColor="bg-zinc-700"
            onClick={toggleOffCanvas}
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
