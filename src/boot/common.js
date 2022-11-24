import {Notify, LoadingBar} from 'quasar'

Notify.setDefaults({
  position: 'top',
  timeout: 2500,
  color: 'green',
  textColor: 'white',
  actions: [{
    icon: 'close',
    color: 'white'
  }]
})

LoadingBar.setDefaults({
  color: 'primary',
  size: '2px',
  position: 'top'
})

// Array.prototype.pushNoRepeat = function(){
//   for(var i=0; i<arguments.length; i++){
//     var ele = arguments[i];
//     if(this.indexOf(ele) == -1){
//       this.push(ele);
//     }
//   }
// };
