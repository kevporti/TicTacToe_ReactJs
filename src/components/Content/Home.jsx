import React from "react";
import Table from "./Table";
import Settings from "./Settings";

function Home() {
  return (
    <div className="flex mx-56 h-full mt-12">
      <div className="w-3/4">
        <Table />
      </div>
      <div className="w-1/4">
        <Settings />
      </div>
    </div>
  );
}

export default Home;
