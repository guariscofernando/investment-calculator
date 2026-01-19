export const calculateInvestmentData = ({
  capital,
  rate,
  years,
  inflation,
  salaryIncrease,
  useGrowingContributions
}) => {
  const r = rate / 100;
  const inf = inflation / 100 / 12;
  const salInc = salaryIncrease / 100;
  const months = years * 12;
  const result = [];
  
  let cumulativeNominal = 0;
  let totalInvestedNominal = 0;
  
  for (let n = 0; n <= months; n++) {
    const yearsPassed = Math.floor(n / 12);
    const currentCapital = useGrowingContributions 
      ? capital * Math.pow(1 + salInc, yearsPassed)
      : capital;
    
    if (n > 0) {
      cumulativeNominal += currentCapital;
      cumulativeNominal *= (1 + r);
      totalInvestedNominal += currentCapital;
    }
    
    if (n % 6 === 0 || n === months) {
      const inflationFactor = Math.pow(1 + inf, n);
      const realValue = cumulativeNominal / inflationFactor;
      const realInvested = totalInvestedNominal / inflationFactor;
      const realProfit = realValue - realInvested;
      const nominalProfit = cumulativeNominal - totalInvestedNominal;
      
      result.push({
        month: n,
        year: (n / 12).toFixed(1),
        monthlyContribution: parseFloat(currentCapital.toFixed(2)),
        nominalValue: parseFloat(cumulativeNominal.toFixed(2)),
        realValue: parseFloat(realValue.toFixed(2)),
        invested: parseFloat(totalInvestedNominal.toFixed(2)),
        realInvested: parseFloat(realInvested.toFixed(2)),
        nominalProfit: parseFloat(nominalProfit.toFixed(2)),
        realProfit: parseFloat(realProfit.toFixed(2)),
        inflationLoss: parseFloat((cumulativeNominal - realValue).toFixed(2))
      });
    }
  }
  
  return result;
};

export const calculateAnnualRate = (monthlyRate) => {
  return ((Math.pow(1 + monthlyRate / 100, 12) - 1) * 100).toFixed(2);
};

export const calculateRealAnnualRate = (monthlyRate, annualInflation) => {
  return (((1 + monthlyRate / 100) / (1 + annualInflation / 100) - 1) * 12 * 100).toFixed(2);
};

export const formatCurrency = (value) => {
  return value.toLocaleString('es-UY');
};