var verifiedToast = new bootstrap.Toast(document.querySelector('.verified'));
var notVerifiedToast = new bootstrap.Toast(document.querySelector('.not-verified'));

var myBtn = document.getElementById('myBtn');
myBtn.addEventListener('click', function (event) {
    event.preventDefault();

    var myCheckBox = document.getElementById('myCheckBox');
    if (myCheckBox.checked) {
        verifiedToast.show();
    } else {
        notVerifiedToast.show();
    }
});