//新增文章
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";

function AddArticle(props) {

  
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <div className="backBtn displayN">

        <Link to="/forum">回討論區
          <FaAngleLeft />
        </Link>

      </div>
      <div className="container">
        <div className="frContent">
          <h3>新增討論</h3>
          <form>
            <Form.Control className="my-5" size="lg" type="text" placeholder="請輸入標題" />
            <Editor
              apiKey="lx36ygwprus1n4asjcpxlw72wjnkjsm90cs4xl68rlcj2qff"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>請輸入內文</p>"
              init={{
                height: 600,
                menubar: false,
                language: "zh_TW",
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "preview",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family: 'Noto Sans TC', sans-serif; font-size:14px }",
              }}
            />
            <div className="container">
              <div className="row mx-auto">
                <Form.Select className="mt-5" aria-label="">
                  <option>文章分類</option>
                  <option value="1">{'1'}</option>
                  <option value="2">u</option>
                  <option value="3">u</option>
                </Form.Select>
                <Button variant="secondary col-sm-12 col-md-5 rounded-pill my-5 mx-auto">
                  儲存草稿
                </Button>
                <Button variant="primary col-sm-12 col-md-5 rounded-pill my-5 mx-auto">
                  新增討論
                </Button>

              </div>
            </div>
            {/* <button onClick={log}>Log editor content</button> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default AddArticle;
