function monthlySavings(paymentArray, livingCost) {
  let outPut = 0;
  let totala = 0;
  if (Array.isArray(paymentArray) !== true) {
    return "Invalid Input Array! ---> Please provid a valid Array.";
  }
  if (typeof livingCost !== "number" || livingCost < 0) {
    return "Invalid Input Number! ---> Please provid a valid Number.";
  }

  for (const item of paymentArray) {
    console.log(totala);
    if (item < 3000) {
      totala += item;
      console.log(totala);
    } else if (item >= 3000) {
      totala += item * 0.8;
      console.log(totala);
    }
  }
  console.log(totala);
  const blanceAmount = totala - livingCost;

  if (blanceAmount >= 0) {
    return blanceAmount;
  } else if (blanceAmount < 0) {
    return "Earn More!!!!";
  } else {
    return "Internal Error!";
  }
}

const billArray = 10000;
const livingcost = [900, 2700, 3400];
const outPut_blance = monthlySavings(billArray, livingcost);
console.log(outPut_blance);
