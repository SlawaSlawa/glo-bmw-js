const moreElem = document.querySelector('.more');
const modalElem = document.querySelector('.modal');

const openModal = () => {
	modalElem.classList.remove('hidden');
};

const closeModal = () => {
	modalElem.classList.add('hidden');
};

moreElem.addEventListener('click', openModal);
modalElem.addEventListener('click', (evt) => {
	const target = evt.target;
	if (target.classList.contains('overlay') ||
	 	target.classList.contains('modal__close')) {
		closeModal();
	}
});