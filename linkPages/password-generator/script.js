const symbol = "!@#$%^&*(){}[]+=<>/,.|~`-_?";
//Communicating with the DOM
const notice = document.getElementById("text-inform");
const answerEl = document.getElementById("myInput");
const lengthEl = document.getElementById("length");
const numberEl = document.getElementById("number");
const lowerEl = document.getElementById("lower");
const upperEl = document.getElementById("upper");
const symbolEl = document.getElementById("symbol");
const itemsList = document.querySelectorAll('.form-check-input');
//Random number of password lenght
lengthEl.value = Math.floor(Math.random() * 20) + 16;
answerEl.value = "";

const randomFunc = {
  upper: () => String.fromCharCode(Math.floor(Math.random() * 26) + 65),
  lower: () => String.fromCharCode(Math.floor(Math.random() * 26) + 97),
  number: () => String.fromCharCode(Math.floor(Math.random() * 10) + 48),
  symbol: () => symbol[Math.floor(Math.random() * symbol.length)]
};

//Generate Password Function
function generatePassword(upper, lower, number, symbol, length) {
  let generatedPassword = "";

  const typesArr = [{ upper }, { lower }, { number }, { symbol }]
    .filter(item => Object.values(item)[0])
    .map(item => Object.keys(item)[0]);

  if (typesArr.length === 0) {
    return "";
  }

  for (let i = 0; i < length; i += 1) {
    const funcName = typesArr[Math.floor(Math.random() * typesArr.length)];
    generatedPassword += randomFunc[funcName]();
  }

  return generatedPassword;
}

//generate event
function generateEvent() {
  answerEl.value = generatePassword(
    upperEl.checked,
    lowerEl.checked,
    numberEl.checked,
    symbolEl.checked,
    lengthEl.value
  );
  notice.innerHTML = "Here is your generated password";
}

function myFunction() {
  /* Select the text field */
  answerEl.select();
  answerEl.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  notice.innerHTML = `Copied ${answerEl.value.length} characters ʕ　·ᴥ·ʔ`;
}
