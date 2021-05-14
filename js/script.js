var idArray = ["income", "deducted", "calculate"];
function focusNext(e) {
  try {
    for (var i = 0; i < idArray.length; i++) {
      if (e.keyCode === 13 && e.target.id === idArray[i]) {
        document.querySelector(`#${idArray[i + 1]}`).focus();
      }
    }
  } catch (error) {}
}
