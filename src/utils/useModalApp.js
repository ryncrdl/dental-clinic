const useModalApp = () => {
  const openDownloadApp = () => {
    const downloadApp = document.getElementById("download-app");
    downloadApp.style.display = "grid";
  };

  return { openDownloadApp };
};

export default useModalApp;
