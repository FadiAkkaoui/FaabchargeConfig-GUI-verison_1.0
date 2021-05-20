import {React, useEffect, useState} from 'react'
import CompareList from './CompareList'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import {Col, Row, Form, Button, Card} from 'react-bootstrap'

const CompareConfigurations = (props) => {


    const [list, setList] = useState([]);
    const [selected, setSelected] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [query, setQuery] = useState("");

      useEffect(() => {

        axios.get("https://localhost:44345/Configuration").then((res) => {
          setList(res.data);
          setFilteredList(res.data);
          console.log(res.data)
        });

      }, []);


    return (
      <div>
        <Row>
          <Col sm={10} md={5} lg={5} className="m-0 m-auto">
            <CompareList
              element={props.element}
              filteredList={filteredList}
              setFilteredList={setFilteredList}
              list={list}
              query={query}
              setQuery={setQuery}
              selected={selected}
              setSelected={setSelected}
            />
          </Col>
        </Row>
      </div>
    );
}

export default CompareConfigurations
