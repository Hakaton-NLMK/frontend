import React from 'react'
import logo from './logo.svg'
import style from './hero.module.css'
let e=''
function render(){
  document.getElementById('con')?document.getElementById('con').remove():console.log('aaa')
  let value=document.getElementById('btn').value
  console.log(typeof(value))
  fetch('http://84.201.147.205:8000/api/v1/generate-component', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      description:value
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Здесь вы получаете JSON ответ
    })
    .then(data => {
      console.log('Response data:', data); 
      
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      e=e+'There was a problem with the fetch operation:'
      const hero=document.getElementById('hero')
      let container=document.createElement('div')
      container.className='error'
      container.id='con'
      container.innerText=e+error
      hero.appendChild(container)      
    });
    document.getElementById('btn').value=''
}
function Hero() {
  return (
    <div id= 'hero' className={style.hero}>
        <img src={logo} className={style.logo} alt="logo" />
        <input id='btn' className={style.input} type="text" placeholder='Введите код компонента / Write code component' />
        <button  onClick={render} className={style.btn}>Render</button>

    </div>
  )
}

export default Hero