import{UIController} from './UI.js';

export function eventController (UIClass){
    // 3-1. global variables
    let inputClass, inputBtn;
     inputClass = UIClass();
     inputBtn = inputClass.getClass();

    const displayLinks = () =>{ 
        UIController(inputBtn.mobileLink1, inputBtn.block);  
        UIController(inputBtn.close2, inputBtn.block);  
        UIController(inputBtn.open2, inputBtn.none);  
    };

    const removeLinks = () =>{ 
        UIController(inputBtn.mobileLink1, inputBtn.none);  
        UIController(inputBtn.open2, inputBtn.block);  
        UIController(inputBtn.close2, inputBtn.none);  
    };

    const displayAddLink = () => {
        UIController(inputBtn.addLinkContainer, inputBtn.block); 
        UIController(inputBtn.popUp, inputBtn.block)
        UIController(inputBtn.folderLinkContainer, inputBtn.none);
    }

    const removeAddLink = () => {
        UIController(inputBtn.addLinkContainer, inputBtn.none); 
        UIController(inputBtn.popUp, inputBtn.none)
        UIController(inputBtn.folderLinkContainer, inputBtn.none);
    }
    const folderLink = () => {
        UIController(inputBtn.folderLinkContainer, inputBtn.block); 
        UIController(inputBtn.popUp, inputBtn.block)
    }
    const removeDeleteTask = () => {
        UIController(inputBtn.deleteTask, inputBtn.none); 
        UIController(inputBtn.popUp, inputBtn.none)
    }

    UIController(inputBtn.open2).addEventListener(inputBtn.click, displayLinks);
    UIController(inputBtn.close2).addEventListener(inputBtn.click, removeLinks);
    UIController(inputBtn.newBtn).addEventListener(inputBtn.click, displayAddLink);
    UIController(inputBtn.createTaskExit).addEventListener(inputBtn.click, removeAddLink);
    UIController(inputBtn.btnFolder).addEventListener(inputBtn.click, folderLink);
    UIController(inputBtn.deleteTaskExit).addEventListener(inputBtn.click, removeDeleteTask);
}
