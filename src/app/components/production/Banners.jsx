import Link from 'next/link';

const links = [
    {label: "TD Bank",href: "https://productionpreviewsite.com/preview/campaigns/view/5ed83f745ab5b5ed83f745ab5e", },
    {label: "TD Bank",href: "https://productionpreviewsite.com/preview/campaigns/view/5ed83e16d31e75ed83e16d31e9/",},
    {label: "Nike Air Max", href: "https://productionpreviewsite.com/preview/campaigns/view/5ed83cb688d235ed83cb688d26",},
    {label: "Nike Air Zoom", href: "https://productionpreviewsite.com/preview/campaigns/view/5ed83dc9548755ed83dc954878",},
    {label: "Adidas", href: "https://productionpreviewsite.com/preview/campaigns/view/5ed838c81ac835ed838c81ac85",},
    {label: "Target", href: "https://productionpreviewsite.com/preview/campaigns/view/6369769122c986369769122c99",},
    {label: "Advil", href: "https://productionpreviewsite.com/preview/campaigns/view/5ed84024a60cc5ed84024a60ce",},
    {label: "Nexium", href: "https://productionpreviewsite.com/preview/campaigns/view/5ed83bbb8f7135ed83bbb8f715",},
    {label: "Zogenix", href: "https://productionpreviewsite.com/preview/campaigns/view/6165a3daa29246165a3daa2927",},
    {label: "Fintepla", href: "https://productionpreviewsite.com/preview/campaigns/view/61681e271322261681e2713225",},
    {label: "Dynamic Example", href: "https://productionpreviewsite.com/preview/campaigns/view/622a69487d6a0622a69487d6a5",}
  ];

export default function banners(){
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