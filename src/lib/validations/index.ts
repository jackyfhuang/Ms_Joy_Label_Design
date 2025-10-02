// Validation utilities
export const validateTextLength = (text: string, maxLength: number): boolean => {
  return text.length <= maxLength && text.length > 0
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

