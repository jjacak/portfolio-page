import scrollSpy from './scrollspy.js';
import {
	hamburgerClickHandler,
	hideMenuHandler,
} from './hamburgerMenuHandler.js';
import {checkForErrors, showError, removeError} from './formValidation.js';

const hamburgerIcon = document.querySelector('.hamburger-icon');
const contactForm = document.querySelector('.contact__form');

scrollSpy();

hamburgerIcon.addEventListener('click', hamburgerClickHandler);
document.addEventListener('click', hideMenuHandler);

contactForm.addEventListener(
	'blur',
	(e) => {
		const error = checkForErrors(e.target);

		if (error) {
			showError(e.target, error);
			return;
		}

		removeError(e.target);
	},
	true
);

contactForm.addEventListener('submit', (e) => {
	const fields = [...e.target.elements];

	let error, hasErrors;

	fields.forEach((field) => {
		error = checkForErrors(field);
		if (error) {
			showError(field, error);
			if (!hasErrors) {
				hasErrors = field;
			}
		}
	});

	if (hasErrors) {
		e.preventDefault();
		hasErrors.focus();
	}
});

