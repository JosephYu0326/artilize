import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import UserAccountValidate from './SignUpValidate/UserAccountValidate'
import userEmailValidate from './SignUpValidate/userEmailValidate'
import userPasswordValidate from './SignUpValidate/userPasswordValidate'

const useForm = (validate) => {
  const [data, setData] = useState([])
  const [googleAuth, setGoogleAuth] = useState(false)
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
  // const checkAccount = async () => {
  //   const response = await fetch(
  //     `${process.env.REACT_APP_API_URL}/users/signup/checkaccount?name=${addUserData.userAccount}`
  //   )
  //   const results = await response.json()
  //   // console.log(response)
  //   console.log(results)
  //   setData(results)
  // }

  const userAccountBlur = async (e) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/signup/checkaccount?name=${addUserData.userAccount}`
    )
    const results = await response.json()
    // console.log(response)
    // console.log(results)
    //setData(results)

    setErrors(UserAccountValidate(addUserData, results))
    console.log(UserAccountValidate(addUserData, results))
  }

  const userEmailBlur = async (e) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/signup/checkemail?email=${addUserData.userEmail}`
    )
    const results = await response.json()
    // console.log(results)
    setErrors(userEmailValidate(addUserData, results))
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
    if (JSON.stringify(validate(addUserData)) === '{}' && googleAuth === true) {
      sendAddUserData()
    } else if (googleAuth === false) {
      MySwal.fire({
        icon: 'error',
        title: '請驗證是否不是機器人',
      })
    }
  }
  const authChange = (value) => {
    console.log('Captcha value:', value)
    if (value !== null) {
      setGoogleAuth(true)
    }
  }
  const Navigate = useHistory()
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
          title: '註冊成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        }).then(function () {
          Navigate.push('/users/login')
        })
      } else if (results.message === '已有此帳號') {
        MySwal.fire({
          title: '註冊失敗，已有此帳號',
          icon: 'error',
        })
      } else if (results.message === '已有此Email') {
        MySwal.fire({
          title: '註冊失敗，已有此Email',
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
    authChange,
  }
}

export default useForm
