const toggle_button = document.querySelector('.toggle')
const navigation = document.querySelector('.mobile-nav')

toggle_button.addEventListener('click', () => {
    toggle_button.classList.toggle('active')
    navigation.classList.toggle('active')
})