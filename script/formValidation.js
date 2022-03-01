const contactForm = document.querySelector('.contact__form');

contactForm.setAttribute('novalidate', true);

//Checks input's validity
export const checkForErrors = (field) => {
	if (
		field.disabled ||
		field.type === 'file' ||
		field.type === 'reset' ||
		field.type === 'submit' ||
		field.type === 'button'
	) {
		return;
	}
	const validity = field.validity;

	if (validity.valid && field.value.trim().length !== 0) {
		return;
	}
	if (validity.valueMissing || field.value.trim().length === 0) {
		return `Please enter your ${field.getAttribute('name')}.`;
	}
	if (validity.patternMismatch) {
		return `Please enter a valid ${field.getAttribute('name')}.`;
	}
	return 'The value you entered for this field is invalid.';
};

export const showError = (field, error) => {
	field.classList.add('error');
	const id = field.getAttribute('name');
	const messageDisplay = document.querySelector(`.error-for-${id}`);
	messageDisplay.style.visibility = 'visible';
	messageDisplay.innerText = error;
};

export const removeError = (field) => {
	field.classList.remove('error');
	const id = field.getAttribute('name');
	const messageDisplay = document.querySelector(`.error-for-${id}`);
	if (!messageDisplay) {
		return;
	}
	messageDisplay.style.visibility = 'hidden';
	messageDisplay.innerText = '';
};

