const friends = require('./contacts.json');
const faker = require('faker');

function getFakeContacts(howMany=5) {
    let result = '';
    while(howMany > 0) {
        let name = faker.name.findName();
        let phone = faker.phone.phoneNumber();
        let email = faker.internet.email();
        let contact = `
        <h1>${name}</h1>
        <h2>${phone}, ${email}</h2>
        `;
        result += contact;
        howMany -= 1;
    }
    // console.log(result);
    // console.log(faker.helpers.createCard());
    return result;
}
getFakeContacts();

function getContacts() {
    let result = '';
    for(let friend of friends.contacts) {
        // destructuring
        // create multiple variables, then pluck out the corresponding values
        const {name, phone, email} = friend;
        let contact = `
        <h1>${name}</h1>
        <h2>${phone}, ${email}</h2>
        `;
        result += contact;
    }
    // console.log(result);
    return result;
}
getContacts();

module.exports = {
    getContacts,
    getFakeContacts
}