// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const employeeForm   = document.querySelector('#addForm')
const employeeTable  = document.querySelector('#employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let outputElement = document.querySelector('#employeeCount')
let employeeCount = 0
outputElement.textContent = ` ( ${employeeCount} )`

// ADD EMPLOYEE
employeeForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.querySelector('#id').value
    const name = document.querySelector('#name').value
    const extension = document.querySelector('#extension').value
    const email = document.querySelector('#email').value
    const department = document.querySelector('#department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const newRow = employeeTable.insertRow(-1)

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const idCell = newRow.insertCell(0)
    const nameCell = newRow.insertCell(1)
    const extCell = newRow.insertCell(2)
    const emailCell = newRow.insertCell(3)
    const departmentCell = newRow.insertCell(4)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCell.textContent = id
    nameCell.textContent = name
    extCell.textContent = extension
    emailCell.textContent = email
    departmentCell.textContent = department
    

    // CREATE THE DELETE BUTTON
    const deleteCell = newRow.insertCell(5)
    deleteCell.innerHTML = '<button class="btn btn-danger btn-sm delete-btn">X</button>'

    // RESET THE FORM
    document.querySelector('#id').value = ''
    document.querySelector('#name').value = ''
    document.querySelector('#extension').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#department').value = ''

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus()
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++
    outputElement.textContent = ` ( ${employeeCount} )`
})

// DELETE EMPLOYEE
employeeTable.addEventListener('click', (e) => {
      if (confirm('Are you sure you want to delete this employee?')) {
        const row = e.target.parentElement.parentElement;
        employeeTable.deleteRow(row.rowIndex);
        employeeCount--;
        outputElement.textContent = employeeCount;
      }
  });