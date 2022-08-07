let currentTheme = 'amber'
const btns = document.querySelectorAll('.themes a')
const screen = document.getElementById('screen')

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    let newTheme = event.target.id
    screen.classList.remove(currentTheme)
    screen.classList.add(newTheme)
    currentTheme = newTheme
  })
})
