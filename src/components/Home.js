import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'


const Home = () => {

  const[state, setState] = useState({
      posts:[]
  })

  useEffect(() => {
      axios.get("http://localhost:8000/post/").then(res => {
          if(res.data){
              setState({
                  posts:res.data
              })
          }
      }).catch((err) => {
        console.log(err)
      })
  },[state]);

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/post/delete/${id}`)
    .then((res) =>{
      alert("Delete Successfully");
    })
  }


  const handleSearchArea = (e) => {
    

  }

  return (
    <div className='container'>

      <div className="row">
        <div className='col-lg-9 mt-2 mb-2'>
          <h4> All Book Reviews</h4>
        </div>
        <div className='col-lg-3 mt-2 mb-2'>
          <input
          className='form-control'
          type='search'
          placeholder='Search'
          name='searchQuery'
          onChange={handleSearchArea}>

          </input>
        </div>
      </div>
       
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ISBN</th>
              <th scope="col">Title</th>
              <th scope="col"> Author</th>
              <th scope="col">Genre</th>
              <th scope="col">Ratings</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/post/get/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.topic}
                    </a>
                </td>
                <td>{posts.description}</td>
                <td>{posts.postCategory}</td>
                <td>
                  <a className='btn btn-warning' href={`/edit/${posts._id}`}>
                    <i className='fas fa-edit'></i>&nbsp;Edit
                  </a>
                  {' '}
                  <a className='btn btn-danger' onClick={() => onDelete(posts._id)}>
                    <i className='fas fa-edit'></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          <label>
            <button className='btn btn-success'>
                <a href="/add" style={{textDecoration: 'none', backgroundColor: '#198754', color:'white'}}>
                    Add new Review
                </a>
            </button>
          </label>
        </table>
      </div>
  )
}

export default Home