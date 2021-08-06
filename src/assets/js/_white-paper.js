document.addEventListener('DOMContentLoaded', function () {
    if (document.body.classList.contains('js-white-paper-page')) {
        document.querySelector('.js-download-form').addEventListener('submit', function(e) {
            e.preventDefault();
            // console.log(e.target);
            // TODO 取得表單資料： JSON.stringify( $('.js-contact-form').serializeArray() )
            invokeApi();
        })
    }

    function invokeApi() {
        // TODO 請在此串接 DB
        if (localStorage.getItem('pixis_lang') === 'tw') {
            alert('很抱歉，為了帶給您最好的服務，我們正在努力更新系統中，請稍後再試。')
        } else {
            alert('Sorry, in order to bring you the best service, we are working hard to update the system, please try again later.')
        }
        // // TODO if success
        // location.href = 'contact-success.html';
    }
})