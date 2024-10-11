// Get the profile icon and settings menu
const profileIcon = document.getElementById('nav-user-icon')
const settingMenu = document.getElementById('setting-menu')

// Toggle the visibility of the settings menu when profile icon is clicked
profileIcon.addEventListener('click', function () {
	settingMenu.classList.toggle('show')
})

// Get the dark mode toggle button
const toggleThemIcon = document.getElementById('dar-btn')

// Function to toggle dark mode and update localStorage
toggleThemIcon.addEventListener('click', function () {
	toggleThemIcon.classList.toggle('dark-btn-on')
	document.body.classList.toggle('dark-theme')

	// Update localStorage based on current theme
	if (localStorage.getItem('theme') === 'light') {
		localStorage.setItem('theme', 'dark')
	} else {
		localStorage.setItem('theme', 'light')
	}
})

// Update localStorage to remember dark mode state when the page loads
if (localStorage.getItem('theme') === 'light') {
	toggleThemIcon.classList.remove('dark-btn-on')
	document.body.classList.remove('dark-theme')
} else if (localStorage.getItem('theme') === 'dark') {
	toggleThemIcon.classList.add('dark-btn-on')
	document.body.classList.add('dark-theme')
} else {
	// Set default value if there's no theme in localStorage
	localStorage.setItem('theme', 'light')
}
