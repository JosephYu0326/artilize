export default function LoginValidate(loginData) {
  let errors = {}
  if (!loginData.userAccount.trim()) {
    errors.userAccount = '此欄位不能為空白'
  } else if (!/^[a-zA-Z]\w*$/.test(loginData.userAccount)) {
    errors.userAccount = '帳號第一個字不為數字，只接受大小寫字母、數字及底線'
  }
  if (!loginData.userPassword) {
    errors.userPassword = '此欄位不能為空白'
  } else if (
    !/^(?=.*[^a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/.test(
      loginData.userPassword
    )
  ) {
    errors.userPassword =
      '密碼最少要6字,並且至少包含大寫字母、小寫字母、數字、符號各一'
  }

  return errors
}
