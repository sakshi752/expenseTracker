import React from "react";

const TransactionCard = ({ id, description, type, date, amount }) => {
  // Conditionally set the border color based on the transaction type
  const borderColor = type === 'income' ? 'border-green-500' : 'border-red-500';

  return (
    <div
      key={id}
      className={`flex justify-between bg-gray-200 rounded text-gray-900 px-3 py-2 ${borderColor} border-r-4`}
    >
      <div className="flex flex-col space-y-2">
        <p className="text-lg font-semibold text-gray-900">{type === 'income' ? "Income" : description}</p>
        <p className="font-lg text-white bg-slate-900 rounded-full px-2 opacity-85">{type}</p>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-900">${amount}</p>
        <p className="font-semibold text-gray-900">{date}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
