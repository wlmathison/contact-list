import contact from "./createContact"
import contactCollection from "./APIManager"

const contactList = () => {
    FarticleListEl.textContent = "";
    contactCollection.GETContacts()
        .then(parsedResults => parsedResults.forEach(item => {
            contact(item);
        }))
};

export default contactList