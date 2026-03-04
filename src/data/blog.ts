export interface BlogPost {
  title: string;
  description: string;
  category: string;
  date?: string;
  tags: string[];
  readTime: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    title:
      "Unlocking Insights from News Articles: A Comprehensive Text Analysis Project",
    description:
      "End-to-end project using NewsAPI and Python to fetch, clean, and analyze news articles about companies, including text preprocessing, visualization, sentiment analysis, NER, and topic modeling.",
    category: "Data Science",
    date: "2023-01-15",
    tags: ["NLP", "Text Analytics", "Python"],
    readTime: "7 min",
    url: "https://www.linkedin.com/pulse/unlocking-insights-from-news-articles-comprehensive-text-srikar-r-2c9kc",
  },
  {
    title: "Imbalanced Dataset and Ways to Handle It",
    description:
      "Explains the challenges of working with imbalanced datasets, why accuracy is misleading, and how to use metrics like F1-score along with resampling strategies to build robust models.",
    category: "Machine Learning",
    date: "2022-11-10",
    tags: ["Imbalanced Data", "F1-Score", "Resampling"],
    readTime: "5 min",
    url: "https://www.linkedin.com/pulse/imbalanced-dataset-ways-handle-srikar-anudeep-remani-husvc",
  },
  {
    title:
      "Navigating the Curves: Embracing Polynomial Regression for Enhanced Predictive Analytics",
    description:
      "Shows how moving from linear to polynomial regression lets you capture non-linear relationships, with Python examples that illustrate feature expansion and model evaluation.",
    category: "Machine Learning",
    date: "2022-09-01",
    tags: ["Regression", "Python", "Modeling"],
    readTime: "6 min",
    url: "https://www.linkedin.com/pulse/navigating-curves-embracing-polynomial-regression-enhanced-remani-en2sc",
  },
];
