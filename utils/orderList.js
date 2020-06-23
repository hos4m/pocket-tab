export const orders = {
  NEW_FIRST: "NEW_FIRST",
  OLD_FIRST: "OLD_FIRST",
};

export function orderList({ list, order = orders.NEW_FIRST }) {
  if (order === orders.NEW_FIRST) {
    return [...list].sort((a, b) => (a.sort_id > b.sort_id ? 1 : -1));
  }

  if (order === orders.OLD_FIRST) {
    return [...list].sort((a, b) => (a.sort_id < b.sort_id ? 1 : -1));
  }
}
