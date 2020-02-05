
var approvers = [
  {name: 'gr1', appr1: 'lakkot83@gmail.com', appr2: 'michal.lichota@outlook.com', appr3: 'michal.lichota@hotmail.com', appr4: '', appr5: ''},
  {name: 'gr2', appr1: 'michal.lichota@outlook.com', appr2: 'lakkot83@gmail.com', appr3: 'michal.lichota@hotmail.com', appr4: '', appr5: ''},
  {name: 'gr3', appr1: 'michal.lichota@hotmail.com', appr2: 'michal.lichota@outlook.com', appr3: 'nowaera@gmail.com', appr4: '', appr5: ''},
  {name: 'gr4', appr1: 'nowaera@gmail.com', appr2: 'michal.lichota@outlook.com', appr3: 'lakkot83@gmail.com', appr4: '', appr5: ''}
]

console.log(approvers);



// add-remove approver buttons on ag-new.html
var $approver2 = document.querySelector('.approver2');
var $approver3 = document.querySelector('.approver3');
var $approver4 = document.querySelector('.approver4');
var $approver5 = document.querySelector('.approver5');
var $approver2input = document.querySelector('#approver2input');
var $approver3input = document.querySelector('#approver3input');
var $approver4input = document.querySelector('#approver4input');
var $approver5input = document.querySelector('#approver5input');

var $addApprover = document.querySelector('#add-approver')
var $removeApprover = document.querySelector('#remove-approver')


$addApprover.addEventListener('click', function addApprover() {
  if ($approver2.classList.contains('d-none') === true) {
    $approver2.classList.toggle('d-none');
    document.querySelector('#remove-approver').classList.toggle('disabled');
  } else if ($approver3.classList.contains('d-none') === true) {
    $approver3.classList.toggle('d-none');
  } else if ($approver4.classList.contains('d-none') === true) {
    $approver4.classList.toggle('d-none');
  } else if ($approver5.classList.contains('d-none') === true) {
    $approver5.classList.toggle('d-none');
    document.querySelector('#add-approver').classList.toggle('disabled')
  }
});

$removeApprover.addEventListener('click', function removeApprover() {
  if ($approver5.classList.contains('d-none') === false) {
    $approver5.classList.toggle('d-none');
    $approver5input.value = '';
    document.querySelector('#add-approver').classList.toggle('disabled');
  } else if ($approver4.classList.contains('d-none') === false) {
    $approver4.classList.toggle('d-none');
    $approver4input.value = '';
  } else if ($approver3.classList.contains('d-none') === false) {
    $approver3.classList.toggle('d-none');
    $approver3input.value = '';
  } else if ($approver2.classList.contains('d-none') === false) {
    $approver2.classList.toggle('d-none');
    $approver2input.value = '';
    document.querySelector('#remove-approver').classList.toggle('disabled')
  }
});



$agSubmit = document.querySelector('#ag-submit')
$agSubmit.addEventListener('click', function() {
  var object = {}

  var nameInput = document.querySelector('#group-name');
  var nameValue = nameInput.value;
  Object.assign(object, {name: nameValue})

  var nameAppr1 = document.querySelector('#approver1input');
  var nameAppr1 = nameAppr1.value;
  Object.assign(object, {appr1: nameAppr1})

  //approvers.push(object);
})
