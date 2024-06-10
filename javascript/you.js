const formFields = document.querySelectorAll('.form-control') // returns a node list --> forEach
const submitButton = document.getElementById('submit-button')

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
  if (!validateForm()) {
    event.preventDefault()

    alert('unable to submit')
  } else {
    alert('Form submitted 🎉')
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
