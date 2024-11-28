import React from 'react'
import axios  from 'axios'
import { useState } from 'react'

const CreatePost = () => {
    const [state, setState] = useState({
        isbn: "",
        title: "",
        author: "",
        genre: ""
      })
    
      const handleChange = (e) =>{
        const {name, value} = e.target;
    
        setState({...state,[name]:value})
      }
    
      const onsubmit = (e) => {
        e.preventDefault();
    
        const {isbn, title, author, genre} = state;
    
        const data = {
          isbn: isbn, 
          title: title,
          author: author,
          genre: genre
        }
        console.log(data);
    
        axios.post("http://localhost:8000/post/add", data)
        .then((res) => {
          if(res.data){
            setState({
              isbn: "",
              title: "",
              author: "",
              genre: ""
            })
          }
        })
      }

    return(
        <div className='container'>
            <h4 >Add New Book Review</h4>
        <div class="mb-3">
        <label  class="form-label">ISBN</label>
        <input
        type="text" 
        class="form-control" 
        name="ISBN" 
        placeholder="Enter ISBN"
        value={state.topic}
        onChange={handleChange}
        />
       
        </div>

       

        <div class="mb-3">
        <label  class="form-label">Title</label>
        <input type="text" 
        class="form-control" 
        name="Title" 
        placeholder="Enter Title"
        value={state.description}
        onChange={handleChange}
        />
       
        </div>

        <div class="mb-3">
        <label class="form-label">Author</label>
        <input type="text" 
        class="form-control" 
        name="Author" 
        placeholder="Enter Author"
        value={state.postCategory}
        onChange={handleChange}
        />
        
        </div>

        <div class="mb-3">
        <label class="form-label">Genre</label>
        <input type="text" 
        class="form-control" 
        name="Genre" 
        placeholder="Enter Genre"
        value={state.postCategory}
        onChange={handleChange}
        />
        
        </div>

        

        <button className='btn btn-success' type='submit' onClick={onsubmit}>
        <i className='fas fa-check-square'>&nbsp; Save</i>
        </button>

        </div>
    )
}

export default CreatePost 