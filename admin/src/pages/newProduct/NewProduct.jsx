import { useContext, useState } from "react";
import { createPost } from "../../context/postContext/apiCalls";
import {PostContext} from "../../context/postContext/PostContext";
import "./newProduct.css";

export default function NewProduct() {
  const [post, setPost] = useState(null)

  const {dispatch} = useContext(PostContext)

  const handleChange = (e) => {
    const value = e.target.value;
    setPost({...post, [e.target.name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await createPost(post, dispatch);

    window.location.reload();
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Review</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Reviewer</label>
          <input type="text" placeholder="John Wick" name="Reviewer" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Email</label>
          <input type="text" placeholder="email@gmail.com" name="Email" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Review</label>
          <input type="text" placeholder="Review" name="Review" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Rating</label>
          <input type="number" placeholder="Rating" name="Rating" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Employee</label>
          <input type="text" placeholder="Employee" name="Employee" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Employees Position</label>
          <input type="text" placeholder="Employees_position" name="Employees_position" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Company</label>
          <input type="text" placeholder="Company" name="Company" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Company Description</label>
          <input type="text" placeholder="Company_description" name="Company_description" onChange={handleChange}/>
        </div>
          <button className="addProductButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
