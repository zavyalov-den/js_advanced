const handleSend = () => {
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const mail = document.getElementById('mail').value

    console.log(validateName(name), validatePhone(phone), validateMail(mail))

    if (validateName(name) && validatePhone(phone) && validateMail(mail)) {
        const el = document.querySelector('#errorMsg')
        if (el) {
            el.classList = 'hidden'
        }
        console.log('good job')
    } else {
        if (!document.querySelector('#errorMsg')) {
            const el = document.querySelector('.section.feedback')
            const err = document.createElement('div')
            err.id = 'errorMsg'
            err.innerHTML = `
            <h1>Ошибка!</h1>
            <p>Данные введены неверно, проверьте правильность ввода и повторите попытку</p>
        `
            el.appendChild(err)
        } else {
            const el = document.querySelector('#errorMsg')
            el.classList = ''
        }
    }

}

const validateName = (val) => {
    const re = /^([A-Z]?[a-z]+|[А-Я]?[а-я]+)$/
    return re.test(val)
}

const validatePhone = (val) => {
    const re = /^\+[0-9]\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/
    return re.test(val)
}

const validateMail = (val) => {
    // Снова смотрим в условие. Правильная почта всегда на mail.ru))
    const re = /^[a-z]+[\.\-]?[a-z]+(@mail\.ru)$/
    return re.test(val)
}