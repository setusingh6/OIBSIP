function convert(){
  let value = document.getElementById("temp").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let ans;

  if(value == ""){
    document.getElementById("result").innerText = "Enter value";
    return;
  }

  value = Number(value);

  if(from == "fahrenheit"){
    value = (value - 32) * 5/9;
  }
  else if(from == "kelvin"){
    value = value - 273.15;
  }

  if(to == "fahrenheit"){
    ans = (value * 9/5 + 32).toFixed(2) + " °F";
  }
  else if(to == "kelvin"){
    ans = (value + 273.15).toFixed(2) + " K";
  }
  else{
    ans = value.toFixed(2) + " °C";
  }

  document.getElementById("result").innerText = ans;
}
