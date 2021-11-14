/* 
Page in development, looking for ideas and learning 
*/
const fadeInWelcomePartOne = document.querySelector('.welcome-one');
const fadeInWelcomePartTwo = document.querySelector('.welcome-two') ;
const typedTextWrapper = document.querySelector('.wrapper');

/* floating welcome text*/

window.onload = () => {
  fadeInWelcomePartOne.classList.add('fade-in');
  fadeInWelcomePartTwo.classList.add('fade-in');
  typedTextWrapper.classList.add('fade-in');
};