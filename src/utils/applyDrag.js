export const applyDrag = (arr, { removedIndex, addedIndex, payload }) => {
  if (removedIndex === null && addedIndex === null) return arr;
  const result = [...arr];
  
  if (removedIndex !== null) {
    
    // remove the element at removedIndex and insert it at addedIndex
    result.splice(addedIndex, 0, result.splice(removedIndex, 1, payload)[0]);
  }
  
  return result;
};
