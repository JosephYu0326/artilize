import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import UserAccountValidate from './SignUpValidate/UserAccountValidate'
import userEmailValidate from './SignUpValidate/userEmailValidate'
import userPasswordValidate from './SignUpValidate/userPasswordValidate'

const useForm = (validate) => {
  const [data, setData] = useState([])
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
  const checkAccount = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/signup/checkaccount?name=${addUserData.userAccount}`
    )
    const results = await response.json()
    // console.log(response)
    // console.log(results)
    setData(results)
  }
  useEffect(() => {
    checkAccount()
  }, [addUserData])
  const userAccountBlur = (e) => {
    checkAccount()

    setErrors(UserAccountValidate(addUserData))
  }

  const userEmailBlur = (e) => {
    setErrors(userEmailValidate(addUserData))
  }
  const userPasswordBlur = (e) => {
    setErrors(userPasswordValidate(addUserData))
  }
  const userConfirmPasswordBlur = (e) => {
    setErrors(validate(addUserData))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setErrors(validate(addUserData))
    setIsSubmitting(true)
    console.log(validate(addUserData))
    if (JSON.stringify(validate(addUserData)) === '{}') {
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

  return {
    handleChange,
    addUserData,
    handleSubmit,
    errors,
    userAccountBlur,
    userEmailBlur,
    userPasswordBlur,
    userConfirmPasswordBlur,
  }
}

export default useForm
