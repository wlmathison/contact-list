let articleListEl = document.querySelector(".list-output");

const contact = (contactToDisplay) => {
    let docFrag = document.createDocumentFragment();
    let newH2 = document.createElement("h2");
    newH2.textContent = contactToDisplay.name;
    docFrag.appendChild(newH2);
    let p1 = document.createElement("p");
    p1.textContent = contactToDisplay.phoneNumber;
    docFrag.appendChild(p1);
    let p2 = document.createElement("p");
    p2.textContent = contactToDisplay.address;
    docFrag.appendChild(p2);
    let hr = document.createElement("hr");
    docFrag.appendChild(hr);
    articleListEl.appendChild(docFrag);
};

export default contact