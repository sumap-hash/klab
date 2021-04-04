import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Row, Col, Form } from "react-bootstrap";
import TableHeader from "../../components/Table/table-header";
import TableBody from "../../components/Table/table-body";
import { useDispatch } from "react-redux";
import { ADD_PROJECT_TO_STORE } from "../../redux/types";

const ProjectView = () => {
  const dispatch = useDispatch();
  const [serverData, setServerData] = useState([]);
  const [statusOptions, setStatusOptions] = useState(["All"]);
  const [status, setStatus] = useState("All");
  const [tableData, setTableData] = useState([]);

  const constructStatusOptions = (data) => {
    const options = statusOptions;
    data?.forEach((item) => {
      if (!statusOptions.includes(item.status)) {
        options.push(item.status);
      }
    });
    setStatusOptions([...options]);
  };

  const filterTableData = () => {
    if (status === "All") {
      setTableData(serverData?.data);
      return;
    }
    const tempData = serverData?.data?.filter((item) => item.status === status);
    setTableData(tempData);
  };

  const getServerData = () => {
    axios
      .get("http://timeapi.kaaylabs.com/api/v1/project_view/")
      .then((res) => {
        dispatch({ type: ADD_PROJECT_TO_STORE, payload: res.data });
        setServerData(res.data);
        setTableData(res.data.data);
        constructStatusOptions(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getServerData();
  }, []);

  useEffect(() => {
    filterTableData();
  }, [status]);
  return (
    <div>
      <Row>
        <Col xs lg="8"></Col>
        <Col xs lg="4">
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Status
            </Form.Label>
            <Col sm="6">
              <Form.Control
                as="select"
                name="status"
                value={status}
                onChange={(e) => {
                  console.log(e.target.value, "select");
                  setStatus(e.target.value);
                }}
              >
                {statusOptions?.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <p>&nbsp;</p>
      <Table striped bordered hover>
        <TableHeader columns={serverData?.metadata?.columns} />
        <TableBody data={tableData} />
      </Table>
    </div>
  );
};

export default ProjectView;
