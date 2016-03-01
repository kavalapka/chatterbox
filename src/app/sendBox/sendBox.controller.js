/**
 * Created by k_zenchyk on 2/26/16.
 */
import sendService from './sendBox.service.js';

export default function sendController($scope, sendService) {
    var vm = this;
    // '/api/message/send?timestamp=1456651674675&msg=Hi%20all&user=Vasya'

    var params = {
        timestamp: '',
        msg: '',
        user: 'Vasya'
    };
    vm.msg = '';

    vm.transmitMessage = function(message){
        params.timestamp = new Date().getTime();
        params.msg = message;
        console.log('obj_to_send:', params);
        sendService.sendMessage(params).then(successCallback, errorCallback);

        vm.msg = '';
    };

    function successCallback(response){
        return "Success: " + response.status;
    }
    function errorCallback(response){
        return "Error: " + response.status + " " + response.statusText;
    }

}
