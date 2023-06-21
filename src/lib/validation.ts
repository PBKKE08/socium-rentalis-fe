export function validateEmail(email: any) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

export function validatePhone(phone: any) {
  const pattern = /^\d{10,13}$/;
  return pattern.test(phone);
}

export function validatePassword(password: any) {
  if (password.length < 8) return false;
  const regex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
  if (!regex.test(password)) {
    return false;
  }

  return true;
}
