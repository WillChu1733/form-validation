const formFields = document.querySelectorAll('.form-control') // returns a node list --> forEach
const submitButton = document.getElementById('submit-button')

let currentDate = new Date()

// get the date of user input
let expiryDate = document.getElementById('expiry_date')
expiryDate.addEventListener('input', () => {
  let date = new Date(expiryDate.value)
  console.log(date)
})

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

document.addEventListener('submit', (event) => {
  if (!validateForm() || expiryDate > currentDate) {
    event.preventDefault()

    alert('expiry date cannot be in the past')
    console.log('current date:', currentDate)
    console.log('expiry date:', expiryDate)
    console.log('ValidateForm:', allValid)
  } else {
    alert('Form submitted 🎉')
    event.preventDefault()
    console.log('current date:', currentDate)
    console.log('expiry date:', expiryDate)
    console.log('ValidateForm:', allValid)
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
// format todayDate in dd/mm/yyyy
// expiryDate = user input
