# Projects related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solutin Code

## project 1 

```
javascript 
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