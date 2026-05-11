import { FaCode, FaChartLine, FaServer, FaFigma, FaRocket, FaComments } from 'react-icons/fa';

export const ServiceData = [
    {
        id: 1,
        title: "Modern Website Development",
        description: "Building responsive, high-performance websites using the latest industry standards and frameworks like React and Next.js.",
        icon: <FaCode />,
        features: ["React / Next.js", "Responsive Layouts", "Clean Code Architecture"]
    },
    {
        id: 2,
        title: "SaaS Dashboard Development",
        description: "Architecting complex admin dashboards and analytics systems with multi-role access and real-time data visualization.",
        icon: <FaChartLine />,
        features: ["Redux Toolkit", "Prisma / MySQL", "Role-Based Access"]
    },
    {
        id: 3,
        title: "Full Stack Web Applications",
        description: "Delivering end-to-end solutions with robust backend integrations, secure APIs, and seamless authentication systems.",
        icon: <FaServer />,
        features: ["Node.js / Express", "REST & GraphQL APIs", "Firebase / Auth"]
    },
    {
        id: 4,
        title: "UI/UX Implementation",
        description: "Transforming complex Figma designs into pixel-perfect, interactive, and responsive web interfaces.",
        icon: <FaFigma />,
        features: ["Figma to React", "Tailwind CSS", "Framer Motion"]
    },
    {
        id: 5,
        title: "Performance Optimization",
        description: "Aggressive speed optimization and SEO improvements to ensure top-tier Core Web Vitals and search rankings.",
        icon: <FaRocket />,
        features: ["Lazy Loading", "Lighthouse Score Fixes", "Image Optimization"]
    },
    {
        id: 6,
        title: "Real-Time Features",
        description: "Implementing live communication systems including instant messaging, notifications, and real-time data sync.",
        icon: <FaComments />,
        features: ["WebSockets / Socket.io", "Push Notifications", "Live Data Updates"]
    }
];

