import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Pagination = (props) => {

const pageNumbers = [];

for(let i =1; i <= Math.ceil(props.totalPosts/ props.postsPerPage); i++){

    pageNumbers.push(i)
}

    return (
        <nav>
            <ul className='pagination'>
                {
                  pageNumbers.map(i => (
                      <li className='page-item'>
                          <a className='page-link'>
                              {i}
                          </a>
                      </li>
                  ))  
                }
            </ul>
        </nav>
    )
}

export default Pagination
