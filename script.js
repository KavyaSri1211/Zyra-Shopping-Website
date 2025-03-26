function validateForm(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert("Name should contain only letters and spaces.");
        
        return false;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        
        return false;
    }
    
    if (subject.length < 3) {
        alert("Subject should be at least 3 characters long.");
       
        return false;
    }

    if (message.length < 10) {
        alert("Message should be at least 10 characters long.");
        
        return false;
    }

    
    document.getElementById("contactForm").reset();

    return true;
}





