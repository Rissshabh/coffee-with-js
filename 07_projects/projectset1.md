# Projects related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solutin Code

## Project 1 Solution

```
Background color changer

const buttons = document.querySelectorAll('.button')
// console.log(buttons)

const body = document.querySelector("body")

buttons.forEach( (btn) => {
  // console.log(btn)
  btn.addEventListener('click', function(e) {
    console.log(e)
    console.log(e.taget)
    if(e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'white') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'purple') {
      body.style.backgroundColor = e.target.id
    }
  });
} );
```

## Project 2 Solution

```
BMI calculator

const form  = document.querySelector('form')

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter the valid height ${height}`;
  } else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter the valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height)/10000)).toFixed(2)
    
    // show the result
    // results.innerHTML = `<span>${bmi}</span>`
    if(bmi < 18.6) {
      results.innerHTML = `BMI :${bmi}, You are under weight`
    } else if(bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `BMI :${bmi}, You are Normal`
    } else {
      results.innerHTML = `BMI :${bmi}, You are over weight`
    }
  }


})
```

## Project 3 Solution

```
Digital Clock

const clock = document.querySelector("#clock")

setInterval(function(){
  let date = new Date().toLocaleTimeString()
  clock.innerHTML = `${date}`
}, 1000)
```
