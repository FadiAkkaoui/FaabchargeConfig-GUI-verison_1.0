import {useState, useEffect} from 'react'
import axios from 'axios'
import {Col, Row, Card, Spinner} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from '../../shared/TableComponent.js'
import FormComponent from '../../shared/FormComponent'
import Pagination from "../../shared/Pagination";

function CreateItem(props) {

  const [componentList, setComponentList] = useState([])
  const [columns, setColumns] = useState([])
  const [element, setElement] = useState('')
  const [elementList, setElementList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState([]);
  const [currentPage, setCurrrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  
  
  useEffect(() => {

    setElement(props.element)

    let c = ["Name", "Description", "Price"]
    setColumns(c)
      
      axios.get("https://localhost:44345/Components").then((res) => {
      if (res.status == "200") {
        console.log(res.data);
        setComponentList(res.data);
        setFilteredList(res.data);
        setLoading(false);
      }
    });
      
    
  },[])


  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = componentList.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div>
      <Row>
        <Col>
        <Card className='p-5'>
        <h5>Create {element}</h5>
        <hr />
          
        <FormComponent 
        element='Item'
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
             
        {loading? //Renders spinner while fetching from API
        <div className="p-5"><Spinner animation="border" /></div>
        :
        <Table
              loading={loading}
              list={currentPosts}
              setFilteredList={setFilteredList}
              filteredList={filteredList}
              query={query}
              setQuery={setQuery}
              element={element}
              selected={selected}
              setSelected={setSelected} />
        }
        <Pagination postsPerPage={postsPerPage} totalPosts={componentList.lenght} />
        </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CreateItem;
