"use client";
import React from "react";
import * as Constants from "@/../lib/constants/constants";
import Button from "../ui/Button/Button";

function Navbar() {
  return (
    <div className="bg-secondary h-16 text-white flex flex-row items-center justify-around">
      <div>
        <h2 className="text-xl font-bold font-poppins">
          {Constants.brand.name}
        </h2>
      </div>
      <div className="flex flex-row gap-5">
        <Button
          size="md"
          variant="accent"
          onClick={() => console.log("wkwkwk")}
        >
          Menu
        </Button>
        <Button
          size="md"
          variant="accent"
          onClick={() => console.log("wkwkwk")}
        >
          Menu
        </Button>
        <Button
          size="md"
          variant="accent"
          onClick={() => console.log("wkwkwk")}
        >
          Menu
        </Button>
      </div>
      <div className="h-10 flex flex-row items-center gap-2">
        <Button
          size="md"
          variant="primary"
          onClick={() => console.log("wkwkwk")}
        >
          SignIn
        </Button>
        <div className="h-4/5 w-0.5 bg-white"></div>
        <Button
          size="md"
          variant="primary"
          onClick={() => console.log("wkwkwk")}
        >
          SignUp
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
