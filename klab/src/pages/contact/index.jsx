import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Table, Row, Col, Form } from "react-bootstrap";
import TableHeader from "../../components/Table/table-header";
import TableBody from "../../components/Table/table-body";

const Contact = () => {
  const ProjectStore = useSelector((store) => store.PROJECTS);
  const [serverData, setServerData] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setServerData(ProjectStore);
    setTableData(ProjectStore.data);
  }, [ProjectStore]);

  return (
    <div>
      <p>Data fetched from store:</p>
      <Table striped bordered hover>
        <TableHeader columns={serverData?.metadata?.columns} />
        <TableBody data={tableData} />
      </Table>
    </div>
  );
};

export default Contact;
