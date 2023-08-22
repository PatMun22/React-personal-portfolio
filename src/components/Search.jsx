import React from 'react'
import '../Styles/Search.css'
import { BsSearch } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Search = () => {
  return (
    <div className='search'>
        <form>
            <BsSearch className='search-icon'/>
            <input placeholder='Search...'/>
            <button className='btn' type='button'><BsFillArrowRightCircleFill className='btn-icon'/></button>
        </form>
    </div>
  )
};

export default Search;