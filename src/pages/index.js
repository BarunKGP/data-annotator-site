import { useParticipantStore } from "@/store/participantStore";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [nameEntry, setNameEntry] = useState("");
  const [setName, setEmail] = useParticipantStore((state) => [
    state.setName,
    state.setEmail,
  ]);

  const handleSubmit = () => {
    console.log("Moving to participant page");
    if (nameEntry !== "") {
      router.push(`/${nameEntry}/page`);
    }
  };

  const setSanitizedNameEntry = (nameStr) => {
    const nameWords = nameStr.trim().split(" ");
    const firstName = nameWords[0].toLowerCase();
    setNameEntry(firstName);
  };

  return (
    <div className="sm:max-w-screen mx-auto p-4 w-[700px] grid grid-cols-1 gap-10 my-20">
      <form>
        <div className="grid gap-4 grid-cols-[1fr_2fr]">
          <label className="text-lg text-stone-300">Enter your name:</label>
          <input
            className="text-gray-900 text-lg p-2 rounded-lg"
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
              setSanitizedNameEntry(e.target.value);
            }}
          />
          <label className="text-lg text-stone-300">Enter email: </label>
          <input
            className="w-full rounded-lg min-h-[30px] text-gray-900 text-lg p-2"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
      <div className="w-full flex justify-end">
        <button
          className="bg-green-700 text-stone-300 text-xl px-4 py-2 rounded-md"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
}
