type ExperienceModel = {
    heading?: string,
    body: string,
}

export type WorkExperienceDetails = {
    introduction: string;
    aboutEmployer: string;
    learningGoals: string[];
    learningGoalsReflection: string;
    experience: ExperienceModel[];
    conclusion: string;
    acknowledgments: string;
}
