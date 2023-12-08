const diceBtn = document.querySelector('.dice-randomiser');
const adviceGen = document.querySelector('.advice-info');
const adviceNum = document.querySelector('.advice-id')

diceBtn.addEventListener('click', () => {
    getAdvice();
})

window.onload = () => {
    getAdvice();
};

function getAdvice() {

    fetch(' https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const Adviceobj = adviceData.slip;
        adviceNum.textContent = `Advice #${Adviceobj.id}`;
        adviceGen.textContent = `"${Adviceobj.advice}"`
    }).catch(error => {
        console.log(error);
    });

}
