import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import sendController from './sendBox/sendBox.controller.js';
import sendService from './sendBox/sendBox.service.js';
import displayController from './displayBox/displayBox.controller.js';
import displayService from './displayBox/displayBox.service.js';
import display_style from './displayBox/display.style.css';


angular.module('appChat', [])
    .controller('sendController', ['$scope', 'sendService', sendController])
    .service('sendService', ['$http', sendService])
    .controller('displayController', ['$scope', '$interval', 'displayService', displayController])
    .service('displayService', ['$http', displayService])
;


