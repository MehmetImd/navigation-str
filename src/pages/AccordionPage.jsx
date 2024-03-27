import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id: 1,
            label: 'Can I use React on a project?',
            content: 'Tested and optimized for Vercel Edge, Cloudflare Workers and Fastly Edge.'
        },
        {
            id: 2,
            label: 'Can I use Javascript on a project?',
            content: 'Tested and optimized for Vercel Edge, Cloudflare Workers and Fastly Edge.'
        },
        {
            id: 3,
            label: 'Can I use Python on a project?',
            content: 'Tested and optimized for Vercel Edge, Cloudflare Workers and Fastly Edge.'
        },
    ];
    
    return (
        <Accordion items={items}/>
    )
};

export default AccordionPage;