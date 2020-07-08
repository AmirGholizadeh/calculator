(function(){
  "use strict";
  // elements
  const result = document.getElementById('result');
  const inputs = ['in1', 'in2'];
  const operations = ['lb1'];
  const elements = ['in1','lb1','in2'];

  const checkAndChange = text => {
    if(text === '+') return '-';
    if(text === '-') return '*';
    if(text === '*') return '/';
    if(text === '/') return '+';
  };

  document.getElementById(operations[0]).addEventListener('click', e => {
    e.target.textContent = checkAndChange(e.target.textContent);
  });

  document.getElementById('add').addEventListener('click', ev => {
    const input = document.createElement('input');
    input.id = `in${inputs.length+1}`;
    input.className = 'input';
    input.setAttribute('type','number');
    inputs.push(input.id);

    const label = document.createElement('label');
    label.id = `lb${operations.length+1}`;
    label.className = 'label';
    operations.push(label.id);
    label.textContent = '+';
    label.addEventListener('click', e => {
      e.target.textContent = checkAndChange(e.target.textContent);
    });
    
    elements.push(label.id, input.id);
    
    document.querySelector('.content').appendChild(label);
    document.querySelector('.content').appendChild(input);
  });

  document.addEventListener('keypress', ev => {
    if(ev.key === 'Enter'){
      try{
        for(let i =0;i<inputs.length;i++){
          if(document.getElementById(inputs[i]).value === '') throw 'please fill out the inputs';
          if(isNaN(document.getElementById(inputs[i]).value)) throw 'please enter only numbers!';
        }
        result.textContent = eval(elements.map(el => document.getElementById(el).value || document.getElementById(el).textContent).join(''));
      }catch(err){
        alert(err);
      }
    }
  });
})();