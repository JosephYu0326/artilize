export default function validateInfo(addUserData) {
  let errors = {}

  if (!addUserData.userAccount.trim()) {
    errors.userAccount = '此欄位不能為空白'
  } else if (!/^[a-zA-Z]\w*$/.test(addUserData.userAccount)) {
    errors.userAccount = '帳號第一個字不為數字，只接受大小寫字母、數字及底線'
  }

  //Email
  if (!addUserData.userEmail) {
    errors.userEmail = '此欄位不能為空白'
  } else if (!/\S+@\S+\.\S+/.test(addUserData.userEmail)) {
    errors.userEmail = '無效的Email'
  }
  //Password
  if (!addUserData.userPassword) {
    errors.userPassword = '此欄位不能為空白'
  } else if (
    !/^(?=.*[^a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/.test(
      addUserData.userPassword
    )
  ) {
    errors.userPassword =
      '密碼最少要6字,並且至少包含大寫字母、小寫字母、數字、符號各一'
  }

  if (!addUserData.userConfirmPassword) {
    errors.userConfirmPassword = '此欄位不能為空白'
  } else if (addUserData.userConfirmPassword !== addUserData.userPassword) {
    errors.userConfirmPassword = '密碼不相同'
  }
  return errors
}
