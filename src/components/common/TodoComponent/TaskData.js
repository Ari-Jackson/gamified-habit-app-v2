export const taskData = [
  {
    id: 1,
    taskTitle: "Do the dishes",
    description: "Do BEFORE 6PM/Tori comes home",
    due: { date: "Mar 8", relative: "Today" },
    tags: ["home", "work", "kids"],
    reminders: [{}],
    priority: 1,
    difficulty: 2,
    project: "Inbox",
    scheduled: { date: "Mar 8", relative: "Today" },
    parentTask: {},
    subtasks: [{}],
    reward: {
      xp: 20,
      gold: 50,
    },
  },
  {
    id: 2,
    taskTitle: "Homework",
    description: "YOU'RE FAILING THIS CLASS DON'T FORGET",
    due: { date: "Mar 8", relative: "Today" },
    tags: ["home", "school"],
    reminders: [{}, {}],
    priority: 4,
    difficulty: 1,
    project: "Inbox",
    scheduled: { date: "Mar 8", relative: "Today" },
    parentTask: {},
    subtasks: [{}],
    reward: {
      xp: 70,
      gold: 150,
    },
  },
  {
    id: 3,
    taskTitle: "Fowers for Tori",
    description: "",
    due: { date: "Mar 8", relative: "Today" },
    tags: ["home"],
    reminders: [],
    priority: 4,
    difficulty: 0,
    project: "Inbox",
    scheduled: { date: "Mar 8", relative: "Today" },
    parentTask: {},
    subtasks: [{}],
    reward: {
      xp: 20,
      gold: 50,
    },
  },
  {
    id: 4,
    taskTitle: "Laundry Pick-up",
    description: "They close at 9",
    due: { date: "Mar 8", relative: "Today" },
    tags: ["home", "kids"],
    reminders: [{}],
    priority: 1,
    difficulty: 1,
    project: "Inbox",
    scheduled: { date: "Mar 8", relative: "Today" },
    parentTask: {},
    subtasks: [{}],
    reward: {
      xp: 10,
      gold: 40,
    },
  },
];

export const projectData = [
  {
    id: 1,
    projectTitle: "Inbox",
    sections: [
      {
        id: "column-1",
        title: "",
        taskIds: [1, 2, 3, 4],
      },
    ],
    // Facilitate reordering of the columns
    sectionOrder: ["column-1"],
  },
];

export const areaData = [
  {
    id: 1,
    areaTitle: "Dash",
    sections: [],
    sectionsOrder: ["section-1"],
  },
  {
    id: 2,
    areaTitle: "Today",
    sections: [
      {
        id: "section-1",
        widgetType: "planner",
      },
      {
        id: "section-2",
        widgetType: "task-list",
      },
    ],
    sectionsOrder: ["section-1"],
  },
  {
    id: 3,
    areaTitle: "Upcoming",
    sections: [
      {
        id: "section-1",
        widgetType: "planner",
      },
    ],
    sectionsOrder: ["section-1"],
  },
];
