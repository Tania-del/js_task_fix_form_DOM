'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input, id) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const { parentElement, name: inputName } = input;

  parentElement.prepend(label);

  label.textContent = inputName.toUpperCase();
  input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);
  input.id = id;
  label.htmlFor = id;
});
