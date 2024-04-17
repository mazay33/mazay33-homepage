export default defineEventHandler((event) => {
  return {
    name: "Andrew Mazaev",
    occupation: "Digital Craftsman",
    roles: ["Artist", "Developer", "Designer"],
    work: {
      description:
        "Professional web developer capable professional looking and user-friendly websites from stratch and writes performance optimized, reusable and refactorable codes. Professionally developed 5 web applications with multiple Javascript frameworks. Hungry for knowledge, collaborative individual and possess analytical skills. Enjoys problem solving and willing to adapt to changes in the industry to stay on top.",
      portfolio: {
        timeline: [
          {
            year: "2000",
            title: "Born in Moscow, Russia",
            description:
              "From a young age, I was fascinated by technology and spent countless hours tinkering with computers.",
          },
          {
            year: "2018 - 2021",
            title: "Moscow Aviation Institute",
            description:
              'Studied at the Moscow Aviation Institute in the department of "Control Systems, Computer Science, and Power Engineering". My major was "Software Engineering" under the faculty of "Software and Information Systems".',
          },
          {
            year: "2021",
            title: "53xapps",
            description: "Worked at 53xapps. Moscow",
            projects: {
              mskvolley: {
                title: "MskVolley",
                link: "/works/mskvolley",
              },
            },
          },
          {
            year: "2022",
            title: "NewEraMedia",
            description: "Worked at NewEraMedia",
            projects: {
              marketdata: {
                title: "MarketData",
                link: "/works/marketdata",
              },
            },
          },
          {
            year: "2023",
            title: "Go Global World",
            // description: "Worked at Go Global World",
            projects: {
              marketdata: {
                title: "Go Global World App",
                link: "https://www.goglobal.world/",
              },
            },
          },
          {
            year: "2023 to present",
            title: "Working in Analytical Center under the Government of the Russian Federation",
            site: "https://www.ac.gov.ru/",
            siteName: "ac.gov.ru",
            // description: "Worked at Go Global World",
            // projects: {
            //   marketdata: {
            //     title: "Go Global World App",
            //     link: "https://www.goglobal.world/",
            //   },
            // },
          },
          // {
          //   year: "2022 - 2023",
          //   title: "Go Global World",
          //   description: "Worked at Go Global World. Moscow",
          //   link: "/works/marketdata",
          //   linkText: "Go Global World App",
          // },
          // {
          //   year: "2023 to present",
          //   title: "Analytical Central",
          // },
        ],
        interests: ["Art", "Music", "Photography", "Football"],
        social_media: {
          github: "mazay33",
          instagram: "mazay33",
        },
      },
    },
  };
});
