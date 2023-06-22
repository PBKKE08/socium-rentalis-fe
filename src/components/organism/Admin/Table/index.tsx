// components/Table.tsx

import React from "react";
import Button from "@/components/atoms/Button";

interface TableColumn {
  title: string;
  key: string;
  render?: (data: any) => React.ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="table border-collapse border border-gray-300">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className="bg-primary-100 border border-gray-300 py-2 px-4"
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.key} className="border border-gray-300 py-2 px-4">
                {column.render ? column.render(row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
