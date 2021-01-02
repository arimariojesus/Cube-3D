const cube = document.querySelector('.cube');
const shadow = document.querySelector('.shadow');
let dragOfX = 0, dragOfY = 0;
let lastRotateX = 0, lastRotateY = 0;

const dragStart = (e) => {
  dragOfX = e.pageX;
  dragOfY = e.pageY;

  addEventListener('mousemove', dragMove);
  addEventListener('mouseup', dragEnd);
}

const dragMove = (e) => {
  let coordX = (e.pageX - dragOfX);
  let coordY = (e.pageY - dragOfY);
  cube.style.transform = 'rotateY(' + (lastRotateY + coordX) + 'deg)' + ' rotateX(' + (lastRotateX - coordY) + 'deg)';
  shadow.style.transform = 'rotateX(90deg) translateZ(-200px) rotateZ(' + (lastRotateY - coordX) + 'deg)';
}

const dragEnd = (e) => {
  lastRotateY += (e.pageX - dragOfX);
  lastRotateX -= (e.pageY - dragOfY);
  
  removeEventListener('mousemove', dragMove);
  removeEventListener('mouseup', dragEnd);
}

cube.addEventListener('mousedown', dragStart);