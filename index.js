// Write your solution in this file!

const employee = {
    name: "Kenny",
    streetAddress: "501 West 11th St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Alternate using ES6 Spread operators:

    return { ...employee, [key]: value };

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee);
    delete newObj[key];
    return newObj;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]

    return employee;
}