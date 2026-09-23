import AI from "../assets/Assest/AI.webp";
import GD from "../assets/Assest/GD.webp";
import PROMPT from "../assets/Assest/PROMPT.webp";

export const liveSessions = [
  {
    id: 1,
    day: "Wednesday",
    title: "AI for Beginners",
    instructor: "Deborah Dominion",
    image: AI,
    times: ["11:44 AM", "1:00 PM", "5:00 PM"],
  },
  {
    id: 2,
    day: "Friday",
    title: "Graphic Design",
    instructor: "James Oluwole",
    image: GD,
    times: ["10:00 AM", "2:00 PM", "6:00 PM"],
  },
  {
    id: 3,
    day: "Sunday",
    title: "Introduction to Web Development",
    instructor: "Ikponmwosa Ogiehor",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    times: ["11:30 AM", "3:30 PM", "5:30 PM"],
  },
  {
    id: 4,
    day: "Monday",
    title: "Building Modern Interfaces",
    instructor: "Joshua Isaac",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    times: ["10:00 AM", "1:00 PM", "4:00 PM"],
  },
  {
    id: 5,
    day: "Wednesday",
    title: "Understanding Data & APIs",
    instructor: "Sarah Job",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    times: ["9:00 AM", "12:00 PM", "4:00 PM"],
  },
  {
    id: 6,
    day: "Friday",
    title: "Introduction to Prompt Engineering",
    instructor: "God'swill Agiama",
    image: PROMPT,
    times: ["11:00 AM", "2:30 PM", "5:00 PM"],
  },
];

export function getNextDate(dayName) {
  const today = new Date();
  const days = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };
  const difference = (days[dayName] - today.getDay() + 7) % 7;
  const nextDate = new Date(today);

  nextDate.setDate(today.getDate() + difference);

  return nextDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}
