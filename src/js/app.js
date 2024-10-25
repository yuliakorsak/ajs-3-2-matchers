export default function sortByHealth(charactersArray) {
  if (Array.isArray(charactersArray)) {
    return charactersArray.toSorted((a, b) => {
      return b.health - a.health;
    });
  }
}