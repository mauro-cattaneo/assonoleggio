
function sendMail(veicolo) {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    name = escape(name);
    email = escape(email);
    phone = escape(phone);

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "assonolo@gmail.com",
        Password: "3b475107-2876-48df-91c3-f9951efce6ba",
        To : 'assonolo@gmail.com',
        From: 'assonolo@gmail.com',
        Subject : "Assonoleggio.ch: richiesta preventivo da " + name + " per " + veicolo,
        Body : veicolo  + "<br /><br />" 
                + email + "<br /><br />" 
                + phone + "<br /><br />" 
                + message
    }).then(
      message => manageResponse(message)
    );

}


function manageResponse(message) {

    if (message == "OK") 
    { 
        window.location.href = "http://assonoleggio.ch/confirmation.html";
    }
    else
    {
        window.location.href = "http://assonoleggio.ch/error.html";
    }

}

