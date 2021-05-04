const helper = require('./helper')
console.log(helper.ajax)

document.addEventListener('DOMContentLoaded', function () {
	if (document.body.classList.contains('js-white-paper-page')) {
		document.querySelector('.js-download-form').addEventListener('submit', function(e) {
			// 如果要直接串接自有後端 api START
			// e.preventDefault()
		 //    helper.ajax(e.target.getAttribute('method'), e.target.getAttribute('action'), new URLSearchParams(new FormData(e.target)).toString(), function(resp) {
		 //        console.log(resp)
		 //    }, function(resp) {
		 //        console.log('fail')
		 //    })
		 // 如果要直接串接自有後端 api END

            e.preventDefault();
            // console.log(e.target);
            var params = {
                FunctionName : 'sendPost',
                InvocationType : 'RequestResponse',
                LogType : 'None',
                Payload: JSON.stringify( $('.js-download-form').serializeArray() ),
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
                location.href = 'white-paper-success.html';
                console.log('lambda success');
            }
        });
    }
})