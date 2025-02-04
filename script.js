const inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN") {
      inputValue.innerText = "";
    }
    if (inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const lastChar = inputValue.innerText.charAt(inputValue.innerText.length - 1);

    if (e.target.innerHTML === "=") {
      try {
        inputValue.innerText = eval(inputValue.innerText);
      } catch (err) {
        inputValue.innerText = "NaN";
      }
    } else if (e.target.innerHTML === "AC") {
      inputValue.innerText = 0;
    } else if (e.target.innerHTML === "DEL") {
      inputValue.innerText = inputValue.innerText.slice(0, -1);
      if (inputValue.innerText.length === 0) {
        inputValue.innerText = 0;
      }
    } else {
      if (lastChar !== "+" && lastChar !== "-" && lastChar !== "*" && lastChar !== "/") {
        inputValue.innerText += e.target.innerHTML;
      }
    }
  });
});
