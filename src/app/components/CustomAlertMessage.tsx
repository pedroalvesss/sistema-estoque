import { Card } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

interface CustomAlertMessageProps {
  message?: string;
  icon?: React.ReactNode;
  borderLeftColor?: string;
  borderRightColor?: string;
  allBorderColor?: string;
}

export function CustomAlertMessage({
  message,
  icon,
  borderLeftColor,
  borderRightColor,
  allBorderColor,
}: CustomAlertMessageProps) {
  return message ? (
    <Card
      style={{
        borderLeft: `2px solid ${allBorderColor || borderLeftColor}`,
        borderRight: `2px solid ${allBorderColor || borderRightColor}`,
      }}
      className="flex flex-col items-center justify-center border-l-4 w-120 h-30 p-4 bg-transparent"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        {icon ? icon : <ShieldAlert width={50} height={50} color="gray" />}
        <h1 className="text-white">{message}</h1>
      </div>
    </Card>
  ) : (
    <Card
      style={{ borderLeft: "2px solid gray", borderRight: "2px solid gray" }}
      className="flex flex-col items-center justify-center border-l-4 w-120 h-30 p-4 bg-transparent"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <ShieldAlert width={50} height={50} color="gray" />
        <h1 className="text-white">Desculpe, nenhum dado foi encontrado.</h1>
      </div>
    </Card>
  );
}
