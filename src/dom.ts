const someElement = document.querySelector('.foo') as HTMLInputElement;
console.log('someElement', someElement.value);

const anotherElement = document.querySelector('.another');
anotherElement.addEventListener('blur', (e) => {
  const target = e.target as HTMLInputElement;
  console.log(`e ${target.value}`);
});
