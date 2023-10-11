document.querySelectorAll('.card').forEach(card => {
    card.addEventListener("mousemove", (event)=>{
        const mouseX = event.pageX - card.offsetLeft;
        const mouseY = event.pageY - card.offsetTop;

        card.style = `--mouseX: ${mouseX}px; --mouseY: ${mouseY}px;`;
    });

    card.addEventListener("mouseleave", ()=>{
        card.removeAttribute("data-mouseX");
        card.removeAttribute("data-mouseY");
    });
});