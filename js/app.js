import { valida, validaText } from './validaciones.js'

const inputs = document.querySelectorAll('input')

const textarea = document.querySelector('textarea')

inputs.forEach(input => {
  input.addEventListener('blur', (input) => {
    valida(input.target)
  })
})

textarea.addEventListener('blur', (text) => {
  validaText(text.target)
})

document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('.form')
  formulario.addEventListener('submit', () => {
    formulario.reset()
  })
})
