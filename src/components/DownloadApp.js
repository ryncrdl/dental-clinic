const DownloadApp = () => {
  window.onclick = (e) => {
    const downloadApp = document.getElementById("download-app")
    if (e.target === downloadApp) {
      downloadApp.style.display = "none"
    }
  }
  const onDownloadAndriodApp = () => {
    const link =
      "https://drive.google.com/uc?export=download&id=1R3uBCSRO5kImyLZ-dXjLAYssoQPz8I2K"
    window.open(link, "_blank")
  }

  return (
    <section id="download-app">
      <div className="download-app-container">
        <p>
          Download the app, register or log in, and click the button below based
          on your phone.
        </p>
        <button id="btn-andriod" onClick={() => onDownloadAndriodApp()}>
          Dental App For Andriod
        </button>
        <button id="btn-ios">Dental App For IOS</button>
      </div>
    </section>
  )
}

export default DownloadApp
