const formFields = document.querySelectorAll('.form-control')
const submitButton = document.getElementById('submit-button')

// required fields = formFields, lastName, driversLicense, expiryDate, dob
function validateForm() {
  formFields.forEach((forms) => {
    if (forms.value.trim() == '') {
      submitButton.disabled = true
      console.log('submitbutton disabled')
      return false
    } else {
      submitButton.disabled = false
      console.log('submitbutton enabled')
      return true
    }
  })
}

document.addEventListener('submit', (event) => {
  console.log('helloio')
  if (!validateForm()) {
    event.preventDefault()

    alert('unable to submit') // need to add validateForm here?? to check if whitespace again
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
