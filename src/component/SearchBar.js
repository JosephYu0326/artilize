import React, { useEffect, useState } from 'react'
import '../styles/SearchBar.scss'
import { FaSearch } from 'react-icons/fa'

function SearchBar(props) {
  const { setFormDone, setSearch } = props

  function searchContent(e) {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="searchbar">
        <input
          className="form-control searchinput"
          // type="search"
          placeholder="搜尋展覽"
          aria-label="Search"
          onChange={searchContent}
        />
        <button className="btn searchbtn" type="submit">
          <FaSearch />
        </button>
      </div>
    </>
  )
}

export default SearchBar
