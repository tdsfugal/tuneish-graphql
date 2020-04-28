export const checkEmail = (value, default_msg = "") => {
  // TODO
  const ok = true
  const msg = default_msg
  return { ok, msg }
}

export const checkNickName = (value, default_msg = "") => {
  // TODO
  const ok = true
  const msg = default_msg
  return { ok, msg }
}

export const checkPassword = (value, default_msg = "") => {
  // TODO
  const ok = true
  const msg = default_msg
  return { ok, msg }
}

export const checkPasswordRepeat = (pwd, value) => {
  const ok = value === pwd && value !== ""
  const msg = ok ? "Passwords match" : "Passwords do not match"
  return { ok, msg }
}

export const checkConfCode = (value, default_msg = "") => {
  const ok = value.length === 6 // use regex for 6 digits
  const msg = default_msg
  return { ok, msg }
}
