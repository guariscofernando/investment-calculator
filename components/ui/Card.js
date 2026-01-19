export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => {
  return (
    <h2 className={`text-xl font-semibold mb-4 text-gray-700 ${className}`}>
      {children}
    </h2>
  );
};

export const StatCard = ({ label, value, subtext, colorClass = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
    teal: 'bg-teal-50 text-teal-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    red: 'bg-red-50 text-red-600'
  };

  return (
    <div className={`p-4 rounded ${colorClasses[colorClass]}`}>
      <p className="text-sm text-gray-600">{label}</p>
      <p className={`text-2xl font-bold ${colorClasses[colorClass].split(' ')[1]}`}>
        {value}
      </p>
      {subtext && (
        <p className="text-xs text-gray-500 mt-1">{subtext}</p>
      )}
    </div>
  );
};