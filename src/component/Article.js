import React from 'react'
import { Alert } from 'react-bootstrap'
import { FaStar, FaCommentDots, FaTrashAlt } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
function Article(props) {
    const isSignIn = false
    const articleDetails = props.articDetails
    // console.log(articleDetails)
    // function which(e) {
    //     console.log(e.target);
    // }

    function handleLike() {
        if (isSignIn) {
            alert('收藏文章')
        } else {
            return (
                <Alert variant="primary">
                    "FU"
                </Alert>
            )

        }
    }

    const article = articleDetails.map((v, i) => {
        //const temp = articleDetails[i].created_time
        // .slice(0, 10)
        //console.log(temp)
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
                        {/* <h5 as={Link} to={`/forum/${articleDetails[i].fr_article_id}`} className="h5 ExtraBold mx-auto ms-2 mb-0 title"> */}
                        <Link
                            to={`/forum/${articleDetails[i].article_id}`}
                            className="h5 ExtraBold mx-auto ms-2 mb-0 title "
                        >
                            {articleDetails[i].title}
                        </Link>
                        {/* </h5> */}
                    </div>
                    <div>
                        <p className="category pBig">{articleDetails[i].thema}</p>
                    </div>
                </div>
                <div className="preViewContent">{articleDetails[i].content}</div>
                <div className="social d-flex justify-content-between align-items-center">
                    <div>{articleDetails[i].created_time}</div>
                    <div className='d-flex align-items-center'>
                        <FaCommentDots />
                        <div className="p-2">{'articleDetails[i].comment'}</div>

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