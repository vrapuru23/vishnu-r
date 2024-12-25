import React, { useEffect } from 'react';
import useInView from "react-cool-inview";
import { useRecoilState } from "recoil";
import { contactState } from "../../Atoms/contactAtom";
import PageTitle from '../subComponents/ReusableComponents/PageTitle';
import MapCard from "../subComponents/ContactComponents/MapCard";
import ContactForm from "../subComponents/ContactComponents/ContactForm";

const Contact = ({ contact, titles }) => {
    return (
        <div id="Contact" className="h-screen mt-8 p-4">
            <PageTitle title={titles.title} sub={titles.sub} />
            <section className="relative text-gray-400 body-font">
                <div className="container flex flex-wrap h-full px-5 mx-auto sm:flex-nowrap">
                    <MapCard contact={contact} />
                    <ContactForm contact={contact} />
                </div>
            </section>
        </div>
    )
}

export default Contact
