function runWithDebugger(ourFunction) {
  debugger;
  ourFunction();
}

function logTenNumber(){
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}

runWithDebugger(logTenNumber);
