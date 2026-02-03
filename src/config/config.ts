// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Udditee Kapoor',
    title: 'Data Science & Economics Student | Aspiring Data Analyst',
    image: getAsset('images/profile.png'), // Replace with your profile image
    description:
      'I am a first-year BSc Data Science and Economics student at Christ University, Bangalore, with a passion for understanding how data, business, and human behavior intersect.\n' +
      '\n' +
      'My experience spans nonprofit organizations, conglomerates, and research firms where I've handled data validation, observed business strategy, and supported real-world projects. I recently co-founded MyG.O.A.T, a platform helping students find better colleges in India.\n' +
      '\n' +
      'I specialize in turning complex information into actionable insights through data analysis and visualization. Currently seeking internship opportunities in research, analytics, or strategy.\n' +
      '\n' +
      'Fluent in English, Hindi, Bangla, and Gujarati. When I'm not analyzing data, you'll find me exploring photography, cooking, or baking.',
    tagline: 'Transforming data into insights, one analysis at a time.',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Udditee Kapoor – Data Science & Economics Student',
    description: "Portfolio website showcasing my education, research, projects, and experience in data science, economics, and analytics.",
  },

  animatedText: ['Data Analyst', 'Economics Enthusiast', 'Problem Solver', 'Builder'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  blogs: [
    {
      title: 'Data Analysis & Visualization Best Practices',
      url: getAsset('static_page/data_analysis_blog.html'),
    },
  ],

  education: [
    {
      institution: 'Christ (Deemed to be University)',
      degree: 'BSc Economics with Data Science',
      year: '2024–2028',
      image: getAsset('images/education/christ_university.png'),
      description: ['GPA: 3.75/4.00', 'Focus on applied data analysis and economic theory'],
    },
    {
      institution: 'Grace International School',
      degree: 'Pearson Edexcel A Levels',
      year: '2023–2025',
      image: getAsset('images/education/grace_international.png'),
      description: ['Mathematics, Economics, English', 'Dhaka, Bangladesh'],
    },
  ],

  certifications: [
    {
      title: 'Data Analysis & Visualization',
      specialization: true,
      file: getAsset('images/education/Certifications/data_analysis_cert.svg'),
      certificates: [
        { name: 'Applied Data Analysis Project', file: getAsset('images/education/Certifications/data_analysis.svg') },
        { name: 'Dashboard Development', file: getAsset('images/education/Certifications/visualization.svg') },
      ],
    },
  ],

  experience: [
    {
      title: 'Co-Founder',
      cardImage: getAsset('images/experience/mygoat.png'),
      place: 'MyG.O.A.T',
      time: '(2025 – Present)',
      desp: ['Co-founded a platform helping students find better colleges in India', 'Leading product development and user research initiatives'],
    },
    {
      title: 'Intern',
      cardImage: getAsset('images/experience/bengal_industries.png'),
      place: 'Bengal Industries',
      time: '(Oct 2025 – Nov 2025)',
      desp: ['Collaborated with sales and marketing teams to observe operational workflows', 'Identified process improvements increasing data entry efficiency'],
    },
    {
      title: 'Volunteer',
      cardImage: getAsset('images/experience/vialisa.png'),
      place: 'Via-Lisa',
      time: '(Apr 2024 – Jul 2024)',
      desp: ['Facilitated English learning sessions for teenage girls', 'Participated in financial literacy initiatives and observed marketing practices'],
    },
    {
      title: 'Intern',
      cardImage: getAsset('images/experience/policy_exchange.png'),
      place: 'Policy Exchange Bangladesh',
      time: '(Oct 2023 – Nov 2023)',
      desp: ['Validated critical datasets for government projects ensuring accuracy and consistency', 'Performed structured data entry supporting research presentations and policy briefs'],
    },
  ],

  projects: [
    {
      title: 'MyG.O.A.T - College Discovery Platform',
      cardImage: getAsset('images/project/mygoat_project.png'),
      description: 'Co-founded a platform that helps students discover and evaluate colleges across India, providing data-driven insights for better educational decisions.',
      Githublink: 'https://github.com/udditeekapoor/mygoat',
    },
    {
      title: 'Applied Data Analysis & Visualization',
      cardImage: getAsset('images/project/data_viz_project.png'),
      description: 'End-to-end data analysis project involving data sourcing, cleaning, analysis, and visualization using interactive dashboards to present actionable insights.',
      Githublink: 'https://github.com/udditeekapoor/data-analysis-project',
    },
  ],

  research: [
    {
      title: 'Data-Driven Insights in Economic Decision Making',
      authors: 'Udditee Kapoor',
      conferences: 'Christ University Research Symposium',
      researchYr: 2025,
      image: getAsset('images/research/economics_data.png'),
      citation: {
        vancouver:
          'Kapoor U. Data-Driven Insights in Economic Decision Making. Christ University Research Symposium, 2025.',
      },
      abstract:
        'Exploring the intersection of data analytics and economic theory to improve decision-making processes in business contexts.',
      link: 'https://example.com/your-research',
    },
  ],

  books: [
    {
      title: 'Data Analysis for Beginners',
      description: 'A comprehensive guide to getting started with data analysis and visualization.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'kapoorudditee@gmail.com',
    linkedin: 'https://www.linkedin.com/in/udditee-kapoor/',
    github: 'https://github.com/udditeekapoor',
    googleScholar: 'https://scholar.google.com/citations?user=YOURID',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export default siteConfig;
