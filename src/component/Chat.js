import { useState } from 'react'
import { Alert, Button, Form, FormControl, InputGroup } from 'react-bootstrap'

function Chat() {
  const [show, setShow] = useState(true)

  return (
    <>
      <div className="justify-content-center">
        <Alert
          show={show}
          variant="primary"
          className="w-75 text-center"
          dismissible
        >
          <Alert.Heading>即時討論區</Alert.Heading>
          <Form.Control
            as="textarea"
            placeholder="123"
            style={{ height: '100px' }}
          />
          <hr />
          <InputGroup className="mb-3">
            <FormControl
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-primary" id="button-addon2">
              傳送
            </Button>
          </InputGroup>

          </Alert>
      </div>
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  )
}

// render(<Chat />)
export default Chat
