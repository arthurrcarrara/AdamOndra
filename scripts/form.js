
function verifyForm() {
    
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const lEmail = document.getElementById("email").value;


    if((firstName === "") || (lastName === "") || (lEmail === "")){
        alert('Por favor insira todos os dados');
    } else {
        alert('Dados enviados com sucesso');
    }
}
