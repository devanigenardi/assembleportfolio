import Link from 'next/link';

const links = [
    {label: "Slack HTML5 Localization",href: "https://productionpreviewsite.com/preview/campaigns/view/60956053070556095605307058", },
    {label: "Facebook Video Localization",href: "https://productionpreviewsite.com/preview/campaigns/view/617c2ce915551617c2ce915553",},
    {label: "Instagram Video Localization", href: "https://productionpreviewsite.com/preview/campaigns/view/617c305362f99617c305362f9b",},
    {label: "Lululemon Video Localization", href: "https://productionpreviewsite.com/preview/campaigns/view/617ae314cdee9617ae314cdeeb",},
    {label: "Maven Medical Marketing - SUBCOLADE (FR):", href: "https://assemble-wam-bucket.s3.amazonaws.com/emails/Maven-Medical-Marketing/1046/fr/index.html",},
    {label: "Maven Medical Marketing - SUBCOLADE (EN):", href: "https://assemble-wam-bucket.s3.amazonaws.com/emails/Maven-Medical-Marketing/1046/en/index.html",},
  ];

export default function localization(){
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