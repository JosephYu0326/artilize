import FadeIn from 'react-fade-in'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CommentCount from './CommentCount'
// : { nickname, article_id, title, thema, content, created_time, article_id, favorited }
function Post({ articleList }) {
  return (
    <FadeIn>
      <div className="perContentHead my-4 d-flex justify-content-between">
        <div className="text-start d-flex align-items-center ">
          <div>
            <img
              className="avatar m-1"
              src="https://picsum.photos/id/222/200"
              alt=""
            />
            <p className="pBig text-center">{articleList.nickname}</p>
          </div>
          <Link
            to={`/forum/${articleList.article_id}`}
            className="h5 ExtraBold mx-auto ms-2 mb-0 title "
          >
            {articleList.title}
          </Link>
        </div>
        <div>
          <p className="category pBig">{articleList.thema}</p>
        </div>
      </div>
      <div
        className="preViewContent pb-3"
        dangerouslySetInnerHTML={{ __html: `${articleList.content}` }}
      ></div>
      <div className="social d-flex justify-content-between align-items-center">
        <time>{articleList.created_time}</time>
        <div className="d-flex align-items-center">
          <CommentCount num={articleList.article_id} />
          <div className="p-2"></div>
          <FaStar className={`${articleList.favorited ? 'likeIt' : ''}`} />
        </div>
      </div>
      <hr />
    </FadeIn>
  )
}

export default Post
