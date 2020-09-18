/**
 * Handler of forms
 */

class PostForm {
  constructor(option) {
    this.form = option.form;
    this.url = option.url;
    this.method = option.method;
    this.alert = option.alertOpt.alert;
    this.classSuccess = option.alertOpt.classSuccess;
    this.classError = option.alertOpt.classError;
    this.alertMessage = option.alertOpt.message;
    this.form.forEach((item) => {
      item.addEventListener("submit", (e) => {
        this.sendRequest(e);
      });
    });
  }

  createRequest(form) {
    const data = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: data,
    })
      .then((resp) => {
        if (resp.status === 200) {
          this.resetFormElement(form);
          this.showAlertSuccess('Sent!');
        } else {
          this.showAlertError('Error :(');
        }
      })
      .catch((error) => console.error(error));
  }

  sendRequest(e) {
    e.preventDefault();
    this.createRequest(e.currentTarget);
  }

  resetFormElement(form) {
    form.reset();
  }

  showAlertSuccess(message) {
    this.alert.classList.add(this.classSuccess);
    this.alertMessage.textContent = message;
    this.hideAlert(this.classSuccess);
  }

  showAlertError(error) {
    this.alert.classList.add(this.classError);
    this.alertMessage.textContent = error;
    this.hideAlert(this.classError);
  }

  hideAlert(className) {
    setTimeout(() => this.alert.classList.remove(className), 700);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelectorAll(".form--post");
  if (form) {
    (() =>
      new PostForm({
        form: form,
        url: "",
        method: "POST",
        alertOpt: {
          alert: document.querySelector(".alert"),
          classSuccess: "alert--success",
          classError: "alert--error",
          message: document.querySelector(".alert__message"),
        },
      }))();
  }
});
