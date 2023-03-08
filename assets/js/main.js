function myCalc () {
    return {
        display: document.querySelector('.display'),
        
        clearText () {
            this.display.value = ``;
        },
    
        doCalc () {
            try {
            this.display.value = eval(this.display.value);
            }
            catch {
                alert("Conta Inválida!");
            }},
            
        clickButtons() {
            document.addEventListener('click', e => {
                if (e.target.classList.contains('btn-num')) 
                this.display.value += e.target.innerText;
                if (e.target.classList.contains('btn-clear')) 
                this.clearText();
                if (e.target.classList.contains('btn-del')) 
                this.display.value = this.display.value.slice(0, -1);
                if (e.target.classList.contains('btn-eq'))
                this.doCalc();
            })
        
            document.addEventListener(`keypress`, e => {
                if (e.keyCode === 13) {
                    this.doCalc();
                }
            })
        }
    }
} 

myCalc().clickButtons();