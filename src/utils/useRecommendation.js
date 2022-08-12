// the data which is generated by dataGenerator() will be passed to
// this hook in order to identify the best time to buy nad sell those stocks.
const useRecommendation = (data) => {
  if (!data) {
    return null;
  }

  //here, from the whole data set two pointers will be returned [bestTimeToBuy, bestTimeToSell]
  // and buying and seeling at this will give us maximum profit during the whole time window.
  const stockPrice = data.map((dataitem) => dataitem.price).reverse();
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  let max_pointers = [0, 0];
  while (right < stockPrice.length) {
    if (stockPrice[left] < stockPrice[right]) {
      let profit = stockPrice[right] - stockPrice[left]; // our current profit
      if (max_profit < profit) {
        max_pointers = [left, right];
        max_profit = profit;
      }
    } else {
      left = right;
    }
    right++;
  }

  // some more recommandation to buy and sell stocks based uopn the socialmediaview and price are added here
  const recoResult = [];
  for (let i = 0; i < data.length; i++) {
    
    if (i === (data.length-1 - max_pointers[0]) ||data[i].price < 300 || (data[i].price < 300 && data[i].socialMediaCount > 800)) {
      recoResult.push({ ...data[i], action: "Buy" });
    } else if (i === data.length - 1 - max_pointers[1] || data[i].price > 800 ) {
      recoResult.push({ ...data[i], action: "Sell" });
    } else {
      recoResult.push({ ...data[i], action: "Hold" });
    }
  }

  return recoResult;
};

export default useRecommendation;