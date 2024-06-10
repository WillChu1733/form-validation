const formFields = document.querySelectorAll('.form-control') // returns a node list --> forEach
const submitButton = document.getElementById('submit-button')

let currentDate = new Date()
let date = document.getElementById('expiry_date')
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

document.addEventListener('submit', (event) => {
  if (!validateForm() || !validateDate()) {
    event.preventDefault()
    console.log('expiry:', new Date(date.value), 'has already expired')
    alert('expiry date cannot be in the past')
  } else {
    alert('Form submitted 🎉')
    event.preventDefault()
    console.log('Expiry:', new Date(date.value), 'Current:', currentDate)
  }
})

formFields.forEach((formFields) => {
  formFields.addEventListener('input', validateForm)
})

// loss of Focus validation
document.addEventListener('blur', (event) => {
  event.preventDefault()
  validateForm()
})

// expiry date must be greater than todays date
// expiryDate > currentDate
// format todayDate in dd/mm/yyyy --> Date() expects a string --> .value turns into string
// expiryDate = user input

// get the date of user input
