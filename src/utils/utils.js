export const mapToConvenientFormat = (count) => {
  let itemCount = "Nenhuma peça"
  if (count === 1)
    itemCount = "1 peça";
  else if (count > 1)
    itemCount = `${ count } peças`;
  return itemCount;
}