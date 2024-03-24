import './assets/bling.js'
import '../src/index.css'



function clock(){    
    let time = mk('span', {id:'clock'});
    
    // execute the updateTime function in intervals
    updateTime();

    setInterval(updateTime, 1000);
  return mk('div', null, [
        mk ('h1', null, ['Hello World']),
        mk ('h2', null, ['it is ', time])
     ]);

    //  set the date/time to local form
     function updateTime(){
    
       
        let now = new Date();
       let nowStr = now.toLocaleTimeString();
       time.textContent = nowStr;  
}
    
    }  
function render(){
    document.body.prepend(clock());
};

render();