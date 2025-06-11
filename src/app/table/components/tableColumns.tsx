import { Button } from "@/components/ui/button";
import { ProdutosList } from "@/types/API";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Eye } from "lucide-react";

interface ProdutosTableColumnsProps {
	redirectToDetails: (id: number) => void;
}

export function produtosTableColumns({
	redirectToDetails,
}: ProdutosTableColumnsProps): ColumnDef<ProdutosList | undefined>[] {
	return [
		{
			accessorKey: "numero",
			header: ({ column }) => {
				return (
					<div className="flex justify-center text-center items-center gap-1">
						<Button
							onClick={() => {
								column.toggleSorting(column.getIsSorted() === "asc");
							}}
							className="bg-transparent text-normal hover:bg-gray-200 h-auto"
						>
							N° Processo
							<ArrowUpDown />
						</Button>
					</div>
				);
			},
			cell: () => (
				<div className="flex flex-col justify-center text-center w-[11rem]">
					teste
				</div>
			),
		},
		{
			accessorKey: "defensoria_responsaveis",
			header: () => {
				return (
					<div className="flex justify-center text-center">
						Defensoria Responsável
					</div>
				);
			},
			cell: () => (
				<div className="flex justify-center text-center">
					teste
				</div>
			),
		},
		{
			accessorKey: "assunto_principal",
			header: () => {
				return <div className="flex justify-center text-center">Assunto</div>;
			},
			cell: () => (
				<div className="flex justify-center text-center">
					teste
				</div>
			),
		},
		{
			accessorKey: "classe",
			header: ({ column }) => {
				return (
					<div className="flex justify-center text-center items-center gap-1">
						<Button
							onClick={() =>
								column.toggleSorting(column.getIsSorted() === "asc")
							}
							className="bg-transparent text-normal hover:bg-gray-200 h-auto"
						>
							Classe
							<ArrowUpDown />
						</Button>
					</div>
				);
			},
			cell: () => (
				<div className="flex justify-center text-center">
					teste
				</div>
			),
		},
		{
			accessorKey: "acoes",
			header: () => {
				return <div className="flex justify-center text-center">Ações</div>;
			},
			cell: (cell) => (
				<div className="flex justify-center text-center">
					<Button
						onClick={() =>
							cell.row.original?.id && redirectToDetails(cell.row.original.id)
						}
						className="bg-[#487348] dark:text-white dark:bg-[#487348] hover:bg-[#3b5f3b] dark:hover:bg-[#3b5f3b]"
					>
						Detalhes <Eye color="white" />
					</Button>
				</div>
			),
		},
	];
}
