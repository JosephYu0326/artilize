import React, { useEffect, useState } from 'react'
import '../styles/SearchBar.scss'
import { FaSearch } from 'react-icons/fa'

function SearchBar(props) {
  //追蹤搜尋欄輸入文字
  const [serchInput, setSerchInput] = useState('')
  console.log(serchInput)

  //把輸入字串作Keyword傳回Header
  function handleSearch() {
    props.setKeyword(serchInput)
  }

  return (
    <>
      <div className="searchbar displayN">
        <input
          className="form-control searchinput"
          type="search"
          placeholder={`搜尋`}
          aria-label="Search"
          onChange={(e) => setSerchInput(e.target.value)}
        />
        <button className="btn searchbtn" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
    </>
  )
}

export default SearchBar
