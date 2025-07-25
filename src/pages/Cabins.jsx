import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperation from "../features/cabins/CabinTableOperation";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperation />
      </Row>
      <Row type="vertical">
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
