

const submitForm=()=>{
    // alert("çalıştı")
    const name=document.getElementById("uname").value;
    const surname=document.getElementById("usurname").value;
    alert(`${name} - ${surname}`);
    localStorage.setItem("u_name", name);
    localStorage.setItem("u_surname", surname);

    alert("localStorage => "+localStorage.getItem("u_name"))
}

// addEventListener