import { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row, Card, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from '../../shared/TableComponent.js'
import FormComponent from '../../shared/FormComponent'

function CreateConfiguration(props) {

  const [componentList, setComponentList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")
  const [columns, setColumns] = useState([])
  const [childColumns, setChildColumns] = useState([]);
  const [element, setElement] = useState('Configuration')
  const [selected, setSelected] = useState([]);


  useEffect(() => {

    setElement(props.element)

    let c = ["Name", "Version"]
    setColumns(c)

    let cc = ["Name", "Description", "Price"]
    setChildColumns(cc)


    axios.get("https://localhost:44345/Items")
      .then(res => {

        if (res.status == "200") {

          console.log(res.data)
          setComponentList(res.data)
          setFilteredList(res.data)
          setLoading(false)
        }
      })





  }, [])


  return (
    <div>
      <Row>
        <Col>
          <Card className='p-5'>
            <h5>Create {element}</h5>
            <hr />

            <FormComponent
              list={filteredList}
              columns={columns}
              selected={selected}
              setSelected={setSelected}
              element={element}>



            </FormComponent>

          </Card >
        </Col>

        <Col>
          <Card className='p-5'>
            <h5>Resources</h5>
            <hr />

            {loading ? //Renders spinner while fetching from API
              <div className="p-5"><Spinner animation="border" /></div>
              :
              <Table
                columns={childColumns}
                loading={loading}
                list={componentList}
                setFilteredList={setFilteredList}
                filteredList={filteredList}
                query={query}
                setQuery={setQuery}
                element={element}
                selected={selected}
                setSelected={setSelected} />
            }
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CreateConfiguration;
