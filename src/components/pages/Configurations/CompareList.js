import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Table, Form, Button, Modal, Row, Col } from "react-bootstrap";
import axios from "axios";
import swal from 'sweetalert'
import CompareResult from './CompareResult.js'

const CompareList = (props) => {

  const [show, setShow] = useState(false);

  useEffect(() => {

    if(props.query == ""){

        props.setFilteredList(props.list)

    } else {

        props.setFilteredList(
          props.list.filter((i) => i.name.toLowerCase().includes(props.query.toLowerCase()))
        );
    }

  }, [props.query]);


  const handleClose = () =>(setShow(false))

  const handleShow = () => {
      
    if (props.selected.length < 2){

        swal(
          {
            text: "Make sure two items are checked!",
            icon: "warning"
          }
        );

    } else {

        setShow(true);
    }
}


  const clickHandler = (e) => {

    if(e.target.checked){

        if (props.selected.length < 2) {

            
          props.selected.push(e.target.id);
          props.setSelected(props.selected.map((i) => i));

        } else {

            document.getElementById(props.selected[0]).checked = false;
            let temp = [props.selected[1], e.target.id];
            props.setSelected(temp.map((i) => i));
        }

    } else {

        props.setSelected(props.selected.filter(i => (i != e.target.id)))
    }
    
    console.log(props.selected)

  };

  return (
    <div>
      <Card>
        <Row>
          <Col><Form.Control placeholder='Search...' onChange={e => props.setQuery(e.target.value)}></Form.Control></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Version Number</th>
            </tr>
          </thead>
          <tbody>
            {props.filteredList.map((i) => (
              <tr>
                <td>{i.name}</td>
                <td>{i.versionNumber}</td>
                <td>
                  {" "}
                  <Form.Check
                    onChange={clickHandler}
                    name="check"
                    id={i.id}
                  />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={handleShow} variant="dark">
          Confirm
        </Button>
      </Card>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Compare</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <CompareResult element={props.element} id={props.selected[0]} />
            </Col>
            <Col sm={6} md={6} lg={6}>
              <CompareResult element={props.element} id={props.selected[1]} />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CompareList;
