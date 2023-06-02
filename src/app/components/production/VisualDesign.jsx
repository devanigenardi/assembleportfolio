import Link from 'next/link';

const links = [
    {label: "SCUBAPRO",href: "https://productionpreviewsite.com/work-examples/pdfs/scubapro.pdf", },
    {label: "Trial Interactive",href: "https://bit.ly/2OuNYCb",},
    {label: "Women + Wealth", href: "https://bit.ly/3rZDXuc",},
    {label: "Aston Kaanapali Shores", href: "https://productionpreviewsite.com/work-examples/assemble-catalog/pdfs/Aston%20Kaanapali%20Shores.pdf",},
    {label: "Botanika Banners", href: "https://productionpreviewsite.com/work-examples/assemble-catalog/pdfs/Botanika%20Banners.pdf",},
    {label: "Nike Banners 1", href: "https://productionpreviewsite.com/work-examples/assemble-catalog/pdfs/Nike%20Banners%201.pdf",},
    {label: "Nike Banners 2", href: "https://productionpreviewsite.com/work-examples/assemble-catalog/pdfs/Nike%20Banners%202.pdf"  ,},
    {label: "NMOSD - Print", href: "https://productionpreviewsite.com/work-examples/assemble-catalog/pdfs/NMOSD%20-%20Print.pdf",},
    {label: "Triptodur - Print", href: "https://productionpreviewsite.com/work-examples/assemble-catalog/pdfs/Triptodur%20-%20Print.pdf",},
    {label: "Neurocrine TDAW - Print", href: "https://productionpreviewsite.com/work-examples/assemble-catalog/pdfs/Neurocrine_TDAW%20-%20Print.pdf",}
  ];

export default function visualdesign(){
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