// JavaScript code to handle form submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get form values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var email = document.getElementById("email").value;
    var healthReport = document.getElementById("healthReport").files[0];

    // Do something with the form data
    alert("\n Name: " + name
    + "\n Age: " + age
    + "\n Weight: " + weight
    + "\n Email: " + email
    + "\n File: " + healthReport.name
    );

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Weight: " + weight);
    console.log("Email: " + email);
    console.log("Health Report: " + healthReport.name); 
    
    // You can perform further processing or send the data to a server using AJAX
    
    // Reset the form
    document.getElementById("myForm").reset();
});
