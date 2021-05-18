document.addEventListener('DOMContentLoaded', () => {
	const featureLinkElems = document.querySelectorAll('.feature__link');
	const featureSubElems = document.querySelectorAll('.feature-sub');
	// featureLinkElems[0].classList.add('feature__link_active');
	// featureSubElems[0].classList.remove('hidden');

	featureLinkElems.forEach((btn, i) => {
		btn.addEventListener('click', () => {
			if (btn.classList.contains('feature__link_active')) {
				featureSubElems[i].classList.add('hidden');
				featureLinkElems[i].classList.remove('feature__link_active');
			}else {
				featureSubElems.forEach((element) => element.classList.add('hidden'));
				featureLinkElems.forEach((element) => element.classList.remove('feature__link_active'));
				featureSubElems[i].classList.remove('hidden');
				featureLinkElems[i].classList.add('feature__link_active');
			}
		});
	});
});
