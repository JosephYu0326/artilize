export default function validateInfo(addUserData) {
  let errors = {}

  if (!addUserData.userAccount.trim()) {
    errors.userAccount = '此欄位不能為空白'
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
  } else if (addUserData.userPassword.length < 6) {
    errors.userPassword = '密碼最少要6字'
  }

  if (!addUserData.userConfirmPassword) {
    errors.userConfirmPassword = '此欄位不能為空白'
  } else if (addUserData.userConfirmPassword !== addUserData.userPassword) {
    errors.userConfirmPassword = '密碼不相同'
  }
  return errors
}
