import { useState } from 'react'

export default function UserAccountValidate(addUserData) {
  const [data, setData] = useState([])
  let errors = {}
  const checkAccount = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/signup/checkaccount?name=${addUserData.userAccount}`
    )
    const results = await response.json()
    // console.log(response)
    // console.log(results)
    setData(results)
    return results.canUse
  }

  //   ;(async function () {
  //     let canUse = await checkAccount()
  //     console.log(canUse)
  //   })()
  checkAccount()

  const a = checkAccount().then((r) => {
    if (r === true) {
      return 1
    } else {
      return 0
    }
  })
  console.log(a)
  console.log(checkAccount())
  if (!addUserData.userAccount.trim()) {
    errors.userAccount = '此欄位不能為空白'
  } else if (!/^[a-zA-Z]\w*$/.test(addUserData.userAccount)) {
    errors.userAccount = '帳號第一個字不為數字，只接受大小寫字母、數字及底線'
  } else if (0 === false) {
    errors.userAccount = '帳號已存在，請重新輸入'
  }

  return errors
}
