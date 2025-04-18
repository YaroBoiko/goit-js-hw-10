import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector(".form").addEventListener("submit", e => {
  e.preventDefault();

  const delay = e.target.elements.delay.value;
  const state = e.target.elements.state.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      state === "fulfilled" ? resolve(delay) : reject(delay);
    }, delay);
  })
    .then(delay => {
      iziToast.success({
        title: "✅",
        message: `Fulfilled promise in ${delay}ms`,
        position: "topRight",
      });
    })
    .catch(delay => {
      iziToast.error({
        title: "❌",
        message: `Rejected promise in ${delay}ms`,
        position: "topRight",
      });
    });

  e.target.reset();
});
