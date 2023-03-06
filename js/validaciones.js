
export function valida (input) {
  const tipoInput = input.dataset.tipo
  if (validadores[tipoInput]) {
    validadores[tipoInput](input)
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalid')
    input.parentElement.querySelector('.input-message-error').innerHTML = ''
  } else {
    input.parentElement.classList.add('input-container--invalid')
    input.parentElement.querySelector('.input-message-error').innerHTML = mostrarError(tipoInput, input)
  }
}
export function validaText (textarea) {
  const tipoInput = textarea.dataset.tipo
  if (validadores[tipoInput]) {
    validadores[tipoInput](textarea)
  }

  if (textarea.validity.valid) {
    textarea.parentElement.classList.remove('textarea-container--invalid')
    textarea.parentElement.querySelector('.textarea-message-error').innerHTML = ''
  } else {
    textarea.parentElement.classList.add('textarea-container--invalid')
    textarea.parentElement.querySelector('.textarea-message-error').innerHTML = mostrarError(tipoInput, textarea)
  }
}

function mostrarError (tipoInput, input) {
  let mensaje = ''
  tipoErrores.forEach(error => {
    if (input.validity[error]) {
      mensaje = mensajeError[tipoInput][error]
    }
  })

  return mensaje
}

const validadores = {
  message: (textarea) => validarTextarea(textarea)
}

const tipoErrores = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
]

const mensajeError = {
  nombre: {
    valueMissing: 'El campo Nombre no puede estar vacío',
    patternMismatch: 'No debe superar los 50 caracteres'
  },
  email: {
    valueMissing: 'El campo Email no puede estar vacío',
    typeMismatch: 'El correo no es válido'
  },
  asunto: {
    valueMissing: 'El campo Asunto no puede estar vacío',
    patternMismatch: 'No debe superar los 50 caracteres'
  },
  message: {
    valueMissing: 'El campo Mensaje no puede estar vacío',
    customError: 'No debe superar los 300 caracteres'
  }

}

function validarTextarea (textarea) {
  const textLength = textarea.parentElement.querySelector('textarea').value.length
  let msgError = ''
  if (textLength > 300) {
    msgError = 'No debe superar los 300 caracteres'
  }
  textarea.setCustomValidity(msgError)
}
