export default () => {
  const redBtn = document.querySelectorAll('.red-btn');
  const greenBtn = document.querySelectorAll('.green-btn');
  const blueBtn = document.querySelectorAll('.blue-btn');

  redBtn.forEach(btn => {
    btn.style.backgroundColor = `#F44336`;
  })

  greenBtn.forEach(btn => {
    btn.style.backgroundColor = `#4CAF50;`;
  })

  blueBtn.forEach(btn => {
    btn.style.backgroundColor = `#008CBA`;
  })
}