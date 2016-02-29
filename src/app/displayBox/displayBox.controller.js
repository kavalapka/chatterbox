/**
 * Created by k_zenchyk on 2/26/16.
 */

import $ from 'jquery';

export default function displayController($scope, $interval, displayService) {
    var vm = this;

    vm.me = "Olga";
    vm.messages = [];

    var msgElem = document.getElementById('messages');

    function displayMsg() {
        displayService.getMessages().then(prepateToDisplay, errorCallback);
    }
    $interval(displayMsg, 4000, 10);

    function prepateToDisplay(response){
        vm.messages = vm.messages.concat(response.data);
        console.log('mess', vm.messages);
        setTimeout(function() {msgElem.scrollTop = msgElem.scrollHeight+500;}, 10);
    }

    function errorCallback(response){
        return "Error: " + response.status + " " + response.statusText;
    }
}
