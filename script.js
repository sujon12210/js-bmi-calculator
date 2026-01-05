function calculate(){
  const weight = document.getElementById('weight').value;
  const heightCm = document.getElementById('height').value;

  if(!weight || !heightCm){
    document.getElementById('result').innerText = 'Enter all values';
    return;
  }

  const heightM = heightCm / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(2);

  document.getElementById('result').innerText =
    `Your BMI is ${bmi}`;
}
