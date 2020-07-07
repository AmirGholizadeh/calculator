(function(){
  "use strict";
  // elements
  const result = document.getElementById('result');
  const inputs = ['in1', 'in2'];
  const operations = ['lb1'];
  const elements = ['in1','lb1','in2'];

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