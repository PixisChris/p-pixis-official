const helper = require('./helper')
console.log(helper.ajax)

document.addEventListener('DOMContentLoaded', function () {
	if (document.body.classList.contains('js-contact-page')) {
		document.querySelector('.js-contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            // console.log(e.target);
            var params = {
                FunctionName : 'sendPost',
                InvocationType : 'RequestResponse',
                LogType : 'None',
                Payload: JSON.stringify( $('.js-contact-form').serializeArray() ),
            };
            invokeLambda(params);
        })

        AWS.config.update({region: 'us-east-1'});
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:6c3d3a58-8ae6-4e33-83b0-45486af75258'});
        
        // Prepare to call Lambda function
        var lambda = new AWS.Lambda({region: 'ap-northeast-2', apiVersion: '2015-03-31'});
	}

	function invokeLambda(params) {
        // Call the Lambda function to collect the spin results
        lambda.invoke(params, function(err, data) {
            if (err) {
                alert('很抱歉，為了帶給您最好的服務，我們正在努力更新系統中，請稍後再試。')
            } else {
                pullResults = JSON.parse(data.Payload);
                location.href = 'contact-success.html';
                console.log('lambda success');
            }
        });
    }
})