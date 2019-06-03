const panels = document.querySelectorAll('.panel')
panels.forEach(panel => panel.addEventListener('click',function(e){
    this.classList.toggle('open')
}))
panels.forEach(panel => panel.addEventListener('transitionend',function(e){
    if(e.propertyName.includes('flex'))
        this.classList.toggle('open-active')
}))