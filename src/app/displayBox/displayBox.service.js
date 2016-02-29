/**
 * Created by k_zenchyk on 2/26/16.
 */

export default function displayService($http) {
    var baseUrl = 'http://localhost:3000/db';

    this.getMessages = function(){
        return $http.get(baseUrl)
    }
}