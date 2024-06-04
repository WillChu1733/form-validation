document.addEventListener('submit', (event) => {
  event.preventDefault()
  alert('Form submitted 🎉')
})

document.addEventListener('click', (event) => {
  event.preventDefault()
  const firstName = document.querySelector('#first_name')
  const lastName = document.querySelector('#last_name')
  const licenseNumber = document.querySelector('#license_number')
  const disableButton = document.getElementById('submit-button')
  if (
    firstName.value.trim() == '' ||
    lastName.value.trim() == '' ||
    licenseNumber.value.trim() == ''
  ) {
    disableButton.disabled = true
  } else {
    disableButton.disabled = false
  }

  let todaysDate = new Date()
  let formExpiryDate = document.getElementById('expiry_date')
  let expiryDate = new Date(formExpiryDate.value)

  if (expiryDate > todaysDate) {
    console.log('Date: ', expiryDate, todaysDate)
  }
})
