const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");
const MyForm = document.querySelector("#MyForm");
const radius = document.querySelector("#radius");
const volume = document.querySelector("#volume");
const submit = document.querySelector("#submit");

function valyuta(event) {
    event.preventDefault(); 
    if (radius.value > 0){
        let input = radius.value; 
        let natija = 12652.93 * input; 
        sum.value = natija; 
    }else{
        let input1 = volume.value;
        let natija1 = 13779.67 * input1;
        sum.value = natija1;
    }
}
window.onload = function() {
    document.getElementById('MyForm').onsubmit = valyuta;
};

const refreshIcon = document.getElementById('refreshIcon');

function refreshData() {
    radius.value = ''; 
    volume.value = '';
    sum.value = ''; 
}

refreshIcon.addEventListener('click', refreshData);