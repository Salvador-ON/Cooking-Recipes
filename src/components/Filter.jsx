import React from 'react';
import {useDispatch} from 'react-redux'
import {changeFilter} from '../actions'

const Filter = () => {
  const dispatch = useDispatch();
  

  const handleFilterChange = (e) =>{
    dispatch(changeFilter(e.target.value));
  }

  const categories = ["All", "1000", "2000", "3000", "4000", "5000", "6000", "7000"];
  const options = categories.map(category => <option key={category}  value={category} > {category} </option>  )

  return (
    <div className="bg-white mx-5 my-2 w-100  mx-auto border border-light rounded-pill d-flex align-items-center justify-content-center">
      <span className=" text-orange h2 m-0 p-0 py-md-1 d-inline">Max Calories:</span>
      <select className=" w-25 mx-3 d-inline" onChange={handleFilterChange} name="category">
        {options}
      </select>
    </div>
    );
}
 
export default Filter;