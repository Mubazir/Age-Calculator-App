//Output-Element//
const Output_year = document.querySelector('.out-year');
const Output_month = document.querySelector('.out-month'); 
const Output_day = document.querySelector('.out-day');
const submit_btn = document.querySelector('.submit-btn');

//input-element//
let isvalid= false;
const input_year = document.querySelector('#year');
const input_month = document.querySelector('#month'); 
const input_day = document.querySelector('#day');

//error-element//

const error_year = document.querySelector('.error-year');
const error_month = document.querySelector('.error-month'); 
const error_day = document.querySelector('.error-day');

submit_btn.addEventListener('click', CalculateDate);
input_day.addEventListener('input', (e) => {
    if (+input_day.value > 31) {
        isvalid = false;
        error_day.textContent="Must be a valid value"
        return;
    } else {
        isvalid = true;
        error_day.textContent="";
    }
    if (+input_day.value===0) {
        isvalid = false;
        error_day.textContent="The Field is required"
        return;
    } else {
        isvalid = true;
        error_day.textContent="" ;
        
    }
} )




input_month.addEventListener('input', (e) => {
    if (+input_month.value > 12) {
        isvalid = false;
        error_month.textContent="Must be a valid value"
        return;
    } else {
        isvalid = true;
        error_month.textContent="";
    }
    if (+input_month.value===0) {
        isvalid = false;
        error_month.textContent="The Field is required"
        return;
    } else {
        isvalid = true;
        error_month.textContent="" ;
        
    }
} )




input_year.addEventListener('input', (e) => {
    if (+input_year.value > 2023) {
        isvalid = false;
        error_year.textContent="Must be a valid value"
        return;
    } else {
        isvalid = true;
        error_year.textContent="";
    }
    if (+input_year.value===0) {
        isvalid = false;
        error_year.textContent="The Field is required"
        return;
    } else {
        isvalid = true;
        error_year.textContent="" ;
        
    }
} )

function CalculateDate() {
    if (isvalid) {
        let birthday = `${input_month}/ ${input_day.value}/ ${input_year.value} ` ;
        console.log(birthday)
        let birthdayObj = new Date(birthday);
        let agediffMill = Date.now() - birthdayObj;
        let ageDate = new Date(agediffMill);
        let ageyears = ageDate.getUTCFullYear - 1970;
        let agemonth = ageDate.getUTCMonth;
        let ageday = ageDate.getUTCDay - 1;

        Output_day.textContent = ageday;
        Output_Month.textContent = agemonth;
        Output_year.textContent = ageyears;

    } else {
        alert ('error');
    }
}