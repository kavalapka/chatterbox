/**
 * Created by k_zenchyk on 2/26/16.
 */

import $ from 'jquery';
import moment from 'moment';

export default function displayController($scope, $interval, displayService) {
    var vm = this;

    vm.me = "Olga";
    vm.messages = [];

    var msgElem = document.getElementById('messages');

    function displayMsg() {
        displayService.getMessages().then(prepateToDisplay, errorCallback);
    }
    $interval(displayMsg, 1000, 1);

    function prepateToDisplay(response){
        var arr = (response.data).map(function(msg){
            msg.timestamp  = moment(msg.timestamp).format('HH:mm');
            return msg;
        });
        vm.messages = vm.messages.concat(arr);

        console.log('mess', vm.messages);
        //vm.getMsgTime(vm.messages[0].timestamp)
        setTimeout(function() {msgElem.scrollTop = msgElem.scrollHeight+500;}, 10);
    }

    function errorCallback(response){
        return "Error: " + response.status + " " + response.statusText;
    }

    vm.getMsgTime = function(msg){
        msg.timestamp  = moment(msg.timestamp).format('HH:mm');
        //console.log('time', msgTime);
        return msg;
    }
}
