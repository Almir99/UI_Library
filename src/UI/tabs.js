class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll(".trigger")
        this.content = container.querySelectorAll(".content")
    }
    init(){
        this.tabs.forEach(tab =>{
            tab.addEventListener("click", e => {
                this.toggleTabs(e);
                this.toggleContent(e)
            })
        })
    }
    toggleTabs(tab){
        this.tabs.forEach(tab => tab.classList.remove("active"));
        tab.target.classList.add("active");
    }
    toggleContent(contents){
        this.content.forEach(item => item.classList.remove("active"));
        const selektor = contents.target.getAttribute("data-target");
        const content = this.container.querySelector(selektor)
        content.classList.add("active");


    }
}
export {Tabs as default};