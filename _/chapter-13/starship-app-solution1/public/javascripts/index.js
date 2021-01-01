document.querySelectorAll('.number').forEach((el) => {
  el.addEventListener('blur', (e) => {
    if (parseFloat(e.target.value) > parseFloat(el.max)) {
      e.target.value = el.max
    }
  
    if (parseFloat(e.target.value) < parseFloat(el.min)) {
      e.target.value = el.min
    }
  })
})

document.querySelectorAll('.scuttle').forEach((el) => {
  el.addEventListener('click', (e) => {
    fetch(`/ships/${e.currentTarget.closest('tr').dataset.ship}`, {
      method: 'DELETE'
    }).then( () => {
      window.location.reload();
    })
  })
})

document.querySelector('.add-ship').addEventListener('click', () => {
  fetch('/ships', {
    method: 'POST',
    body: new FormData(document.querySelector('form'))
  })
})

document.querySelector('.random').addEventListener('click', () => {
  fetch('/ships/random', {
    method: 'POST'
  }).then( () => {
    window.location.reload();
  })
})