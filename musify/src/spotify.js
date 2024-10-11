const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "ee0874b4376c4fffb9273495646b6afb";
const redirectUri = "http://localhost:5176";

const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;


//http://localhost:5176/#access_token=BQByyj8EwYe-p1LB2bIvr09k2siLGbC7djiINNtGqBWqriD6gXJSWxfLghQn14FKkPxKLGTCqRROFgYpuHskk6jSlJBBHqA8M76NvgveyodNq23QyWU6Fe85w8NLMYJLOdAWkRTSzK8e3qarR04C5F2JEzcjEBH4T6pErIMutcf9yONQmEpUNMpCl3kyTnbVS9y-rR20WmBERI-6NxumAMKQD1BqrRo&token_type=Bearer&expires_in=3600