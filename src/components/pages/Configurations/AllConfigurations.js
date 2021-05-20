import { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row, Card, Spinner, Table, Modal, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function AllConfigurations(props) {

  const [filteredList, setFilteredList] = useState([])
  const [elementList, setElementList] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")
  const [columns, setColumns] = useState([])
  const [element, setElement] = useState('Configuration')
  const [posts, setPosts] = useState([])
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState([])


  useEffect(() => {
    axios.get('https://localhost:44345/Configuration')
      .then((res) => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    axios.get("https://localhost:44345/Configuration/" + e.target.id).then((res) => {
      console.log(res.data.configuration)
      setDetails(res.data.configuration);
    });
  };

  const deleteHandler = (e) => {

    if (window.confirm('Are you sure?')) {
      axios
        .delete("https://localhost:44345/Configuration/" + e.target.id)
        .then((res) => console.log(res.data));
    }

  };
  return (
    <div>
      <Row>
        <Col sm={10} md={8} lg={6} className="m-0 m-auto">
          <Card className="p-5">
            <h5>{element} List</h5>
            <hr />
            <div>
              <Table className="center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Versionnumber</th>
                  </tr>
                </thead>
                {posts.map((post) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{post.name}</td>
                        <td>{post.versionNumber}</td>
                        <div>
                          <td>
                            <div>
                              <Link
                                to={{
                                  pathname: "UpdateConfiguration",
                                  id: post.id,
                                }}
                              >
                                <Button variant='warning' id={post.id}>Update</Button>
                              </Link>
                            </div>
                            <div>
                              <Button
                                id={post.id}
                                variant="danger"
                                className="mt-3"
                                onClick={deleteHandler}
                              >
                                Delete
                              </Button>
                            </div>
                            <div>
                              <Button
                                id={post.id}
                                variant="info"
                                className="mt-3"
                                onClick={handleShow}
                              >
                                Details
                              </Button>
                            </div>
                            <Modal
                              show={show}
                              onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Details for id: {details.id}</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Table>
                                  <thead>
                                    <tr>
                                      <th>Name</th>
                                      <th>Versionnumber</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                        <tr>
                                          <td>{details.name}</td>
                                          <td>{details.versionNumber}</td>
                                        </tr>
                                      </tbody>
                                </Table>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Close
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </td>
                        </div>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default AllConfigurations;
