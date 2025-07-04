import Table from "@/shared/components/ui/table";
import { useGetCarsQuery } from "../store/carApi";
import { HorizontaLDots } from "@/shared/icons";

export default function CarList() {
  const { data, isLoading } = useGetCarsQuery();

  return (
    <div>
      <Table
        isLoading={isLoading}
        head={[
          { key: "brand", label: "Brand" },
          { key: "model", label: "Model" },
          { key: "year", label: "Year" },
          { key: "vehicle_type", label: "Type" },
          { key: "color", label: "Color" },
          { key: "price", label: "Price" },
          { key: "actions", label: "Action" },
        ]}
        data={data}
        renderCell={(key, value) => {
          if (key === "price") {
            return <span className="text-green-500">{value}</span>;
          }
          if (key === "actions") {
            return (
              <button>
                <HorizontaLDots fontSize={22} />
              </button>
            );
          }
          if(key === 'color') {
            return <div className="w-5 h-5 border-1 rounded" style={{background: value}}/>
          }
        }}
      ></Table>
    </div>
  );
}
