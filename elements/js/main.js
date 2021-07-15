const input = document.getElementById("input");
const submit = document.getElementById("submit");
const iframes = document.getElementsByTagName("iframe");

// addEventListener
submit.addEventListener("click", function () {
    const link = input.value;
    for (let i = 0; i < iframes.length; i++) {
        const iframe = iframes[i];
        iframe.setAttribute('src', link);

    }


})