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

const box5 = document.querySelector('#box5');
const box6 = document.querySelector('#box6');

box5.addEventListener('click', () => {
    box6.classList.toggle('slide-down');
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

    
// time

const startTimeInput = document.getElementById('startTimeInput');
const titleError = document.getElementById('titleError');
const endTimeInput = document.getElementById('endTimeInput');

startTimeInput.addEventListener('input', () => {
  const startTime = startTimeInput.value;
  const startHour = parseInt(startTime.split(':')[0]);
  if(startHour < 7 || startHour > 19){
    titleError.innerHTML = 'Giờ bắt đầu phải từ 7h sáng đến 19h tối'
    startTimeInput.value = '07:15';
  }else{
    const startMin = parseInt(startTime.split(':')[1]);
    const startDateTime = new Date();
    startDateTime.setHours(startHour);
    startDateTime.setMinutes(startMin);
    const endDateTime = new Date(startDateTime.getTime() + 2 * 60 * 60 * 1000);
    const endHour = endDateTime.getHours();
    const endMin = endDateTime.getMinutes();
    endTimeInput.value = `${endHour.toString().padStart(2, '0')}:${endMin.toString().padStart(2, '0')}`;
    titleError.innerHTML = ''
  }
})

endTimeInput.addEventListener('change', () => {
  var startTime = new Date("2000-01-01 " + startTimeInput.value + ":00");
  var endTime = new Date("2000-01-01 " + endTimeInput.value + ":00");
  var minEndTime = new Date(startTime.getTime() + (2 * 60 * 60 * 1000));
  if(endTime < minEndTime){
    titleError.innerHTML = 'Error';
  }
})

var today = new Date();
today.setDate(today.getDate() + 1);
var minDate = today.toISOString().split('T')[0];
document.getElementById('dateInput').setAttribute('min', minDate);


// Save Class
const saveBtn = document.querySelector('.saveBtn');

function saveClass(){
  var startTime = document.getElementById('startTimeInput').value;
  var endTime = document.getElementById('endTimeInput').value;
  var selectedDays = document.querySelectorAll('.form-check-input:checked');
  var slot = document.getElementById('mySelect').value;
  var date = document.getElementById('dateInput').value;

  var checkbox = document.getElementsByName('days');
  var result = [];

  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked === true) {
      result.push(checkbox[i].value);
    }
  }

  var formattedResult = result.join(', '); 

  if (!startTime || !endTime || !formattedResult || !slot || !date) {
    alert('Vui lòng nhập đầy đủ thông tin');
    return;
  }

  var existingClasses = JSON.parse(localStorage.getItem('classes')) || [];
  var isDuplicate = existingClasses.some(function(cls) {
    return cls.startTime === startTime && cls.endTime === endTime && cls.date === date;
  });

  if (isDuplicate) {
    alert('Lớp học đã tồn tại trong cùng thời gian và ngày');
    return;
  }

  var newClass = {
    startTime: startTime,
    endTime: endTime,
    days: result,
    slot: slot,
    date: date
  };

  existingClasses.push(newClass);
  localStorage.setItem('classes', JSON.stringify(existingClasses));

  alert('Lưu lớp học thành công');
  location.reload();
}

// saveBtn.addEventListener('click', () => {
  
// })

var classes = JSON.parse(localStorage.getItem('classes')) || [];

var htmls = classes.map((classes, index)=>{
  return `
      <tr>
          <td>${classes.startTime}</td>
          <td>${classes.endTime}</td>
          <td>${classes.days}</td>
          <td>${classes.slot}</td>
          <td>${classes.date}</td>
          <td>
            <div class="btnListClass">
                <button class="btnEdit" onclick="updateClass(${index})" style="background-color: #1a088e; color: #FFFFFF; font-weight: 600;">Sửa</button>
                <button class="btnDelete" style="background-color: #9c1313; color: #FFFFFF; font-weight: 600;">Xóa</button>
            </div>
          </td>
      </tr>
      `
 })
var html_class = htmls.join('');
document.getElementById("tableClass").innerHTML =  html_class;

var deleteButtons = document.querySelectorAll('.btnDelete');
deleteButtons.forEach((deleteBtn, index) => {
  deleteBtn.addEventListener('click', function() {
    classes.splice(index, 1);
    localStorage.setItem('classes', JSON.stringify(classes));
    location.reload();
  });
});

const editClass = (index) => {
  var existingClasses = JSON.parse(localStorage.getItem('classes')) || [];
  var classToUpdate = existingClasses[index];

  // Lấy thông tin lớp học cần cập nhật
  var startTimeInput = document.getElementById('startTimeInput');
  var endTimeInput = document.getElementById('endTimeInput');
  var daysInputs = document.getElementsByName('days');
  var slotInput = document.getElementById('mySelect');
  var dateInput = document.getElementById('dateInput');

  // Cập nhật giá trị đầu vào với thông tin lớp học
  startTimeInput.value = classToUpdate.startTime;
  endTimeInput.value = classToUpdate.endTime;

  // Bỏ chọn tất cả các ngày
  for (var i = 0; i < daysInputs.length; i++) {
    daysInputs[i].checked = false;
  }
  
  classToUpdate.days.forEach(function(day) {
    var dayInput = document.querySelector(`input[value="${day}"]`);
    if (dayInput) {
      dayInput.checked = true;
    }
  });

  slotInput.value = classToUpdate.slot;
  dateInput.value = classToUpdate.date;

  saveBtn.innerHTML = 'Lưu Thay Đổi';
}

const updateClass = (index) => {
  var existingClasses = JSON.parse(localStorage.getItem('classes')) || [];
  var classToUpdate = existingClasses[index];

  var startTimeInput = document.getElementById('startTimeInput');
  var endTimeInput = document.getElementById('endTimeInput');
  var daysInputs = document.getElementsByName('days');
  var slotInput = document.getElementById('mySelect');
  var dateInput = document.getElementById('dateInput');


  classToUpdate.startTime = startTimeInput.value;
  classToUpdate.endTime = endTimeInput.value;
  classToUpdate.days = [];
  classToUpdate.slot = slotInput.value;
  classToUpdate.date = dateInput.value;

  for (var i = 0; i < daysInputs.length; i++) {
    if (daysInputs[i].checked) {
      classToUpdate.days.push(daysInputs[i].value);
    }
  }

  existingClasses[index] = classToUpdate;
  localStorage.setItem('classes', JSON.stringify(existingClasses));
  alert('Lớp học đã được cập nhật');
  location.reload();
};



