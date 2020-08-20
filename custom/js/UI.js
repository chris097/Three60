export const dropDown = (a, c, d) => {
    a.forEach((b) => {
        b.addEventListener('click', () => {
            c.style.display=d;
        })
    })
}

// 1. UIController gonna be our helper
export function UIController(className, value){
    let UI = document.querySelector(className);
    if(value){
      UI.style.display = value;
    }
    return UI;
 };





// console.log(checked)

