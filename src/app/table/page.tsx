"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { DataTable } from "@/components/data-table/data-table";
import { z } from "zod";
import { useProcessTable } from "./components/produtosTable";

export const tableSchema = z.object({
	page: z.coerce.number().default(1),
	size: z.coerce.number().optional(),
	sort: z.string().optional(),
});

export default function PageTable() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const queryParams = tableSchema.parse(
		Object.fromEntries(searchParams.entries()),
	);
	const page = queryParams.page || 1;
	const size = queryParams.size ?? 10;
	const [search, setSearch] = useState<string>();

	const debouncedSetSearch = useDebounce(setSearch, 500);

	const { processoTable, totalItems, filterFields, isLoading } = useProcessTable({
		limit: size,
		currentPage: page,
		search,
	});

	return (
		<div className="flex flex-col gap-5">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">
					Buscar Processos ({totalItems || 0})
				</h2>
				<Button
					onClick={() => router.push("#")}
					className="bg-[#487348] dark:bg-[#487348] hover:bg-[#3b5f3b] dark:hover:bg-[#3b5f3b] text-[1rem] text-white"
				>
					Cadastrar Novo Produto
					<CirclePlus />
				</Button>
			</div>
			<Input
				onChange={(e) => debouncedSetSearch(e.target.value)}
				placeholder="Busca por nome"
				className="bg-[#EFEFEF] dark:bg-[#1A1A1A] w-full"
			/>
			<DataTable
				table={processoTable}
				filterFields={filterFields}
				isLoading={isLoading}
				footer={true}
			/>
		</div>
	);
}
