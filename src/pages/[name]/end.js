import TwoButtons from "@/components/TwoButtons";
import React, { useState } from "react";
import { useParticipantStore } from "@/store/participantStore";

function End() {
  const user = useParticipantStore((state) => ({
    name: state.name,
    email: state.email,
    logs: state.logs,
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
    link.download = "user_logs.json";
    link.click();
  };

  return (
    <div className="mt-20 grid grid-cols-1 gap-5 sm:w-screen w-[700px] mx-auto p-4 text-center">
      <h2 className="text-stone-300 text-3xl">
        {`Thank you for your participation, ${user.name}!`}
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
              <button
                className="bg-green-700 w-1/3 py-2 text-lg text-stone-300 rounded-md"
                onClick={handleDownloadClick}
              >
                Download
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default End;
