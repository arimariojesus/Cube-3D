const cube = document.querySelector('.cube');
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
  let coordY = lastRotateY < 0 ? (e.pageY - dragOfY) : -(e.pageY - dragOfY);
  cube.style.transform = 'rotateY(' + (lastRotateY + coordX) + 'deg)' + ' rotateX(' + (lastRotateX + coordY) + 'deg)';
}

const dragEnd = (e) => {
  if ((lastRotateY + (e.pageX - dragOfX) < 720)) {
    if (lastRotateY + (e.pageX - dragOfX) > -720) {
      lastRotateY = lastRotateY + (e.pageX - dragOfX);
    }else {
      lastRotateY = lastRotateY + (e.pageX - dragOfX) + 720;
    }
  }else {
    lastRotateY = lastRotateY + (e.pageX - dragOfX) - 720;
  }
  lastRotateX += (e.pageY - dragOfY);

  console.log(lastRotateY);
  removeEventListener('mousemove', dragMove);
  removeEventListener('mouseup', dragEnd);
}

// faces.forEach(face => {
  cube.addEventListener('mousedown', dragStart);
// });