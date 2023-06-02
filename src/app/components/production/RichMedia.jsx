import Link from 'next/link';

const links = [
    {label: "Dockers",href: "https://productionpreviewsite.com/preview/campaigns/view/5e330dfd0fca35e330dfd0fca5"},
    {label: "Adidas",href: "https://portfolio.assemblestudio.com/adidas-alpha-bounce-beyond/"},
    {label: "Skyrizi", href: "https://bit.ly/2Wd0oia",},
    {label: "Humira",href: "https://www.google.com/doubleclick/studio/externalpreview/#/ssNrzKQTSgeRdz6vKgBOjA?creativeId=61762382"},
    {label: "Store Locator", href: "https://productionpreviewsite.com/preview/campaigns/view/60c8bacb11e5960c8bacb11e5b"},
    {label: "GSK",href: "https://productionpreviewsite.com/preview/campaigns/view/609d41cf0c240609d41cf0c242"}
  ];

export default function RichMedia(){
    return (
        <div>
            <ul>
                {links.map(({label, href}) => (
                    <li>
                        <a className='text-[16px] text-[#2A55A2] block underline mb-1' href={href}>{label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}