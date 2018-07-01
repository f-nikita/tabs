(function() {

	let tabsControlsLink = document.querySelectorAll('.tabs__controls-link'),
		i;

	for(i = 0; i < tabsControlsLink.length; i++) {
		tabsControlsLink[i].addEventListener('click', function(e) {
			e.preventDefault();

			let linkHref = this.getAttribute('href'),
				tabsControlsItem = this.parentElement,
				tabsControls = this.parentElement.parentElement.children,
				tabsContentItem = this.parentElement.parentElement.parentElement.querySelector('.tabs__content').children;

			if(!tabsControlsItem.classList.contains('active')) {
				for(let i = 0; i < tabsControls.length; i++) {
					tabsControls[i].classList.remove('active');
				}
				tabsControlsItem.classList.add('active');
			}

			for(let i = 0; i < tabsContentItem.length; i++) {
				if(tabsContentItem[i].dataset.class === linkHref) {
					tabsContentItem[i].classList.add('active');	
				} else {
					tabsContentItem[i].classList.remove('active');
				}
			}
		});
	}

})();