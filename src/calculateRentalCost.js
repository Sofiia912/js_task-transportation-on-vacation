/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  let totalCost = days * dailyCost;

  if (days >= 3 && days <= 6) {
    totalCost -= 20;
  }

  if (days >= 7) {
    totalCost -= 50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
