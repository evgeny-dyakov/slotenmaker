const toggle = document.querySelector('.toggle-color')

toggle.addEventListener('click', (evt) => {

  const btn = evt.target.closest('.toggle-color-btn')

  if (btn) {

    let newColor

    switch (btn.dataset.color) {
      case 'red':
        newColor = '355, 100%, 60%'
        break
      case 'blue':
        newColor = '213, 100%, 55%'
        break
      case 'green':
        newColor = '115, 78%, 53%'
        break
      default:
        console.error('цвет не установлен')
        return
    }

    document.documentElement.style.setProperty('--accent-1', newColor)
  }
})