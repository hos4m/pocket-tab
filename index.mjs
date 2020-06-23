import "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.4.1/dist/alpine.min.js";
import includeHTML from "./utils/includeHTML.js";
import getPocketData from "./utils/getPocketData.js";
import { orderList } from "./utils/orderList.js";
import formatDate from "./utils/formatDate.js";

// Initializers
(async function () {
  window.pockettab = {
    formatDate,
  };

  const pocketData = await getPocketData();
  const list = Object.values(pocketData.list);
  window.pockettab.list = orderList({ list });

  console.log("----------------------------");
  console.log(window.pockettab.list);
  console.log("----------------------------");

  includeHTML();
})();
