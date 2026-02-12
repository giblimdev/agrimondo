import React from "react";
import NavTool from "./NavTool";
import CmdTools from "./CmdTools";

export default function page() {
  return (
    <div>
      <div>
        <NavTool />
      </div>
      <div>FEATURES TOOLS</div>
      <CmdTools />
    </div>
  );
}
