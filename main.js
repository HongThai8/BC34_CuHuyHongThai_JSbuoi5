// <!-- Bài 1 : Quản lý tuyển sinh -->

document.getElementById("btnResult").onclick = function () {
  //input
  var pointNO1 = document.getElementById("pointNO1").value * 1;
  var pointNO2 = document.getElementById("pointNO2").value * 1;
  var pointNO3 = document.getElementById("pointNO3").value * 1;
  var place = document.getElementById("place").value;
  var type = document.getElementById("type").value * 1;
  var standardPoint = document.getElementById("standardPoint").value * 1;
  var result;

  //process
  switch (
    place //Khu vực
  ) {
    case "A":
      place = 2;
      break;
    case "B":
      place = 1;
      break;
    case "C":
      place = 0.5;
      break;
    default:
      place = 0;
  }
  switch (
    type //Đối tượng
  ) {
    case 1:
      type = 2.5;
      break;
    case 2:
      type = 1.5;
      break;
    case 3:
      type = 1;
      break;
    default:
      type = 0;
  }

  var sum = place + type + pointNO1 + pointNO2 + pointNO3;

  if (pointNO1 <= 0 || pointNO2 <= 0 || pointNO2 <= 0) {
    result = "Bạn đã rớt. Do có điểm nhỏ hơn 0";
  } else if (sum < standardPoint) {
    result = "Bạn đã rớt. Do không đạt điểm chuẩn";
  } else {
    result = "Bạn đã đậu. Tổng điểm là: " + sum;
  }
  // showInfo += "<p>" + "Sinh viên xa trường nhất : " + furthest_stu + "</p>";

  //output
  document.getElementById("notiResult").innerHTML = result;
};

// <!-- Bài 2 : Tính tiền điện -->
document.getElementById("btnCalc").onclick = function () {
  //input
  var hoTen = document.getElementById("hoTen").value;
  var soKW = document.getElementById("soKW").value * 1;
  var total = 0;

  //process
  if (soKW <= 50) {
    total = soKW * 500;
  } else if (soKW <= 100) {
    total = 50 * 500 + (soKW - 50) * 650;
  } else if (soKW <= 200) {
    total = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
  } else if (soKW <= 350) {
    total = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 110;
  } else {
    total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
  }
  var format = new Intl.NumberFormat("vn-VN");
  var totalVnd = format.format(total) + " VND";

  //output
  document.getElementById("total").innerHTML =
    "Họ tên: " + hoTen + "; Tiền điện: " + totalVnd;
};
