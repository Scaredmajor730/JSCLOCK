setInterval(() => {
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    document.querySelector('.hour').style.transform = `rotate(${hrotation}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${mrotation}deg)`;
    document.querySelector('.second').style.transform = `rotate(${srotation}deg)`;
}, 1000);