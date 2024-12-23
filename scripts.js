document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const studentID = document.getElementById('studentID').value;
    const emailID = document.getElementById('emailID').value;
    const contactNo = document.getElementById('contactNo').value;
    const studentClass = document.getElementById('class').value;
    const address = document.getElementById('address').value;

    const studentRecord = {
        studentName,
        studentID,
        emailID,
        contactNo,
        studentClass,
        address
    };

    let records = JSON.parse(localStorage.getItem('studentRecords')) || [];
    records.push(studentRecord);
    localStorage.setItem('studentRecords', JSON.stringify(records));

    addRecordToList(studentRecord);
    this.reset();
});

function addRecordToList(record) {
    const newRecord = document.createElement('li');
    newRecord.innerHTML = `
        <strong>${record.studentName}</strong><br>
        ID: ${record.studentID}<br>
        Email: ${record.emailID}<br>
        Contact: ${record.contactNo}<br>
        Class: ${record.studentClass}<br>
        Address: ${record.address}<br>
        <button class="edit" onclick="editRecord(this)">Edit</button>
        <button class="delete" onclick="deleteRecord(this)">Delete</button>
    `;
    document.getElementById('recordsList').appendChild(newRecord);
}

function editRecord(button) {
    const recordElement = button.parentElement;
    const recordData = recordElement.innerText.split('\n');
    const studentName = recordData[0].replace('EditDelete', '').trim();
    const studentID = recordData[1].replace('ID: ', '').trim();
    const emailID = recordData[2].replace('Email: ', '').trim();
    const contactNo = recordData[3].replace('Contact: ', '').trim();
    const studentClass = recordData[4].replace('Class: ', '').trim();
    const address = recordData[5].replace('Address: ', '').trim();

    document.getElementById('studentName').value = studentName;
    document.getElementById('studentID').value = studentID;
    document.getElementById('emailID').value = emailID;
    document.getElementById('contactNo').value = contactNo;
    document.getElementById('class').value = studentClass;
    document.getElementById('address').value = address;

    deleteRecord(button); // Remove the existing record to update it
}

function deleteRecord(button) {
    const recordElement = button.parentElement;
    const studentID = recordElement.querySelector('strong').textContent;

    let records = JSON.parse(localStorage.getItem('studentRecords')) || [];
    records = records.filter(record => record.studentID !== studentID);
    localStorage.setItem('studentRecords', JSON.stringify(records));

    document.getElementById('recordsList').removeChild(recordElement);
}

document.addEventListener('DOMContentLoaded', function () {
    const records = JSON.parse(localStorage.getItem('studentRecords')) || [];
    records.forEach(record => addRecordToList(record));
});
