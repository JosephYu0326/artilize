export default function ChangePasswordValidate(changepasswordData) {
  let errors = {}
  if (!changepasswordData.oldPassword) {
    errors.oldPassword = '此欄位不能為空白'
  } else if (
    !/^(?=.*[^a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/.test(
      changepasswordData.oldPassword
    )
  ) {
    errors.oldPassword =
      '密碼最少要6字,並且至少包含大寫字母、小寫字母、數字、符號各一'
  }

  if (!changepasswordData.newPassword) {
    errors.newPassword = '此欄位不能為空白'
  } else if (
    !/^(?=.*[^a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/.test(
      changepasswordData.newPassword
    )
  ) {
    errors.newPassword =
      '密碼最少要6字,並且至少包含大寫字母、小寫字母、數字、符號各一'
  } else if (
    changepasswordData.newPassword === changepasswordData.oldPassword
  ) {
    errors.newPassword = '新密碼不能與舊密碼相同'
  }

  if (!changepasswordData.confirmNewPassword) {
    errors.confirmNewPassword = '此欄位不能為空白'
  } else if (
    changepasswordData.confirmNewPassword !== changepasswordData.newPassword
  ) {
    errors.confirmNewPassword = '密碼不相同'
  }

  return errors
}
