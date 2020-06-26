import { pocketConsumerKey } from "../configs/keys.js";

window.pockettab.modifyItems = async function ({ itemId, action }) {
  const accessTokenLS = localStorage.getItem("access_token");
  const consumer_key = pocketConsumerKey;

  const actionData = [
    {
      action,
      item_id: itemId,
      time: Math.round(new Date().getTime() / 1000),
    },
  ];

  const response = await fetch(
    `https://getpocket.com/v3/send?actions=${JSON.stringify(
      actionData
    )}&access_token=${accessTokenLS}&consumer_key=${consumer_key}`,
    {
      method: "post",
    }
  );

  if (!response.ok) {
    alert("An error happened! try again later.");
    window.location.reload();
  }
};
