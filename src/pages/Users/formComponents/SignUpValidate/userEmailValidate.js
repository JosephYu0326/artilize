export default function userEmailValidate(addUserData) {
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
  return errors
}
