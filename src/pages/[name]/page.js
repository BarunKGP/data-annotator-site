import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TwoButtons from "@/components/TwoButtons";
import { useParticipantStore } from "@/store/participantStore";

function UserLog() {
  const router = useRouter();
  const [logs, setLogs] = useState([]);
  const [ended, setEnded] = useState(false);
  const [name, test, setUserLogs] = useParticipantStore((state) => [
    state.name,
    state.test,
    state.setLogs,
  ]);

  const handleLogClick = () => {
    const timestamp = new Date().toUTCString();
    setLogs([...logs, timestamp]);
    console.log(logs);
  };

  const handleEndClick = () => {
    setUserLogs(logs);
    setEnded(true);
    router.push(`/${name}/end`);
  };

  return (
    <div className="sm:max-w-screen mx-auto p-4 w-[700px] grid grid-cols-1 gap-10 my-20">
      <h1 className="text-3xl text-stone-300">
        {`Welcome ${
          name === "" ? "" : name.charAt(0).toUpperCase() + name.slice(1)
        }!`}
      </h1>
      <h2 className="text-2xl text-stone-300">Current test: {test}</h2>
      <TwoButtons
        b1Name={"Log"}
        b2Name={"End"}
        b1Click={handleLogClick}
        b2Click={handleEndClick}
      />
      <div className="text-2xl text-stone-300">
        {`You have logged ${logs.length} times`}
      </div>
    </div>
  );
}

export default UserLog;
