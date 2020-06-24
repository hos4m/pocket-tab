window.pockettab.formatDate = function (timestamp) {
  return new Date(timestamp * 1000)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .split(" ")
    .join(" ");
};
