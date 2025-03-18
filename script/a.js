function home() {
        document.getElementById('micrologo').addEventListener('click', function() {
        window.location.href = '../index.html'
    })
}


function goTo() {
    document.getElementById('introBtn').addEventListener('click', function() {
        window.location.href = 'templates/store.html'
    })

    document.getElementById('helpBtn').addEventListener('click', function() {
        window.location.href = 'templates/contact.html'
    })
}


function goTo2() {
    const accountBtn = document.getElementById('accountBtn');

    accountBtn.addEventListener("click", function () {
        const currentPath = window.location.pathname;
        if (currentPath.endsWith('index.html')) {
            window.location.href = 'templates/account.html'
        }
         else {
            window.location.href = 'account.html#home'
        }
    });
}