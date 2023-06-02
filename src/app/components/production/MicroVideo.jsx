import Link from 'next/link';

const links = [
    {label: "Advil",href: "https://productionpreviewsite.com/preview/campaigns/view/5ed8483d5221d5ed8483d52220", },
    {label: "TRoyal Canin",href: "https://productionpreviewsite.com/preview/campaigns/view/5ed8457d0cfbd5ed8457d0cfc0",},
    {label: "Trial Interactive", href: "https://productionpreviewsite.com/preview/campaigns/view/617c30908a8c8617c30908a8ca",},
    {label: "Valtoco", href: "https://productionpreviewsite.com/preview/campaigns/view/602e7f472bb55602e7f472bb57",},
    {label: "Dojolvi", href: "https://productionpreviewsite.com/preview/campaigns/view/5fa3f90363f0a5fa3f90363f0c",},
    {label: "The Galien Foundation", href: "https://app.frame.io/reviews/9b525d1a-7fe2-4daf-8304-09f70690a99c",},
    {label: "Mirati Therapeutics", href: "https://app.frame.io/reviews/1f046d66-3743-4d1c-877c-f28d174b4c32",},
    {label: "Uplizna", href: "https://app.frame.io/reviews/c8cd905d-25f0-45f3-8ae9-aee6c23e75eb",},
  ];

export default function microvideo(){
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