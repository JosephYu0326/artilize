import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../styles/SearchBar.scss'
import { FaSearch } from 'react-icons/fa'

function SearchBar(props) {
  let location = useLocation()

  //追蹤搜尋欄輸入文字
  const [serchInput, setSerchInput] = useState('')
  console.log(serchInput)


  function handleSearch() {
    //if在討論區按搜尋
    //if (location.pathname == "/forum") {
    props.setKeyword(serchInput)

    // console.log(location.pathname);
    // fetch(`${process.env.REACT_APP_API_URL}/ArticleCollection/search`, {
    //   method: "post",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   body: JSON.stringify({
    //     keyword: serchInput
    //   }),
    // }).then((res) => res.json())
    //   .then((data) => {
    //     //把傳進來的資料更改為執行SQL語句後的結果
    //     setData(data)
    //     //傳回Header
    //     props.setResult(data)
    //   })
    // }
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
