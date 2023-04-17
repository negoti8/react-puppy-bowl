const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-pt-web-ft";

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${baseUrl}/players`);
    const dogList = await response.json();
    return dogList.data.players;
  } catch (error) {
    console.error("fetching players error");
  }
}

export async function fetchPlayerById(id) {
  try {
    const response = await fetch(`${baseUrl}/players/${playerId}`);
    const singleDog = await response.json();
    return singleDog.data.player;
  } catch (error) {
    console.error("error fetching #${playerId}");
  }
}

export async function addNewPlayer(playerObj) {
  try {
    const response = await fetch(`${baseUrl}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObj),
    });
    const createdDog = await response.json();
    return createdDog.data.player;
  } catch (error) {
    console.error("created Dog error");
  }
}

export async function removePlayer(playerId) {
  try {
    const response = await fetch(`${baseUrl}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (result.error) throw result.error;
    return;
  } catch (err) {
    console.error("trouble removing doggo", err);
  }
}
