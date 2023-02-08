let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hg.jpg') {
        myImage.setAttribute('src', 'images/dog.jpg');
    } else {
        myImage.setAttribute('src' , 'images/hg.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '你颜值很高，' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = '你颜值很高，' + storeName;
}

myButton.onclick = function() {
    setUserName();
}
