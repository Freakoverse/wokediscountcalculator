document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate");
  calculateButton.addEventListener("click", calculateDiscount);
});

function calculateDiscount() {
  const gamePrice = parseFloat(document.getElementById("game-price").value);
  let totalIntoleranceWeight = 0;
  let totalDiscountRate = 0;

  // Determine the number of points dynamically by counting elements with "intolerance-weight" IDs
  const pointInputs = document.querySelectorAll('.point-input');
  const pointCount = pointInputs.length / 3; // Each point has three inputs

  for (let i = 1; i <= pointCount; i++) {
    const intoleranceWeightPercentage = parseFloat(document.getElementById(`intolerance-weight-${i}`).value) || 0;
    const include = document.getElementById(`include-${i}`).checked;
    const discount = parseFloat(document.getElementById(`discount-${i}`).value) || 0;

    if (include) {
      totalIntoleranceWeight += intoleranceWeightPercentage;
      totalDiscountRate += (intoleranceWeightPercentage / 100) * (discount || 0); // Ensure discount is 0 if empty
    }
  }

  const discountPrice = gamePrice * (1 - totalDiscountRate / 100);

  document.getElementById("discount-rate").textContent = totalDiscountRate.toFixed(2) + "%";
  document.getElementById("discount-price").textContent = "$" + discountPrice.toFixed(2);
}
