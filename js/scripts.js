

//var $addApprover = document.querySelector('#add-approver');
var $approver2 = document.querySelector('.approver2');
var $approver3 = document.querySelector('.approver3');
var $approver4 = document.querySelector('.approver4');
var $approver5 = document.querySelector('.approver5');


function addApprover() {
  if ($approver2.classList.contains('ag-form__hidden') === true) {
    $approver2.classList.toggle('ag-form__hidden');
  } else if ($approver3.classList.contains('ag-form__hidden') === true) {
    $approver3.classList.toggle('ag-form__hidden');
  } else if ($approver4.classList.contains('ag-form__hidden') === true) {
    $approver4.classList.toggle('ag-form__hidden');
  } else if ($approver5.classList.contains('ag-form__hidden') === true) {
    $approver5.classList.toggle('ag-form__hidden');
  }
}

function removeApprover() {
  if ($approver5.classList.contains('ag-form__hidden') === false) {
    $approver5.classList.toggle('ag-form__hidden');
  } else if ($approver4.classList.contains('ag-form__hidden') === false) {
    $approver4.classList.toggle('ag-form__hidden');
  } else if ($approver3.classList.contains('ag-form__hidden') === false) {
    $approver3.classList.toggle('ag-form__hidden');
  } else if ($approver2.classList.contains('ag-form__hidden') === false) {
    $approver2.classList.toggle('ag-form__hidden');
  }
}
