import React from 'react';
import { FaStar, FaCommentDots } from "react-icons/fa";

function Article(props) {
    const isSignIn = true
    const articleDetails = props.articDetails
    // function which(e) {
    //     console.log(e.target);
    // }

    function getPerArticle(e){
        console.log(e.target);
    }

    function handleLike() {
        if(isSignIn){
            alert("收藏文章")
        }else{
            alert("請先登入！")
        }
    }


    const article = articleDetails.map((v, i) => {
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
                            <p className="pBig text-center">{articleDetails[i].author}</p>
                        </div>
                        <h5 className="h5 ExtraBold mx-auto ms-2 mb-0 title">
                            <Link to="/forum/article/id=2}">{articleDetails[i].title}</Link>
                        </h5>
                    </div>
                    <div>
                        <p className="category pBig">-{articleDetails[i].category}</p>
                    </div>
                </div>
                <div className="preViewContent">
                    <pre>{articleDetails[i].content}</pre>
                </div>
                <div className="social d-flex justify-content-end align-items-center">
                    <FaCommentDots />
                    <div className="p-2">{articleDetails[i].comment}</div>
                    <FaStar onClick={handleLike} />
                </div>
                <hr />
            </div>
        )
    })
    return (
        <>
            {article}
        </>
    );
}

export default Article;