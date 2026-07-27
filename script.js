// Store the current expression as a string
let expression = "";

// Add a character to the expression
function addToExpr(value) {
  expression += value;
  document.getElementById("result").innerText = expression;
  document.getElementById("expression").innerText = "";
}

// Clear everything
function clearAll() {
  expression = "";
  document.getElementById("result").innerText = "0";
  document.getElementById("expression").innerText = "";
}

// Delete the last character
function deleteLast() {
  expression = expression.slice(0, -1);

  if (expression === "") {
    document.getElementById("result").innerText = "0";
  } else {
    document.getElementById("result").innerText = expression;
  }
}

// Calculate the result
function calculate() {
  if (expression === "") return;

  try {
    // Show the expression above and result below
    let answer = eval(expression);

    // Handle floating point mess like 0.1 + 0.2 = 0.30000000000000004
    answer = parseFloat(answer.toFixed(10));

    document.getElementById("expression").innerText = expression + " =";
    document.getElementById("result").innerText = answer;

    // Set the result as the new expression so you can keep calculating
    expression = String(answer);

  } catch (error) {
    document.getElementById("result").innerText = "Error";
    expression = "";
  }
}

// Keyboard support
document.addEventListener("keydown", function (e) {
  if (e.key >= "0" && e.key <= "9") addToExpr(e.key);
  if (e.key === "+") addToExpr("+");
  if (e.key === "-") addToExpr("-");
  if (e.key === "*") addToExpr("*");
  if (e.key === "/") { e.preventDefault(); addToExpr("/"); }
  if (e.key === ".") addToExpr(".");
  if (e.key === "%") addToExpr("%");
  if (e.key === "Enter" || e.key === "=") calculate();
  if (e.key === "Backspace") deleteLast();
  if (e.key === "Escape") clearAll();
});
