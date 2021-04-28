const helper = require('./helper')
console.log(helper.ajax)

document.addEventListener('DOMContentLoaded', function () {
	if (document.body.classList.contains('white-paper-page')) {
		document.querySelector('form').addEventListener('submit', function(e) {
		    e.preventDefault()
		    helper.ajax(e.target.getAttribute('method'), e.target.getAttribute('action'), new URLSearchParams(new FormData(e.target)).toString(), function(resp) {
		        console.log(resp)
		    }, function(resp) {
		        console.log('fail')
		    })
		})
	}
})