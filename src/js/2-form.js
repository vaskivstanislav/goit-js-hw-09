let formData = {};

const formEl = document.querySelector('.feedback-form');
console.log(formData);

const inputEl = formEl.elements.email;
const textareaEl = formEl.elements.message;

const localStorageKey = 'feedback-form-state';
formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {
  email: '',
  message: '',
};
formEl.elements.email.value = formData.email;
formEl.elements.message.value = formData.message;

formEl.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!(formData.email.trim() && formData.message.trim())) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';
  formEl.reset();
});