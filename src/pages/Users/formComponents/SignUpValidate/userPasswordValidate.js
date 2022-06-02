export default function userPasswordValidate(addUserData) {
  let errors = {}

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

  return errors
}
