/**
 * Created by k_zenchyk on 2/26/16.
 */

import $ from 'jquery';
import moment from 'moment';

export default function displayController($scope, $interval, displayService) {
    var vm = this;

    ///api/message/list?timestamp=1456651674675

    vm.me = "Olga";
    vm.messages = [];
    var lastTS = '';

    var msgElem = document.getElementById('messages');

    function displayMsg() {
        displayService.getMessages(lastTS).then(prepareToDisplay, errorCallback);
    }
    $interval(displayMsg, 1000, 3);

    function prepareToDisplay(response){
        var respData = response.data;
        lastTS = respData[respData.length-1].timestamp;

        var arr = respData.map(function(msg){
            msg.timestamp  = moment(msg.timestamp).format('HH:mm');
            return msg;
        });
        vm.messages = vm.messages.concat(arr);

        console.log('mess', vm.messages);
        setTimeout(function() {msgElem.scrollTop = msgElem.scrollHeight+500;}, 10);
    }

    function errorCallback(response){
        //lastTS = new Date().getTime();
        return "Error: " + response.status + " " + response.statusText;
    }

}
