export interface ContactProps {
  title: string;
  content: string;
  id: string;
  t: any;
}

export interface IFormValues {
  name: string;
  email: string;
  message: string;
  challenges: string[];
  otherChallenge?: string;
}

export const challengeOptions = [
  "Challenge in maintaining consistent code review quality and timeliness across different time zones",
  "Team members are blocked but don't report it promptly, leading to delayed problem resolution and missed deadlines",
  "Asynchronous communication delays causing bottlenecks in decision-making and project progress",
  "Difficulty in detecting early signs of project risks or technical debt when team members work independently",
  "Team members working on unplanned tasks without proper alignment with sprint goals or priorities",
  "Spending excessive time in back-and-forth chat conversations that could be resolved quickly in person",
  "Uncertainty about whether missed deadlines are due to technical challenges or poor time management",
  "Difficulty in measuring individual productivity without micromanaging or creating unnecessary pressure"
];
