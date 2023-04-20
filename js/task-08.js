const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const formDataFromElements = {
    email: email.value,
    password: password.value,
  };
  console.log(formDataFromElements);

  // const formData = new FormData(event.currentTarget);
  // console.log(formData);
  // formData.forEach((value, name) => {
  //   console.log(`name: ${name}`);
  //   console.log(`value: ${value}`);
  // });

  event.currentTarget.reset();
}
