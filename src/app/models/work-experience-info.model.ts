import { WorkExperienceDetails } from "./work-experience-details.model";

export class WorkExperienceInfo {
    image: string;
    imageDarkMode: string;
    customImageStyle?: string;
    companyUrl: string;
    companyName: string;
    date: string;
    reference?: string;
    position: string;
    tech: string;
    highlights: string[];
    details: WorkExperienceDetails;
}
