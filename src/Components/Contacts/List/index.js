import { useState } from "react";

function List({ contacts, deleteContact }) {
  const [filterText, setFilterText] = useState("");
  const onInputFilterText = (e) => {
    setFilterText(e.target.value);
  };

  const filteredContacts = contacts.filter((item) =>
    Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  const deleteContactHandler=(item)=>{
    const filtered = contacts.filter(
      (value) => value.recordID !== item.recordID
    );
    localStorage.setItem("store", JSON.stringify(filtered));
    return deleteContact(filtered);
  

  }

  return (
    <div>
      <div className="container">
        <input
          className="form-input"
          type="text"
          name="filterText"
          value={filterText}
          placeholder="İsme göre ara"
          onInput={onInputFilterText}
        />
      </div>
      {filterText.length !== 0 ? (
        <div className="container result-text">
          <p>
            <span>{filteredContacts.length}</span> sonuç bulundu
          </p>
        </div>
      ) : (
        false
      )}
      <div className="record-list">
        <ul className="container">
          {filteredContacts.length !== 0 ? (
            filteredContacts.map((item, index) => (
              <li className="record" key={index}>
                <div className="record-info">
                  <p className="record-name">{item.fullname}</p>
                  <p className="record-phone">{item.phone_number}</p>
                </div>
                <button
                  className="delete-contact"
                  onClick={() => {
                    deleteContactHandler(item);
                  }}
                >
                  Sil
                </button>
              </li>
            ))
          ) : (
            <li className="no-contact">
              <p> {"Kayıt bulunamadı..."}</p>
              <p> {"Yeni numara ekle"}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default List;
