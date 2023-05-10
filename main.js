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


const inputMin = document.getElementById("inputMinValue");
const inputMax = document.getElementById("inputMaxValue");
const error = document.getElementById("errorNumber");
const errorMin = document.getElementById("errorMin");
const errorMax = document.getElementById("errorMax");

inputMin.addEventListener("input", () => {
  const inputMinValue = inputMin.value.trim();
  const inputMaxValue = inputMax.value.trim();

  if(inputMinValue < 0){
    alert("Error")
    }else if(inputMinValue === inputMaxValue){
      error.style.display = "block"
    }else{
      error.style.display = "none"
  }

  if (parseInt(inputMinValue) >= parseInt(inputMaxValue)){
    errorMin.style.display = "block";
  }else{
    errorMin.style.display = "none";
  }
})

inputMax.addEventListener("input", () => {
  const inputMaxValue = inputMax.value.trim();
  const inputMinValue = inputMin.value.trim();

  if(inputMaxValue < 0){
    alert("Error")
  }else if(inputMinValue === inputMaxValue){
    error.style.display = "block"
  }else{
    error.style.display = "none"
  }

  if(parseInt(inputMaxValue) <= parseInt(inputMinValue)){
    errorMax.style.display = "block";
  }else {
    errorMax.style.display = "none";
  }
})

const fileUpload = document.querySelector('.fileUpload');
const uploadImage = document.querySelector('.uploadImage img');
const deleteImage = document.querySelector('.deleteImage');

fileUpload.addEventListener('change', function() {
  const file = this.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', function() {
    uploadImage.src = reader.result;
  });

  if (file) {
    reader.readAsDataURL(file);
  }
});

deleteImage.addEventListener('click', () => {
  const uploadImageValue = document.querySelector('.uploadImage img');
  uploadImageValue.src = './image/images/upload-img.jpg';
})




