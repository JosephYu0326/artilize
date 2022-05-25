//新增文章
import React, { useEffect, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import tinymce from 'tinymce/tinymce'
import { Editor } from '@tinymce/tinymce-react'
import { FaAngleLeft } from 'react-icons/fa'
import { Form, Button } from 'react-bootstrap'
import Header from '../../component/Header'
import Footer from '../../component/Footer'

function AddArticle(props) {
  // ========tinyMCE東東======
  // const editorRef = useRef(null)
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent())
  //   }}
  // ========tinyMCE東東======

  const created_time = new Date()
  const [category, setCategory] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [ChioseCategory, setChioseCategory] = useState("")
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }
  console.log(title);
  console.log(content);

  const categoryChoice = category.map((v, i) => {
    return (
      <>
        <option key={i} value={category[i].sn}>
          {category[i].thema}
        </option>
      </>
    )
  })

  console.log(ChioseCategory);

  // --------
  let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  let body = {
    "title": title,
    "content": content,
    "category": ChioseCategory,
  }
  console.log(created_time);
  function handleClick(e) {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API_URL}/forum/addarticle`, {
      method: "POST",
      headers: headers,
      //別忘了把主體参數轉成字串，否則資料會變成[object Object]，它無法被成功儲存在後台
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }
  // --------

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forum/category`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data)
      })
  }, [])


  return (
    <>
      <Header />
      <div className="backBtn displayN" onClick={goBack}>
        回討論區
        <FaAngleLeft />
      </div>
      <div className="container">
        <div className="frContent">
          <h3>新增討論</h3>
          <form name='articleForm'>
            <Form.Control
              value={title}
              name="title"
              className="my-5"
              size="lg"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Control
              value={content}
              form='articleForm'
              neme="content"
              style={{ height: '300px' }}
              as='textarea'
              onChange={(e) => setContent(e.target.value)}
            />
            {/* ========tinyMCE東東====== */}
            {/* <Editor
              id='inputContent'
              //onEditorChange={(e) => setContent(e.target.value)}
              value={content}
              apiKey="lx36ygwprus1n4asjcpxlw72wjnkjsm90cs4xl68rlcj2qff"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>請輸入內文</p>"
              init={{
                height: 600,
                menubar: false,
                language: 'zh_TW',
                plugins: [
                  'advlist',
                  'autolink',
                  'lists',
                  'link',
                  'image',
                  'charmap',
                  'anchor',
                  'searchreplace',
                  'visualblocks',
                  'code',
                  'fullscreen',
                  'insertdatetime',
                  'table',
                  'preview',
                  'wordcount',
                ],
                toolbar:
                  'undo redo | blocks | image | ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style:
                  "body { font-family: 'Noto Sans TC', sans-serif; font-size:14px }",
              }}
            /> */}
            <div className="container">
              <div className="row mx-auto">
                <Form.Select id='pp' className="mt-5" aria-label="" onChange={(e) => setChioseCategory(e.target.value)}>
                  <option>文章分類</option>
                  {categoryChoice}
                </Form.Select>
                <Button onClick={handleClick} variant="primary col-sm-12 col-md-5 rounded-pill my-5 mx-auto">
                  新增討論
                </Button>
              </div>
            </div>
            {/* ========tinyMCE東東====== */}
            {/* <button onClick={log}>Log editor content</button> */}
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AddArticle