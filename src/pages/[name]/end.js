import TwoButtons from "@/components/TwoButtons";
import React, { useState } from "react";
import { useParticipantStore } from "@/store/participantStore";
import send from "../api/send";

function End() {
  const user = useParticipantStore((state) => ({
    name: state.name,
    email: state.email,
    logs: state.logs,
    test: state.test,
  }));
  const [view, setView] = useState(false);

  const handleViewClick = () => {
    setView(true);
    console.log("user", user);
  };

  const handleDownloadClick = () => {
    const data = JSON.stringify(user);
    const blob = new Blob([data], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${user.name}_${user.test}.json`;
    link.click();
  };

  const handleEmailClick = () => {
    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  const displayName = user.name.charAt(0).toUpperCase() + user.name.slice(1);
  return (
    <div className="mt-20 grid grid-cols-1 gap-5 sm:w-screen w-[700px] mx-auto p-4 text-center">
      <h2 className="text-stone-300 text-3xl">
        {`Thank you for your participation, ${displayName}!`}
      </h2>
      <p className="text-stone-400 text-xl">
        Your data has been recorded. You can choose to view or download it.
      </p>
      <div className="mt-40 flex justify-center">
        {!view ? (
          <TwoButtons
            b1Name={"View logs"}
            b2Name={"Download"}
            b1Click={handleViewClick}
            b2Click={handleDownloadClick}
          />
        ) : (
          view && (
            <div className="grid grid-cols-1 gap-8 justify-items-center">
              <h3 className="text-stone-300 text-xl text-semibold p-4">
                Your recordings
              </h3>
              <div>
                {user.logs.map((log, i) => {
                  console.log(log);
                  return (
                    <div
                      key={i}
                      className="flex justify-center gap-4 align-middle"
                    >
                      <div className="text-stone-400 text-xl font-light">
                        {i + 1}
                      </div>
                      <div className="text-stone-400 text-xl font-light">
                        {log}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center gap-5">
                <button
                  className="bg-green-700 p-3 text-lg text-stone-300 rounded-md"
                  onClick={handleDownloadClick}
                >
                  Download
                </button>
                {/* <button
                  className="bg-blue-500  p-3 text-lg text-stone-300 rounded-md"
                  onClick={handleEmailClick}
                >
                  Email logs
                </button> */}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default End;
