import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const useForm = (validate) => {
  const [addUserData, setUserData] = useState({
    userAccount: '',
    userEmail: '',
    userPassword: '',
    userConfirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    const newAddUserData = { ...addUserData, [name]: value }
    setUserData(newAddUserData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setErrors(validate(addUserData))
    setIsSubmitting(true)
    console.log(validate(addUserData).userAccount)
    if (
      validate(addUserData).userAccount ||
      validate(addUserData).userEmail ||
      validate(addUserData).userPassword ||
      validate(addUserData).userConfirmPassword !== undefined
    ) {
      console.log(1)
    } else {
      sendAddUserData()
    }
  }

  const MySwal = withReactContent(Swal)
  const sendAddUserData = async () => {
    try {
      const addUserForm = document.getElementById('addUserForm')
      const formData = new FormData(addUserForm)
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/signup`,
        { method: 'POST', body: formData }
      )
      const results = await response.json()
      console.log(results)
      if (results.ok === true) {
        MySwal.fire({
          title: <h3>註冊成功</h3>,
          icon: 'success',
        })
      } else {
        MySwal.fire({
          title: (
            <div>
              <h3>註冊失敗</h3>
            </div>
          ),
          icon: 'error',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { handleChange, addUserData, handleSubmit, errors }
}

export default useForm
