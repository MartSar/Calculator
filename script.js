

let signs = ['+', '-', '*', '/', '.'];
let nums_fr_kbrd = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace', 'Enter', '+', '-', '*', '/', '.'];
document.form.textview.value = 0;

let fst_use = false;
let sign_used = false;

let fst_use_kbrd = false;
let sign_used_kbrd = false;

function insert(symb) {
  
  if (signs.includes(symb) && fst_use === false) {
    return
  }
  
  if (fst_use === false) {
    if(symb == 0){
     return 
    }
    document.form.textview.value = "";
    document.form.textview.value += symb;
    fst_use = true;
    return
  }

  if (signs.includes(symb)) {
    if (sign_used === false) {
      document.form.textview.value += symb;
      sign_used = true;
      return
    } else {
      return
    }
  } else {
    document.form.textview.value += symb;
    sign_used = false;
    return
  }


}

 document.addEventListener("keydown", function(evt) {

    if (nums_fr_kbrd.includes(evt.key)) {

      if (evt.key === "Enter") {
        equal();
        return
      }
      if (evt.key === "Backspace") {
        clean();
        return
      }

      if (signs.includes(evt.key) && fst_use_kbrd === false) {
        return
      }

      if (signs.includes(evt.key)) {
        if (sign_used_kbrd === false) {
          document.form.textview.value += evt.key;
          sign_used_kbrd = true;
          return
        } else {
          return
        }
      } else {
        if (fst_use_kbrd === false) {
          document.form.textview.value = "";
          document.form.textview.value += evt.key;
          fst_use_kbrd = true;
          return
        }
        document.form.textview.value += evt.key;
        sign_used_kbrd = false;
        return
      }



    }
  })


function clean() {
  document.form.textview.value = 0;
  fst_use = false;
  fst_use_kbrd = false;
}

function equal() {
  document.form.textview.value = eval(document.form.textview.value);
}

function percent() {
  document.form.textview.value = eval(document.form.textview.value) / 100;
}

function deny() {
  if (document.form.textview.value[0] == 0) {
    return
  }
  if (document.form.textview.value[0] === "-") {
    document.form.textview.value = document.form.textview.value.slice(1);
  } else {
    document.form.textview.value = "-" + document.form.textview.value;
  }
}