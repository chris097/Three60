import {createUIClass} from './classes.js';
import {eventController} from './events.js';
import {dropDown} from './UI.js';

//UI classes
let layer =  document.querySelector('.layer-2'),
    cards = document.querySelectorAll('.class-note')

// call function
dropDown(cards, layer, 'block')

eventController(createUIClass)


   





