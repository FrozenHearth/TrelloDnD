export const applyDrag = (arr, { removedIndex, addedIndex, payload }) => {
  if (removedIndex === null && addedIndex === null) return arr;
  let itemToAdd = payload;
  const result = [...arr];

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};
