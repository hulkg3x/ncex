var btnLogout = document.querySelector("#btn-logout");
console.log(btnLogout);

btnLogout.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 200);
})