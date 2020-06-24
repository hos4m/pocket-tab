export const ORDERS = {
  NEW_FIRST: "NEW_FIRST",
  OLD_FIRST: "OLD_FIRST",
};

export function orderList({ list, order = ORDERS.NEW_FIRST }) {
  if (order === ORDERS.NEW_FIRST) {
    return [...list].sort((a, b) => (a.sort_id > b.sort_id ? 1 : -1));
  }

  if (order === ORDERS.OLD_FIRST) {
    return [...list].sort((a, b) => (a.sort_id < b.sort_id ? 1 : -1));
  }
}
