//新增文章
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import { Form, Button, Alert } from 'react-bootstrap'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import BackBtn from '../../component/BackBtn'

function EditArticle(props) {
  
    const {EditArticleID} = useParams()
    //讀出文章
    // const [title, setTitle] = useState("")
    // const [content, setContent] = useState("")
    const[post,setPost] = useState({
        title:"",
        content:"",
        category:""
    })
      console.log(post.thema);
      console.log(post.title);
// useEffect(()=>{
//     console.log("01");
//     const fetchData = async()=>{
//         const [article] = await Promise.all(
//             getArticle()
//         )    
//         setPost(...article)
//         console.log("02");
//     }
//     fetchData();
// },[])


// const getArticle = ()=>{
//     return fetch(`${process.env.REACT_APP_API_URL}/forum/${EditArticleID}`)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data[1]);
//     })
//     .then(console.log(`id為${EditArticleID}的文章`));
// }           
    
// const getArticle = () => {
//     return fetch(`${process.env.REACT_APP_API_URL}/forum/${EditArticleID}`)
//     .then((res) => res.json())
//       .then(data => {
//         console.log(data[1]);
//         return {
//          title:data[1].title,
//          content:data[1].content,
//          category:data[1].category
//         };
//       })
//       .then(console.log(`id為${EditArticleID}的文章`));
//   };


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/forum/${EditArticleID}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data[1]);
                setPost({
                    title:data[1].title,
                    content:data[1].content,
                    category:data[1].category
                })
            })
            .then(console.log(`id為${EditArticleID}的文章`))
    }, [])


    const [Show, setShow] = useState(false);


    const [category, setCategory] = useState([])
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

    // --------
    let body = {
        "id": EditArticleID,
        "title": post.title,
        "content": post.content,
        "category": ChioseCategory,
    }

    function handleEdit(e) {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/forum`, {
            method: "PUT",
            headers:  {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
            body: JSON.stringify(body)
        })
            .then(setShow(true))
            .then(json => console.log(json));
        //  .then(response => response.json())
        //  .then(json => console.log(json));
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
            <BackBtn />
            <div className="container">
                <div className="frContent">
                    <h3>修改討論</h3>
                    <form name='articleForm'>
                        <Form.Control
                            value={post.title}
                            name="title"
                            className="my-5"
                            size="lg"
                            type="text"
                            onChange={(e) => setPost(e.target.value)}
                        />
                        <Form.Control
                            value={post.content}
                            form='articleForm'
                            neme="content"
                            style={{ height: '300px' }}
                            as='textarea'
                            onChange={(e) => setPost(e.target.value)}
                        />

                        <div className="container">
                            <div className="row mx-auto">
                                <Form.Select id='pp' className="mt-5" aria-label="" onChange={(e) => setChioseCategory(e.target.value)}>
                                    <option>文章分類</option>
                                    {categoryChoice}
                                </Form.Select>
                                <Button onClick={handleEdit} variant="primary col-sm-12 col-md-5 rounded-pill my-5 mx-auto">
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