//新增文章
import React, { useEffect, useState, useRef } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Editor } from '@tinymce/tinymce-react'
import { Form, Button, Alert } from 'react-bootstrap'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import BackBtn from '../../component/BackBtn'

function EditArticle(props) {
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }
  const [show, setShow] = useState(false)
  const { EditArticleID } = useParams()
  const [ChioseCategory, setChioseCategory] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [value, setValue] = useState('')
  const editorRef = useRef(null)
  //========讀出文章
  function readArticle() {
    fetch(`${process.env.REACT_APP_API_URL}/forum/${EditArticleID}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data[1].title)
        setContent(data[1].content)
        setValue(data[1].category)
        setChioseCategory(data[1].category)
      })
      .catch(console.log('讀取失敗'))
  }
  function readCategory() {
    fetch(`${process.env.REACT_APP_API_URL}/forum/category`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data)
      })
  }

  useEffect(() => {
    readArticle()
    readCategory()
  }, [])

  //文章類別
  const [category, setCategory] = useState([])
  const categoryChoice = category.map((v, i) => {
    return (
      <option
        key={i}
        value={category[i].sn}
        selected={category[i].sn == value.category ? 'selected' : ''}
      >
        {category[i].thema}
      </option>
    )
  })

  //========編輯文章
  let body = {
    id: EditArticleID,
    title: title,
    content: content,
    category: ChioseCategory,
  }

  function handleEdit(e) {
    e.preventDefault()
    setShow(true)
    if (show) {
      Swal.fire({
        title: '確定修改討論?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4153bb',
        cancelButtonColor: '#f4b942',
        confirmButtonText: '確定',
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`${process.env.REACT_APP_API_URL}/forum/${EditArticleID}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(body),
          })
            .then(setShow(true))
            .then((json) => console.log(json))
            .catch((err) => console.log(`沒有成功修改，因為${err}`))
          Swal.fire('修改成功!', '', 'success').then(goBack())
        }
      })
    }
  }

  return (
    <>
      <Header />
      <BackBtn />
      <div className="container">
        <div className="frContent">
          <h3>修改討論</h3>
          <form name="articleForm">
            <Form.Control
              value={title}
              name="title"
              className="my-5"
              size="lg"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* <Form.Control
                            value={content}
                            form='articleForm'
                            neme="content"
                            style={{ height: '300px' }}
                            as='textarea'
                            onChange={(e) => setContent(e.target.value)}
                        /> */}
            <Editor
              id="inputContent"
              onEditorChange={(e) => setContent(editorRef.current.getContent())}
              //value={content}
              apiKey="e4s1xgrvd4r96o20xx1rznb6s86xopp4ex9qrle63uvyvhoq"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={content}
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
            />
            <div className="container">
              <div className="row mx-auto">
                <Form.Select
                  id="pp"
                  className="mt-5"
                  aria-label=""
                  value={value}
                  onChange={(e) => setChioseCategory(e.target.value)}
                >
                  {categoryChoice}
                </Form.Select>
                <Button
                  onClick={handleEdit}
                  variant="primary col-sm-12 col-md-5 rounded-pill my-5 mx-auto"
                >
                  修改討論
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EditArticle
