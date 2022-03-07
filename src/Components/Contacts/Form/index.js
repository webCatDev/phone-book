import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ contacts, addContact }) {
  
    const initialFormValues = {recordID:uuidv4(), fullname: "", phone_number: "" };
  const [form, setForm] = useState(initialFormValues);

  const onInputForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const onSubmit = () => {
    const regex= /[\d+]/g
    if(form.fullname.trim().length!==0&&regex.test(form.phone_number)){
    addContact([...contacts, form]);
      localStorage.setItem("store", JSON.stringify([...contacts, form]));
  }else {return}
    
    setForm(initialFormValues)
  };
  return (
    <div className="container">
      <div>
        <input type="hidden" name="record_id" value={form.recordID} />
      </div>
      <div>
        <input
          className="form-input"
          onInput={onInputForm}
          type="text"
          name="fullname"
          placeholder="İsim"
          value={form.fullname}
        />
      </div>
      <div>
        <input
          className="form-input"
          onInput={onInputForm}
          type="text"
          name="phone_number"
          placeholder="Telefon numarası"
          value={form.phone_number}
        />
      </div>
      <div>
        <button className="add-contact" onClick={onSubmit}>Ekle</button>
      </div>
    </div>
  );
}

export default Form;
