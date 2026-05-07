const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://the-portfolio-lac.vercel.app";

export const siteConfig = {
  name: "Alfred Okwiri | Full Stack Developer",
  description:
    "Personal portfolio of Alfred Okwiri — results-driven full stack developer with 7+ years of experience building responsive web interfaces and robust backend systems.",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    linkedin: "https://www.linkedin.com/in/Alfred-Okwiri",
    github: "https://github.com/Alfredok",
  },
  mailSupport: "okwirialfred@gmail.com",
};
