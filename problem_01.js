function calculateMoney(ticket) {
  const ticketPrice = 120;
  const costPerDay = 500 + 8 * 50;
  if (ticket < 0) {
    return "Invalid Number! Please Enter valid itcket number.";
  }
  return ticket * ticketPrice - costPerDay;
}

const ticket = -130;
const blance = calculateMoney(ticket);
console.log("Baker Vaier Kache thakbe total: ", blance);
