import type { Content } from "./content.interface";

export const content: Content = {
  meta: {
    title: "Qubayl Alqahtani — Data Engineer & Data Scientist",
    description:
      "Data Engineer and Data Scientist with 6+ years of experience in ML systems, data pipelines, and production analytics.",
  },
  nav: {
    logo: "Qubayl",
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    langToggle: "ع",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Qubayl Alqahtani",
    title: "Expert Data Engineer",
    subtitle:
      "I build data pipelines and ML systems — from raw data to production.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "Download Resume",
  },
  about: {
    sectionTag: "/ about",
    sectionTitle: "About Me",
    paragraphs: [
      "I'm a data professional with 7+ years of experience spanning data science, machine learning, and data engineering. My work centers on turning raw data into reliable systems — from building predictive models to deploying production-grade pipelines.",
      "I've worked across the full data lifecycle — developing ML models for real-world optimization problems and building the MLOps infrastructure to take those models to production reliably at scale.",
      "I hold a Master's in Information Systems from King Saud University, specializing in Data Mining, Machine Learning, and NLP. I'm driven by curiosity about data and a commitment to building things that work at scale.",
    ],
  },
  experience: {
    sectionTag: "/ experience",
    sectionTitle: "Work Experience",
    items: [
      {
        company: "Ministry of Energy",
        role: "Expert Data Engineer",
        period: "Jan 2025 — Present",
        location: "Riyadh, Saudi Arabia",
        description: [
          "Build batch and real-time ETL/ELT pipelines using Python, Apache Airflow, Apache Kafka, and Apache Spark, ensuring reliable data movement across landing, staging, and production environments.",
          "Design and deploy MLOps components including model registry, artifact storage with MinIO, FastAPI-based model serving, and Airflow orchestration to ensure reproducible, scalable, and automated ML lifecycles.",
        ],
        tags: [
          "Python",
          "Apache Airflow",
          "Apache Kafka",
          "Apache Spark",
          "FastAPI",
          "MLflow",
          "MinIO",
          "SQL Server",
        ],
      },
      {
        company: "Mrsool",
        role: "Senior Data Scientist & MLOps Engineer",
        period: "Sep 2022 — Jan 2025",
        location: "Riyadh, Saudi Arabia",
        description: [
          "Led the development of predictive models to optimize courier dispatching and forecast customer demand.",
          "Deployed and maintained machine learning models in production, ensuring operational efficiency through robust MLOps practices including seamless deployment, monitoring, and automation.",
          "Enhanced an internal analytical package to include ML model management and monitoring capabilities.",
          "Built Looker Explores and dashboards for monitoring ML projects and model performance in production environments.",
        ],
        tags: [
          "Python",
          "MLflow",
          "Scikit-Learn",
          "Apache Airflow",
          "Looker",
          "MLOps",
        ],
      },
      {
        company: "Udacity",
        role: "Session Lead — Data Analyst Nanodegree",
        period: "Sep 2022 — Jan 2023",
        location: "Remote",
        type: "Part-time",
        description: [
          "Facilitated student learning by delivering lectures, workshops, and assignments on data organization, pattern recognition, predictive modeling, and data communication.",
          "Provided instruction on data visualization including histograms, bar charts, and frequency plots.",
          "Taught students methods for evaluating dataset quality and implementing data cleaning and preprocessing procedures.",
        ],
        tags: ["Python", "Data Analytics", "Data Visualization", "Teaching"],
      },
      {
        company: "Mrsool",
        role: "Data Scientist",
        period: "May 2020 — Sep 2022",
        location: "Riyadh, Saudi Arabia",
        description: [
          "Built a users' complaints classification model to enhance the ticket assigning system.",
          "Conducted exploratory data analysis (EDA) to identify valuable insights and patterns, supporting data-driven business strategies.",
          "Worked on feature engineering to optimize the performance of machine learning models.",
          "Searched for patterns in data that can provide solutions to business problems or create new business opportunities.",
        ],
        tags: [
          "Python",
          "Scikit-Learn",
          "NLP",
          "EDA",
          "Feature Engineering",
          "SQL",
        ],
      },
      {
        company: "Saudi Information Technology Company",
        role: "Associate Data Scientist",
        period: "Jun 2018 — May 2020",
        location: "Riyadh, Saudi Arabia",
        description: [
          "Analyzed pools of data using mathematical and computer science skills under the guidance of senior data scientists.",
          "Handled data gathering and preprocessing to feed into machine learning models.",
          "Built supervised and unsupervised machine learning algorithms and used pre-trained models based on business needs.",
        ],
        tags: [
          "Python",
          "SQL",
          "Scikit-Learn",
          "Pandas",
          "NumPy",
          "Machine Learning",
        ],
      },
    ],
  },
  projects: {
    sectionTag: "/ projects",
    sectionTitle: "Featured Work",
    githubLabel: "GitHub",
    demoLabel: "Live Demo",
    items: [
      {
        title: "Pre-Production Data Quality Framework",
        arabicTitle: "إطار جودة البيانات في بيئة ما قبل الإنتاج",
        description:
          "Established a Pre-Prod data environment for testing and validating data quality before production deployment. Set up Airflow orchestration and Git-based governance to standardize development workflows, improve pipeline reliability, and enable systematic code review across the team.",
        tags: ["Apache Airflow", "Python", "SQL Server", "Data Quality", "Git"],
      },
      {
        title: "API Watcher & Unified Connector",
        arabicTitle: "نظام مراقبة API وحزمة الاتصال الموحدة",
        description:
          "Built an API Watcher system to automatically detect structural changes in external API interfaces and trigger real-time alerts, ensuring data pipeline continuity. Developed a unified API Connector package to centralize subscription management and reduce future maintenance overhead.",
        tags: ["Python", "FastAPI", "Apache Airflow", "SQL Server", "API Integration"],
      },
      {
        title: "MinIO Data Lake — Incorta Integration",
        arabicTitle: "بحيرة البيانات بـ MinIO — متكاملة مع Incorta",
        description:
          "Designed and deployed a data lake using MinIO to store structured, semi-structured, and unstructured data assets. Integrated MinIO as the native data lake for Incorta, enabling direct analytics on raw data without ETL overhead. Applied data lifecycle policies across storage tiers.",
        tags: ["MinIO", "Python", "SQL Server", "Apache Airflow", "Data Engineering"],
      },
      {
        title: "Real-Time Data Engineering Pipeline",
        arabicTitle: "خط أنابيب هندسة البيانات في الوقت الفعلي",
        description:
          "End-to-end data engineering pipeline built as a personal project. Apache Kafka handles real-time streaming, Apache Spark powers large-scale data processing, and the ELK Stack (Elasticsearch, Logstash, Kibana) provides full observability. Grafana and Prometheus monitor pipeline performance, while Kafka Schema Registry manages schema validation.",
        tags: ["Apache Kafka", "Apache Spark", "Elasticsearch", "Kibana", "Grafana", "Prometheus"],
      },
      {
        title: "Order Preparation Time Prediction",
        arabicTitle: "نموذج التنبؤ بوقت تحضير الطلب",
        description:
          "ML model to predict the time it takes to prepare customer orders, optimizing courier dispatching by assigning orders based on estimated preparation time. Deployed with a real-time API for dynamic order-courier assignment.",
        tags: ["Python", "Scikit-Learn", "FastAPI", "SQL", "MLflow"],

      },
      {
        title: "Geohash Demand Forecasting",
        arabicTitle: "التنبؤ بالطلب المبني على الجيوهاش",
        description:
          "Divided Riyadh into 5-character geohashes and used historical data to forecast customer demand per zone. Deployed on AWS EC2 with a geohash heat map visualization for the supply team at Mrsool.",
        tags: [
          "Python",
          "AWS EC2",
          "Geohash",
          "Data Visualization",
          "Forecasting",
        ],

      },
      {
        title: "Trustworthiness Evaluation Model",
        arabicTitle: "نموذج تقييم الموثوقية",
        description:
          "Machine learning model that assesses the reliability of buyers and couriers at Mrsool by analyzing behavior when filing reimbursement complaints. Expedited the resolution process and increased customer retention.",
        tags: [
          "Python",
          "Scikit-Learn",
          "Classification",
          "SQL",
          "MLflow",
        ],

      },
      {
        title: "Conversational AI for Courier Support",
        arabicTitle: "مساعد ذكاء اصطناعي لدعم السائقين",
        description:
          "Contextual chatbot to address frequently asked questions from Mrsool's couriers, reducing the workload on customer service agents by automating responses to common queries.",
        tags: ["Python", "Rasa", "NLP", "Conversational AI", "Flask"],

      },
    ],
  },
  skills: {
    sectionTag: "/ skills",
    sectionTitle: "Technical Skills",
    categories: [
      {
        name: "Data Science & ML",
        items: [
          "Python",
          "Scikit-Learn",
          "TensorFlow",
          "XGBoost",
          "NLP",
          "Computer Vision",
        ],
      },
      {
        name: "Data Engineering",
        items: [
          "Apache Spark",
          "Apache Airflow",
          "Apache Kafka",
          "SQL",
          "ETL/ELT",
          "SQL Server",
        ],
      },
      {
        name: "MLOps & Serving",
        items: [
          "MLflow",
          "BentoML",
          "FastAPI",
          "MinIO",
          "Looker",
          "Docker",
        ],
      },
      {
        name: "Tools & Libraries",
        items: ["Pandas", "NumPy", "OpenCV", "NLTK", "Rasa", "GIT"],
      },
    ],
  },
  resume: {
    sectionTag: "/ resume",
    sectionTitle: "Resume",
    subtitle: "Download a full copy of my resume in PDF format.",
    button: "Download Resume",
    filePath: "/Qubayl_Alqahtani_Resume.pdf",
  },
  contact: {
    sectionTag: "/ contact",
    sectionTitle: "Get In Touch",
    subtitle:
      "I'm open to opportunities and collaborations. Feel free to reach out via email or any of the channels below.",
    email: "qubayl.qh@gmail.com",
    phone: "+966 53 520 9044",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/qubayl-alqahtani",
        label: "linkedin.com/in/qubayl-alqahtani",
      },
    ],
  },
  footer: {
    copyright: "© 2025 Qubayl Alqahtani. All rights reserved.",
    madeWith: "Built with Next.js & TypeScript",
  },
};
