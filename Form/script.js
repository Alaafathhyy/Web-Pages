
function checkInputs(event) {

    const inputFeilds = document.querySelectorAll("input");

    const validInputs = Array.from(inputFeilds).filter(input => input.value == "");

    if (validInputs.length > 0) {
        alert("inputs fields must not be empty");
        event.preventDefault();

        returnToPreviousPage();
        return false;
    }
    if (!inboxCheck("gender")){
        alert("please select if you want a specific gender ");
        event.preventDefault();

        returnToPreviousPage();
        return false
    }
    alert("validations passed");
    return true;

}
function inboxCheck(elClass) {
    el = document.getElementsByClassName(elClass);

    var cnt = false;
    for (i = 0; i < el.length; i++) {
        if (el[i].checked === true) {
            cnt++
        }
    }

  return cnt;
}
