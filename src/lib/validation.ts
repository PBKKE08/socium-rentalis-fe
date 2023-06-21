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

export function getDurationInHours(startTime: string, endTime: string) {
  // Parse the start and end times
  if (!startTime || !endTime) return 0;

  const start = startTime.split(":");
  const end = endTime.split(":");

  // Convert the start and end times to hours and minutes
  const startHour = parseInt(start[0]);
  const startMinute = parseInt(start[1]);
  const endHour = parseInt(end[0]);
  const endMinute = parseInt(end[1]);

  // Calculate the duration in minutes
  let durationInMinutes =
    endHour * 60 + endMinute - (startHour * 60 + startMinute);

  if (durationInMinutes < 0) {
    durationInMinutes = 24 * 60 + durationInMinutes;
  }

  // Convert the duration to hours
  const hours = durationInMinutes / 60;

  // Return the duration in hours
  return hours.toFixed(0);
}
