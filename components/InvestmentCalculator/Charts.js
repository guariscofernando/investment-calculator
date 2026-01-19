import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader } from '@/components/ui/Card';

const CustomTooltip = ({ formatter, labelFormatter }) => ({ active, payload, label }) => {
  if (!active || !payload) return null;
  
  return (
    <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
      <p className="font-semibold mb-2">{labelFormatter(label)}</p>
      {payload.map((entry, index) => (
        <p key={index} style={{ color: entry.color }}>
          {entry.name}: {formatter(entry.value)}
        </p>
      ))}
    </div>
  );
};

export const EvolutionChart = ({ data }) => (
  <Card>
    <CardHeader>📊 Evolución de la inversión</CardHeader>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="year" 
          label={{ value: 'Años', position: 'insideBottom', offset: -5 }}
        />
        <YAxis 
          label={{ value: 'Valor ($)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip 
          content={CustomTooltip({
            formatter: (value) => `$${value.toLocaleString('es-UY')}`,
            labelFormatter: (label) => `Año ${label}`
          })}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="invested" 
          stroke="#3b82f6" 
          name="Total invertido"
          strokeWidth={2}
          strokeDasharray="5 5"
        />
        <Line 
          type="monotone" 
          dataKey="nominalValue" 
          stroke="#10b981" 
          name="Valor nominal"
          strokeWidth={2}
        />
        <Line 
          type="monotone" 
          dataKey="realValue" 
          stroke="#14b8a6" 
          name="Valor real (ajustado)"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
    <p className="text-sm text-gray-600 mt-4 text-center">
      💡 La línea <strong className="text-teal-600">Valor real</strong> muestra cuánto realmente vale tu dinero en pesos de hoy
    </p>
  </Card>
);

export const ContributionsChart = ({ data, salaryIncrease }) => (
  <Card>
    <CardHeader>💼 Evolución de tus aportes mensuales</CardHeader>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="year" 
          label={{ value: 'Años', position: 'insideBottom', offset: -5 }}
        />
        <YAxis 
          label={{ value: 'Aporte mensual ($)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip 
          content={CustomTooltip({
            formatter: (value) => `$${value.toLocaleString('es-UY')}`,
            labelFormatter: (label) => `Año ${label}`
          })}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="monthlyContribution" 
          stroke="#f59e0b" 
          name="Aporte mensual"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
    <p className="text-sm text-gray-600 mt-4 text-center">
      📈 Tus aportes crecen {salaryIncrease}% anual (aumento salarial promedio en Uruguay)
    </p>
  </Card>
);

export const ComparisonChart = ({ data }) => (
  <Card>
    <CardHeader>📈 Comparación: Nominal vs Real</CardHeader>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="year" 
          label={{ value: 'Años', position: 'insideBottom', offset: -5 }}
        />
        <YAxis 
          label={{ value: 'Beneficios ($)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip 
          content={CustomTooltip({
            formatter: (value) => `$${value.toLocaleString('es-UY')}`,
            labelFormatter: (label) => `Año ${label}`
          })}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="nominalProfit" 
          stroke="#8b5cf6" 
          name="Beneficios nominales"
          strokeWidth={2}
        />
        <Line 
          type="monotone" 
          dataKey="realProfit" 
          stroke="#6366f1" 
          name="Beneficios reales"
          strokeWidth={3}
        />
        <Line 
          type="monotone" 
          dataKey="inflationLoss" 
          stroke="#ef4444" 
          name="Pérdida por inflación"
          strokeWidth={2}
          strokeDasharray="3 3"
        />
      </LineChart>
    </ResponsiveContainer>
  </Card>
);