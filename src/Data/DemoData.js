import sarah from "../assets/sarah.jpg";
import john from "../assets/john.jpg";
import varun from "../assets/varun.jpg";
import anuj from "../assets/anuj.jpg";

const DUMMYDATA = [
  {
    messages: [
      { message: "Hello Friend . How are you ?", from: "varun" },
      { message: "I am good how are you ?", from: "anuj" },
      { message: "Doing Good", from: "varun" },
      { message: "When is our Exam ?", from: "varun" },
    ],
  },
  {
    messages: [
      { message: "Wanna go out?", from: "john" },
      { message: "I am in collage", from: "sarah" },
      { message: "Tell me your free time", from: "john" },
      { message: "at 6.00pm", from: "sarah" },
      { message: "At Hidenburg", from: "sarah" },
      { message: "Done", from: "john" },
    ],
  },
];

// [Varun, Anuj], [John, Sarah]
export default DUMMYDATA;

export const personData = [
  {
    id: "varun",
    name: "Varun Ahuja",
    img: varun,
  },
  {
    id: "anuj",
    name: "Anuj Sinha",
    img: anuj,
  },
  {
    id: "john",
    name: "John Deo",
    img: john,
  },
  {
    id: "sarah",
    name: "Sarah Smith",
    img: sarah,
  },
];
