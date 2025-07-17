

export default function ContactForm(){
    return(
        <div>
             <iframe id="JotFormIFrame-251974813642059" 
                title="Contact" onLoad={()=>window.parent.scrollTo(0,0)} 
                allowtransparency="true" 
                background = "transparent"
                style = {{minWidth:"752px", height:"50vh"}}
                src="https://form.jotform.com/251974813642059">
            </iframe> 
        </div>
    )
}