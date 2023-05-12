const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');

box1.addEventListener('click', () => {
    box2.classList.toggle('slide-down');
});

const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');

box3.addEventListener('click', () => {
    box4.classList.toggle('slide-down');
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

//   inputCourse.addEventListener('input', function() {
//     inputText.textContent = inputCourse.value;
// });

const validateInput = () => {
  let inputNameCourse = document.getElementById('inputCourse').value.toString();
  let error = document.getElementById('inputText');
  let errorValue = document.getElementById('errorValue');

  if(inputNameCourse.match(/\d+/g)){
    error.innerHTML = "Chỉ được nhập chữ!";
    errorValue.innerHTML = "Chỉ được nhập chữ!";
  }else if(inputNameCourse.length < 3){
    error.innerHTML = "Phải nhập trên 3 ký tự!";
    errorValue.innerHTML = "Phải nhập trên 3 ký tự!";
  }else{
    errorValue.innerHTML = ""
    error.textContent = inputCourse.value;
  }
}



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
const defaultFileValue = document.querySelector('#defaultFileValue');

deleteImage.addEventListener('click', () => {
  const uploadImageValue = document.querySelector('.uploadImage img');
  const inputImage = document.querySelector('input[type="file"]');
  uploadImageValue.src = './image/images/upload-img.jpg';
  defaultFileValue.value = "";
  inputImage.value = defaultFileValue.value;
})

// new

const priceInput = document.querySelector('.price_format');
  priceInput.addEventListener('input', function(e) {
    let price = this.value;
    price = price.replace(/\D/g, '');
    price = price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    price = price + ' VND';
    this.value = price;
});


const tags = ["Javascript", "HTML", "CSS", "React", "Node.js", "Vue.js", "Angular", "Bootstrap", "jQuery"]
const input = document.getElementById("selectCourse");
const clearBtn = document.getElementById("clearInput");

    function clearInput() {
        input.value = '';
    }

    function toggleClearBtn() {
        clearBtn.style.visibility = input.value ? "visible" : "hidden";
    }

    // Hiển thị hoặc ẩn dấu x
    input.addEventListener('input', toggleClearBtn);
    toggleClearBtn();

    // Thêm sự kiện keyup cho input để hiển thị danh sách gợi ý
    input.addEventListener("keyup", function(e) {
        const value = input.value.toLowerCase();
        const suggestions = tags.filter(tag => tag.toLowerCase().startsWith(value));
        const list = document.getElementById("autocomplete-list");

        // Xóa danh sách gợi ý hiện tại
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        // Hiển thị danh sách gợi ý nếu có
        if (suggestions.length > 0) {
            list.style.display = "block";
            for (let i = 0; i < suggestions.length; i++) {
                const suggestion = suggestions[i];
                const div = document.createElement("div");
                div.textContent = suggestion;
                div.addEventListener("click", function() {
                    input.value = suggestion;
                    list.style.display = "none";
                    toggleClearBtn();
                });
                list.appendChild(div);
            }
        } else {
            list.style.display = "none";
        }
    });

    // Xử lý sự kiện click bên ngoài input để ẩn danh sách gợi ý
    document.addEventListener("click", function(e) {
      const list = document.getElementById("autocomplete-list");
        if (e.target !== input && e.target.parentNode !== list) {
            list.style.display = "none";
        }
    });
    