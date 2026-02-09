export interface Project {
    title: string;
    category: string;
    image: string;
    url: string;
    description: string;
}

export const projects: Project[] = [
    {
        title: "Proyekt 1",
        category: "Veb Sayt",
        image: "/proyekt1.png",
        url: "http://bakudivers.az",
        description: "Azərbaycan Milli Dalğıc Qrupunun rəsmi veb saytı. Peşəkar dalğıc təlimləri və xidmətləri üçün platforma.",
    },
    {
        title: "Proyekt 2",
        category: "Təhsil Portalı",
        image: "/proyekt2.png",
        url: "https://bbu-next.vercel.app/az",
        description: "Bakı Biznes Universitetinin rəsmi saytı. Tələbələr və müəllimlər üçün müasir təhsil platforması.",
    }
];
