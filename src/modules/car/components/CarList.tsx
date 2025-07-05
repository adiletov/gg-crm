import Table from "@/shared/components/ui/table";
import { useGetCarsQuery } from "../store/carApi";
import { PlusIcon } from "@/shared/icons";
import Button from "@/shared/components/ui/button/Button";
import { useFullModal } from "@/shared/components/modals/ModalProvider";
import CarForm from "./CarForm";
import type { ICar } from "../types/car.types";

export default function CarList() {
  const { data, isLoading } = useGetCarsQuery();
  const { openModal } = useFullModal();

  const onCarModal = (car?: ICar) =>
    openModal({
      header: `Car ${car?.brand ? `| ${car.brand}` : ""}`,
      body: <CarForm />,
    });

  return (
    <div>
      <div className="flex gap-2 w-full items-center justify-end mb-2">
        <Button startIcon={<PlusIcon />} size="sm" onClick={onCarModal}>
          Add
        </Button>
      </div>
      <Table
        isLoading={isLoading}
        head={[
          { key: "brand", label: "Brand" },
          { key: "model", label: "Model" },
          { key: "year", label: "Year" },
          { key: "vehicle_type", label: "Type" },
          { key: "color", label: "Color" },
          { key: "price", label: "Price" },
        ]}
        data={data}
        renderCell={(key, value, item) => {
          if (key === "brand") {
            return (
              <button className="underline text-blue-500" onClick={() => onCarModal(item)}>
                {value}
              </button>
            );
          }
          if (key === "price") {
            return <span className="text-green-500">{value}</span>;
          }
          if (key === "color") {
            return (
              <div
                className="w-5 h-5 border-1 rounded"
                style={{ background: value }}
              />
            );
          }
        }}
      ></Table>
    </div>
  );
}
