import { Card, CardHeader, StatCard } from '@/components/ui/Card';
import { formatCurrency } from '@/utils/calculations';

export const SummaryCards = ({ finalValue }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>💵 Valores Nominales</CardHeader>
        <div className="space-y-3">
          <StatCard
            label="Total invertido"
            value={`$${formatCurrency(finalValue.invested)}`}
            colorClass="blue"
          />
          <StatCard
            label="Valor final nominal"
            value={`$${formatCurrency(finalValue.nominalValue)}`}
            colorClass="green"
          />
          <StatCard
            label="Beneficios nominales"
            value={`$${formatCurrency(finalValue.nominalProfit)}`}
            subtext={`+${((finalValue.nominalProfit / finalValue.invested) * 100).toFixed(0)}% de retorno`}
            colorClass="purple"
          />
        </div>
      </Card>

      <Card>
        <CardHeader>🎯 Valores Reales (poder adquisitivo)</CardHeader>
        <div className="space-y-3">
          <StatCard
            label="Total invertido (valor hoy)"
            value={`$${formatCurrency(finalValue.realInvested)}`}
            colorClass="orange"
          />
          <StatCard
            label="Valor final real"
            value={`$${formatCurrency(finalValue.realValue)}`}
            subtext="En pesos de hoy"
            colorClass="teal"
          />
          <StatCard
            label="Beneficios reales"
            value={`$${formatCurrency(finalValue.realProfit)}`}
            subtext={`+${((finalValue.realProfit / finalValue.realInvested) * 100).toFixed(0)}% de retorno real`}
            colorClass="indigo"
          />
          <StatCard
            label="🔥 Pérdida por inflación"
            value={`-$${formatCurrency(finalValue.inflationLoss)}`}
            colorClass="red"
          />
        </div>
      </Card>
    </div>
  );
};