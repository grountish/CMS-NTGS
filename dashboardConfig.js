export default {
  widgets: [
    {
      name: "project-users",
      layout: {
        width: "small",
        height: "small",
      },
    },
    
    {
      name: "netlify",layout: {
        width: "small",
        height: "small",
      },
      options: {
        title: "Website links",
        sites: [
          {
            title: "Production",
            apiId: "28447afb-8324-4c67-b92d-a442787b6fb7",
            buildHookId: "605287d667994a13908ccaa2",
            name: "ntgsevents",
          },
        ],
      },
    },
  ],
};
