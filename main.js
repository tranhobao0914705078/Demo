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

const inputCourse = document.getElementById('inputCourse');

  inputCourse.addEventListener('input', function() {
    if(inputCourse.value.length < 3){
      alert('Lỗi');
    }
});

const meetLinkInput = document.getElementById('inputLink');
const meetLinkError = document.getElementById('linkError');

meetLinkInput.addEventListener("input", () => {
    const meetLinkvalue = meetLinkInput.value.trim();
    const meetLinkRegex = /^https:\/\/meet\.google\.com\/[a-z]{3}-[a-z]{4}-[a-z]{3}$/;
    if(meetLinkRegex.test(meetLinkvalue)){
      meetLinkError.style.display = 'none';
    }else{
      meetLinkError.style.display = 'block';
    }
})

