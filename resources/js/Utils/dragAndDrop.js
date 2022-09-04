function dragOverHandler(event) {
  event.stopPropagation()
  event.preventDefault()
  event.dataTransfer.dropEffect = 'copy'
}

function dropHandler(event) {
  event.preventDefault()

  let files = []

  if (event.dataTransfer.items) {
    for (var i = 0; i < event.dataTransfer.items.length; i++) {
      if (event.dataTransfer.items[i].kind === 'file') {
        files.push(event.dataTransfer.items[i].getAsFile())
      }
    }
  } else {
    for (var i = 0; i < event.dataTransfer.files.length; i++) {
      files.push(event.dataTransfer.files[i])
    }
  }

  return files
}

export { dragOverHandler, dropHandler }
