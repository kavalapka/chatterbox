/**
 * Created by k_zenchyk on 2/26/16.
 */

export default function displayService($http) {
    var baseUrl = 'http://am1.9-project.com:2201/api/message/list?timestamp=';
    //var baseUrl = 'http://fathomless-everglades-3680.herokuapp.com/api/message/list?timestamp=';


    this.getMessages = function(timestamp){
        console.log('get_url:' + baseUrl+timestamp);
        return $http.get(baseUrl+timestamp)
    }
}