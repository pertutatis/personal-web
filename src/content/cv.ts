// CV content (English). Source: LinkedIn profile export, October 2026.

export type CvMetric = {
  value: string;
  label: string;
};

export type CvHighlightGroup = {
  title: string;
  items: { title: string; text: string }[];
};

export type CvRole = {
  company: string;
  title: string;
  period: string;
  summary: string;
  highlightGroups: CvHighlightGroup[];
};

export type CvEarlierRole = {
  title: string;
  company: string;
  period: string;
};

export type CvSidebarSection = {
  icon: string;
  title: string;
  // "tags" renders short items as pills, "list" stacks them with their detail
  display: 'tags' | 'list';
  items: { text: string; detail?: string }[];
};

export const cvHeadline = {
  title: 'Engineering Leader',
  summary: 'I scale engineering organizations that drive revenue and growth.',
};

export const cvMetrics: CvMetric[] = [
  { value: '5 → 23+', label: 'people in the tribe' },
  { value: '4', label: 'autonomous squads' },
  { value: '45%', label: 'of company revenue' },
  { value: '−66%', label: 'cycle time' },
  { value: '1', label: 'voluntary departure in 4 years' },
  { value: '180B', label: 'events per day' },
];

export const cvRoles: CvRole[] = [
  {
    company: 'Seedtag',
    title: 'Engineering Manager · Ad Exchange tribe',
    period: 'Mar 2022 – Present',
    summary:
      "I lead the scaling phase of Seedtag's highest-revenue business line. My role evolved from managing a single team to building and leading a multi-squad organization of 4 autonomous teams and 23+ people across Engineering, Product and Data.",
    highlightGroups: [
      {
        title: 'Leadership & org design',
        items: [
          {
            title: 'Organizational scaling',
            text: 'Grew the tribe from 5 to 23+ people by splitting the domain into sub-domains aligned with product needs (DDD), increasing squad autonomy and speed.',
          },
          {
            title: 'Manager of managers',
            text: 'Directly managing Engineering Managers, grown through both internal promotions and external key hires.',
          },
          {
            title: 'Financial accountability',
            text: "Headcount planning and optimization of the tribe's tooling and SaaS budget.",
          },
          {
            title: 'Operational excellence',
            text: 'Delivery processes and engineering culture that cut cycle time by 66%.',
          },
          {
            title: 'Retention & culture',
            text: 'One voluntary departure in four years of hypergrowth, with a high-performance, results-oriented culture.',
          },
          {
            title: 'Talent development',
            text: '20% internal promotion and role-change rate in a senior engineering team within a single year.',
          },
        ],
      },
      {
        title: 'Business impact & technical strategy',
        items: [
          {
            title: 'Revenue growth',
            text: 'The tribe drives 45% of company revenue, supporting 70–100% year-over-year business growth.',
          },
          {
            title: 'Strategic planning',
            text: 'Tribe planning, roadmaps and OKRs with Product leadership, plus headcount budgets and hiring strategy.',
          },
          {
            title: 'High-scale systems',
            text: 'Technical strategy for an ecosystem handling 180 billion events per day and a CDN serving 1.5 PB monthly to 200 million devices.',
          },
          {
            title: 'AI transformation',
            text: 'Exploring and implementing AI-driven delivery models that reshape team composition and organizational leverage.',
          },
        ],
      },
    ],
  },
  {
    company: 'Jeff',
    title: 'Engineering Team Lead',
    period: 'Mar 2020 – Mar 2022',
    summary:
      'Led the Internal Users squad and later the new Services and Laundry Entrepreneurs squads, building SaaS suites for fitness, laundry and beauty entrepreneurs with a team of frontend and backend engineers.',
    highlightGroups: [
      {
        title: 'Highlights',
        items: [
          {
            title: 'Purpose and context',
            text: 'Made sure the team understood the strategy and was aligned with it.',
          },
          {
            title: 'Product culture',
            text: 'Planned quarterly objectives with the product manager and product designer, fostering product thinking in the team.',
          },
          {
            title: 'Technical direction',
            text: "Helped engineers make technical decisions grounded in the company's strategy, scalability and tech vision.",
          },
          {
            title: 'People',
            text: 'Owned hiring, onboarding and the growth of the engineers, and improved delivery through agile metrics.',
          },
        ],
      },
    ],
  },
];

export const cvEarlierCareerSummary =
  'Before leading teams I spent years building products end to end as a frontend and product developer in startups and agencies, and co-founded a design studio.';

export const cvEarlierRoles: CvEarlierRole[] = [
  { title: 'Senior Frontend Product Engineer', company: 'Jeff', period: '2019 – 2020' },
  { title: 'Frontend Developer', company: 'Homyspace', period: '2019' },
  { title: 'Technical Consultant (freelance)', company: 'Startups and agencies', period: '2017 – 2019' },
  { title: 'Senior Frontend & Product Developer', company: 'WAM We Are Marketing', period: '2017 – 2019' },
  { title: 'Frontend Developer', company: 'Infinety', period: '2015 – 2017' },
  { title: 'Front-end Developer', company: 'Artvisual', period: '2014 – 2015' },
  { title: 'Co-founder', company: 'Llima Estudio Creativo', period: '2013 – 2017' },
];

export const cvLinkedInUrl = 'https://www.linkedin.com/in/diego-pertusa/';

export const cvSidebarSections: CvSidebarSection[] = [
  {
    icon: '🎯',
    title: 'Focus areas',
    display: 'tags',
    items: [
      { text: 'Organizational design & team topologies' },
      { text: 'Engineering management (manager of managers)' },
      { text: 'Strategic planning & budgeting' },
      { text: 'Hiring & talent development' },
      { text: 'Domain-Driven Design' },
    ],
  },
  {
    icon: '🌐',
    title: 'Languages',
    display: 'list',
    items: [
      { text: 'Spanish', detail: 'Native' },
      { text: 'English', detail: 'Full professional' },
      { text: 'French', detail: 'Full professional' },
    ],
  },
  {
    icon: '🎓',
    title: 'Education',
    display: 'list',
    items: [
      { text: 'IGNITE Mentoring Program', detail: 'Lidr.co · 2021' },
      { text: 'ID3 Postgraduate, Interactive Digital Design and Development', detail: 'ESAT · 2013 – 2014' },
      { text: 'BSc Industrial and Product Design Engineering', detail: 'Universitat Politècnica de València · 2009 – 2013' },
    ],
  },
  {
    icon: '🏆',
    title: 'Recognition',
    display: 'list',
    items: [
      { text: 'Awwwards Honorable Mention', detail: 'Azulev project' },
      { text: '“CSS Custom Properties” talk', detail: 'VLCTechFest 2018' },
      { text: '“Remote work at Jeff”', detail: 'InVision' },
    ],
  },
];
