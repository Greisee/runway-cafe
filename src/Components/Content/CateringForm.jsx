import {React} from "react"
import FormfacadeEmbed from "@formfacade/embed-react";


export default function CateringForm(){

    return(
        <div>
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSe4RutC9ygGaq2tEpJdqf69Ju9D__6ZDiABFkWOSLuqJSIiwA/viewform?embedded=true"
                 width="640" height="1220"
                 allowtransparency="true">
                    Loading…
            </iframe>
            {/* 
            <FormfacadeEmbed
                formFacadeURL="https://formfacade.com/include/116395220280955667804/form/1FAIpQLSe4RutC9ygGaq2tEpJdqf69Ju9D__6ZDiABFkWOSLuqJSIiwA/classic.js/?div=ff-compose"
                onSubmitForm={() => console.log('Form submitted')}
            />*/}
        </div>
    )
}