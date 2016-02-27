import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import sendController from './sendBox/sendBox.controller.js';
import displayController from './displayBox/displayBox.controller.js';
import display_style from './displayBox/display.style.css';


angular.module('app', [])
    .controller('sendController', sendController)
    .controller('displayController', displayController)
;


