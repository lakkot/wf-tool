var approvers = [
  {name: 'Group 1', appr1: 'lakkot83@gmail.com', appr2: 'michal.lichota@outlook.com', appr3: 'michal.lichota@hotmail.com', appr4: '', appr5: ''},
  {name: 'Group 2', appr1: 'michal.lichota@outlook.com', appr2: 'lakkot83@gmail.com', appr3: 'michal.lichota@hotmail.com', appr4: '', appr5: ''},
  {name: 'Group 3', appr1: 'michal.lichota@hotmail.com', appr2: 'michal.lichota@outlook.com', appr3: 'nowaera@gmail.com', appr4: '', appr5: ''},
  {name: 'Group 4', appr1: 'nowaera@gmail.com', appr2: 'michal.lichota@outlook.com', appr3: 'lakkot83@gmail.com', appr4: '', appr5: ''}
]

var $approverGroup = document.querySelector('#wf-ag-group');

function clearList() {
  $approverGroup.innerHTML = '';
}

function placeHolder(item) {
  var $placeHolder = document.createElement('option');
  $placeHolder.innerText = "...";
  $approverGroup.appendChild($placeHolder);
}

function approverGroups(item) {
  var $approverGroupName = document.createElement('option');
  $approverGroupName.innerText = item.name;
  $approverGroup.appendChild($approverGroupName);
}

clearList();
placeHolder();
approvers.forEach(function(item) {
  approverGroups(item);
})
//hide line if no approver field is empty
$approverGroup.addEventListener('change', function(item) {



  if ($approverGroup.value !==   "...") {
    $('.wf-approver').removeClass('d-none');
    index = approvers.findIndex(item => item.name === $approverGroup.value);
    document.querySelector('#wf-approver1').innerText = approvers[index].appr1;
    if (approvers[index].appr2 !== '') {
      document.querySelector('#wf-approver2').innerText = approvers[index].appr2;
    } else {
      document.querySelector('#wf-approver2__row').classList.add('d-none');
    }
    if (approvers[index].appr3 !== '') {
      document.querySelector('#wf-approver3').innerText = approvers[index].appr3;
    } else {
      document.querySelector('#wf-approver3__row').classList.add('d-none');
    }
    if (approvers[index].appr4 !== '') {
      document.querySelector('#wf-approver4').innerText = approvers[index].appr4;
    } else {
      document.querySelector('#wf-approver4__row').classList.add('d-none');
    }
    if (approvers[index].appr5 !== '') {
      document.querySelector('#wf-approver5').innerText = approvers[index].appr5;
    } else {
      document.querySelector('#wf-approver5__row').classList.add('d-none');
    }
  } else {
    $('.wf-approver').addClass('d-none');
  }


})
