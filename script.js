const message = document.getElementById("message");
const button = document.getElementById("change-button");

button.addEventListener("click", function () {
   if (message.textContent === "名前はモナです") { 
    message.textContent = "モナだよ";
   } else {
    message.textContent = "名前はモナです";
   }
});

const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("name-button");
const nameResult = document.getElementById("name-result");

nameButton.addEventListener("click", function (){
    if (nameInput.value === "") {
        nameResult.textContent = "名前を入力してください";
    } else {
    nameResult.textContent = 
      "こんにちは、" + nameInput.value + "さん！";
   }
});
