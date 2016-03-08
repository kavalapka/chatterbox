/**
 * Created by k_zenchyk on 2/26/16.
 */

import qs from 'qs';

export default function sendService($http) {
    var baseUrl = 'http://localhost:3001/api/message/send?';
    //var baseUrl = 'http://fathomless-everglades-3680.herokuapp.com/api/message/send?';
           // '/api/message/send?timestamp=1456651674675&msg=Hi%20all&user=Vasya'
    this.sendMessage = function(partUrlDict){
        var partUrl = qs.stringify(partUrlDict, { indices: false });
        console.log("URL", baseUrl+partUrl);
        return $http.post(baseUrl+partUrl, partUrlDict);
    }
}