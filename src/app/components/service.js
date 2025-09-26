import emailjs from "emailjs-com";
export default function formsubmit(values) {
  console.log(values);
  return emailjs
    .send(
      "service_fzn6yzo",
      "template_8oegg3p",
      {
        name: values.name,
        email: values.email,
        message: values.message,
      },
      "Srmj6mmTTcYBchobA"
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
}
