function check() {
    let name = document.getElementById('name').value;
    let sex = document.getElementById('sex').value;
    let tel = document.getElementById('tel').value;
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;
    if (checkname(name) && checktel(tel) && checkpass1(pass1) && checkpass2(pass1, pass2)) {
        alert('修改成功');
    } else
        alert('格式错误');
}

function checkname(name) {
    return name.length <= 12;
}

function checktel(tel) {
    let re = /^1([38][0-9]|4[579]|5[^4]|6[6]|7[0135678]|9[89])\d{8}$/;
    return re.test(tel);
}

function checkpass1(pass) {
    let re = /^(?=.*[0-9].*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=(^[^#&\*\?@]*[#&\*\?@][^#&\*\?@]*$)).{9,15}$/;
    return re.test(pass);
}

function checkpass2(pass1, pass2) {
    return pass1 === pass2;
}

function inputNumber() {
    document.getElementById('tel').value = document.getElementById('tel').value.replace(/[^\d]/g, '');
}

function erroricon() {
    let icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', "0 0 1024 1024");
    icon.setAttribute('class', 'icon');
    let path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', "M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z");
    path2.setAttribute('d', "M512 279.272727c25.6 0 46.545455 20.945455 46.545455 46.545455v256c0 25.6-20.945455 46.545455-46.545455 46.545454s-46.545455-20.945455-46.545455-46.545454V325.818182c0-25.6 20.945455-46.545455 46.545455-46.545455z");
    path3.setAttribute('d', "M512 768m-46.545455 0a46.545455 46.545455 0 1 0 93.09091 0 46.545455 46.545455 0 1 0-93.09091 0Z");
    path1.setAttribute('fill', "#E81616");
    path2.setAttribute('fill', "#FFFFFF");
    path3.setAttribute('fill', "#FFFFFF");
    icon.appendChild(path1);
    icon.appendChild(path2);
    icon.appendChild(path3);
    return icon;
}

function correcticon() {
    let icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', "0 0 1024 1024");
    icon.setAttribute('class', 'icon');
    let path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', "M512 76.8c-236.8 0-435.2 192-435.2 435.2s192 435.2 435.2 435.2 435.2-192 435.2-435.2S748.8 76.8 512 76.8z m249.6 320L480 704c-12.8 12.8-38.4 12.8-51.2 0L288 556.8c-12.8-12.8-12.8-38.4 0-51.2 12.8-12.8 38.4-12.8 51.2 0l115.2 115.2L704 339.2c12.8-12.8 38.4-12.8 51.2 0 25.6 12.8 25.6 38.4 6.4 57.6z");
    path2.setAttribute('d', "M710.4 339.2l-256 281.6-115.2-115.2c-12.8-12.8-38.4-12.8-51.2 0-12.8 12.8-12.8 38.4 0 51.2l147.2 140.8c12.8 12.8 38.4 12.8 51.2 0L768 390.4c12.8-12.8 12.8-38.4 0-51.2-19.2-12.8-44.8-12.8-57.6 0z");
    path1.setAttribute('fill', "#68D279");
    path2.setAttribute('fill', "#FFFFFF");
    icon.appendChild(path1);
    icon.appendChild(path2);
    return icon;
}

function iconchoose(tag) {
    document.getElementById(tag).parentElement.removeChild(document.getElementById(tag).nextElementSibling);
    let value = document.getElementById(tag).value;
    let func = "check" + tag + '(\'' + value + '\')';
    if (eval(func)) {
        document.getElementById(tag).parentElement.insertBefore(correcticon(), document.getElementById(tag).nextElementSibling);
    } else
        document.getElementById(tag).parentElement.insertBefore(erroricon(), document.getElementById(tag).nextElementSibling);
}

function iconchoose2(tag1, tag2) {
    document.getElementById(tag2).parentElement.removeChild(document.getElementById(tag2).nextElementSibling);
    if (checkpass2(document.getElementById(tag1).value, document.getElementById(tag2).value)) {
        document.getElementById(tag2).parentElement.insertBefore(correcticon(), document.getElementById(tag2).nextElementSibling);
    } else
        document.getElementById(tag2).parentElement.insertBefore(erroricon(), document.getElementById(tag2).nextElementSibling);
}

window.onload = function () {
    document.getElementById('btn').onclick = check;
    document.getElementById('tel').oninput = inputNumber;
    document.getElementById('tel').onchange = function () {
        iconchoose('tel');
    };
    document.getElementById('name').onchange = function () {
        iconchoose('name');
    };
    document.getElementById('pass1').onchange = function () {
        iconchoose('pass1');
        if (document.getElementById('pass2').value)
            iconchoose2('pass1', 'pass2');
    };
    document.getElementById('pass2').onchange = function () {
        iconchoose2('pass1', 'pass2');
    };
    document.getElementById('sex').onchange = function () {
        if (document.getElementById('sex').value === '男') {
            document.getElementById('sex').className = "sex";
            document.getElementById('sex').previousElementSibling.className = "icon ion-male pst1";
        } else {
            document.getElementById('sex').className = "sex pst5";
            document.getElementById('sex').previousElementSibling.className = "icon ion-female pst4";
        }

    }
}