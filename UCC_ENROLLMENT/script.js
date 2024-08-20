document.getElementById("enrollment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var course = document.getElementById("course").value;

    // You can perform additional validation here if needed

<p id="success-message" class="hidden">Congratulations! You've Enrolled Successfully!</p>
    // Display success message
    document.getElementById("enrollment-form").reset();
    document.getElementById("success-message").classList.remove("hidden");

    // Simulate form submission (you can replace this with your actual form submission logic)
    setTimeout(function() {
        document.getElementById("success-message").classList.add("hidden");
    }, 3000);
});