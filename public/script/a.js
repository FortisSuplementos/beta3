function home() {
        document.getElementById('micrologo').addEventListener('click', function() {
        window.location.href = '../index.html'
    })
}


function goTo() {
    document.getElementById('introBtn').addEventListener('click', function() {
        window.location.href = 'store.html#store'
    })
}

function goTo2() {
    document.getElementById('accountBtn').addEventListener('click', function() {
        window.location= 'account.html#home'
    })
}