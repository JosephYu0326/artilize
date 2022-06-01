import React, { useEffect, useState } from 'react'
import '../styles/SearchBar.scss'
import { FaSearch } from 'react-icons/fa'

function SearchBar(props) {
  const [serchInput, setSerchInput] = useState('')
  const [data, setData] = useState([props.data])
  console.log(data)
  // useEffect(() => {
  //   const filterSerch = (query) => {
  //     return data.filter((el) => el.indexOf(query.toLowerCase()) > -1)
  //   }
  //   console.log(filterSerch(serchInput))
  // }, [])


  console.log(serchInput)
  return (
    <>
      <div className="searchbar displayN">
        <input
          className="form-control searchinput"
          type="search"
          placeholder="搜尋展覽"
          aria-label="Search"
          onChange={(e) => setSerchInput(e.target.value)}
        />
        <button className="btn searchbtn" type="submit">
          <FaSearch />
        </button>
      </div>
    </>
  )
}

export default SearchBar
