import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { FaStar, FaCommentDots } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Article(props) {
    const isSignIn = false
    const articleDetails = props.articDetails
    console.log(articleDetails)
    const [comments, setComments] = useState([{}])


    function handleLike() {
        if (isSignIn) {
            alert('收藏文章')
        } else {
            <Alert variant="primary">
                "FU"
            </Alert>
        }
    }
    const [temp, setTemp] = useState([])

    const CallComment = async (props) => {
        fetch(`${process.env.REACT_APP_API_URL}/forum/comments/${temp}`)
            .then((res) => res.json())
            .then((data) => {
                setComments(data)
                console.log(temp);
                console.log("留言:");
                console.log(comments);
            })
        return (<>
            <div>{comments.length}</div>
        </>)
    }

    useEffect(() => {
        CallComment()
    }, [])

    // ===========
    const article = articleDetails.map((v, i) => {
        // const temp = articleDetails[i].created_time.slice(0, 10)
        // console.log(temp)
        // ======留言匯入
        setTemp(articleDetails[i].article_id)
        return (
            <div key={i}>
                <div className="perContentHead my-4 d-flex justify-content-between">
                    <div className="text-start d-flex align-items-center ">
                        <div>
                            <img
                                className="avatar m-1"
                                src="https://picsum.photos/id/222/200"
                                alt=""
                            />
                            <p className="pBig text-center">{articleDetails[i].nickname}</p>
                        </div>
                        <Link to={`/forum/${articleDetails[i].article_id}`}
                            className="h5 ExtraBold mx-auto ms-2 mb-0 title ">
                            {articleDetails[i].title}
                        </Link>
                    </div>
                    <div>
                        <p className="category pBig">{articleDetails[i].thema}</p>
                    </div>
                </div>
                <div className="preViewContent">{articleDetails[i].content}</div>
                <div className="social d-flex justify-content-between align-items-center">
                    <time>{articleDetails[i].created_time}</time>
                    <div className='d-flex align-items-center'>
                        <FaCommentDots />
                        <div className="p-2">
                            <CallComment />
                        </div>
                        <FaStar onClick={handleLike} />

                    </div>
                </div>
                <hr />
            </div>
        )
    })
    return <>{article}</>
}

export default Article