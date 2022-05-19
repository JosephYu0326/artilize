import React from 'react'
import '../styles/SearchBar.scss'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
  return (
    <>
      <div className="searchbar displayN">
        <input
          className="form-control searchinput"
          type="search"
          placeholder="搜尋展覽"
          aria-label="Search"
        />
        <button className="btn searchbtn" type="submit">
          <FaSearch />
        </button>
      </div>
    </>
  )
}

export default SearchBar
