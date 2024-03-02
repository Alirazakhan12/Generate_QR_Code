let input = document.getElementById("input");
let img = document.getElementById("qrImage");

const generateQR = () => {
  if (input.value.length > 0) {
    img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
  } else {
    input.classList.add("error");
  }
};
