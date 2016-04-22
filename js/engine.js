function loadContent (page) {
  document.querySelector('.show').setAttribute('class', 'hidden')
  document.querySelector('#'+page).setAttribute('class', 'show')
}
