function sendMail() {
    console.log("Hello")
  let templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_gaeazze", "template_grf3dcv", templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Send mail")
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
}
