import styled from "styled-components";
import React from "react";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router";
import Empty from "../../ui/Empty";
const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const CabinTable = () => {
  const { isPending, error, cabins } = useCabins();
  const [searchParams, setSearchParams] = useSearchParams();
  if (isPending) return <Spinner />;
    if (!cabins) <Empty resourceName="cabins" />;
  // 1- filter
  const filterValue = searchParams.get("discount") || "all";
  let filteredCabin;
  // console.log(filterValue);
  if (filterValue === "all") filteredCabin = cabins;
  if (filterValue === "no-discount")
    filteredCabin = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabin = cabins.filter((cabin) => cabin.discount > 0);
  // 2- sort by
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabin.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  return (
    <Menus>
      <Table role="table">
        <TableHeader role="row">
          <div></div>
          <div>Cabin</div>
          <div>Cabacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </TableHeader>
        {/* {cabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))} */}
        {/* {filteredCabin.map((cabin) => ( */}
           {sortedCabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </Table>
    </Menus>
  );
};

export default CabinTable;
