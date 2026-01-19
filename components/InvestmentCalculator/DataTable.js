import { Card, CardHeader } from '@/components/ui/Card';
import { formatCurrency } from '@/utils/calculations';

export const DataTable = ({ data, useGrowingContributions }) => {
  return (
    <Card>
      <CardHeader>📋 Tabla detallada (cada 6 meses)</CardHeader>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left">Año</th>
              {useGrowingContributions && (
                <th className="px-3 py-2 text-right">Aporte/mes</th>
              )}
              <th className="px-3 py-2 text-right">Invertido</th>
              <th className="px-3 py-2 text-right">Valor Nominal</th>
              <th className="px-3 py-2 text-right bg-teal-50">Valor Real</th>
              <th className="px-3 py-2 text-right">Benef. Real</th>
              <th className="px-3 py-2 text-right text-red-600">Pérdida Inflación</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="px-3 py-2 font-semibold">{row.year}</td>
                {useGrowingContributions && (
                  <td className="px-3 py-2 text-right text-orange-600">
                    ${formatCurrency(row.monthlyContribution)}
                  </td>
                )}
                <td className="px-3 py-2 text-right">
                  ${formatCurrency(row.invested)}
                </td>
                <td className="px-3 py-2 text-right text-green-600">
                  ${formatCurrency(row.nominalValue)}
                </td>
                <td className="px-3 py-2 text-right font-bold text-teal-600 bg-teal-50">
                  ${formatCurrency(row.realValue)}
                </td>
                <td className="px-3 py-2 text-right text-indigo-600">
                  ${formatCurrency(row.realProfit)}
                </td>
                <td className="px-3 py-2 text-right text-red-600">
                  -${formatCurrency(row.inflationLoss)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};