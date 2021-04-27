document.addEventListener('DOMContentLoaded', function () {
    console.log('helper.js is loaded.')
})

export function ajax(method, url, data, successCallback, failCallback) {
    var request = new XMLHttpRequest();
    request.open(method, url, true);
    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            // console.log('Success');
            successCallback(this.response);
        } else {
            // We reached our target server, but it returned an error
            // console.log('Error');
            if (failCallback) {
                failCallback();
            }
        }
    };

    request.onerror = function() {
        // There was a connection error of some sort
        if (failCallback) {
            failCallback();
        }
        // console.log('onerror');
    };

    request.send(data);
}