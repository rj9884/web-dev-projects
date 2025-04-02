let display = document.querySelector("#input-box");
let buttons = document.querySelectorAll("button");
let string = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.innerText === "DEL") {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
        else if (button.innerText === "AC") {
            string = "";
            display.value = string;
        }
        else if (button.innerText === "=") {
            string = eval(string);
            display.value = string;
        }
        else {
            string += button.innerText;
            display.value = string;
        }
    });
});