import apkAndriod from "../apk/dentalapp.apk"

const DownloadApp = () => {
  window.onclick = (e) => {
    const downloadApp = document.getElementById("download-app")
    if (e.target === downloadApp) {
      downloadApp.style.display = "none"
    }
  }
  return (
    <section id="download-app">
      <div className="download-app-container">
        <p>For Booking, Download mobile app below.</p>
        <a href={apkAndriod} download="dentalapp.apk">
          <button id="btn-andriod">For Android</button>
        </a>
        <button id="btn-ios">For IOS</button>
      </div>
    </section>
  )
}

export default DownloadApp
