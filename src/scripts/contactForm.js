import contactCollection from "./APIManager"
import contactList from "./DOMManager"

const articleFormEl = document.querySelector(".form-output");

const createFieldset = (labelText, placeholderText, inputID) => {
    let fieldsetEL = document.createElement("fieldset");
    let labelEl = document.createElement("label");
    labelEl.textContent = labelText;
    fieldsetEL.appendChild(labelEl);
    let inputEl = document.createElement("input");
    inputEl.placeholder = placeholderText;
    inputEl.id = inputID;
    fieldsetEL.appendChild(inputEl);
    return fieldsetEL;
};

const handleSave = () => {
    let itemToSave = {};
    let nameValue = document.getElementById("name-input").value;
    let phoneValue = document.getElementById("phone-input").value;
    let addressValue = document.getElementById("address-input").value;
    itemToSave.name = nameValue;
    itemToSave.phoneNumber = phoneValue;
    itemToSave.address = addressValue;
    contactCollection.POSTcontact(itemToSave).then(contactList);
}

const contactForm = () => {
    let docFrag = document.createDocumentFragment();
    let formEl = document.createElement("form");
    docFrag.appendChild(formEl);
    let fieldset1 = document.createElement("fieldset");
    let label1 = document.createElement("label");
    label1.textContent = "Name:";
    fieldset1.appendChild(label1);
    let input1 = document.createElement("input");
    input1.placeholder = "Please enter contact name";
    fieldset1.appendChild(input1);
    docFrag.appendChild(createFieldset("Name:", "Please enter name", "name-input"));
    docFrag.appendChild(createFieldset("Phone Number:", "Please enter phone number", "phone-input"));
    docFrag.appendChild(createFieldset("Address:", "Please enter address", "address-input"));
    let buttonEl = document.createElement("button");
    buttonEl.textContent = "Save Contact";
    buttonEl.addEventListener("click", handleSave)
    docFrag.appendChild(buttonEl);
    articleFormEl.appendChild(docFrag);

}

export default contactForm