'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input, id) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const { parentElement } = input;

  parentElement.prepend(label);

  label.textContent = input.name.toUpperCase();
  input.placeholder = input.name.charAt(0).toUpperCase() + name.slice(1);
  input.id = id;
  label.htmlFor = id;
});
