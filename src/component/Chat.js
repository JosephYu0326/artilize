import React, { useState } from 'react'
import { Alert, Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import $ from 'jquery'

function Chat() {
  let ws = null
  const [show, setShow] = useState(true)
  const userId = localStorage.getItem('userId')
  React.useEffect(function () {
    fetch(`http://localhost:5000/chat`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
      }),
    })

    if (ws) return //防止重複建立連線

    ws = new WebSocket('ws://localhost:1337')
    ws.onopen = function () {
      console.log('Connection 開啟了...')
      $('#connect-status').text('連線中')
    }
    ws.onclose = function () {
      console.log('Connection 關閉了...')
      $('#connect-status').text('離線中')
    }
    ws.onmessage = function (event) {
      var msg = event.data
      $('#msg-io').append(`<h6>${msg}</h6>`)
      var msgIoDiv = $('#msg-io')[0]
      msgIoDiv.scrollTo(0, msgIoDiv.scrollHeight)
      //element.scrollTo(x-coord, y-coord)
      //The scrollTo() method of the Element interface scrolls to a particular set of coordinates inside a given element.
      //Element.scrollHeight是衡量元素包含因為overflow而沒顯示在螢幕上的內容高度的唯讀屬性.
    }
    $('#form1').submit(function () {
      ws.send($('#msg-input').val())
      $('#msg-input').val('')
      return false
    })
    $('#disconnect-btn').click(function () {
      ws.close(1000, '正常斷線')
      //1000(Normal Closure) 表示 The connection successfully completed the purpose for which it was created.

      //WebSocket.close(code, reason);
      /*
			code (選用)：
				A numeric value indicating the status code explaining why the connection is being closed.
				If this parameter is not specified, a default value of 1005(No Status Received) is assumed.
				可用的code列表：https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code			
			reason (選用)
				A human - readable string explaining why the connection is closing.
				This string must be no longer than 123 bytes of UTF-8 text.
			*/
    })
  }, [])
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="offset-sm-2 col-sm-8 border shadow p-5">
          <h4 className="text-center pb-3">即時聊天室</h4>
          <h5>
            <span className="h6 badge bg-primary float-end" id="connect-status">
              離線中
            </span>
          </h5>
          <form id="form1" className="p-5">
            <div className="mb-3">
              <div
                className="form-control"
                style={{ height: '250px', overflow: 'auto' }}
                id="msg-io"
              ></div>
            </div>
            <hr />
            <InputGroup className="mb-3">
              <FormControl
                aria-describedby="basic-addon2"
                name="msg-input"
                id="msg-input"
              />
              <Button variant="outline-primary" id="disconnect-btn">
                離開
              </Button>
              <Button
                type="submit"
                variant="outline-primary"
                id="button-addon2"
              >
                傳送
              </Button>
            </InputGroup>
          </form>
        </div>
      </div>
    </div>
    // <>
    //   <div className="justify-content-center">
    //     <Alert
    //       show={show}
    //       variant="primary"
    //       className="w-75 text-center"
    //       dismissible
    //     >
    //       <Alert.Heading>即時討論區</Alert.Heading>
    //       <span id="connect-status">離線中</span>
    //       <Form.Group id="form1">
    //         <Form.Control
    //           id="msg-io"
    //           style={{ height: '250px', overflow: 'auto' }}
    //         />
    //         <hr />
    //         <InputGroup className="mb-3">
    //           <FormControl
    //             type='text'
    //             aria-describedby="basic-addon2"
    //             name="msg-input"
    //             id="msg-input"
    //           />
    //           <Button variant="outline-primary" id="disconnect-btn">
    //             離開
    //           </Button>
    //           <Button
    //             type="submit"
    //             variant="outline-primary"
    //             id="button-addon2"
    //           >
    //             傳送
    //           </Button>
    //         </InputGroup>
    //       </Form.Group>
    //     </Alert>
    //   </div>
    //   {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    // </>
  )
}

// render(<Chat />)
export default Chat
