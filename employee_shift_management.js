
// a list of Employees Arrays 

const employees = [
    {
      name: "Alice",
      shifts: [
        { day: "Monday", hours: 8 },
        { day: "Wednesday", hours: 7 },
        { day: "Friday", hours: 9 }
      ]
    },
    {
      name: "Bob",
      shifts: [
        { day: "Tuesday", hours: 6 },
        { day: "Thursday", hours: 8 }
      ]
    },
    {
      name: "Charlie",
      shifts: [
        { day: "Monday", hours: 8 },
        { day: "Wednesday", hours: 7 }
      ]
    },
    {
      name: "David",
      shifts: [
        { day: "Tuesday", hours: 6 },
        { day: "Thursday", hours: 8 },
        { day: "Friday", hours: 9 }
      ]
    }
  ];

// a Function to Display Employee Shift Details
   function displayEmployeeShifts(employee) {
    console.log(`Employee: ${employee.name}`);
    employee.shifts.forEach(shift => {
      console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    });
  }

// a Function to Assign a New Shift
  function assignShift(employeeName, day, hours) {
    const employee = employees.find(e => e.name === employeeName);
    if (!employee) {
      return (`Employee ${employeeName} not found.`);
      
    }
  
    if (employee.shifts.some(shift => shift.day === day)) {
      return (`Employee ${employeeName} already has a shift on ${day}.`);
      
    }
  
    employee.shifts.push({ day, hours });
    console.log(`Shift assigned to ${employeeName} on ${day}.`);
  }

//Function to Calculate Total Hours Worked
  function calculateTotalHours(employeeName) {
    const employee = employees.find(e => e.name === employeeName);
    if (!employee) {
      return (`Employee ${employeeName} not found.`);
      
    }
  
    const totalHours = employee.shifts.reduce((acc, shift) => acc + shift.hours, 0);
    console.log(`${employeeName} has worked a total of ${totalHours} hours.`);
    return totalHours;
  }
  

