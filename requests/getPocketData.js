import { pocketConsumerKey } from "../configs/keys.js";

export default async function getPocketData() {
  const base = "https://getpocket.com/v3";
  const consumer_key = pocketConsumerKey;
  const redirect_uri = window.origin;
  const requestTokenLS = localStorage.getItem("request_token");
  const accessTokenLS = localStorage.getItem("access_token");

  // Step 1: get a request token
  if (!requestTokenLS) {
    try {
      const response = await fetch(
        `${base}/oauth/request?consumer_key=${consumer_key}&redirect_uri=${redirect_uri}`,
        {
          method: "post",
        }
      );
      if (response.ok) {
        const data = await response.text();
        const token = data.split("=")[1];
        localStorage.setItem("request_token", token);
        window.location = `https://getpocket.com/auth/authorize?request_token=${token}&redirect_uri=${redirect_uri}`;
      }
    } catch (_) {}
  }

  // Step 2: get an access token
  if (requestTokenLS && !accessTokenLS) {
    try {
      const response = await fetch(
        `${base}/oauth/authorize?consumer_key=${consumer_key}&code=${requestTokenLS}`,
        {
          method: "post",
        }
      );
      if (response.ok) {
        const data = await response.text();
        const accessToken = data.split("&")[0].split("=")[1];
        const username = data.split("&")[1].split("=")[1];
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("username", username);
        window.location.reload();
      } else {
        window.location = `https://getpocket.com/auth/authorize?request_token=${requestTokenLS}&redirect_uri=${redirect_uri}`;
      }
    } catch (_) {}
  }

  // Step 3: get the final data
  if (accessTokenLS) {
    try {
      const response = await fetch(
        `${base}/get?detailType="complete"&consumer_key=${consumer_key}&access_token=${accessTokenLS}`,
        {
          method: "post",
        }
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        localStorage.clear();
        window.location.reload();
      }
    } catch (_) {}
  }
}
