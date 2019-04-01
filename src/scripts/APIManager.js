const contactCollection = {

    GETContacts: () => {
        return fetch("http://localhost:8088/contacts")
            .then(response => response.json())
    },
    POSTcontact: (contact) => {
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
    }

};

export default contactCollection