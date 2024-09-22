
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


  