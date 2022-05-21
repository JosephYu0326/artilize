import React from 'react';
import { FaStar, FaCommentDots } from "react-icons/fa";

function Article(props) {
    const articleDetails = props.articDetails
    function which(e) {
        console.log(e.target);
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
                        <h5 className="h5 ExtraBold mx-auto ms-2 mb-0 title" onClick={which}>
                            {articleDetails[i].title}
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
                    <FaStar />
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