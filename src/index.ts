type ValidateLocalPhoneNumberOptions = {
  phone: string,
  optionalLeadingZero: boolean
}

export function validateLocalPhoneNumber ({
  phone, optionalLeadingZero
}: ValidateLocalPhoneNumberOptions) {
  if (!phone) throw new Error("Provide a phone number to validate.")
  if (!optionalLeadingZero && phone.startsWith('0')) throw new Error("Missing leading \"0\" in phone number")
  if (!optionalLeadingZero && phone.length < 11) throw new Error("Phone number too short") 
  if (optionalLeadingZero && phone.length < 10) throw new Error("Phone number too short") 
  if (!optionalLeadingZero && phone.length > 11) throw new Error("Phone number too long")
  if (optionalLeadingZero && phone.length > 10) throw new Error("Phone number too long")
  // const finalPattern = /((\+234)[0-9]{10,11})$|((070|080|081|090|091)[0-9]{8})$/
  // if (!finalPattern.test(phone)) {}
  return phone
}

export default { validateLocalPhoneNumber }
