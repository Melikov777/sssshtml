document.addEventListener('DOMContentLoaded', function() {
  
  const btnGreet = document.getElementById('btnGreet');
  const txtName = document.getElementById('txtName');
  const output = document.getElementById('output');

  btnGreet.addEventListener('click', function() {
    const name = txtName.value.trim();
    if (name) {
      const greeting = `Hello, ${name}! Welcome.`;
      output.value = greeting;
    } else {
      output.value = 'Please enter your name .';
    }
  });

  txtName.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      btnGreet.click();
    }
  });

  const btnApplyColor = document.getElementById('btnApplyColor');
  const ddlColor = document.getElementById('ddlColor');

  btnApplyColor.addEventListener('click', function() {
    const selectedColor = ddlColor.value;
    document.body.classList.remove('bg-light');
    document.body.style.backgroundColor = selectedColor;
    
    const colorMessage = `Background color changed to ${selectedColor}!`;
    output.value = colorMessage;
  });

  const btnAddItem = document.getElementById('btnAddItem');
  const btnRemoveLast = document.getElementById('btnRemoveLast');
  const txtItem = document.getElementById('txtItem');
  const itemList = document.getElementById('itemList');
  
  let items = [];

  function renderList() {
    itemList.innerHTML = '';
    items.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.textContent = item;
      
      const removeBtn = document.createElement('button');
      removeBtn.className = 'btn btn-sm btn-outline-danger';
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', function() {
        items.splice(index, 1);
        renderList();
        updateOutput(`Item - "${item}" removed from list.`);
      });
      
      li.appendChild(removeBtn);
      itemList.appendChild(li);
    });
  }

  function updateOutput(message) {
    output.value = message;
  }

  btnAddItem.addEventListener('click', function() {
    const itemText = txtItem.value.trim();
    if (itemText) {
      items.push(itemText);
      renderList();
      updateOutput(`Item - "${itemText}" added to list.`);
      txtItem.value = '';
      txtItem.focus();
    } else {
      updateOutput('Please enter an item to add.');
    }
  });

  txtItem.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      btnAddItem.click();
    }
  });
  
  btnRemoveLast.addEventListener('click', function() {
    if (items.length > 0) {
      const removedItem = items.pop();
      renderList();
      updateOutput(`Last Item - "${removedItem}" removed from list.`);
    } else {
      updateOutput('No items to remove.');
    }
  });

});

