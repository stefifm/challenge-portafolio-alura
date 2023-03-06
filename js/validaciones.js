// Función para validar cada input
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

// Función para validar el textarea
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

// Función para mostrar un mensaje de error
// Utilizando el array de Tipo de Errores

function mostrarError (tipoInput, input) {
  let mensaje = ''
  tipoErrores.forEach(error => {
    if (input.validity[error]) {
      mensaje = mensajeError[tipoInput][error]
    }
  })

  return mensaje
}

// Objeto validadores. Se usará en las funciones
// valida y validaText
const validadores = {
  // Se le asigna al data-tipo (atributo HTML)
  // la validación sobre el input o textarea
  message: (textarea) => validarTextarea(textarea)
}

// Array de Tipo de Errores

const tipoErrores = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
]

// Objeto mensaje de errores

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

// Función para crear un mensaje de error personalizado
// del textarea

function validarTextarea (textarea) {
  const textLength = textarea.parentElement.querySelector('textarea').value.length
  let msgError = ''
  if (textLength > 300) {
    msgError = 'No debe superar los 300 caracteres'
  }
  textarea.setCustomValidity(msgError)
}
