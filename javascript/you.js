const firstName = document.querySelector('#first_name')
const submitButton = document.getElementById('submit-button')

function validateForm() {
  if (firstName.value.trim() == '') {
    submitButton.disabled = true

    return false
  } else {
    submitButton.disabled = false
    return true
  }
}

document.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault()
  } else {
    alert('Form submitted 🎉')
  }
})

firstName.addEventListener('input', validateForm)

// loss of Focus validation
document.addEventListener('blur', (event) => {
  event.preventDefault()
  validateForm()
})
