import { useState, useMemo } from 'react';
import { calculateInvestmentData, calculateAnnualRate, calculateRealAnnualRate } from '@/utils/calculations';

export const useInvestmentCalculation = () => {
  const [capital, setCapital] = useState(100);
  const [rate, setRate] = useState(1);
  const [years, setYears] = useState(30);
  const [inflation, setInflation] = useState(6);
  const [salaryIncrease, setSalaryIncrease] = useState(5);
  const [useGrowingContributions, setUseGrowingContributions] = useState(true);

  const data = useMemo(() => 
    calculateInvestmentData({
      capital,
      rate,
      years,
      inflation,
      salaryIncrease,
      useGrowingContributions
    }), 
    [capital, rate, years, inflation, salaryIncrease, useGrowingContributions]
  );

  const annualRate = useMemo(() => calculateAnnualRate(rate), [rate]);
  const realAnnualRate = useMemo(() => calculateRealAnnualRate(rate, inflation), [rate, inflation]);
  const finalValue = data[data.length - 1];

  return {
    capital,
    setCapital,
    rate,
    setRate,
    years,
    setYears,
    inflation,
    setInflation,
    salaryIncrease,
    setSalaryIncrease,
    useGrowingContributions,
    setUseGrowingContributions,
    data,
    annualRate,
    realAnnualRate,
    finalValue
  };
};