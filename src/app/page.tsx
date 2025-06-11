
import { CardDashboard } from "./components/CustomCard";
import PageTable from "./table/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[85.9vh] w-full gap-30">
      <CardDashboard />
      <PageTable />
      <div className="h-150"></div>
    </div>
  );
}
