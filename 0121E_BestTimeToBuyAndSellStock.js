function getBestTrade(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  let buyPrice = null;
  let sellPrice = null;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price; // Update buy opportunity
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
      buyPrice = minPrice;
      sellPrice = price;
    }
  }

  if (maxProfit <= 0) {
    return {
      message: "No profitable trade possible.",
      profit: 0,
      buy: null,
      sell: null,
    };
  }

  return {
    profit: maxProfit,
    buy: buyPrice,
    sell: sellPrice,
  };
}

// Example usage
const prices = [7, 1, 5, 3, 6, 4];
console.log(getBestTrade(prices));
// Output:
// { profit: 5, buy: 1, sell: 6 }
console.log(getBestTrade([8, 7, 6, 5, 4, 3, 2]));
// {
//   message: 'No profitable trade possible.',
//   profit: 0,
//   buy: null,
//   sell: null
// }
