import { Card, CardHeader } from '@/components/ui/Card';

const SliderInput = ({ label, value, onChange, min, max, step, helper }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full"
    />
    {helper && (
      <p className="text-xs text-gray-500 mt-1">{helper}</p>
    )}
  </div>
);

export const ParametersPanel = ({
  capital,
  setCapital,
  rate,
  setRate,
  inflation,
  setInflation,
  salaryIncrease,
  setSalaryIncrease,
  years,
  setYears,
  useGrowingContributions,
  setUseGrowingContributions,
  annualRate,
  realAnnualRate,
  finalValue
}) => {
  return (
    <Card>
      <CardHeader>⚙️ Parámetros</CardHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SliderInput
          label={`💵 Inversión mensual inicial: $${capital}`}
          value={capital}
          onChange={setCapital}
          min="50"
          max="1000"
          step="50"
        />
        
        <SliderInput
          label={`📈 Tasa de retorno mensual: ${rate}%`}
          value={rate}
          onChange={setRate}
          min="0.1"
          max="10"
          step="0.1"
          helper={`≈ ${annualRate}% anual`}
        />
        
        <SliderInput
          label={`📉 Inflación anual: ${inflation}%`}
          value={inflation}
          onChange={setInflation}
          min="0"
          max="25"
          step="0.5"
          helper={`≈ ${(inflation / 12).toFixed(2)}% mensual`}
        />
        
        <SliderInput
          label={`💼 Aumento salarial anual: ${salaryIncrease}%`}
          value={salaryIncrease}
          onChange={setSalaryIncrease}
          min="0"
          max="15"
          step="0.5"
          helper="Promedio Uruguay: 5-6%"
        />
        
        <SliderInput
          label={`⏱️ Años: ${years}`}
          value={years}
          onChange={setYears}
          min="1"
          max="60"
          step="1"
        />

        <div className="flex items-center">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={useGrowingContributions}
              onChange={(e) => setUseGrowingContributions(e.target.checked)}
              className="mr-2 w-4 h-4"
            />
            <span className="text-sm font-medium text-gray-700">
              📊 Aumentar aportes con salario
            </span>
          </label>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Rentabilidad real anual:</strong> {realAnnualRate}% 
          <span className="text-xs ml-2">(después de inflación)</span>
        </p>
        {useGrowingContributions && (
          <p className="text-sm text-blue-800 mt-1">
            <strong>Aporte final mensual:</strong> ${finalValue.monthlyContribution.toLocaleString('es-UY')}
            <span className="text-xs ml-2">(comenzaste con ${capital})</span>
          </p>
        )}
      </div>
    </Card>
  );
};