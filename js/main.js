const nav = document.querySelector('.nav')
const navBtn = Document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
	nav.classList.toggle('nav--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})
}

navBtn.addEventListener('click', handleNav)
