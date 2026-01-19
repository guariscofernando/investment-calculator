import { useInvestmentCalculation } from '@/hooks/useInvestmentCalculation';
import { ParametersPanel } from './ParametersPanel';
import { SummaryCards } from './SummaryCards';
import { EvolutionChart, ContributionsChart, ComparisonChart } from './Charts';
import { DataTable } from './DataTable';

const InvestmentCalculator = () => {
  const {
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
  } = useInvestmentCalculation();

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        💰 Inversión con Interés Compuesto
      </h1>
      <p className="text-gray-600 mb-6">
        Ajustada por inflación y aumentos salariales en Uruguay
      </p>
      
      <div className="space-y-6">
        <ParametersPanel
          capital={capital}
          setCapital={setCapital}
          rate={rate}
          setRate={setRate}
          inflation={inflation}
          setInflation={setInflation}
          salaryIncrease={salaryIncrease}
          setSalaryIncrease={setSalaryIncrease}
          years={years}
          setYears={setYears}
          useGrowingContributions={useGrowingContributions}
          setUseGrowingContributions={setUseGrowingContributions}
          annualRate={annualRate}
          realAnnualRate={realAnnualRate}
          finalValue={finalValue}
        />

        <SummaryCards finalValue={finalValue} />

        <EvolutionChart data={data} />

        {useGrowingContributions && (
          <ContributionsChart data={data} salaryIncrease={salaryIncrease} />
        )}

        <ComparisonChart data={data} />

        <DataTable data={data} useGrowingContributions={useGrowingContributions} />

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-800">
            <strong>💡 Datos de Uruguay:</strong> El aumento salarial promedio ronda el 5-6% anual. 
            La inflación actual está cerca del 6% anual (≈0.5% mensual). 
            {useGrowingContributions && 
              " Al aumentar tus aportes con tu salario, tu patrimonio crece mucho más rápido."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculator;