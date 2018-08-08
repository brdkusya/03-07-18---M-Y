var link = document.querySelector('.top-line__button');
var popup = document.querySelector('.modal');
var close = document.querySelector('.modal__button--close');
var form = popup.querySelector('form');
var name = popup.querySelector('[name=modal-name]');
var number = popup.querySelector('[name=modal-number]');

var isStorageSupport = true;
var storage = localStorage.getItem('name');

try {
	storage = localStorage.getItem('name'); 
}
catch (err) {
	isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.add('modal--show');

	if (storage) {
		name.value = storage;
		number.focus();
	}
	else {
		name.focus();
	}
});

close.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.remove('modal--show');
	popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
	if (!name.value || !number.value) {
		evt.preventDefault();
		popup.classList.add('modal--error');
	}
	else {
		if (isStorageSupport) {
			localStorage.setItem('name', name.value);
		}
	}
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains('modal--show')) {
			popup.classList.remove('modal-show');
		}
	}
});