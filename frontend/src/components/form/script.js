// Get the tabs and tab content elements
const personalTab = document.getElementById('personal-tab');
const educationTab = document.getElementById('education-tab');
const personalInfo = document.getElementById('personal-info');
const educationInfo = document.getElementById('education-info');

// Add click event listeners to the tabs
personalTab.addEventListener('click', () => {
    // Show the personal information tab content and hide education
    personalInfo.classList.add('active');
    educationInfo.classList.remove('active');
    
    // Update tab styles
    personalTab.classList.add('active');
    educationTab.classList.remove('active');
});

educationTab.addEventListener('click', () => {
    // Show the education tab content and hide personal information
    educationInfo.classList.add('active');
    personalInfo.classList.remove('active');

    // Update tab styles
    educationTab.classList.add('active');
    personalTab.classList.remove('active');
});

// Set the initial tab as active (e.g., personal information)
personalTab.click();


// add email and otp code

 // JavaScript for form validation
 document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("register-btn");

    registerButton.addEventListener("click", async function () {
        // Retrieve data from the first form
        const firstName = document.getElementById("first-name").value;
        const middleName = document.getElementById("middle-name").value;
        const lastName = document.getElementById("last-name").value;
        const fatherName = document.getElementById("father-name").value;
        const motherName = document.getElementById("mother-name").value;
        const dob = document.getElementById("dob").value;
        const birthPlace = document.getElementById("birth-place").value;
        const address = document.getElementById("address").value;
        const district = document.getElementById("district").value;
        const country = document.getElementById("country").value;
        const mobileNumber = document.getElementById("mobile-number").value;
        const email = document.getElementById("email").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const otp = document.getElementById("otp").value;

        const formData = {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            fatherName: fatherName,
            motherName: motherName,
            dob: dob,
            birthPlace: birthPlace,
            address: address,
            district: district,
            country: country,
            mobileNumber: mobileNumber,
            email: email,
            gender: gender,
            otp: otp,
        };

        // Convert form data to JSON format
        const formDataJSON = JSON.stringify(formData, null, 2);

        // Generate PDF using jsPDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        pdf.text("Personal Information Form Data", 10, 10);

        // Start adding content at a specific Y coordinate
        let yPosition = 30;

        // Add content with adjusted Y coordinates
        yPosition += 20; // Move down
        yPosition += 20; // Move down

        Object.entries(formData).forEach(([key, value]) => {
            pdf.text(`${key}:`, 10, yPosition);
            pdf.text(value, 50, yPosition);
            yPosition += 20; // Move down
        });

        // Save the PDF
        const pdfDataUri = pdf.output("datauristring");

        // Open a new pop-up window
        const popupWindow = window.open("", "FormDataPopup", "width=600px,height=600px");
        // Display PDF content in the pop-up window
        const popupContent = `
        <html>
        <head>
            <title>PDF Output</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
            <style>
                html, body {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }

                .container {
                    width: 100%;
                    height: 100%;
                    overflow-y: auto; /* Enable vertical scrolling */
                }

                iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2 class="my-4 green">PDF Generated</h2>
                <iframe src="${pdfDataUri}" width="100vw" height="100vh"></iframe>
            </div>
        </body>
        </html>
    `;

    popupWindow.document.open();
    popupWindow.document.write(popupContent);
    popupWindow.document.close();
});
});
function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result);
        };
        reader.onerror = (event) => {
            reject(event.error);
        };
        reader.readAsDataURL(file);
    });
}

 document.getElementById("registration-form").addEventListener("submit", function (event) {
    var firstName = document.getElementById("first-name").value.trim();
    var middleName = document.getElementById("middle-name").value.trim();
    var lastName = document.getElementById("last-name").value.trim();
    var fatherName = document.getElementById("father-name").value.trim();
    var motherName = document.getElementById("mother-name").value.trim();
    var dob = document.getElementById("dob").value.trim();
    var birthPlace = document.getElementById("birth-place").value.trim();
    var address = document.getElementById("address").value.trim();
    var district = document.getElementById("district").value.trim();
    var country = document.getElementById("country").value.trim();

    if (firstName === "") {
        alert("First Name is required");
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (middleName === "") {
        alert("Middle Name is required");
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (lastName === "") {
        alert("Last Name is required");
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (fatherName === "") {
        alert("Father Name is required");
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (motherName === "") {
        alert("Mother Name is required");
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (dob === "") {
        alert("DOB is required");
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (birthPlace === "") {
        alert("Birth Place is required");
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (address === "") {
        alert("Address is required");
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (district === "") {
        alert("District is required");
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (country === "") {
        alert("Country is required");
        event.preventDefault(); // Prevent form submission
        return;
    }
});

// PDF

function generatepdf(){
    const element=document.getElementById("registrationForm");
    html2pdf().from(element).save();

}

// email and mobile validation
function validateMobile(input) {
    const mobileNumber = input.value.trim();
    
    if (isNaN(mobileNumber) || mobileNumber.length !== 10) {
        return false; // Invalid mobile number
    }
    
    return true; // Valid mobile number
}


form.addEventListener('submit', e => {
    e.preventDefault();

    const mobileInput = document.getElementById('mobile-number');
    const emailInput = document.getElementById('email');

    if (!validateMobile(mobileInput)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (!validateEmail(emailInput)) {
        alert("Please enter a valid email address.");
        return;
    }

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message));
});



// JavaScript code in your script.js file
document.getElementById("verify-otp-button").addEventListener("click", function () {
    document.getElementById("otp-popup").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("otp-popup").style.display = "none";
});

