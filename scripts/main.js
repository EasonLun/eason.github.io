// 1.切换网页图片
let myImage = document.querySelector('img');

myImage.onclick = function (){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/myimage.jpeg'){
        myImage.setAttribute('src', 'images/flask_icon.png');
    } else {
        myImage.setAttribute('src', 'images/myimage.jpeg');
    }
}

// 2.切换显示欢迎信息
// 2.1 获取页面按钮和新标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 2.2 设置切换用户名函数
function setUserName(){
    let myName = prompt('请输入你的名字：');
    if (!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool,' + myName;
    }
}

// 2.3 访问页面时，判断localStorage是否已存储name
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool,' + storeName;
}

// 2.4 为按钮设置onclick处理器
myButton.onclick = function (){
    setUserName();
}



