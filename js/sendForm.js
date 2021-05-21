const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callback, falseCallBack) => {
    const request = new XMLHttpRequest();
    request.open('POST', server);

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;
        if (request.status === 200 || request.status === 201) {
            const response = JSON.parse(request.responseText)
            callback(response.id);
        } else {
            falseCallBack(request.status);
            throw new Error(request.status);
        }
    });

    request.send(data);
};

const formElems = document.querySelectorAll('.form');

const formHandler = (form) => {
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const data = {};

        for (const { name, value } of form.elements) {
            if (name) {
                data[name] = value;
            }
        }

        const smallElem = document.createElement('small');

        let flag = false;

        for (const item in data) {
        	if (data[item].trim() !== '') {
        		flag = true;
        	}else {
        		flag = false;
        		break;
        	}
        }

        if (flag) {
            sendData(JSON.stringify(data),
                (id) => {
                    smallElem.innerHTML = 'Ваша заявка № ' + id + '! <br>В ближайшее время с вами свяжемся';
                    smallElem.style.color = 'green';
                    form.append(smallElem);
                },
                (error) => {
                    smallElem.textContent = 'К сожалению технические неполадки, поробуйте позже!';
                    smallElem.style.color = 'red';
            		smallElem.remove();
                    form.append(smallElem);
                });
            form.reset();
        } else {
            smallElem.innerHTML = 'Форма не отправлена! Заполните все поля!';
            smallElem.style.color = 'red';
            smallElem.remove();
            form.append(smallElem);
        }

        form.querySelector('.button').disabled = true;

        setInterval(() => {
        	form.querySelector('.button').disabled = false;
            smallElem.remove();
        }, 5000);


    });
}

formElems.forEach(formHandler);




// Как передается форма в функцию когда перебираются formElems