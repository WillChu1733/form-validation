const formFields = document.querySelectorAll('.form-control') // returns a node list --> forEach
const submitButton = document.getElementById('submit-button')

let currentDate = new Date()
let date = document.getElementById('expiry_date')
let birth = document.getElementById('dob')
// required fields = formFields, lastName, driversLicense, expiryDate, dob

// removed submitButtontrue/false in loop as it is now set based on the value
// of allValid after loop completes
function validateForm() {
  let allValid = true
  formFields.forEach((forms) => {
    if (forms.value.trim() == '') {
      allValid = false
    }
  })
  submitButton.disabled = !allValid // if allValid is true, button.disable = false

  return allValid
}

// check if expiry date is in future
// true if expiryDate > currentDate
function validateDate() {
  let expiryDate = new Date(date.value)
  return expiryDate > currentDate
}

// check if birthday is in past
// true if birthDate < currentDate
function validateBirthDate() {
  let birthDate = new Date(birth.value)
  return birthDate < currentDate
}

// NEED TO MAKE ALERT DEPENDENT ON VALIDATION FAILURE
document.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault()
    alert('ensure all fields are filled.')
    return
  }

  let expiryDateValid = validateDate()
  let birthDateValid = validateBirthDate()

  switch (true) {
    case !birthDateValid && !expiryDateValid:
      event.preventDefault()
      alert(
        'Expiry date cannot be in the past and Birth date cannot be in the future'
      )
      break
    case !expiryDateValid:
      event.preventDefault()
      alert('Expiry date cannot be in the past.')
      break
    case !birthDateValid:
      event.preventDefault()
      alert('Birth date cannot be in the future')
      break

    default:
      alert('Form submitted 🎉')
      event.preventDefault()
  }
})

formFields.forEach((formFields) => {
  formFields.addEventListener('input', validateForm)
})

// loss of Focus validation
document.addEventListener('blur', (event) => {
  event.preventDefault()

  alert('Form submitted 🎉')
})

// expiry date must be greater than todays date
// expiryDate > currentDate
// format todayDate in dd/mm/yyyy --> Date() expects a string --> .value turns into string
// expiryDate = user input

// get the date of user input
// if the error is due to validateDate error - output date cannot be in past
// if the error is due to validateBirthDate error - output birthdate cannot be in future
