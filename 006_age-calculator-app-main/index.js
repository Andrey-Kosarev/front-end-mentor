const today = new Date()
const inputForm = document.querySelector('.date-input-form')
const yearInput = document.querySelector('.input-group input#year');
const monthInput = document.querySelector('.input-group input#month');
const dayInput = document.querySelector('.input-group input#day');

const resultYear = document.querySelector('.age-result-value#year');
const resultMonth = document.querySelector('.age-result-value#month');
const resultDay = document.querySelector('.age-result-value#day');

yearInput.setAttribute('max', today.getFullYear())

function animateResult(el, val){
    const animationDuration = 500;
    const stepDuration = Math.ceil(animationDuration / val) ;

    let initVal = 0;
    if (initVal === val) {
        el.textContent = val;
        return
    }

    let interval = setInterval(function(){
        el.textContent = ++initVal;
        if (initVal ==val) clearInterval(interval)

    }, stepDuration)
}

const calculateAge = function(event){
    event.preventDefault();
    let isValid = true;

    for (let input of event.target.form){
        let inputOK = input.validity.valid;
        
        if(!inputOK) {
            isValid = false;
            input.parentNode.setAttribute('data-error', input.validationMessage);
        }else{
            input.parentNode.setAttribute('data-error', "")
        }
    };
    

    if(!isValid){
        inputForm.classList.add('invalid');
        return
    } 
    
    inputForm.classList.remove('invalid');

    const day = dayInput.value;
    const month = monthInput.value;
    const year = yearInput.value;
    const inputDate = new Date(year, month-1, day);

    console.log(inputDate)

    if(inputDate > today ) {
        inputForm.classList.add('invalid');
        return
    }
    
    let yearDiff  = today.getFullYear() - inputDate.getFullYear()
    let monthDiff = today.getMonth() - inputDate.getMonth();
    let dayDiff   = today.getDate() - inputDate.getDate(); 

    if(monthDiff < 0 || (monthDiff == 0 && dayDiff < 0) ) {
        yearDiff--;
        monthDiff += 12
    }

    if(dayDiff < 0){
        monthDiff--;
        const daysLastMonth =  new Date(today.getFullYear(), today.getMonth(), 0).getDate()
        dayDiff += daysLastMonth;
    }

    
    animateResult(resultYear, yearDiff)
    animateResult(resultMonth, monthDiff)
    animateResult(resultDay, dayDiff)
    
}


const calculateBtn = document.getElementById('btn-calculate-age')
calculateBtn.addEventListener('click', calculateAge)



