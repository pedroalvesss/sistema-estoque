"use client";
import { useDataTable } from "@/hooks/useDataTable";
import type { DataTableFilterField } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { produtosTableColumns } from "./tableColumns";
import { PaginatorUtils } from "@/utils/pagination-utils";
import { ProdutosList } from "@/types/API";

export function useProcessTable({
	search,
	limit,
	currentPage = 1,
}: { search?: string; limit: number; currentPage?: number }) {
	const { data, error, isSuccess, isFetching, isRefetching } =
		PrecisaColocar({
			search,
			limit,
			page: currentPage,
		});
	const totalItems = data?.page?.count || 0;
	const totalPages = PaginatorUtils.getPageNumber(
		data?.page?.count || 0,
		limit,
	);
	const router = useRouter();

	const columns = useMemo(
		() => produtosTableColumns({ redirectToDetails: handleRedirectToDetails }),
		[],
	);
	const filterFields: DataTableFilterField<ProdutosList>[] = [];
	const processos = data?.results || [];

	const { table } = useDataTable({
		data: processos,
		columns: (columns as ColumnDef<ProdutosList>[]) || [],
		pageCount: totalPages,
		rowCount: totalItems || 0,
		filterFields,
		defaultSize: limit,
	});

	function handleRedirectToDetails(id: number) {
		router.push(`/processos/${id}`);
	}

	const nextPageTable = () => {
		if (data?.page?.next) {
			table.setPagination((prev) => ({
				...prev,
				pageIndex: prev.pageIndex + 1,
			}));
		}
	};
	const previousPageTable = () => {
		if (data?.page?.previous) {
			table.setPagination((prev) => ({
				...prev,
				pageIndex: prev.pageIndex - 1,
			}));
		}
	};
	table.nextPage = nextPageTable;
	table.previousPage = previousPageTable;

	return {
		isLoading: isFetching || isRefetching,
		isSuccess,
		error,
		totalItems: totalItems || 0,
		processoTable: table,
		filterFields,
	};
}
