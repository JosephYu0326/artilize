import React, { useEffect, useState } from 'react'
import $ from 'jquery'
// import { Server } from 'socket.io'
import { FaRocketchat } from 'react-icons/fa'
import { Alert, Button, Form, FormControl, InputGroup } from 'react-bootstrap'

function Chat() {
  let ws = null
  const userId = localStorage.getItem('userId')
  const auth = localStorage.getItem('auth')
  const [show, setShow] = useState('none')
  // const [text, setText] = useState('none')

  useEffect(() => {
    if (ws) return

    ws = new WebSocket('ws://localhost:1337')
    ws.onopen = function () {
      console.log('Connection 開啟了...')
      $('#connect-status').text('已連線')
    }
    ws.onclose = function () {
      console.log('Connection 關閉了...')
      $('#connect-status').text('離線中')
    }

    ws.onmessage = function (event) {
      //ws.emit('login', { id: userId })
      //let msg = { text: event.data, id: userId }
      let msg = event.data
      // console.log(event)
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
    // const sendMessage = () => {
    //   const message = document.querySelector('#msg-input').value
    //   const sendMessageRequest = {
    //     message,
    //     userId,
    //   }
    //   console.log(userId);
    //   ws.emit('ClientToServerMsg', sendMessageRequest)
    //   document.querySelector('#msg-input').value = ''
    //   console.log('已發送傳送訊息事件按鈕----', sendMessageRequest)
    // }
  }, [])

  function showChatRoom() {
    if (show === 'none') {
      // ws.emit('login', { username: userId })
      setShow('block')
    } else {
      setShow('none')
    }
  }
  function closeChatRoom() {
    setShow('none')
    ws.close(1000, '正常斷線')
  }

  return (
    <>
      <div
        id="chatRoomtoggle"
        className="displayN fs-1 position-fixed position-absolute"
        onClick={showChatRoom}
        style={{ display: auth ? 'block' : 'none' }}
      >
        <FaRocketchat />
      </div>
      <div
        id="chatRoom"
        className="BorderRadius shadow frContainer mt-5"
        style={{ display: show }}
      >
        <div className="row">
          <div className="p-5">
            <Button
              variant="outline-primary"
              id="disconnect-btn"
              className="float-end"
              onClick={closeChatRoom}
            >
              X
            </Button>
            <h4 className="text-center pb-3">即時討論區</h4>
            <h5>
              <span
                className="h6 badge bg-secondary float-start"
                id="connect-status"
              >
                已離線
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
                  name="msg-input"
                  id="msg-input"
                  aria-describedby="basic-addon2"
                  // onChange={(e)=>{setText(e.target.value)}}
                />
                <Button type="submit" variant="outline-primary">
                  傳送
                </Button>
              </InputGroup>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
