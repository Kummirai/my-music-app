const authEndpoint = "https;//accounts.spotify.com/authorize";
const clientId = "ee0874b4376c4fffb9273495646b6afb";
const redirectUri = "https://localhost:3000";

const scopes = ["user-library-read", "playlist-read-private"]

export const loginEndpoint = `${authEndpoint}clientId=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

