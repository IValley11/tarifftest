
function formatCurrency(input) {
  let value = parseFloat(input.value.replace(/[$,]/g, ''));
  if (!isNaN(value)) {
    input.value = '$' + value.toLocaleString();
  }
}

function formatNumber(input) {
  let value = parseFloat(input.value.replace(/,/g, ''));
  if (!isNaN(value)) {
    input.value = value.toLocaleString();
  }
}

function formatPercentage(input) {
  let value = parseFloat(input.value.replace(/[%]/g, ''));
  if (!isNaN(value)) {
    input.value = value + '%';
  }
}

function calculate() {
  const clean = x => parseFloat(x.replace(/[$,%]/g, '').replace(/,/g, ''));
  const format = x => '$' + Math.round(x).toLocaleString();

  const tariffRate = clean(document.getElementById('tariffRate').value) / 100;
  const units = clean(document.getElementById('unitsSold').value);
  const sales = clean(document.getElementById('totalSales').value);
  const tariffCOGS = clean(document.getElementById('tariffCOGS').value);
  const otherCOGS = clean(document.getElementById('otherCOGS').value);
  const opExp = clean(document.getElementById('operatingExpense').value);

  const tariffCost = tariffRate * tariffCOGS;
  const totalCOGSBefore = tariffCOGS + otherCOGS;
  const totalCOGSAfter = tariffCOGS + otherCOGS + tariffCost;
  const grossProfitBefore = sales - totalCOGSBefore;
  const grossProfitAfter = sales - totalCOGSAfter;
  const netIncomeBefore = grossProfitBefore - opExp;
  const netIncomeAfter = grossProfitAfter - opExp;
  const increasePrice = tariffCost / units;

  document.getElementById('tariffCost').textContent = format(tariffCost);
  document.getElementById('tariffCostVal').textContent = format(tariffCost);

  document.getElementById('salesBefore').textContent = format(sales);
  document.getElementById('salesAfter').textContent = format(sales);

  document.getElementById('tariffCOGSBefore').textContent = format(tariffCOGS);
  document.getElementById('tariffCOGSAfter').textContent = format(tariffCOGS);

  document.getElementById('otherCOGSBefore').textContent = format(otherCOGS);
  document.getElementById('otherCOGSAfter').textContent = format(otherCOGS);

  document.getElementById('totalCOGSBefore').textContent = format(totalCOGSBefore);
  document.getElementById('totalCOGSAfter').textContent = format(totalCOGSAfter);

  document.getElementById('grossProfitBefore').textContent = format(grossProfitBefore);
  document.getElementById('grossProfitAfter').textContent = format(grossProfitAfter);

  document.getElementById('opExpBefore').textContent = format(opExp);
  document.getElementById('opExpAfter').textContent = format(opExp);

  document.getElementById('netIncomeBefore').textContent = format(netIncomeBefore);
  document.getElementById('netIncomeAfter').textContent = format(netIncomeAfter);

  document.getElementById('increasePrice').textContent = '$' + increasePrice.toFixed(2);
  document.getElementById('decreaseExpense').textContent = format(tariffCost);
}
