import "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.4.1/dist/alpine.min.js";
import includeHTML from "./utils/includeHTML.js";
import getPocketData from "./requests/getPocketData.js";
import { orderList } from "./utils/orderList.js";
import "./utils/formatDate.js";
import "./requests/modifyItems.js";

// Initializers
(async function () {
  const pocketData = await getPocketData();
  const list = Object.values(pocketData.list);
  window.pockettab.list = orderList({ list });

  includeHTML();
})();
