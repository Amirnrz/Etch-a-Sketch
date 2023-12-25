const gridContainer = document.querySelector('.container')
const containerWidth = gridContainer.offsetWidth
const promptNumberBtn = document.querySelector('#propmt-number')


function createGrid() {
  let amount = prompt('enter number of squares that you want')

  if(amount > 100) amount = 100

  const gridItemSize = containerWidth / amount

  gridContainer.innerHTML = ''

  for(let i = 0; i < amount * amount; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridItem.style.width = `${gridItemSize}px`
    gridItem.style.height = `${gridItemSize}px`
    gridContainer.appendChild(gridItem)

    gridItem.addEventListener('mouseenter',() => {
      gridItem.style.backgroundColor = createRandomColor()
    })

  }
}

function createRandomColor() {
  const letters = "0123456789ABCDEF"
  let color = '#'
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)]
  }

  return color
}


promptNumberBtn.addEventListener('click',createGrid)

createGrid()