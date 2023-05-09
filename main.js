const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');

box1.addEventListener('click', () => {
    box2.classList.toggle('slide-down');
});

const myInput = document.getElementById('myInput');
const charCount = document.getElementById('charCount');

  myInput.addEventListener('input', function() {
    if(myInput.value.length > 200){
      alert('Vượt quá ký tự cho phép!!!');
    }else{
      charCount.textContent = `${myInput.value.length}/200`;
    }
});


