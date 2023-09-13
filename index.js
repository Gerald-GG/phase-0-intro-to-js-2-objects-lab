// Write your solution in this file!
let employee = {
    name: "Mesh",
    streetAddress: "32 Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee = { ...employee, [key]: value };
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}