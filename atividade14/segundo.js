console.log('1');
t();
console.log('3');
function t(){
    setTimeout(Function() {
        console.log('2');
    }, 10);
  
}