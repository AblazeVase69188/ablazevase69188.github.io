const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/25w43a.png") {
    myImage.setAttribute("src", "images/Java_Edition_25w43a_Simplified.png");
  } else {
    myImage.setAttribute("src", "images/25w43a.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `25w43a发布了，${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `25w43a发布了，${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};
