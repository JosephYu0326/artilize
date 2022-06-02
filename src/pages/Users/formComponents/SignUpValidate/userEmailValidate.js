export default function userEmailValidate(addUserData, results) {
  let errors = {}
  const { canUse } = results
  console.log(canUse)
  //Email
  if (!addUserData.userEmail) {
    errors.userEmail = '此欄位不能為空白'
  } else if (!/\S+@\S+\.\S+/.test(addUserData.userEmail)) {
    errors.userEmail = '無效的Email'
  } else if (canUse === false) {
    errors.userEmail = 'Email已存在，請重新輸入'
  }
  return errors
}
