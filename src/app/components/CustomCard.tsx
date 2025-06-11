import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface CardWithRedirectProps {
  title: string;
  description?: string;
  buttonName: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function CardDashboard() {
  return (
    <div className="flex">
      <Card className="!border-zinc-800 !border-1 bg-transparent flex items-start justify-center w-[80rem] h-[15rem]">
        <div className="flex items-center justify-center !p-5 gap-100">
          <div className="flex flex-col items-start justify-center h-[9rem] w-xl !ml-3">
            <h1 className="text-white !text-3xl">Seja bem-vindo,</h1>
            <strong className="text-white !text-3xl">
              Pedro Henrique Bezerra Alves
            </strong>
            <h2 className="text-white !text-xl">
              <strong>UEPA</strong> - Almoxarifado
            </h2>
          </div>
          <Image
            src="/static/icons/imagem-marcauepa.png"
            alt="DPELogo"
            width={300}
            height={300}
          />
        </div>
      </Card>
    </div>
  );
}

export function CardWithRedirect({
  title,
  description,
  buttonName,
  icon,
  onClick,
}: CardWithRedirectProps) {
  return (
    <Card className="bg-transparent !border-zinc-800 !border-1 flex items-center justify-center w-[25rem] h-[20rem]">
      <div className="flex flex-wrap justify-between items-center  w-full h-full rounded-md">
        <div className="text-zinc-200 flex flex-wrap justify-between bg-red-500">
          {icon}
          <h1 className="!text-3xl">{title}</h1>
          <h2 className="!text-xl !text-zinc-300">{description}</h2>
        </div>

        <div className="text-white">
          <Button
            onClick={onClick}
            className="!cursor-pointer !border-zinc-800 !border-1 !bg-green-600 !text-white hover:!bg-green-700 hover:!text-white w-[10rem] h-[3rem] !rounded-md"
          >
            {buttonName}
          </Button>
        </div>
      </div>
    </Card>
  );
}
