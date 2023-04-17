import React, { useState } from "react";
import { postDog } from "..api";

export default function CreateDogForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Create a new Doggo!</h2>
      <form
        onsubmit={async (e) => {
          e.preventDefault();
          const newDog = await postDog(name, email);
          console.log("New Dog from API: ", newDog);
        }}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <button>Submit?</button>
      </form>
    </div>
  );
}
