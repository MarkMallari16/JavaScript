const patterns = {
    username: /^[a-z\d]{6,12}$/i,
    email: /^([a-z\d\.-])+@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,12}$/,
    number: /^\d{11}$/
};

function validate(field, regex) {
    const fieldName = field.name;
    const invalidMessage = document.querySelector(`.invalid-message.${fieldName}-error`);
    const formHeight = document.querySelector('form');
    const inputs = document.querySelectorAll('input');
    const submitBtn = document.querySelector('button[type="submit"]');

    let allFieldsValue = true;
    submitBtn.classList.add('disabled-btn');

    inputs.forEach(input => {
        if (!patterns[input.getAttribute('name')].test(input.value)) {
            allFieldsValue = false;
        }
    });

    if (regex.test(field.value)) {
        field.className = 'valid';
        invalidMessage.style.display = 'none';
    } else {
        field.className = 'invalid';
        invalidMessage.style.display = 'block';
        invalidMessage.classList.add('invalid-message');
        formHeight.classList.add('form-invalid-height');
        allFieldsValue = false;
    }

    if (allFieldsValue) {
        submitBtn.disabled = false;
        submitBtn.classList.add('enabled-btn');
        submitBtn.classList.remove('disabled-btn');
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.add('disabled-btn');
        submitBtn.classList.remove('enabled-btn');
    }
}
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.getAttribute('name')]);
    });
});
