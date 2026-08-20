const fs = require('fs');

const productsCode = `const products = [
    {
        id: 1,
        title: 'Restaurant & Fine Dining Platform',
        description: 'Engineered a high-conversion booking engine and menu interface, designed to capture local search traffic and drive digital reservations.',
        image: '/portfolio_imgs/restaurant_web.webp',
        link: 'https://restaurant-mu-rust.vercel.app/',
        tags: ['Next.js', 'Tailwind CSS', 'Conversion UI'],
        gradient: 'from-red-600 to-orange-500'
    },
    {
        id: 2,
        title: 'Enterprise Job Portal',
        description: 'A multi-lingual, high-performance job board built on React and Firebase. Engineered to handle thousands of concurrent users with sub-second latency.',
        image: '/portfolio_imgs/jobportal.webp',
        link: 'https://job-portal-website-project.vercel.app/',
        tags: ['React.js', 'Firebase', 'i18n', 'Scalability'],
        gradient: 'from-rose-500 to-fuchsia-500'
    },
    {
        id: 3,
        title: 'TaskFlow AI',
        description: 'An autonomous productivity engine utilizing OpenAI. We replaced manual task management with an agentic workflow that executes actions automatically.',
        image: '/portfolio_imgs/TaskFlowAI.webp',
        link: 'https://giaic-q4-h2-p2.vercel.app/',
        tags: ['Next.js', 'Python', 'OpenAI', 'Agentic AI'],
        gradient: 'from-slate-500 to-gray-400'
    },
    {
        id: 4,
        title: 'FitCore — Membership Platform',
        description: 'A membership acquisition platform engineered to convert local search traffic into high-ticket gym sign-ups via an optimized sales funnel.',
        image: '/portfolio_imgs/gym_web.webp',
        link: 'https://gym-website-three-azure.vercel.app/',
        tags: ['Next.js', 'CMS', 'Lead Capture'],
        gradient: 'from-orange-500 to-red-500'
    },
    {
        id: 5,
        title: 'BrewHaus — Digital Storefront',
        description: 'A seamless online ordering and brand experience platform, built to capture mobile traffic and drive footfall to physical locations.',
        image: '/portfolio_imgs/cafe_web.webp',
        link: 'https://caf-cosmo.vercel.app/',
        tags: ['React', 'Framer Motion', 'Mobile-First'],
        gradient: 'from-amber-700 to-brown-500'
    },
    {
        id: 6,
        title: 'LuxeLiving — E-Commerce Engine',
        description: 'A high-ticket e-commerce architecture powered by Next.js and Sanity CMS. Engineered for sub-second checkouts and flawless product discovery.',
        image: '/portfolio_imgs/furniture_web.webp',
        link: 'https://giaic-hackathon-3-five.vercel.app/',
        tags: ['Next.js', 'Sanity CMS', 'E-commerce'],
        gradient: 'from-amber-600 to-yellow-400'
    },
    {
        id: 7,
        title: 'Abeer Essence — Direct-to-Consumer',
        description: 'A luxury brand interface built with Framer Motion and React, elevating perceived brand value and optimizing the D2C sales funnel.',
        image: '/portfolio_imgs/perfume_web.webp',
        link: 'https://abeeressence.store/',
        tags: ['React', 'D2C', 'UI/UX'],
        gradient: 'from-rose-500 to-fuchsia-500'
    },
    {
        id: 8,
        title: 'MER Crafts — B2B Agency Platform',
        description: 'A brutalist B2B agency platform designed to capture enterprise leads. Built with modular React components for infinite scalability.',
        image: '/portfolio_imgs/mer_tech_web.webp',
        link: 'https://mer-tech-solutions.vercel.app/',
        tags: ['React', 'B2B Lead Gen', 'UI/UX'],
        gradient: 'from-indigo-500 to-blue-600'
    },
    {
        id: 9,
        title: 'SofaSpace — Headless Commerce',
        description: 'An interactive, headless e-commerce display that uses dynamic visuals and minimal UI to increase conversion rates and average order values.',
        image: '/portfolio_imgs/furniture_2_web.webp',
        link: 'https://marketplace-builder-hackathon-2025-proje-okashanadeems-projects.vercel.app/',
        tags: ['React', 'Headless', 'Conversion Rate'],
        gradient: 'from-slate-500 to-gray-400'
    }
];

export default products;
`;

fs.writeFileSync('src/components/data/products.ts', productsCode);
console.log('Successfully updated products.ts');
