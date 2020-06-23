import "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.4.1/dist/alpine.min.js";
import includeHTML from "./utils/includeHTML.mjs";
import getPocketData from "./utils/getPocketData.mjs";

// Initializers
(async function () {
  includeHTML();
  const pocketData = await getPocketData();
  console.log("----------------------------");
  console.log(pocketData);
  console.log("----------------------------");
})();
