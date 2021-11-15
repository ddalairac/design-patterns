class Log{
  static categoryTitle(string){
    let style = 'background :black; color: white; padding:5px; font-size:16px';
    console.log(`%c${string}`,style)
  }
  static patterTitle(string){
    let style = 'background :grey; color: black; padding:5px;';
    console.log(`%c * ${string}:`,style)
  }
}


/* Callback:
is a function that has another function as a parameter */
const calc = () => {
  return 4 * 4;
}

const printCalback = (callback) => {
  console.log(callback());
}

printCalback(calc)



