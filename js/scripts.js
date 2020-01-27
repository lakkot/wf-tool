

// add-remove approver buttons on ag-new.html
var $approver2 = document.querySelector('.approver2');
var $approver3 = document.querySelector('.approver3');
var $approver4 = document.querySelector('.approver4');
var $approver5 = document.querySelector('.approver5');
var $approver2input = document.querySelector('#approver2input');
var $approver3input = document.querySelector('#approver3input');
var $approver4input = document.querySelector('#approver4input');
var $approver5input = document.querySelector('#approver5input');


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
    $approver5input.value = '';
  } else if ($approver4.classList.contains('ag-form__hidden') === false) {
    $approver4.classList.toggle('ag-form__hidden');
    $approver4input.value = '';
  } else if ($approver3.classList.contains('ag-form__hidden') === false) {
    $approver3.classList.toggle('ag-form__hidden');
    $approver3input.value = '';
  } else if ($approver2.classList.contains('ag-form__hidden') === false) {
    $approver2.classList.toggle('ag-form__hidden');
    $approver2input.value = '';
  }
}
