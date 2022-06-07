export default function UserAccountValidate(addUserData, data) {
  let errors = {}

  console.log(data)
  const { canUse } = data
  console.log(canUse)
  if (!addUserData.userAccount.trim()) {
    errors.userAccount = '此欄位不能為空白'
  } else if (!/^[a-zA-Z]\w*$/.test(addUserData.userAccount)) {
    errors.userAccount = '帳號第一個字不為數字，只接受大小寫字母、數字及底線'
  } else if (canUse === false) {
    errors.userAccount = '帳號已存在，請重新輸入'
  }

  return errors
}
