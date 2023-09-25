import React, { ReactNode } from 'react';

interface TableColumn {
  header: string;
  accessor: string;
}

interface CustomTableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
}

export const CustomTable: React.FC<CustomTableProps> = ({ columns, data }) => {
  return (
    <table className="min-w-full divide-y divide-line-1 shadow-sm">
      <thead className="bg-white h-12">
        <tr>
          {columns.map((column) => (
            <th
              key={column.accessor}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-5 uppercase tracking-wider whitespace-nowrap"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={` h-16 text-sm text-dark-1 ${rowIndex % 2 === 0 ? ' bg-dark-5' : 'bg-white'}`}
          >
            {columns.map((column) => (
              <td key={column.accessor} className="px-6 py-4 whitespace-nowrap">
                {row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};