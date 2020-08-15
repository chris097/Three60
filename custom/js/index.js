/*
  Rules: 
  1. Keep your code dry
*/

// 1. UIController gonna be our helper
    function UIController(className, value){
        let UI = document.querySelector(className);
        if(value){
          UI.style.display = value;
        }
        return UI;
     };

 // 2. store classes && values in our object
 function createUIClass(){
     return {
       getClass : function(){
         return{
            cards: '.card-1',
            layer2: '.layer-2',
            block: 'block',
            none: 'none',
            click: 'click',
            btn: ".btn",
            open: '.open-menu',
            close: '.close-menu',
            open1: '.open-menu-1',
            close1: '.close-menu-1',
            editCol: '.edit-col',
            deleteCol: '.delete-col',
            createTask: '.create-task',
            deleteTask: '.delete-task',
            cancelDeleteTask: '.delete-btn .btn-3',
            deleteTaskExit: '.delete-task_exit',
            popUp: '.pop-up',
            editTask: '.edit-task',
            createTaskExit: '.create-task_exit',
            cancelCreateTask: '.create-task_btn .btn-0',
            cancelEditTask: '.edit-task_btn .btn-0',
            editTaskExit: '.edit-task_exit',
            mobileTodoTask: '.mobile-todo-task',
            mobileLink: '.mobile-link'
         }
       }
     }
  };

   function eventController (UIClass){
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

    UIController(inputBtn.open1).addEventListener(inputBtn.click, displayMobileTodoTask);
    UIController(inputBtn.close1).addEventListener(inputBtn.click, removeMobileTodoTask);
    UIController(inputBtn.open).addEventListener(inputBtn.click, displayMobileLink);
    UIController(inputBtn.close).addEventListener(inputBtn.click, removeMobileLink);

   }
eventController(createUIClass)





