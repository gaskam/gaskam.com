document.querySelectorAll('.card').forEach(card => {
    const cardSize = 290;
    const disableTime = 200;
    let mouseX = 0;
    let mouseY = 0;
    let currentAnimation = null;
    card.addEventListener("mousemove", (event)=>{
        mouseX = event.pageX - card.offsetLeft;
        mouseY = event.pageY - card.offsetTop;

        card.style = `  --mouseX: ${mouseX}px; 
                        --mouseY: ${mouseY}px; 
                        --angleX: ${-((mouseX / cardSize) - 0.5) * 4}deg;
                        --angleY: ${((mouseY / cardSize) - 0.5) * 2}deg;`;
    });

    function Evolution(x) {
        return 0.1 / (2*Math.exp((x*5/disableTime)+3));
    }

    card.addEventListener("mouseleave", ()=>{
        card.style = `  --mouseX: ${-cardSize}px; 
                        --mouseY: ${-cardSize}0px; 
                        --angleX: 0deg;
                        --angleY: 0deg;`;
        let start, previousTimeStamp;
        
        function step(timeStamp) {
            if (start === undefined) {
                start = timeStamp;
            }
            const elapsed = timeStamp - start;
        
            if (previousTimeStamp !== timeStamp) {
                // Math.min() is used here to make sure the element stops at exactly 200px
                let evolution = Evolution(elapsed);
                evolution = Math.max(Math.min(evolution, 1), 0);
                card.style = `  --mouseX: ${-cardSize}px; 
                                --mouseY: ${-cardSize}0px; 
                                --angleX: ${evolution * mouseX}deg;
                                --angleY: ${evolution * mouseY}0deg;`;
            }
        
            if (elapsed < disableTime) {
                // Stop the animation after disableTime seconds
                previousTimeStamp = timeStamp;
                currentAnimation = window.requestAnimationFrame(step);
            }
        }
        
        currentAnimation = window.requestAnimationFrame(step);
    });

    card.addEventListener("mouseenter", ()=>{
        if (currentAnimation) {
            window.cancelAnimationFrame(currentAnimation);
        }
    });
});