import { InlineWidget,PopupWidget, openPopupWidget } from "react-calendly"

export default function Calendly(){
    return (
        <PopupWidget
            branding
            color="#00a2ff"
            pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: true,
                hideLandingPageDetails: false,
                primaryColor: '00a2ff',
                textColor: '4d5055'
            }}
            text="Schedule a call with Roger"
            textColor="#ffffff"
            url="https://calendly.com/hiroger/30min"
        />
    );
}