if (location.hash === "#from-lgk" || sessionStorage.getItem("from-lgk")) {
    document.body.classList.add("from-lgk")
}

sessionStorage.setItem("from-lgk", "true")

const poweredByElement = document.querySelector(".powered-by")

poweredByElement.innerHTML = /*html*/`
    <div style="display: flex; gap: 1rem">
        <a href="https://lgk.io/site/contact">Contact / Kontakt</a>
        <a href="https://lgk.io/site/imprint">Imprint / Impressum</a>
        <a href="https://lgk.io/site/legal">Privacy Policy / Datenschutzerklärung</a>
    </div>
`