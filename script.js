let logCount = 0;

const timeInBtn = document.getElementById('timeInBtn');
const timeOutBtn = document.getElementById('timeOutBtn');
const logTableBody = document.querySelector('#logTable tbody');

function addLog(action) {
  logCount++;
  const now = new Date();
  const timeString = now.toLocaleString();

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${logCount}</td>
    <td>${action}</td>
    <td>${timeString}</td>
  `;
  logTableBody.appendChild(row);
}

timeInBtn.addEventListener('click', () => addLog('Time In / Log-in'));
timeOutBtn.addEventListener('click', () => addLog('Time Out / Log-out'));
