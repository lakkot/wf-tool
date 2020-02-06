


var approvers = (function() {

var approversRepository = [
  {name: 'Group 1', appr1: 'lakkot83@gmail.com', appr2: 'michal.lichota@outlook.com', appr3: 'michal.lichota@hotmail.com', appr4: '', appr5: ''},
  {name: 'Group 2', appr1: 'michal.lichota@outlook.com', appr2: 'lakkot83@gmail.com', appr3: 'michal.lichota@hotmail.com', appr4: '', appr5: ''},
  {name: 'Group 3', appr1: 'michal.lichota@hotmail.com', appr2: 'michal.lichota@outlook.com', appr3: 'nowaera@gmail.com', appr4: '', appr5: ''},
  {name: 'Group 4', appr1: 'nowaera@gmail.com', appr2: 'michal.lichota@outlook.com', appr3: 'lakkot83@gmail.com', appr4: '', appr5: ''}
]

function getAll() {
return approversRepository;
}

var $approverGroup = document.querySelector('#wf-ag-group');

function clearList() {
  $approverGroup.innerHTML = '';
}

function placeHolder(item) {
  var $placeHolder = document.createElement('option');
  $placeHolder.innerText = "...";
  $approverGroup.appendChild($placeHolder);
}

//create option for <select>
function approverGroups(item) {
  var $approverGroupName = document.createElement('option');
  $approverGroupName.innerText = item.name;
  $approverGroup.appendChild($approverGroupName);
}


//fill in table with approvers based on group chosen in <select>
$approverGroup.addEventListener('change', function(item) {
  if ($approverGroup.value !==   "...") {
    $('.wf-approver').removeClass('d-none');
    //find object in array based on .name value
    //get index of object with corresponding name
    index = approversRepository.findIndex(item => item.name === $approverGroup.value);
    document.querySelector('#wf-approver1').innerText = approversRepository[index].appr1;
    //if approver field is not empty, fill in with corresponding approver. if it is, hide it
    if (approversRepository[index].appr2 !== '') {
      document.querySelector('#wf-approver2').innerText = approversRepository[index].appr2;
    } else {
      //hide line if approver field is empty
      document.querySelector('#wf-approver2__row').classList.add('d-none');
    }
    if (approversRepository[index].appr3 !== '') {
      document.querySelector('#wf-approver3').innerText = approversRepository[index].appr3;
    } else {
      document.querySelector('#wf-approver3__row').classList.add('d-none');
    }
    if (approversRepository[index].appr4 !== '') {
      document.querySelector('#wf-approver4').innerText = approversRepository[index].appr4;
    } else {
      document.querySelector('#wf-approver4__row').classList.add('d-none');
    }
    if (approversRepository[index].appr5 !== '') {
      document.querySelector('#wf-approver5').innerText = approversRepository[index].appr5;
    } else {
      document.querySelector('#wf-approver5__row').classList.add('d-none');
    }
  } else {
    $('.wf-approver').addClass('d-none');
  }
})
return {
  getAll: getAll,
  clearList: clearList,
  placeHolder: placeHolder,
  approverGroups: approverGroups

}

}());






//clear approvers list, insert placeholder and name for each object form approvers array
approvers.clearList();
approvers.placeHolder();
approvers.getAll().forEach(function(item) {
  approvers.approverGroups(item);
})
