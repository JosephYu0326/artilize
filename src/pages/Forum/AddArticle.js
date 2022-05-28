//新增文章
import React, { useEffect, useState, Component } from 'react'
import Swal from 'sweetalert2'
import { Link, useHistory } from 'react-router-dom'
// import tinymce from 'tinymce/tinymce'
// import { Editor } from '@tinymce/tinymce-react'
import { FaAngleLeft } from 'react-icons/fa'
import { Form, Button, Alert } from 'react-bootstrap'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import BackBtn from '../../component/BackBtn'

function AddArticle(props) {
  // ========tinyMCE東東======
  // const editorRef = useRef(null)
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent())
  //   }}
  // ========tinyMCE東東======
  const [show, setShow] = useState(false)
  const created_time = new Date()
  const [content_msg, setContent_msg] = useState("")
  const [category, setCategory] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [ChioseCategory, setChioseCategory] = useState("")

  const categoryChoice = category.map((v, i) => {
    return (
      <>
        <option key={i} value={category[i].sn}>
          {category[i].thema}
        </option>
      </>
    )
  })

  let body = {
    "title": title,
    "content": content,
    "category": ChioseCategory,
    "userid": props.id
  }
  // 新增文章
  function postArticle(e) {
    e.preventDefault();
    let isPass = true; // 有沒有通過檢查
    setContent_msg(""); // 清空訊息

    //表單資料送出之前, 做格式檢查
    if (content.length < 50) {
      isPass = false;
      setContent_msg('討論區字數需50字以上，請重新輸入')
    }
    if (isPass) {
      setShow(true)
      if (show) {
        Swal.fire({
          title: '確定新增討論?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#4153bb',
          cancelButtonColor: '#f4b942',
          confirmButtonText: '確定'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`${process.env.REACT_APP_API_URL}/forum/addarticle`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
              body: JSON.stringify(body)
            })
              .then(json => console.log(json))
            Swal.fire(
              '新增成功!',
              '',
              'success'
            ).catch(err => console.log(`沒有成功新增，因為${err}`));
          }
        })
      }
    }
  }



  // function postArticle(e) {
  //   e.preventDefault()
  //   fetch(`${process.env.REACT_APP_API_URL}/forum/addarticle`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //     },
  //     body: JSON.stringify(body)
  //   })
  //     .then(setShow(true))
  // }


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
      <BackBtn />
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
            <div style={{ color: 'red' }}>{content_msg}</div>

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
                <Form.Select id='pp' className="mt-5" aria-label=""
                  onChange={(e) => setChioseCategory(e.target.value)}>
                  <option>文章分類</option>
                  {categoryChoice}
                </Form.Select>
                <Button onClick={postArticle} variant="primary col-sm-12 col-md-5 rounded-pill my-5 mx-auto">
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