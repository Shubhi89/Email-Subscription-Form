const scriptURL = 'https://script.google.com/macros/s/AKfycbxb8VLNp8OWZ-KDIFduFBFCeVsQVsZdIE6m5fzEoN_S5YSOlusoi6ew8cxtAHIivOXa/exec';
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You For Subscribing!";
            setTimeout(function(){
                msg.innerHTML = '';
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
