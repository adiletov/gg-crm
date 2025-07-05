type Column<T, ExtraKeys extends string = string> = {
  key: keyof T | ExtraKeys;
  label: string;
};
interface Props<T> {
  head: Column<T>[];
  data?: T[];
  isLoading: boolean;
  renderCell?: (key: Column<T>["key"], value: any, item: T) => React.ReactNode;
}
export default function Table<T extends { id?: number }>({
  head,
  data,
  renderCell,
  isLoading,
}: Props<T>) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr className="text-left text-gray-600 dark:text-gray-300 text-xs">
            {head.map(({ label }) => (
              <th key={label} className="px-6 py-4 font-medium">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
          {isLoading || !data?.length ? (
            <tr>
              <td colSpan={head.length} className="p-4 text-center">
                {isLoading ? "Loading..." : "The list is empty"}
              </td>
            </tr>
          ) : (
            data?.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                {head.map((h) => {
                  const value = item[h.key as keyof T];

                  return (
                    <td
                      key={h.key as string}
                      className="px-6 py-4 text-gray-700 dark:text-gray-300"
                    >
                      {renderCell?.(h.key, value, item) || (value as string)}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
