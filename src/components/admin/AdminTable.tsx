import React, { useState } from "react";
import { Edit2, Trash2 } from "lucide-react"; // Make sure lucide-react is installed, or fallback to standard icons

export interface AdminTableColumn {
  key: string;
  label: string;
}

interface AdminTableProps {
  columns: AdminTableColumn[];
  data: any[];
  loading?: boolean;
  error?: string | null;
  refetch?: () => void;
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
}

const AdminTable = ({ columns, data, loading, error, refetch, onEdit, onDelete }: AdminTableProps) => {

  return (
    <div className="w-full mt-10 overflow-x-auto rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#111] backdrop-blur-2xl shadow-xl shadow-black/5 dark:shadow-black/50">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-4 font-code text-sm font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap"
              >
                {col.label}
              </th>
            ))}
            <th className="px-6 py-4 font-code text-sm font-semibold text-gray-800 dark:text-gray-200 text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {
            loading && (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400 font-code"
                >
                  Loading...
                </td>
              </tr>
            )
          }
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 max-w-xs truncate"
                  >
                    {/* Render complex types like arrays properly, otherwise raw text */}
                    {Array.isArray(row[col.key])
                      ? row[col.key].join(", ")
                      : row[col.key]?.toString() || "-"}
                  </td>
                ))}
                <td className="px-6 py-4 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-3">
                    {onEdit && (
                      <button
                        type="button"
                        onClick={() => onEdit(row)}
                        className="p-1.5 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors bg-blue-500/10 rounded-md cursor-pointer"
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </button>
                    )}
                    {onDelete && (
                      <button
                        type="button"
                        onClick={() => onDelete(row)}
                        className="p-1.5 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors bg-red-500/10 rounded-md cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : error ? (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="px-6 py-8 text-center text-sm text-red-500 font-code"
              >
                {error}
                {refetch && (
                  <button onClick={refetch} className="ml-3 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors cursor-pointer">
                    Retry
                  </button>
                )}
              </td>
            </tr>
          ) : !loading ? (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400 font-code"
              >
                No data available.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
