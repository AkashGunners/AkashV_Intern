
// Select the table body element
var tableBody = document.createElement('tbody');

// Create an array of data objects
var data = [
  { productName: 'Samasung Galaxy S23', productNumber: '74393', payment: 'paid', status: 'Delivered' },
  { productName: 'Iphone 14 Pro', productNumber: '94782', payment: 'due', status: 'Pending' },
  { productName: 'Adidas Boots', productNumber: '49840', payment: 'paid', status: 'Delivered' },
  { productName: 'Extension Board', productNumber: '37284', payment: 'refunded', status: 'Delivered'},
  { productName: 'Almirah', productNumber: '73929', payment: 'paid', status: 'Delivered'},
  { productName: 'Apple Watch', productNumber: '36282', payment: 'due', status: 'Pending'},
  { productName: 'Poco X2', productNumber: '28471', payment: 'refunded', status: 'Pending'},
  { productName: 'Bedsheet', productNumber: '94739', payment: 'paid', status: 'Delivered'}
];


data.forEach(function(item) {
  // Create a new row
  var row = document.createElement('tr');

  // Create cells and add data
  var productNameCell = document.createElement('td');
  var productNameText = document.createTextNode(item.productName);
  productNameCell.appendChild(productNameText);

  var productNumberCell = document.createElement('td');
  var productNumberText = document.createTextNode(item.productNumber);
  productNumberCell.appendChild(productNumberText);

  var paymentCell = document.createElement('td');
  var paymentText = document.createTextNode(item.payment);
  paymentCell.appendChild(paymentText);

  var statusCell = document.createElement('td');
  var statusText = document.createTextNode(item.status);
  statusCell.appendChild(statusText);


  row.appendChild(productNameCell);
  row.appendChild(productNumberCell);
  row.appendChild(paymentCell);
  row.appendChild(statusCell);

  tableBody.appendChild(row);
});


var table = document.querySelector('table');

table.appendChild(tableBody);



// ORDER

var clickableText = document.getElementById('orders');

clickableText.addEventListener('click', function() {
  window.location.href = 'Order.html'; // Replace 'next.html' with the URL of your next page
});


// REPORT

var clickableText = document.getElementById('reports');

clickableText.addEventListener('click', function() {
  window.location.href = 'Report.html'; // Replace 'next.html' with the URL of your next page
});
