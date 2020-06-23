import "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.4.1/dist/alpine.min.js";
import includeHTML from "./utils/includeHTML.js";
import getPocketData from "./utils/getPocketData.js";
import { orderList } from "./utils/orderList.js";

// Initializers
(async function () {
  const pocketData = await getPocketData();
  const list = Object.values(pocketData.list);
  window.list = orderList({ list });

  includeHTML();
})();
