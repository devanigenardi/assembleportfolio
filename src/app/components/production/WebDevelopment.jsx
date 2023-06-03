import Link from 'next/link';

const links = [
    {label: "Hilton",href: "https://botanikaresort.com/"},
    {label: "Aston Whaler Hotel",href: "https://www.astonwhaler.com/"},
    {label: "Tumor Treating Fields Therapy", href: "https://www.tumortreatingfieldstherapy.com/",},
    {label: "TKG Corp Site",href: "https://thekinetixgroup.com/"},
    {label: "Biosimilars Neurologyr", href: "https://biosimilarsinneurology.com/"},
    {label: "Incyte Virtual Booth",href: "https://incyte-virtualbooth.netlify.app/"},
    {label: "Ziextenzo Payer Coverage map",href: "https://payercoverage.ziextenzo.com/"},
    {label: "Hemgenix", href: "https://www.hemgenix.com/"},
    {label: "Cerave Pediatrics",href: "https://ceravepediatrics.com/"},
    {label: "Afya",href: "https://www.afya.org/"},
  ];

export default function WebDevelopment(){
    return (
        <div>
            <ul>
                {links.map(({label, href}) => (
                    <li>
                        <a target="_blank"  className='body-links text-[16px] text-[#2A55A2] mb-1' href={href}>{label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}