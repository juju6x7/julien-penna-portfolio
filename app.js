const sr = ScrollReveal({
    reset: true,
});

sr.reveal('h2', {
    origin: 'top',
    distance: '50px',
    duration: 2000
});

sr.reveal('.stack-left', {
    origin: 'left',
    distance: '200px',
    duration: 2000
})

sr.reveal('.stack-right', {
    delay: 500,
    origin: 'right',
    distance: '300px',
    duration: 2000
})

sr.reveal('.card', {
    delay: 300,
    duration: 800,
    easing: "ease-in-out",
    interval: 500
})

sr.reveal('.btn',{
    scale: 0.5,
    delay: 300,
    interval: 300
});