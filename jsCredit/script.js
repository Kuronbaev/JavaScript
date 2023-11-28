const cardNumber = document.querySelector("#card-number");
const cardHolder = document.querySelector("#name-text");
const cardExpiration = document.querySelector("#valid-thru-text");
const cardCVV = document.querySelector("#cvv-text");
const cards = document.querySelector("#cards");
const addCards = document.querySelector(".btns");

function addDash(input) {
  let format = /[^0-9]/g;
  let cardNumber = input.value.replace(format, "");
  if (cardNumber.length > 0) {
    cardNumber = cardNumber.match(new RegExp(".{1,4}", "g")).join(" ");
  }
  input.value = cardNumber;
}

function addDate(input) {
  let format = /[^0-9]/g;
  let cardNumber = input.value.replace(format, "");
  if (cardNumber.length > 0) {
    cardNumber = cardNumber.match(new RegExp(".{1,2}", "g")).join("/");
  }
  input.value = cardNumber;
}

const select = document.getElementById("card-type");

function addCard() {
  const cardHolderText = cardHolder.value.trim();
  const cardNumberText = cardNumber.value.trim();
  const cardExpirationText = cardExpiration.value.trim();
  const cardCVVText = cardCVV.value.trim();
  if (select.value === "visa") {
    if (
      cardNumberText !== "" &&
      cardNumberText.length > 17 &&
      cardNumberText.length > 15 &&
      cardHolderText !== "" &&
      cardExpirationText !== "" &&
      cardCVVText !== "" &&
      cardCVVText.length < 4
    ) {
      const cardsContainer = document.getElementById("cards");

      cardsContainer.innerHTML += `
         <div class="card-visa card" id="card">
            <div class="card-img">
               <img src="img/visa.svg" alt="" />
            </div>
            <h4 style="margin-bottom:19px" class="text-h4">${cardNumberText}</h4>
            <div class="card-flex">
               <div className="column">
                  <h3>Name</h3>
                  <h4>${cardHolderText}</h4>
               </div>
               <div className="column">
                  <h3>Valid Till</h3>
                  <h4>${cardExpirationText}</h4>
               </div>
               <div className="column">
                  <h3>CCV</h3>
                  <h4>${cardCVVText}</h4>
               </div>
            </div>
         </div>
         `;
      cardNumber.value = "";
      cardHolder.value = "";
      cardExpiration.value = "";
      cardCVV.value = "";
    }
  } else if (select.value === "optima") {
    const cardsContainer = document.getElementById("cards");

    cardsContainer.innerHTML += `
         <div class="card-optima card" id="card">
            <div class="card-img">
               <img src="img/optima.svg" alt="" />
            </div>
            <h4 class="text-h4">${cardNumberText}</h4>
            <div class="card-flex">
               <div className="column">
                  <h3>Name</h3>
                  <h4>${cardHolderText}</h4>
               </div>
               <div className="column">
                  <h3>Valid Till</h3>
                  <h4>${cardExpirationText}</h4>
               </div>
               <div className="column">
                  <h3>CCV</h3>
                  <h4>${cardCVVText}</h4>
               </div>
            </div>
         </div>
         `;
    cardNumber.value = "";
    cardHolder.value = "";
    cardExpiration.value = "";
    cardCVV.value = "";
  } else {
    cardNumber.style.borderBottom = "2px solid red";
    cardHolder.style.borderBottom = "2px solid red";
    cardExpiration.style.borderBottom = "2px solid red";
    cardCVV.style.borderBottom = "2px solid red";
  }
}

cardCVV.addEventListener("keydown", (e) => {
  if (e.code === "Enter" || e.keyCode === 13) {
    addCard();
  }
});
cardHolder.addEventListener("keydown", (e) => {
  if (e.code === "Enter" || e.keyCode === 13) {
    addCard();
  }
});

cardNumber.addEventListener("keydown", (e) => {
  if (e.code === "Enter" || e.keyCode === 13) {
    addCard();
  }
});

addCards.addEventListener("click", addCard);
