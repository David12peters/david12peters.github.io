const div = document.getElementById('div1');
   // const ctx = div.getContext('2d');
    div.width = 720;
    div.height = 1300;
    const fullscreenButton = this.document.getElementById('fullscreenButton');

function toggleFullscreen(){
    if (!document.fullscreenElement) {
        div.requestFullscreen().catch(err => {
            alert(`Error, can't enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}
fullscreenButton.addEventListener('click', toggleFullscreen);