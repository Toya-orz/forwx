// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// document.querySelector('html').addEventListener('click',function(){alert("凤凰传奇是坠棒的！")
// })

const myImage = document.querySelector("img");//在myImage中存储了对<img>元素的引用

myImage.onclick = () => {//将其onclick事件处理程序属性设置为匿名函数）
  const mySrc = myImage.getAttribute("src");//检索图像的src属性的值
  if (mySrc === "images/prince_fox1.png") {
    myImage.setAttribute("src", "images/yierbubu3.jpg");
  } else {
    myImage.setAttribute("src", "images/prince_fox1.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt('Please enter your name.');
    if (!myName){
        setUserName();
    }else{
    localStorage.setItem('name',myName);//代码调用 API localStorage ，在浏览器中存储数据并稍后检索它
    myHeading.textContent = `Nice to meet you,${myName}`;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Have a good day,${storedName}`
}

myButton.onclick = () =>{
    setUserName()
}