import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import getCabins from "../services/ApiCabins";

function Cabins() {
  useEffect(() => {
    getCabins().then((cabins) => {
      console.log("Cabins fetched:", cabins);
    });
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
