/*
 * Created At: 2020/12/31
 * Last Update: 2021/01/02
 * Created by: Arimário Jesus
 * LinkedIn: https://www.linkedin.com/in/arimario-jesus
 * GitHub: https://github.com/arimariojesus
*/

const cube = document.querySelector('.cube');
const shadow = document.querySelector('.shadow');
let dragOfX = 0, dragOfY = 0;
let lastRotateX = 0, lastRotateY = 0;

/* Gets initial coordinate of mouse and assignin 'mousemove' and 'mouseup' events */
const dragStart = (e) => {
  dragOfX = e.pageX;
  dragOfY = e.pageY;

  addEventListener('mousemove', dragMove);
  addEventListener('mouseup', dragEnd);
}

/* Handle mouse move and movement of element */
const dragMove = (e) => {
  let coordX = (e.pageX - dragOfX);
  let coordY = (e.pageY - dragOfY);
  cube.style.transform = 'rotateY(' + (lastRotateY + coordX) + 'deg)' + ' rotateX(' + (lastRotateX - coordY) + 'deg)';
  shadow.style.transform = 'rotateX(90deg) translateZ(-200px) rotateZ(' + (lastRotateY - coordX) + 'deg)';
}

/* Gets last coordinate of mouse and ends events */
const dragEnd = (e) => {
  lastRotateY += (e.pageX - dragOfX);
  lastRotateX -= (e.pageY - dragOfY);
  
  removeEventListener('mousemove', dragMove);
  removeEventListener('mouseup', dragEnd);
}

/* Assigns the event to the element */
cube.addEventListener('mousedown', dragStart);