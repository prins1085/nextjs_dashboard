import React, { useMemo } from "react";
import { COLUMNS } from "./components/columns";
import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import GlobalFilter from "./components/GlobalFilter";

const CountryInfo = ({ data }) => {
  const columns = useMemo(() => COLUMNS, []);

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    page,
    prepareRow,
    previousPage,
    nextPage,
    gotoPage,
    pageCount,
    state,
    pageOptions,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const { pageIndex, globalFilter } = state;
  return (<>
    <div className="container">
      <h1 className="text-center text-3xl font-bold">COUNTRY</h1>
      <p className="text-center mb-4 text-[#5BC9B4]">Country React Table</p>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="overflow-x-auto border border-transparent rounded-md text-xs">
        <table {...getTableProps()} className="min-w-full text-left">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="bg-[#3E4396]  px-3 py-5"
                  >
                    {column.render("Header")}
                    <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className="bg-[#1F2A40] px-3 py-4 border-b-2 border-[#515151]">
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-right space-x-2 border border-transparent bg-[#3E4396]  px-3 py-3">
          <span className="text-sm">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <button onClick={() => gotoPage(0)} className="bg-gray-50 text-gray-500 rounded-md px-3 py-2">{"<<"}</button>
          <button onClick={() => previousPage()} className="bg-gray-50 text-gray-500 rounded-md px-3 py-2">Previous</button>
          <button onClick={() => nextPage()} className="bg-gray-50 text-gray-500 rounded-md px-3 py-2">Next</button>
          <button onClick={() => gotoPage(pageCount - 1)} className="bg-gray-50 text-gray-500 rounded-md px-3 py-2">{">>"}</button>
        </div>
      </div>
    </div></>
  );
};

export default CountryInfo;

export async function getStaticProps() {
  const res = await fetch("https://disease.sh/v3/covid-19/countries");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
