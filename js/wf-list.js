
/**********************start new workflow modal*******************************/

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
});

/**********************end new workflow modal*******************************/

/********************** load workflows list ********************************/

var workflowsList = (function() {
  var workflows = [
    {name: 'workflow 1', desc: 'first workflow to be tested', file: 'files/test.pdf',appr1: '', isappr1: '', appr2: '', isappr2: '', appr3: '', isappr3: '', appr4: '', isappr4: '', appr5: '', isappr5: '', status: 'pending'},
    {name: 'workflow 2', desc: 'second workflow to be tested', file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',appr1: '', isappr1: '', appr2: '', isappr2: '', appr3: '', isappr3: '', appr4: '', isappr4: '', appr5: '', isappr5: '', status: 'pending'},
    {name: 'workflow 3', desc: 'third workflow to be tested', file: 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf',appr1: '', isappr1: '', appr2: '', isappr2: '', appr3: '', isappr3: '', appr4: '', isappr4: '', appr5: '', isappr5: '', status: 'approved'},
    {name: 'workflow 4', desc: 'fourth workflow to be tested', file: 'http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',appr1: '', isappr1: '', appr2: '', isappr2: '', appr3: '', isappr3: '', appr4: '', isappr4: '', appr5: '', isappr5: '', status: 'rejected'}
  ]

  var $wfTable = document.querySelector('#wf-table');
  var $wfName = document.querySelector('.wf-col0');
  var $wfName = document.querySelector('.wf-col1');
  var $wfDescription = document.querySelector('.wf-col2');
  var $wfFile = document.querySelector('.wf-col3')

  function getAll() {
    return workflows;
  }

  function clearTable() {
      $wfTable.innerHTML = '';
  }

  function addListItem(item) {

    var $wfTableLine = document.createElement('tr');
    $wfTable.appendChild($wfTableLine);

    var $wfTableItem1 = document.createElement('th');
    $wfTableItem1.classList.add('align-middle');
    $wfTableItem1.classList.add('wf-col-0');
    $wfTableLine.appendChild($wfTableItem1);


    var $wfTableButton = $('<button type="button" class="btn btn-outline-dark col table-button" data-toggle="modal" data-target="#ag-list"></button>').text(item.name);
    $($wfTableItem1).append($wfTableButton);

    var $wfTableItem2 = document.createElement('td');
    $wfTableItem2.classList.add('wf-col-1');
    $wfTableItem2.classList.add('align-middle');
    $wfTableItem2.innerText = item.status;
    $wfTableLine.appendChild($wfTableItem2);


    var $wfTableItem3 = document.createElement('td');
    $wfTableItem3.classList.add('wf-col-2');
    $wfTableItem3.classList.add('align-middle');

    $wfTableItem3.innerText = item.desc;
    $wfTableLine.appendChild($wfTableItem3);


    var $wfTableItem4 = document.createElement('td');
    $wfTableItem4.classList.add('wf-col-3');
    $wfTableItem4.classList.add('align-middle');

    $wfTableLine.appendChild($wfTableItem4);


    var $wfTableLink = document.createElement('a')
    $wfTableLink.classList.add('text-secondary');
    $wfTableLink.innerHTML = '<a target=_blank href=' + item.file + '>open file</a>';
    $wfTableItem4.appendChild($wfTableLink);
  }

  $(document).ready(function(){
    $('#search-field-wf').on('keyup', function() {
      var value = $(this).val().toLowerCase();
      $('#wf-table tr').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  clearTable();
  workflows.forEach(function(item) {
    addListItem(item);
  })















  return {
    getAll: getAll
  }

}());
