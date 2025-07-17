

export default function ContactForm(){
    return(
        <div>
             <iframe id="JotFormIFrame-251974813642059" 
                title="Contact" onLoad={()=>window.parent.scrollTo(0,0)} 
                allowtransparency="true" 
                allow="geolocation; microphone; camera; fullscreen; payment" 
                style = {{minWidth:"752px", height:"50vh", frameBorder:"none"}}
                src="https://form.jotform.com/251974813642059">
            </iframe> 
        </div>
    )
}