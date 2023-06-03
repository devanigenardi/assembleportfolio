import Link from 'next/link';

const links = [
    {label: "Citi",href: "https://productionpreviewsite.com/work-examples/emails/citi" },
    {label: "Ofirmev",href: "https://productionpreviewsite.com/work-examples/emails/ofirmev"},
    {label: "Facts on Hand", href: "https://productionpreviewsite.com/work-examples/emails/factsonhand"},
    {label: "Soliris", href: "https://productionpreviewsite.com/work-examples/emails/soliris"},
    {label: "INOmax", href: "https://productionpreviewsite.com/work-examples/emails/inomax"},
    {label: "URM", href: "https://productionpreviewsite.com/work-examples/emails/urm"},
    {label: "IKEA", href: "https://productionpreviewsite.com/work-examples/emails/ikea"},
  ];
  
export default function Emails(){
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