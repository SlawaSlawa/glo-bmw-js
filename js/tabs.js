const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
const designTitleElems = document.querySelectorAll('.design__title');

for(const tab of tabsHandlerElems) {
	tab.addEventListener('click', () => {
		tabsHandlerElems.forEach(item => {
			if (tab === item) {
				tab.classList.add('design-list__item_active');
			}else {
				item.classList.remove('design-list__item_active');
			}
		});

		tabsFieldElems.forEach(item => {
			if (item.dataset.tabsField === tab.dataset.tabsHandler) {
				item.classList.remove('hidden');
			}else {
				item.classList.add('hidden');
			}
		});

		designTitleElems.forEach(title => {
			if (title.classList.contains('hidden')) {
				title.classList.remove('hidden');
			}else {
				title.classList.add('hidden');
			}
		});
	});
}
