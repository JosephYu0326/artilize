//新增文章
import React, { useEffect, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import { Form, Button, Alert } from 'react-bootstrap'
import Header from '../../component/Header'
import Footer from '../../component/Footer'

function EditArticle(props) {
    //讀出文章
    const forumid = props.Articleid
    const [article, setArticle] = useState({})

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/forum/${forumid}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(`id:${forumid}`)
        })
            .then((res) => res.json())
            .then((data) => {
                setArticle(data)
                console.log(`id為${forumid}的文章`);
            })
    }, [])
    console.log(article);

    const [Show, setShow] = useState(false);



    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState([])
    const [ChioseCategory, setChioseCategory] = useState("")

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    // const categoryChoice = category.map((v, i) => {
    //     return (
    //         <>
    //             <option key={i} value={category[i].sn}>
    //                 {category[i].thema}
    //             </option>
    //         </>
    //     )
    // })



    // --------
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
    let body = {
        "title": title,
        "content": content,
        //"category": ChioseCategory,
    }
    function handleClick(e) {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/forum`, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(body)
        })
            .then(setShow(true))
            .then(json => console.log(json));
        // .then(response => response.json())
        // .then(json => console.log(json));
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/forum/category`)
            .then((res) => res.json())
            .then((data) => {
                setCategory(data)
            })
    }, [])


    return (
        <>
            <Alert show={Show} variant="primary">
                <Alert.Heading>修改成功!</Alert.Heading>
                <p>
                    您的討論已經成功修改
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    {/* <Button onClick={() => setShow(false)} variant="primary"> */}
                    <Button>
                        知道了
                    </Button>
                </div>
            </Alert>

            <Header />
            <div className="backBtn displayN" onClick={goBack}>
                回討論區
                <FaAngleLeft />
            </div>
            <div className="container">
                <div className="frContent">
                    <h3>修改討論</h3>
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

                        <div className="container">
                            <div className="row mx-auto">
                                <Form.Select id='pp' className="mt-5" aria-label="" onChange={(e) => setChioseCategory(e.target.value)}>
                                    <option>文章分類</option>
                                    {/* {categoryChoice} */}
                                </Form.Select>
                                {/* <Button onClick={handleClick} variant="primary col-sm-12 col-md-5 rounded-pill my-5 mx-auto"> */}
                                新增討論
                                {/* </Button> */}
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