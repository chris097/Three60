import{UIController} from './UI.js';


/*
  Rules: 
  1. Keep your code dry
*/

export function eventController (UIClass){
    // 3-1. global variables
    let inputClass, inputBtn;
     inputClass = UIClass();
     inputBtn = inputClass.getClass();

    const displayCreateTask = () =>{ 
        setTimeout(() => {
            UIController(inputBtn.createTask, inputBtn.block);  
        }, 200);
        UIController(inputBtn.popUp, inputBtn.block);  
    };

    const removeCreateTask = () =>{
        setTimeout( async() => {
            UIController(inputBtn.createTask, inputBtn.none);  
            UIController(inputBtn.editTask, inputBtn.none);  
            UIController(inputBtn.deleteTask, inputBtn.none); 
            UIController(inputBtn.layer2, inputBtn.none); 
        }, 100);
           UIController(inputBtn.popUp, inputBtn.none);  
    }

    const displayEditTask = () =>{
        setTimeout(() => {
            UIController(inputBtn.editTask, inputBtn.block);  
        }, 100);
        UIController(inputBtn.popUp, inputBtn.block);  
    }

    const displayDeleteTask = () =>{
        setTimeout(() => {
            UIController(inputBtn.deleteTask, inputBtn.block);  
        }, 100);
        UIController(inputBtn.popUp, inputBtn.block);  
    }

    const displayMobileLink = () => {
        UIController(inputBtn.mobileLink, inputBtn.block); 
        UIController(inputBtn.close, inputBtn.block); 
        UIController(inputBtn.open, inputBtn.none); 
    }
    const removeMobileLink = () => {
        UIController(inputBtn.mobileLink, inputBtn.none); 
        UIController(inputBtn.close, inputBtn.none); 
        UIController(inputBtn.open, inputBtn.block); 
    }

    const displayMobileTodoTask = () => {
        UIController(inputBtn.mobileTodoTask, inputBtn.block); 
        UIController(inputBtn.close1, inputBtn.block); 
        UIController(inputBtn.open1, inputBtn.none); 
    }
    const removeMobileTodoTask = () => {
        UIController(inputBtn.mobileTodoTask, inputBtn.none); 
        UIController(inputBtn.close1, inputBtn.none); 
        UIController(inputBtn.open1, inputBtn.block); 
    }


    UIController(inputBtn.btn).addEventListener(inputBtn.click, displayCreateTask);
    UIController(inputBtn.createTaskExit).addEventListener(inputBtn.click, removeCreateTask);
    UIController(inputBtn.cancelCreateTask).addEventListener(inputBtn.click, removeCreateTask);
    UIController(inputBtn.cancelEditTask).addEventListener(inputBtn.click, removeCreateTask);
    UIController(inputBtn.cancelDeleteTask).addEventListener(inputBtn.click, removeCreateTask);
    UIController(inputBtn.deleteTaskExit).addEventListener(inputBtn.click, removeCreateTask);
    UIController(inputBtn.editTaskExit).addEventListener(inputBtn.click, removeCreateTask);
    UIController(inputBtn.editCol).addEventListener(inputBtn.click, displayEditTask);
    UIController(inputBtn.deleteCol).addEventListener(inputBtn.click, displayDeleteTask);
    UIController(inputBtn.closeArror).addEventListener(inputBtn.click, removeCreateTask);
    UIController(inputBtn.mobileXCreateTask).addEventListener(inputBtn.click, displayCreateTask);

    UIController(inputBtn.open1).addEventListener(inputBtn.click, displayMobileTodoTask);
    UIController(inputBtn.close1).addEventListener(inputBtn.click, removeMobileTodoTask);
    UIController(inputBtn.open).addEventListener(inputBtn.click, displayMobileLink);
    UIController(inputBtn.close).addEventListener(inputBtn.click, removeMobileLink);

   }
