import React from 'react'
import '../styles/SearchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
  return (
    <>
      <input
        className="form-control searchinput"
        type="search"
        placeholder="搜尋展覽"
        aria-label="Search"
      />
      <button className="btn searchbtn" type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </>
  )
}

export default SearchBar
