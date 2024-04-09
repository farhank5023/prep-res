import "./Landing.css";
import BookTabs from "./BookTabs";
import  { cardData, initializeCardData } from "./cardData";
import { useState, useEffect } from "react";
import Footer from "../Footer";
import RequestForm from "../RequestForm";
import DeleteForm from "../DeleteForm";
import ReportForm from "../ReportForm";
import Terms from "../Terms";
import Navbar from "./Navbar";

export default function Landing() {
  const handleChange = (e) => {
    document.getElementById("search-box").innerHTML = "";
    const filtered1 = cardData[0][0].filter((data) => {
      return data.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    const filtered2 = cardData[1][0].filter((data) => {
      return data.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    const filtered3 = cardData[2][0].filter((data) => {
      return data.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    const filtered4 = cardData[3][0].filter((data) => {
      return data.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    const filtered5 = cardData[4][0].filter((data) => {
      return data.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    const filtered6 = cardData[5][0].filter((data) => {
      return data.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    const filtered7 = cardData[6][0].filter((data) => {
      return data.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    const filtered = filtered1
      .concat(filtered2)
      .concat(filtered3)
      .concat(filtered4)
      .concat(filtered5)
      .concat(filtered6)
      .concat(filtered7);

    if (filtered.length === 0) {
      document.getElementById("search-box").innerHTML =
        "<p class='search-no'>No Book Found</p>";
    }
    if (e.target.value === "") {
      while (filtered.length > 0) {
        filtered.pop();
      }
    }
    document.getElementById("form").addEventListener("focusout", (e) => {
      setTimeout(() => {
        document.getElementById("search-box").innerHTML = "";
      }, 300);
    });
    filtered.forEach((e) => {
      if (e.category === "Books") {
        document.getElementById("search-box").innerHTML =
          document.getElementById("search-box").innerHTML +
          '<a href="' +
          e.url +
          '" class="search-res">' +
          '<svg style={{width: "14px";height: "16px"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>' +
          '<span style="color: #9ca3af; fontFamily : poppin-regular">Books </span> ' +
          e.title +
          "</a><br/>";
      } else if (e.subcategory === "Skill-Based") {
        document.getElementById("search-box").innerHTML =
          document.getElementById("search-box").innerHTML +
          '<a href="' +
          e.url +
          '" class="search-res">' +
          '<svg style={{width: "14px";height: "16px"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M512 96c0 50.2-59.1 125.1-84.6 155c-3.8 4.4-9.4 6.1-14.5 5H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c53 0 96 43 96 96s-43 96-96 96H139.6c8.7-9.9 19.3-22.6 30-36.8c6.3-8.4 12.8-17.6 19-27.2H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-53 0-96-43-96-96s43-96 96-96h39.8c-21-31.5-39.8-67.7-39.8-96c0-53 43-96 96-96s96 43 96 96zM117.1 489.1c-3.8 4.3-7.2 8.1-10.1 11.3l-1.8 2-.2-.2c-6 4.6-14.6 4-20-1.8C59.8 473 0 402.5 0 352c0-53 43-96 96-96s96 43 96 96c0 30-21.1 67-43.5 97.9c-10.7 14.7-21.7 28-30.8 38.5l-.6 .7zM128 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM416 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>' +
          '<span style="color: #9ca3af; fontFamily : poppin-regular">Roadmaps </span> ' +
          e.title +
          "</a><br/>";
      } else if (e.subcategory === "Role-Based") {
        document.getElementById("search-box").innerHTML =
          document.getElementById("search-box").innerHTML +
          '<a href="' +
          e.url +
          '" class="search-res">' +
          '<svg style={{width: "14px";height: "16px"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M512 96c0 50.2-59.1 125.1-84.6 155c-3.8 4.4-9.4 6.1-14.5 5H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c53 0 96 43 96 96s-43 96-96 96H139.6c8.7-9.9 19.3-22.6 30-36.8c6.3-8.4 12.8-17.6 19-27.2H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-53 0-96-43-96-96s43-96 96-96h39.8c-21-31.5-39.8-67.7-39.8-96c0-53 43-96 96-96s96 43 96 96zM117.1 489.1c-3.8 4.3-7.2 8.1-10.1 11.3l-1.8 2-.2-.2c-6 4.6-14.6 4-20-1.8C59.8 473 0 402.5 0 352c0-53 43-96 96-96s96 43 96 96c0 30-21.1 67-43.5 97.9c-10.7 14.7-21.7 28-30.8 38.5l-.6 .7zM128 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM416 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>' +
          '<span style="color: #9ca3af; fontFamily : poppin-regular">Roadmaps </span> ' +
          e.title +
          "</a><br/>";
      } else if (e.subcategory === "Interview Questions") {
        document.getElementById("search-box").innerHTML =
          document.getElementById("search-box").innerHTML +
          '<a href="' +
          e.url +
          '" class="search-res">' +
          '<svg style={{width: "14px";height: "16px"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>' +
          '<span style="color: #9ca3af; fontFamily : poppin-regular">Prep Material </span> ' +
          e.title +
          "</a><br/>";
      } else if (e.subcategory === "Practice Questions") {
        document.getElementById("search-box").innerHTML =
          document.getElementById("search-box").innerHTML +
          '<a href="' +
          e.url +
          '" class="search-res">' +
          '<svg style={{width: "14px";height: "16px"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>' +
          '<span style="color: #9ca3af; fontFamily : poppin-regular">Prep Material </span> ' +
          e.title +
          "</a><br/>";
          
      }else if(e.category === "Higher Studies") {
        document.getElementById("search-box").innerHTML =
          document.getElementById("search-box").innerHTML +
          '<a href="' +
          e.url +
          '" class="search-res">' +
          '<svg style={{width: "14px";height: "16px"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56V456c0 13.3 10.7 24 24 24s24-10.7 24-24V124.2l12.5-2.4c16.7-3.2 31.5-8.5 44.2-13.1l0 0 0 0c3.7-1.3 7.1-2.6 10.4-3.7c15.2-5.2 30.4-9.1 51.2-9.1c25.6 0 43 6 63.5 13.3l.5 .2c20.9 7.4 44.8 15.9 79.1 15.9c32.4 0 53.7-6.8 90.5-19.6V342.9l-9.5 3.3c-41.5 14.4-55.2 19.2-81 19.2c-25.7 0-43.1-6-63.6-13.3l-.6-.2c-20.8-7.4-44.8-15.8-79-15.8c-16.8 0-31 2-43.9 5c-12.9 3-20.9 16-17.9 28.9s16 20.9 28.9 17.9c9.6-2.2 20.1-3.7 32.9-3.7c25.6 0 43 6 63.5 13.3l.5 .2c20.9 7.4 44.8 15.9 79.1 15.9c34.4 0 56.4-7.7 97.8-22.2c7.5-2.6 15.5-5.4 24.4-8.5l16.2-5.5V360 72 38.4L416.2 49.3c-9.7 3.3-18.2 6.3-25.7 8.9c-41.5 14.4-55.2 19.2-81 19.2c-25.7 0-43.1-6-63.6-13.3l-.6-.2c-20.8-7.4-44.8-15.8-79-15.8c-27.8 0-48.5 5.5-66.6 11.6c-4.9 1.7-9.3 3.3-13.6 4.8c-11.9 4.3-22 7.9-34.7 10.3L48 75.4V56z"/></svg>' +
          '<span style="color: #9ca3af; fontFamily : poppin-regular">Higher Studies</span> ' +
          e.title +
          "</a><br/>";
      } 
      else {
        document.getElementById("search-box").innerHTML =
          document.getElementById("search-box").innerHTML +
          '<a href="' +
          e.url +
          '" class="search-res">' +
          '<svg style={{width: "14px";height: "16px"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56V456c0 13.3 10.7 24 24 24s24-10.7 24-24V124.2l12.5-2.4c16.7-3.2 31.5-8.5 44.2-13.1l0 0 0 0c3.7-1.3 7.1-2.6 10.4-3.7c15.2-5.2 30.4-9.1 51.2-9.1c25.6 0 43 6 63.5 13.3l.5 .2c20.9 7.4 44.8 15.9 79.1 15.9c32.4 0 53.7-6.8 90.5-19.6V342.9l-9.5 3.3c-41.5 14.4-55.2 19.2-81 19.2c-25.7 0-43.1-6-63.6-13.3l-.6-.2c-20.8-7.4-44.8-15.8-79-15.8c-16.8 0-31 2-43.9 5c-12.9 3-20.9 16-17.9 28.9s16 20.9 28.9 17.9c9.6-2.2 20.1-3.7 32.9-3.7c25.6 0 43 6 63.5 13.3l.5 .2c20.9 7.4 44.8 15.9 79.1 15.9c34.4 0 56.4-7.7 97.8-22.2c7.5-2.6 15.5-5.4 24.4-8.5l16.2-5.5V360 72 38.4L416.2 49.3c-9.7 3.3-18.2 6.3-25.7 8.9c-41.5 14.4-55.2 19.2-81 19.2c-25.7 0-43.1-6-63.6-13.3l-.6-.2c-20.8-7.4-44.8-15.8-79-15.8c-27.8 0-48.5 5.5-66.6 11.6c-4.9 1.7-9.3 3.3-13.6 4.8c-11.9 4.3-22 7.9-34.7 10.3L48 75.4V56z"/></svg>' +
          '<span style="color: #9ca3af; fontFamily : poppin-regular">Miscellaneous </span> ' +
          e.title +
          "</a><br/>";
      }
    });
  };
  const [bookData, setBookData] = useState([
    [
      [
        {
          title: "Puzzles to Puzzle You",
          description: `"Puzzles to Puzzle You" by Shakuntala Devi is an enthralling compilation of mathematical puzzles designed to ignite the minds of novices and enthusiasts alike. Penned by one of the most celebrated mathematical prodigies of the 20th century, often referred to as the "Human Computer," this book is more than just a collection of problems; it's an adventure into the intriguing world of mathematics.`,
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/Puzzles%20to%20puzzle%20you.png?updatedAt=1699452310006",
          url: " ",
          trending: "true",
          author: "Shakuntala Devi",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "Thinking, Fast and Slow",
          description:
            '"Thinking, Fast and Slow" by Daniel Kahneman, a Nobel Prize-winning psychologist, is a groundbreaking exploration of the two systems that shape human thought processes. Kahneman delves into the dichotomy between the fast, intuitive, and emotional thinking system and the slow, deliberate, and logical system. Drawing on decades of research, he unravels the cognitive biases and errors that impact decision-making. The book not only provides a comprehensive understanding of human behavior but also offers practical insights applicable to various fields, from economics to psychology. With engaging storytelling and profound insights, Kahneman invites readers to reevaluate their thought processes, fostering a deeper understanding of how we make choices. ',
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/Thinking,%20Fast%20and%20Slow%20by%20Daniel%20Kahneman.png?updatedAt=1704365890916",
          url: " ",
          trending: "false",
          author: "Daniel Kahneman",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "Refactoring : Improving the Design of Existing Code",
          description:
            '"Refactoring" by Martin Fowler is a seminal guide illuminating strategies to enhance existing code without altering its external behavior. This book presents a catalog of proven techniques to systematically improve code structure, readability, and maintainability. This indispensable resource empowers developers to evolve software design incrementally, ensuring its continual adaptability and quality.',
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/Refactoring-%20Martin%20Fowler%20with%20contribuitions%20by%20Kent%20Beck?updatedAt=1704613836675",
          url: " ",
          trending: "false",
          author: "Martin Fowler",
          source: "",
          buyAvailable: "No",
        },
        {
          title: "Clean Code : A Handbook of Agile Software Craftsmanship",
          description:
            "Even bad code can function. But if code isn't clean,it can bring a development organization to its knees. Instead of high level processes, clean code challenges developers to prioritize simplicity and clarity, fostering a disciplined approach to crafting code that stands the test of time.",
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/Clean%20Code-%20Robert%20Cecil%20Martin?updatedAt=1704621843175",
          url: " ",
          trending: "false",
          author: "Robert Cecil Martin",
          source: null,
          buyAvailable: "No",
        },
        {
          title:
            "The Passionate Programmer : Creating A Remarkable Career In Software Development",
          description:
            '"The Passionate Programmer" by Chad Fowler offers guidance for cultivating a fulfilling career in software development. Fowler shares pragmatic advice on skill development, personal branding, career strategy, and work-life balance. With insights on mastering technology, networking, and self-marketing, this book inspires developers to craft a rewarding and impactful professional journey.',
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/The%20Passionate%20Programmer-Chad%20Fowler?updatedAt=1704613338277",
          url: " ",
          trending: "false",
          author: "Chad Fowler",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "Think Like A Programmer ",
          description: `"Think Like A Programmer" by V. Anton Spraul is a beginner's gateway to problem-solving and programming. Through puzzles and practical examples, it teaches problem-solving strategies, algorithmic thinking, and coding techniques. With a focus on breaking down complex problems, this book empowers beginners to tackle coding challenges with confidence and creativity.`,
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/Think%20Like%20A%20Programmer-%20V.%20Anton%20Spraul?updatedAt=1704613931190",
          url: " ",
          trending: "false",
          author: "V. Anton Spraul",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "What color is your Parachute?",
          description: `"What Color Is Your Parachute?" by Richard N. Bolles is a timeless career guide that has inspired millions to find meaningful work and navigate the ever-changing job market. Bolles explores innovative strategies for career planning, providing practical exercises to uncover one's skills, passions, and values. This book goes beyond traditional job-hunting techniques, emphasizing the importance of self-discovery and adaptability. Bolles helps readers identify their unique strengths and guides them in crafting a fulfilling career path. With its insightful advice on networking, resumes, and interviewing, the book remains a go-to resource for anyone seeking to not only find a job but to discover a vocation that aligns with their true self. `,
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/what-color-is-your-parachute.png?updatedAt=1704365890749",
          url: " ",
          trending: "false",
          author: "Richard N. Bolles",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "Seven Habits of Highly Effective People",
          description: `"Seven Habits of Highly Effective People" by Stephen R. Covey is a transformative guide to personal and professional effectiveness. Covey presents a holistic approach to success, rooted in timeless principles. Through seven transformative habits, he guides readers to cultivate proactivity, prioritize what truly matters, and foster synergistic relationships. Covey's wisdom extends beyond mere productivity, emphasizing character development and a paradigm shift towards a more empowered, principle-centered life. This influential book challenges conventional thinking, offering a roadmap for personal and professional growth. Whether in leadership, relationships, or self-mastery, Covey's insights continue to inspire individuals worldwide to lead more purposeful and impactful lives. `,
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/Seven-habits-of-highly-effective-people.png?updatedAt=1704365890433",
          url: " ",
          trending: "false",
          author: "Stephan R. Covey",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "Leaders Eat Last",
          description:
            '"Leaders Eat Last" by Simon Sinek explores the dynamics of leadership, trust, and organizational culture. Drawing on real-world examples and compelling stories, Sinek delves into what makes great leaders and how they create environments that inspire collaboration and loyalty. The title metaphorically encapsulates the idea that true leaders prioritize the well-being of their teams, putting their people first. Sinek goes beyond traditional leadership paradigms, advocating for a leadership style that fosters a sense of purpose and belonging. This thought-provoking book challenges conventional leadership wisdom, offering valuable insights for leaders seeking to create thriving and resilient organizations. ',
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/Leaders%20Eat%20Last.png?updatedAt=1704365890775",
          url: " ",
          trending: "false",
          author: "Simon Sinek ",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "Your First Year in Code",
          description:
            ' "Your First Year in Code" is an invaluable companion for budding programmers embarking on their coding journey. Authored with the wisdom of experienced developers, this book provides a roadmap for the first year of your programming adventure. It covers essential programming languages, tools, and concepts, gradually building your skills from the ground up. With practical guidance, real-world projects, and troubleshooting tips, it helps you overcome challenges and gain confidence in your coding abilities. "Your First Year in Code" is an indispensable resource that ensures a strong start, setting you on a path to becoming a proficient programmer during your initial year and beyond.',
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/Your%20First%20Year%20In%20Code.png?updatedAt=1699452309806",
          url: " ",
          trending: "false",
          author: "Isaac Lyman",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "Beginning Programming for Dummies",
          description: `"Beginning Programming for Dummies" is an accessible and comprehensive guide tailored for beginners eager to embark on their programming journey. Authored with the signature simplicity and clarityof the "For Dummies" series, this book demystifies the world of coding. It introduces fundamental concepts and languages like Python, JavaScript, and Java in a reader-friendly manner. Readers can expect step-by-step tutorials, practical examples, and hands-on exercises that gradually build coding skills. Whether you're a total novice or transitioning from another field, this book from the "For Dummies" series provides a solid foundation, making programming less intimidating and more enjoyable for newcomers to the world of coding.`,
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/Beginning%20Programming%20for%20Dummies.png?updatedAt=1699452309851",
          url: " ",
          trending: "false",
          author: "Wallace Wang & Wally Wang",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "The 5AM Club Own Your Morning",
          description: `"The 5AM Club: Own Your Morning, Elevate Your Life" by Robin Sharma is a transformative guide that advocates for the power of early mornings in shaping a successful and fulfilling life. Sharma weaves a fictional narrative around the concept of the 5AM Club, where a billionaire mentor imparts life-changing wisdom to two struggling individuals. The book unfolds practical strategies for achieving peak performance, personal mastery,and holistic well-being through the disciplined habit of rising at 5 AM. Sharma's insights cover mindset shifts, productivity rituals, and the importance of continuous learning, offering readers a roadmap to unlocking their full potential and living a life of purpose. `,
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/The%205%20AM%20Club%20Own%20Your%20Morning.%20Elevate%20Your%20Life.%20by%20Robin%20Sharma.png?updatedAt=1704365891043",
          url: " ",
          trending: "false",
          author: "Robin Sharma",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "The Book of Numbers ",
          description:
            '"The Book of Numbers" by Shakuntala Devi is a fascinating exploration of the world of numbers by one of the most famous mathematical prodigies of the 20th century. Known as the "Human Computer," Shakuntala Devi had an incredible ability to perform complex calculations in her head within seconds. This book is not just a technical treatise on numbers, but a user-friendly and engaging guide that aims to demystify mathematics and make it accessible to everyone.',
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/The%20Book%20Of%20Numbers%20Shakuntala%20Devi%20by%20CAT%20Credentials.png?updatedAt=1699452309587",
          url: " ",
          trending: "false",
          author: "Shakuntala Devi",
          source: null,
          buyAvailable: "No",
        },
        {
          title:
            "Clean Architecture : A Craftsman's Guide To Software Structure And Design",
          description:
            '"Clean Architecture" by Robert C. Martin illuminates software design principles, guiding developers to create robust, adaptable systems. Martin delves into layered architectural patterns, emphasizing separation of concerns, maintainability, and testability. This essential guide empowers craftsmen to craft software with clarity, resilience, and long-term viability.',
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/Clean%20Architecture-Robert%20Cecil%20Martin?updatedAt=1704621074509",
          url: " ",
          trending: "false",
          author: "Robert Cecil Martin",
          source: "",
          buyAvailable: "No",
        },
        {
          title: "The Leader who had no title",
          description: `"The Leader Who Had No Title" by Robin Sharma is a compelling and insightful tale that challenges conventional notions of leadership. Sharma weaves a narrative around a janitor named Julian Mantle, who imparts profound leadership lessons to a young protégé. The book inspires readers to embrace leadership at all levels of life, emphasizing the importance of attitude, excellence, and purpose. Sharma's storytelling style engages and motivates, making leadership principles accessible to everyone, regardless of their title or position. Through this inspiring journey, readers discover that true leadership is a mindset and a choice, inviting them to unleash their potential and make a positive impact on the world. `,
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/THE-LEADER-WHO-HAD-NO-TITLE.png?updatedAt=1704365890427",
          url: " ",
          trending: "false",
          author: "Robin Sharma",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "Cracking the Coding Interview ",
          description: `"Cracking the Coding Interview" by Gayle Laakmann McDowell is a renowned 1500+ page book that guides aspiring software engineers through technical interviews. It covers data structures, algorithms, system design, and interview strategies, offering detailed explanations, coding exercises, and solutions in various programming languages. The book features real interview questions from top tech companies and provides insights into interview processes. With a structured approach, it's an essential resource for tech job seekers, helping them develop the skills and confidence to excel in competitive interviews and landcoveted positions in the industry.`,
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/Cracking%20the%20coding%20interview.png?updatedAt=1699452309856",
          url: " ",
          trending: "false",
          author: "Gayle Laakmann McDowell",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "Ignited Minds",
          description:
            '"Ignited Minds" by Dr. APJ Abdul Kalam is a motivational and visionary book that ignites the spirit of innovation and excellence in readers. The former President of India shares his thoughts on the immense potential of the youth and the power they hold to transform the nation. Dr. Kalam emphasizes the importance of nurturing creativity, self-confidence, and a scientific temperament. Through anecdotes and real-life examples, he inspires individuals to dream big and contribute to the progress of society. This book serves as a call to action, encouraging readers to harness their inner potential and become catalysts for positive change in their communities and beyond. ',
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/Ignited_Minds.png?updatedAt=1704365890259",
          url: " ",
          trending: "false",
          author: "Dr. APJ Abdul Kalam ",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "The Subtle Art of not giving a F*ck",
          description: `"The Subtle Art of Not Giving a F*ck" by Mark Manson is a refreshingly candid and counterintuitive guide to living a meaningful life. Manson challenges conventional self-help advice, urging readers to embrace life's inherent challenges rather than pursuing constant positivity. Through humorous anecdotes and insightful observations, he explores the importance of choosing meaningful values over superficial success. The book encourages readers to confront their fears, accept their limitations, and focus on what truly matters. With a straightforward and no-nonsense approach, Manson provides a roadmap for letting go of societal expectations and finding genuine contentment in the face of life's uncertainties. `,
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/The%20Subtle%20Art%20of%20Not%20Giving%20a%20Fuck%20by%20Mark%20Manson.png?updatedAt=1704365890753",
          url: " ",
          trending: "false",
          author: "Mark Manson",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "Code Complete(Edition 2) ",
          description:
            '"Code Complete, 2nd Edition" by Steve McConnell is a comprehensive guide to writing high-quality, maintainable software. This essential resource covers fundamental principles, best practices, and practical techniques for software construction. With insights on design, testing, debugging, and project management, it equips developers to create robust, efficient code for successful projects.',
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/Code%20Complete%20Edition-2%20By%20Steve%20McConell?updatedAt=1704613643598",
          url: " ",
          trending: "false",
          author: "Steve McConnell",
          source: "",
          buyAvailable: "No",
        },
        {
          title: "The Art of Strategy ",
          description: `"The Art of Strategy" is a unique compilation that brings together timeless wisdom from three strategic thinkers: Sun Tzu, Michael Porter, and Beyond. Sun Tzu's ancient treatise, "The Art of War," lays the foundation for strategic thinking, emphasizing the importance of planning, adaptability, and understanding the competitive landscape. Michael Porter's seminal work, "Competitive Strategy," provides modern insights into gaining a sustainable competitive advantage. Beyond's contribution adds a contemporary perspective, bridging the ancient and the modern. This book serves as a comprehensive guide to strategic thinking, offering readers a synthesis of strategic principles from different eras, making it a valuable resource for business leaders and students of strategy alike. `,
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/the-art-of-strategy.png?updatedAt=1704365891022",
          url: " ",
          trending: "false",
          author: "Sun Tzu, Michael Porter and Beyond",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "The 4-Hour Workweek",
          description:
            '"The 4-Hour Workweek" by Timothy Ferriss is a revolutionary guide that challenges the traditional notions of work and life. Ferriss shares a blueprint for achieving a more fulfilling and balanced existence by focusing on efficiency, automation, and lifestyle design. Drawing on his own experiences, he introduces the concept of "lifestyle entrepreneurship," enabling readers to escape the 9-to-5 grind and create a life of their choosing. The book covers strategies for outsourcing, remote work, and building passive income streams. Ferriss encourages readers to redefine success, reclaim their time, and pursue their passions while achieving financial freedom. A game-changer for those seeking a life less ordinary. ',
          category: "Books",
          img: "https://ik.imagekit.io/vv0gy8rix/Books/The%204-Hour%20Workweek%20Escape%209-5,%20Live%20Anywhere,%20and%20Join%20the%20New%20Rich%20(Expanded%20and%20Updated)%20by%20Timothy.png?updatedAt=1704365890437",
          url: " ",
          trending: "false",
          author: "Timothy Ferris",
          source: null,
          buyAvailable: "No",
        },
      ],
    ],
    [
      [
        {
          title: "Kubernates Roadmap By Career Credentials",
          description:
            "Embark on an enlightening journey through the dynamic universe of Kubernetes with this meticulously curated roadmap by Career Credentials. Tailored for enthusiasts aspiring to master Kubernetes, this roadmap serves as your guiding light, leading you through a step-by-step exploration from foundational elements to advanced nuances in the powerful realm of container orchestration. From grasping the fundamentals of containerization and orchestration to diving into advanced topics like Kubernetes networking and security, our roadmap ensures a systematic progression, empowering you to build a robust understanding of Kubernetes' core principles. ",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/15.png?updatedAt=1701960869377",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "JavaScript Roadmap by Career Credentials",
          description:
            "Explore the dynamic world of JavaScript with Career Credentials' comprehensive roadmap. Crafted for both novices and seasoned developers, this step-by-step guide ensures a clear and confident journey. From fundamental concepts to advanced techniques, we cover it all. With precision and practicality, our roadmap empowers you to master the intricacies of JS, making it an indispensable tool for your programming journey.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/4.png?updatedAt=1701960866299",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Go Roadmap By Career Credentials",
          description:
            "Embark on a transformative journey through the dynamic landscape of Go programming with this meticulously curated roadmap by Career Credentials. Tailored for those aspiring to become proficient in Go (Golang), this roadmap serves as your guide, leading you through a step-by-step exploration from foundational elements to advanced nuances in the versatile world of Go. Our roadmap, proudly presented by Career Credentials, is not merely a guide; it's your roadmap to success in the realm of Go programming.Through Career Credentials' focus on precision, practicality, and clarity, you'll emerge from this journey equipped with the skills and confidence needed to navigate the dynamic landscape of Go development.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/8.png?updatedAt=1701960866365",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Docker Roadmap By career credentials",
          description:
            "Embark on an illuminating journey through the expansive world of Docker with this meticulously curated roadmap by Career Credentials. Tailored for those aspiring to harness the power of containerization, this roadmap is your compass, guiding you through a step-by-step exploration from foundational elements to advanced nuances in the dynamic realm of Docker. With a commitment to excellence, we've meticulously outlined a journey that caters to beginners seeking a solid foundation and adept developers looking to harness Docker's full potential. Through Career Credentials' focus on precision, practicality, and clarity, you'll emerge from this journey equipped with the skills and confidence needed to navigate the transformative landscape of containerization with Docker.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/16.png?updatedAt=1701960868912",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Nodejs Roadmap By Career Credentials",
          description:
            "Embark on an illuminating journey through the dynamic landscape of Node.js with this meticulously curated roadmap by Career Credentials. Tailored for enthusiasts aspiring to master Node.js, this roadmap serves as your compass, guiding you through a step-by-step exploration from foundational elements to advanced nuances in the vibrant world of server-side JavaScript.  From grasping the fundamentals of asynchronous programming and building RESTful APIs to diving into advanced topics like performance optimization and microservices architecture, our roadmap ensures a systematic progression, empowering you to build a robust understanding of Node.js' core principles. Beginners will find clarity in foundational elements, while adept developers can leverage advanced nuances to elevate their Node.js proficiency.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/7.png?updatedAt=1701960866354",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Rust Roadmap by Career Credentials ",
          description: `Embark on the "Rust" roadmap, a thrilling journey into the world of systems programming with a language that blends performance and safety seamlessly. Discover the syntax intricacies and unique features that make Rust stand out. From ownership and borrowing to fearless concurrency, this roadmap guides you through mastering Rust's core concepts. Dive into building robust applications with a focus on memory safety without compromising speed. Unlock the potential of Rust for web development, networking, and beyond. Whether you're a seasoned developer or just starting, this roadmap equips you with the tools to become proficient in one of the most exciting programming languages of our time. `,
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/9.png?updatedAt=1701960866484",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "System Design Roadmap by Career Credentials",
          description: `Embark on the "System Design" roadmap, a transformative journey into architecting scalable and efficient systems. This roadmap demystifies the complexities of creating robust software solutions, covering everything from designing distributed databases to optimizing for performance. Explore key concepts such as microservices, caching, and load balancing, and learn how to make informed decisions when faced with scalability challenges. Navigate real-world scenarios, understanding trade-offs and best practices in creating systems that stand the test of scale and demand. Whether you're a seasoned engineer or a budding architect, this roadmap is your guide to mastering the art of designing systems that evolve with technological landscapes. `,
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/21.png?updatedAt=1701960871055",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Prompt Engineering Roadmap By Career Credentials",
          description:
            "Embark on an enlightening journey through the expansive landscape of prompt engineering with this meticulously curated roadmap by Career Credentials. Tailored for individuals aspiring to master the art of prompt engineering, this roadmap serves as your guiding light, leading you through a step-by-step exploration from foundational elements to advanced nuances in the captivating world of crafting effective and engaging prompts. From understanding the fundamentals of language precision and user engagement to diving into advanced topics like natural language processing and sentiment analysis, our roadmap ensures a systematic progression, empowering you to build a robust understanding of prompt engineering's core principles. Immerse yourself in comprehensive explanations of prompt engineering concepts, effective communication strategies, and best practices—all presented in a user-friendly format.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/20.png?updatedAt=1701960869120",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "MongoDB Roadmap by Career Credentials",
          description:
            "Embark on your MongoDB adventure with Career Credentials' meticulously structured roadmap. Tailored for beginners and experienced users, our guide provides clarity and confidence at every step. From the basics of NoSQL databases to advanced MongoDB intricacies, we've got you covered. Trust in our precision and practicality as you become a MongoDB expert.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/MongoDB%20Roadmap%20by%20Career%20Credentials.jpg?updatedAt=1696657533463",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Typescript Roadmap By Career Credentials",
          description:
            "Embark on a comprehensive journey through the diverse landscape of TypeScript with this meticulously curated roadmap by Career Credentials. Tailored for those aspiring to master TypeScript development, this roadmap serves as your guiding compass, leading you through a step-by-step exploration from foundational elements to advanced nuances in the dynamic world of statically-typed JavaScript. Our roadmap, proudly presented by Career Credentials, is not just a guide; it's your roadmap to success in the realm of TypeScript development. From grasping the fundamentals of TypeScript syntax and type systems to diving into advanced topics like asynchronous programming and custom decorators, our roadmap ensures a systematic progression, empowering you to build a robust understanding of TypeScript's core principles.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/11.png?updatedAt=1701960868482",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Design System Roadmap by Career Credentials",
          description:
            'The "Design Skill" roadmap is your express route to mastering the art of design. Uncover the foundations of visual aesthetics, delve into color theory, and harness the power of typography. Navigate the intricacies of user experience (UX) and user interface (UI) design, sharpening your ability to create seamless and engaging digital experiences. Elevate your proficiency with industry-standard design tools, unlocking your creative potential. From wireframing to prototyping, this roadmap guides you through practical applications, ensuring a well-rounded skill set. Embrace the iterative design process and gain insights into collaboration dynamics. Embark on your journey with "Design Skill" – your compass to crafting visually stunning and user-centric designs. ',
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/22.png?updatedAt=1701960871307",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "AWS Roadmap by Career Credentials ",
          description: `Embark on the "AWS" roadmap, a dynamic expedition through the vast landscape of Amazon Web Services. This comprehensive guide is your compass to mastering cloud computing, from fundamental concepts to advanced solutions. Dive into key services like EC2, S3, and Lambda, and learn to architect scalable and resilient systems. Uncover the secrets of AWS security, explore data management with databases and analytics, and harness the power of machine learning. Whether you're a beginner or a seasoned cloud enthusiast, this roadmap propels you to command the full potential of AWS, making you a proficient navigator in the ever-evolving world of cloud technology. `,
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/AWS.jpg?updatedAt=1704303954009",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Spring Boot Roadmap By Career Credentials",
          description:
            "Embark on an illuminating journey through the extensive world of Spring Boot with this meticulously curated roadmap by Career Credentials. Tailored for those aspiring to master Spring Boot development, this roadmap serves as your guiding light, leading you through a step-by-step exploration from foundational elements to advanced nuances in the powerful world of Java-based application development.Our roadmap, proudly presented by Career Credentials, is not just a guide; it's your roadmap to success in the world of Spring Boot development. From understanding the fundamentals of dependency injection and building RESTful APIs to diving into advanced topics like microservices architecture and Spring Cloud, our roadmap ensures a systematic progression, empowering you to build a robust understanding of Spring Boot's core principles.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/14.png?updatedAt=1701960868905",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "GraphQL Roadmap By Career Credentials",
          description:
            "Embark on a transformative journey through the dynamic world of GraphQL with this meticulously curated roadmap by Career Credentials. Tailored for enthusiasts aspiring to master GraphQL, this roadmap serves as your compass, guiding you through a step-by-step exploration from foundational elements to advanced nuances in the powerful realm of GraphQL.Our roadmap, proudly presented by Career Credentials, is not just a guide; it's your roadmap to success in the realm of GraphQL. From understanding the fundamentals of GraphQL schemas to delving into advanced topics like subscriptions and performance optimization, our roadmap ensures a systematic progression, empowering you to build a robust understanding of GraphQL's core principles. Beginners will find clarity in foundational elements, while adept developers can leverage advanced nuances to elevate their GraphQL proficiency.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/10.png?updatedAt=1701960866351",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Python Roadmap by Career Credentials",
          description:
            "This is a thoughtfully curated guide tailored for those eager to traverse the expansive terrain of Python programming. Presented by Career Credentials, this roadmap outlines a systematic journey, encompassing everything from foundational principles to advanced intricacies. Each section is methodically organized, ensuring readers advance with clarity and purpose. Crafted to be both thorough and accessible, the roadmap stands as a pivotal resource for novices and seasoned developers alike. With its emphasis on accuracy and real-world relevance, Career Credentials provides a clear and structured pathway for those committed to mastering the depths of Python.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/Python%20Roadmap%20by%20Career%20Credentials.jpg?updatedAt=1696657533574",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Computer Science Roadmap By Career Credentials",
          description:
            "Embark on a transformative exploration of the expansive field of computer science with this meticulously curated roadmap by Career Credentials. Tailored for aspiring computer scientists, this roadmap is your comprehensive guide, leading you through a step-by-step journey from foundational elements to advanced nuances in the diverse landscape of computer science.Our roadmap, proudly presented by Career Credentials, is not just a guide; it's your roadmap to success in the dynamic world of computer science.From mastering fundamental concepts to exploring cutting-edge technologies, our roadmap ensures a systematic progression, empowering you to build a strong and versatile understanding of the core principles of computer science.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/18.png?updatedAt=1701960869432",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Java Roadmap by Career Credentials",
          description:
            "This is a detailed guide curated for those aspiring to navigate the vast landscape of Java programming. Presented by Career Credentials, this roadmap delineates a step-by-step journey, covering foundational elements to advanced nuances. Each segment is meticulously structured, ensuring readers progress with clarity and confidence. Designed to be both in-depth and user-friendly, the roadmap emerges as an essential tool for beginners and adept developers alike. Through its focus on precision and practicality, Career Credentials offers a coherent and streamlined path for individuals keen on mastering the intricacies of Java.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/Java%20Roadmap%20by%20Career%20Credentials.jpg?updatedAt=1696657533395",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Design And Architecture Roadmap By Career Credentials",
          description:
            "Embark on an insightful journey through the expansive world of design and architecture with this meticulously curated roadmap by Career Credentials. Tailored for those aspiring to master the art of designing robust and scalable systems, this roadmap serves as your guiding beacon, leading you through a step-by-step exploration from foundational principles to advanced nuances in the dynamic realm of software design. Our roadmap, proudly presented by Career Credentials, is not just a guide; it's your roadmap to success in the intricate world of design and architecture.From understanding the fundamentals of software design patterns and system architecture to delving into advanced topics like microservices and cloud-native design, our roadmap ensures a systematic progression, empowering you to build a robust understanding of design principles",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/19.png?updatedAt=1701960869536",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Vue Roadmap By Career Credentials",
          description:
            "Embark on a transformative journey through the dynamic landscape of Vue.js with this meticulously curated roadmap by Career Credentials. Tailored for those aspiring to master Vue.js development, this roadmap serves as your guiding compass, leading you through a step-by-step exploration from foundational elements to advanced nuances in the vibrant world of front-end web development.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/12.png?updatedAt=1701960868688",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Angular Roadmap By Career Credentials",
          description:
            "Introducing the Angular Mastery Guide, a comprehensive roadmap meticulously crafted by Career Credentials to empower individuals on their journey through the expansive realm of Angular programming. This step-by-step guide is a beacon for both newcomers and seasoned developers, offering a well-structured path from foundational concepts to advanced intricacies. With a commitment to clarity and confidence-building, each segment of the roadmap is thoughtfully organized, ensuring a seamless progression for learners at every level.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/13.png?updatedAt=1701960868741",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "SQL Roadmap by Career Credentials",
          description:
            "Navigate the world of Structured Query Language (SQL) with ease using Career Credentials' comprehensive roadmap. Whether you're new to SQL or seeking to refine your skills, our step-by-step guide offers a clear and confident path. Covering foundational concepts to advanced SQL techniques, our approach combines precision and practicality, making it an essential tool for your SQL journey.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/SQL%20Roadmap%20by%20Career%20Credentials.jpg?updatedAt=1696657533695",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Code Review Roadmap by Career Credentials",
          description: `Embark on the "Code Review" roadmap to refine your programming prowess and collaborative skills. This journey navigates the intricacies of code evaluation, emphasizing best practices and industry standards. Learn the art of providing constructive feedback and fostering a positive code review culture. Explore static code analysis, ensuring your codebase aligns with efficiency and maintainability. Delve into version control strategies, branching models, and integration workflows for seamless collaboration. Whether you're a solo coder or part of a team, this roadmap guides you in becoming a code connoisseur, promoting excellence, and driving continuous improvement in software development. Elevate your coding game with the "Code Review" roadmap. `,
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/23.png?updatedAt=1701960871338",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "React Roadmap By Career Credentials",
          description:
            "Embark on an enriching journey through the expansive realm of React with this meticulously curated roadmap by Career Credentials. Tailored for those aspiring to master React development, this roadmap serves as your guiding compass, leading you through a step-by-step exploration from foundational elements to advanced nuances in the dynamic world of building user interfaces. Our roadmap, proudly presented by Career Credentials, is not merely a guide; it's your roadmap to success in the world of React development. From understanding the fundamentals of JSX and component-based architecture to diving into advanced topics like state management and performance optimization, our roadmap ensures a systematic progression, empowering you to build a robust understanding of React's core principles.",
          category: "Roadmaps",
          subcategory: "Skill-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Skill-based/6.png?updatedAt=1701960866304",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
      ],
    ],
    [
      [
        {
          title: "Swift Notes by Career Credentials",
          description: `"Swift Notes" by Career Credentials is your comprehensive guide to mastering Swift, Apple's powerful programming language. Tailored for career-driven learners, this book distills intricate Swift concepts into concise and actionable notes. From fundamental syntax to advanced iOS app development and SwiftUI, each topic is demystified through real-world examples and hands-on exercises. Career Credentials ensures readers not only understand Swift's capabilities but also cultivate the skills necessary for success in professional iOS development. Whether you're a beginner venturing into app development or an experienced developer refining your Swift expertise, "SwiftNotes" is your essential resource for career-focused learning in the Apple ecosystem.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_32%20GMT+5_30.png?updatedAt=1699381361007",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "MySQL Notes by Career Credentials",
          description: `"MySQL Notes" by Career Credentials is the essential guide for anyone seeking mastery of the MySQL database. Tailored with a career-centric perspective, this book distills the complexities of MySQL into concise, actionable notes. Covering fundamental concepts like database design, SQL queries, and performance optimization, each topic is elucidated through real-world examples and hands-on exercises. Career Credentials ensures readers not only comprehend MySQL's robust features but also cultivate the skills necessary for professional database management. Whether you're a novice venturing into relational databases or an experienced developer honing your MySQL expertise, "MySQL Notes" is your roadmap to becoming a proficient database professional.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_18%20GMT+5_30.png?updatedAt=1699381357450",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Entity Framework Notes by Career Credentials",
          description:
            "Unlock the potential of data-driven applications with 'Entity Framework Notes' by Career Credentials. Tailored for developers of all levels, this book is your comprehensive guide to mastering the Entity Framework. Dive into the intricacies of ORM (Object-Relational Mapping), database interactions, and model-driven development. With clear explanations, practical examples, and hands-on exercises, elevate your skills in designing robust and scalable data-centric applications. Whether you're a novice exploring the world of databases or an experienced developer aiming to refine your Entity Framework expertise, this book is your key to building efficient and maintainable data solutions. Accelerate your journey with 'Entity Framework Notes",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_34%20GMT+5_30.png?updatedAt=1699381354495",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "PowerShell Notes by Career Credentials",
          description: `"Powershell Notes" by Career Credentials is your essential guide to mastering the versatile PowerShell scripting language, designed for career-oriented individuals. This book condenses critical PowerShell concepts into concise and actionable notes, covering script creation, automation, and system administration. With real-world examples and practical exercises, Career Credentials ensures readers not only understand PowerShell's capabilities but also cultivate the skills necessary for success in IT environments. Whether you're a beginner exploring scripting languages or an experienced professional seeking to enhance your PowerShell proficiency, "Powershell Notes" is your go-to resource for efficient and career-focused learning in the realm of Windows administration and automation.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_24%20GMT+5_30.png?updatedAt=1699381357734",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Xamarin.Forms Notes by Career Credentials",
          description: `"Xamarin Forms Notes" by Career Credentials is your essential companion for mastering cross-platform mobile app development with Xamarin Forms. Tailored for career-focused learners, this book distills intricate Xamarin Forms concepts into concise and actionable notes. From creating user interfaces to leveraging platform-specific features and optimizing performance, each topic is demystified through real-world examples and hands-on exercises. Career Credentials ensures readers not only grasp Xamarin Forms' capabilities but also cultivate the skills vital for professional mobile app development. Whether you're a beginner exploring cross-platform frameworks or an experienced developer refining your Xamarin Forms expertise, this book is your go-to resource for efficient and career-focused learning.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_37%20GMT+5_30.png?updatedAt=1699381361022",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "SQL Notes by Career Credentials",
          description:
            "Master the universal language of data management with 'SQL Notes.' These comprehensive notes provide a clear and practical understanding of Structured Query Language (SQL), the backbone of database systems. Whether you're a beginner or an experienced database professional, these notes offer a solid foundation in SQL's syntax, data manipulation, and database querying. Learn to design and manage relational databases, retrieve and manipulate data efficiently, and ensure data integrity. With 'SQL Notes' as your companion, you'll gain the knowledge and skills needed to excel in data-driven decision-making and become proficient in this critical language of data management. Elevate your database expertise and streamline your data-related tasks with 'SQL Notes'.",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_31%20GMT+5_30.png?updatedAt=1699381360885",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Bash Notes by Career Credentials",
          description:
            "Master the command line and system administration with 'Bash Notes.' These comprehensive and practical notes serve as your essential guide to the Bash shell, a powerful command-line interpreter for Unix-like operating systems. Whether you're a novice or an experienced system administrator, these notes empower you with the knowledge and skills needed to navigate and automate tasks in the command line. Learn to write shell scripts, manage files and directories, and enhance your efficiency in the Linux environment. With 'Bash Notes' as your companion, you'll become proficient in system administration, making it an indispensable resource for anyone looking to excel in the dynamic world of the command line.",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_29%20GMT+5_30.png?updatedAt=1699381366542",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Angular 2 Notes by Career Credentials ",
          description:
            "Craft dynamic and responsive web applications with 'Angular2 Notes.' These concise and comprehensive notes serve as your guide to mastering Angular 2, the cutting-edge framework for modern web development. Whether you're a beginner or an experienced developer, these notes provide a clear pathway to building dynamic apps with components, services, and reactive programming. Discover Angular's seamless integration with other technologies, making it the perfect choice for high-performance web applications. With 'Angular2 Notes' as your companion, you'll unlock the potential of this versatile framework, becoming a proficient web developer capable of creating scalable and efficient applications with ease",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_27%20GMT+5_30.png?updatedAt=1699381366546",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: ".NET Framework Notes by Career Credentials",
          description:
            "Dive into the heart of software development with 'DotNET Framework Notes' by Career Credentials. This comprehensive guide demystifies the intricacies of the .NET framework, empowering both novices and seasoned developers. Explore the architecture, libraries, and tools that make up this powerful platform, and gain hands-on experience in crafting scalable and efficient applications. With clear insights, practical examples, and expert guidance, this book is your essential companion for navigating the vast landscape of the DotNET framework. Whether you're a coding enthusiast or a professional developer, elevate your skills and unleash the full potential of DotNET with 'DotNET Framework Notes.",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_33%20GMT+5_30.png?updatedAt=1699381366596",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "TypeScript Notes by Career Credentials",
          description: `"TypeScript Notes" by Career Credentials is your indispensable guide to mastering the TypeScript language for robust and scalable web development. Tailored for career-driven learners, this book distills complex TypeScript concepts into concise and actionable notes. From static typing to advanced features like decorators and generics, each topic is demystified through real-world examples and hands-on exercises. Career Credentials ensures readers not only grasp TypeScript's capabilities but also cultivate the skills vital for professional front-end and full-stack development. Whether you're a novice exploring modern JavaScript or an experienced developer seeking to refine your TypeScript expertise, "TypeScript Notes" is your go-to resource for career-focused learning.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_33%20GMT+5_30.png?updatedAt=1699381360960",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Python Notes by Career Credentials",
          description:
            "Embark on a journey into the versatile world of Python programming with 'Python Notes.' These comprehensive and insightful notes offer a comprehensive overview of Python's capabilities, suitable for beginners and experienced developers. Whether you're a student, a data scientist, or a software developer, 'Python Notes' provide a clear pathway to mastering the Python language. Learn the elegance of Python's syntax, its rich standard library, and its support for diverse applications, from web development to data analysis and automation. With 'Python Notes' as your companion, you'll unlock the full potential of this versatile language and become proficient in a wide range of programming domains.",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_25%20GMT+5_30.png?updatedAt=1699381357504",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "MongoDB Notes by Career Credentials",
          description: `MongoDB Notes" by Career Credentials is your comprehensive handbook for mastering MongoDB, the leading NoSQL database. Tailored for career-driven learners, this book condenses essential MongoDB concepts into concise and practical notes. From data modeling to complex queries and aggregation pipelines, each topic is unraveled with real-world examples and hands-on exercises. Career Credentials ensures readers not only grasp MongoDB's robust features but also cultivate the skills vital for effective database management in professional settings. Whether you're delving into NoSQL databases for the first time or a seasoned developer enhancing your MongoDB proficiency, "MongoDB Notes" is your go-to resource for navigating the world of scalable and flexible data storage.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2022_18_25%20GMT+5_30.png?updatedAt=1699381363858",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Algorithms Notes by Career Credentials ",
          description:
            "Dive into the fascinating world of problem-solving and data manipulation with 'Algorithms Notes.' These comprehensive and practical notes offer a deep dive into algorithmic thinking, suitable for both computer scientists and software developers. Explore a wide range of algorithms and data structures, from sorting and searching to graph theory and dynamic programming. Whether you're a novice or an experienced coder, 'Algorithms Notes' provide a clear and accessible pathway to mastering the art of efficient problem-solving. These notes equip you with the skills needed to optimize your code and tackle complex computational challenges. Elevate your programming expertise and embark on a thrilling journey through the world of algorithms.",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/algorithms%20cover.png?updatedAt=1699381363789",
          url: " ",
          trending: "false",
          author: "Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "R Language Notes by Career Credentials",
          description:
            "Master data analysis and visualization with 'R Notes.' These comprehensive and practical notes serve as your guide to mastering the R programming language, whether you're a data scientist, a statistician, or a researcher. From statistical analysis to data visualization, 'R Notes' empower you to leverage the capabilities of R for efficient data-driven decision-making. Explore R's extensive ecosystem of packages, data manipulation, and statistical modeling. With 'R Notes' as your companion, you'll unlock the power of this language, ensuring that you can thrive in the world of data analysis and visualization. Elevate your skills and embark on an exciting journey through the world of R programming",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_26%20GMT+5_30.png?updatedAt=1699381360880",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Kotlin Notes by Career Credentials",
          description: `"Kotlin Notes" by Career Credentials is your definitive guide to mastering the Kotlin programming language for Android and beyond. Crafted with a career-oriented approach, this book condenses complex Kotlin concepts into concise, actionable notes. From basic syntax to advanced features like coroutines and extension functions, every aspect is demystified through real-world examples and hands-on exercises. Career Credentials ensures that readers not only gain proficiency in Kotlin but also develop practical skills essential for professional success. Whether you're a beginner venturing into programming or an experienced developer aiming to enhance your Kotlin expertise, "Kotlin Notes" is the essential companion for a successful journey in modern software development.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_14%20GMT+5_30.png?updatedAt=1699381354576",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "jQuery Notes by Career Credentials",
          description: `"jQuery Notes" by Career Credentials is a comprehensive guide unraveling the power of jQuery for web developers at every level. Authored with a career-centric perspective, this book delivers succinct and actionable notes on jQuery essentials, empowering readers to streamline web development. From DOM manipulation to event handling and AJAX calls, each concept is demystified through practical examples. Career Credentials ensures that readers not only grasp jQuery's intricacies but also cultivate the skills essential for professional success. Whether you're a novice seeking a solid foundation or a seasoned developer aiming to refine your expertise, "jQuery Notes" is the go-to resource for mastering this influential JavaScript library.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2022_18_22%20GMT+5_30.png?updatedAt=1699381363791",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Objective C Notes by Career Credentials",
          description:
            "Master the programming language behind Apple's innovative ecosystem with 'Objective-C Notes.' These concise notes offer an essential and practical guide for developers seeking to dive into iOS and macOS application development. Whether you're a beginner or an experienced coder, 'Objective-C Notes' provide a clear pathway to understanding Objective-C's syntax, object-oriented paradigm, and its integral role in the development of Apple's ecosystem. Learn to build versatile and powerful applications for iPhones, iPads, and Macs, ensuring that you can thrive in the world of Apple application development. Elevate your coding skills and embark on an exciting journey through the dynamic landscape of Objective-C with 'Objective-C Notes' as your trusted companion.",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_20%20GMT+5_30.png?updatedAt=1699381358034",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Visual Basics .NET  by Career Credentials",
          description: `"Visual Basic .NET Notes" by Career Credentials is your comprehensive guide to mastering the versatile Visual Basic .NET language for modern software development. Tailored for career-driven learners, this book distills intricate VB.NET concepts into concise and actionable notes. From fundamental syntax to advanced features like Windows Forms and ASP.NET, each topic is demystified through real-world examples and hands-on exercises. Career Credentials ensures readers not only understand VB.NET's capabilities but also cultivate the skills vital for professional application development. Whether you're a beginner entering the world of .NET languages or an experienced developer refining your VB.NET expertise, "Visual Basic .NET Notes" is your go-to resource for career-focused learning.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_35%20GMT+5_30.png?updatedAt=1699381360963",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Oracle database Notes by Career Credentials",
          description: `Oracle Database Notes" by Career Credentials is the ultimate companion for conquering the intricacies of Oracle's powerful database system. With a career-centric focus, this book condenses Oracle Database essentials into concise, practical notes. From SQL querying to advanced topics like PL/SQL and performance tuning, each concept is demystified through real-world examples and hands-on exercises. Career Credentials ensures readers not only grasp Oracle's robust features but also cultivate the skills vital for professional database management. Whether you're a beginner entering the realm of Oracle databases or an experienced professional looking to refine your expertise, "Oracle Database Notes" is your indispensable guide for navigating the complex world of Oracle.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_21%20GMT+5_30.png?updatedAt=1699381357789",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "C++ Notes by Career Credentials",
          description:
            "Unlock the full potential of C++ programming with this comprehensive guide. Whether you're a novice or an experienced coder, these meticulously crafted notes cover fundamental concepts, advanced topics, and practical tips. From object-oriented programming to STL containers and memory management, this book empowers you with knowledge and confidence in C++ development. Become a proficient developer, capable of building robust applications and mastering the intricacies of C++. 'C++ Notes' is your indispensable companion on your journey through the world of C++.",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_30%20GMT+5_30.png?updatedAt=1699381366601",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "PostgreSQL Notes by Career Credentials",
          description: `"PostgreSQL Notes" by Career Credentials is your essential guide to mastering the robust PostgreSQL database system. Tailored for career-driven learners, this book condenses complex PostgreSQL concepts into concise, actionable notes. Covering fundamental topics like database design, SQL queries, and advanced features such as indexing and optimization, each concept is demystified through real-world examples and hands-on exercises. Career Credentials ensures readers not only understand PostgreSQL's powerful capabilities but also cultivate the skills vital for professional database management. Whether you're a novice venturing into relational databases or an experienced developer honing your PostgreSQL expertise, "PostgreSQL Notes" is your go-to resource for becoming a proficient database professional.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2022_18_27%20GMT+5_30.png?updatedAt=1699381363800",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "C Sharp Notes by Career Credentials",
          description:
            '"C# Essentials" by Tech Mastery is a concise guide for mastering C# in modern development. Ideal for career-focused learners, it breaks down complex C# concepts into clear, actionable insights. Covering basics to advanced features like LINQ, each chapter offers real-world scenarios and coding exercises. Readers not only learn C# theory but also practical skills for professional success. Suitable for beginners and experienced programmers, this book is an essential resource for anyone looking to excel in C# programming.',
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_31%20GMT+5_30.png?updatedAt=1699381366927",
          url: " ",
          trending: "false",
          author: "Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Perl Notes by Career Credentials",
          description: `"Perl Notes" by Career Credentials is your definitive guide to mastering the versatile Perl programming language. Tailored for career-driven learners, this book distills complex Perl concepts into concise and actionable notes. From basic syntax to advanced features like regular expressions and object-oriented programming, each topic is demystified with practical examples and hands-on exercises. Career Credentials ensures readers not only grasp Perl's capabilities but also cultivate the skills essential for professional development. Whether you're a novice exploring scripting languages or an experienced developer seeking to enhance your Perl proficiency, "Perl Notes" is your go-to resource for efficient and career-focused learning in the world of Perl programming.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_22%20GMT+5_30.png?updatedAt=1699381357984",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "CSS Notes by Career Credentials",
          description:
            "Transform your web design skills with 'CSS Notes.' These comprehensive and practical notes provide a deep dive into Cascading Style Sheets (CSS), the cornerstone of modern web design. Whether you're a novice or an experienced web developer, 'CSS Notes' empower you to create stunning and responsive web layouts. Explore the power of CSS for styling HTML documents, achieving responsive designs, and enhancing user interfaces. With 'CSS Notes' as your companion, you'll become proficient in web design, ensuring that your projects are both visually appealing and user-friendly. Elevate your web design skills and embark on an exciting journey through the world of CSS",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_32%20GMT+5_30.png?updatedAt=1699381354479",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Spring Framework Notes by Career Credentials",
          description: `"Spring Framework Notes" by Career Credentials is the essential guide to mastering the intricacies of the Spring framework for Java development. Tailored for career-oriented learners, this book distills the complexities of Spring into concise and actionable notes. From dependency injection to aspect-oriented programming and Spring Boot, each concept is demystified through real-world examples and hands-on exercises. Career Credentials ensures readers not only comprehend Spring's robust features but also cultivate the skills vital for professional Java development. Whether you're a novice entering the world of Java frameworks or an experienced developer seeking to refine your Spring expertise, "Spring Framework Notes" is your go-to resource for career-focused learning`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2022_18_30%20GMT+5_30.png?updatedAt=1699381364238",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Excel VBA Notes by Career Credentials",
          description:
            "Empower your Excel experience with 'Excel VBA Notes' by Career Credentials, your definitive guide to mastering Visual Basic for Applications. Tailored for Excel users of all levels, this book unveils the potential of VBA for automating tasks, enhancing data analysis, and streamlining workflows. Dive into the essentials of coding within Excel, learn to create macros, and harness the power of automation. With clear explanations, practical examples, and hands-on exercises, this book is your passport to efficiency and productivity in spreadsheet operations. Whether you're a data enthusiast or a seasoned professional, 'Excel VBA Notes' is your indispensable resource for unlocking the full potential of Excel.",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_35%20GMT+5_30.png?updatedAt=1699381354869",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Java Notes by Career Credentials",
          description:
            "Empower your programming journey with 'Java Notes' by Career Credentials, your essential guide to mastering the versatile Java language. Whether you're a novice or an experienced coder, this comprehensive book navigates you through Java's fundamentals, object-oriented concepts, and advanced features. With clear explanations, practical examples, and hands-on exercises, build a strong foundation for developing scalable and efficient applications. From syntax to best practices, 'Java Notes' is your go-to resource for unlocking the potential of Java in web development, mobile applications, and beyond. Elevate your coding skills and embark on a successful Java programming odyssey with Career Credentials as your guide",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2022_18_20%20GMT+5_30.png?updatedAt=1699381363852",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Ruby Notes by Career Credentials",
          description:
            "Simplify and master Ruby programming with 'Ruby Notes.' These concise notes provide both beginners and experienced coders with a practical and insightful guide to the elegant Ruby language. Explore Ruby's clean and intuitive syntax, its strong support for object-oriented programming, and its rich ecosystem of libraries and gems. From web development to automation and more, 'Ruby Notes' empower you to create efficient and powerful applications. Whether you're a novice or an experienced developer, these notes offer valuable insights, real-world examples, and best practices to make Ruby programming accessible and enjoyable. Elevate your coding skills and embark on an exciting journey through the dynamic world of Ruby.",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_28%20GMT+5_30.png?updatedAt=1699381361018",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "VBA Notes by Career Credentials",
          description: `"VBA Notes" by Career Credentials is your essential handbook for mastering Visual Basic for Applications (VBA) in Microsoft Office. Tailored for career-oriented learners, this book condenses intricate VBA concepts into concise and actionable notes. From automating Excel tasks to enhancing Word and Access functionalities, each topic is demystified through real-world examples and hands-on exercises. Career Credentials ensures readers not only understand VBA's robust capabilities but also cultivate the skills vital for professional productivity and automation. Whether you're a beginner diving into VBA or an experienced user looking to refine your automation skills, "VBA Notes" is your go-to resource for career-focused learning in Microsoft Office environments.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_34%20GMT+5_30.png?updatedAt=1699381360889",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Hibernate Notes by Career Credentials",
          description:
            "Simplify and streamline your Java persistence and database interactions with 'Hibernate Notes.' These comprehensive notes serve as your essential guide to mastering Hibernate, the robust and widely used Object-Relational Mapping (ORM) framework. Whether you're a novice or an experienced developer, these notes provide a clear pathway to understanding Hibernate's features, configuration, and best practices for efficient data access. Learn to manage database connections, perform Create, Read, Update, Delete (CRUD) operations, and map objects to database tables effortlessly. With 'Hibernate Notes' as your companion, you'll become proficient in database-driven applications, making it an indispensable resource for developers seeking to streamline data persistence in Java development",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_38%20GMT+5_30.png?updatedAt=1699381354583",
          url: " ",
          trending: "false",
          author: "Career Credentials ",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "MATLAB Notes by Career Credentials",
          description: `MATLAB Notes" by Career Credentials is your essential guide to mastering the powerful MATLAB programming language for scientific computing and engineering. With a career-focused approach, this book distills complex MATLAB concepts into concise and actionable notes. From basic syntax to advanced data analysis and visualization techniques, each topic is demystified through practical examples and hands-on exercises. Career Credentials ensures that readers not only understand MATLAB's capabilities but also develop the skills necessary for success in scientific and engineering applications. Whether you're a novice entering the world of MATLAB or an experienced user seeking to refine your skills, "MATLAB Notes" is your go-to resource`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_16%20GMT+5_30.png?updatedAt=1699381357654",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "HTML5 Notes by Career Credentials",
          description:
            "Craft modern and feature-rich web applications with 'HTML5 Notes.' These comprehensive notes provide a clear roadmap for mastering HTML5, the cornerstone of modern web development. Whether you're a beginner or an experienced web developer, 'HTML5 Notes' empower you to create stunning, responsive, and interactive web experiences. Explore the power of semantic markup, responsive design, multimedia, and canvas graphics. These notes simplify the complexities of HTML5, enabling you to unleash your creativity and embark on an exciting journey through the world of web development. Elevate your web design skills and ensure that your projects are both engaging and cutting-edge with 'HTML5 Notes' as your essential companion",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/html5%20cover.png?updatedAt=1699381363942",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "React Native Notes by Career Credentials",
          description: `"React Native Notes" by Career Credentials is your indispensable guide to mastering the art of cross-platform mobile app development. Tailored for career-driven learners, this book condenses intricate React Native concepts into concise and actionable notes. From building user interfaces to integrating native modules, each topic is demystified with real-world examples and hands-on exercises. Career Credentials ensures readers not only grasp React Native's capabilities but also cultivate the skills vital for professional mobile app development. Whether you're a beginner venturing into cross-platform development or an experienced developer looking to refine your React Native expertise, "React Native Notes" is your go-to resource for career-focused learning in the mobile app development landscape.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2022_18_28%20GMT+5_30.png?updatedAt=1699381364138",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Ruby On Rails by Career Credentials",
          description: `"Ruby on Rails Notes" by Career Credentials is your essential companion for mastering web development with the Ruby on Rails framework. Tailored for career-driven learners, this book distills complex Rails concepts into concise and actionable notes. From MVC architecture to database interactions and advanced features like RESTful APIs, each topic is demystified through real-world examples and hands-on exercises. Career Credentials ensures readers not only grasp Rails' powerful capabilities but also cultivate the skills vital for professional web development. Whether you're a beginner exploring full-stack frameworks or an experienced developer refining your Rails expertise, "Ruby on Rails Notes" is your go-to resource for efficient and career-focused learning.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_29%20GMT+5_30.png?updatedAt=1699381360957",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "AngularJS Notes by Career Credentials",
          description:
            "Embark on a transformative journey into web development with 'AngularJS Notes' by Career Credentials. This enlightening guide is your passport to mastering AngularJS, catering to novices and experienced developers alike. Navigate through the intricacies of this powerful JavaScript framework, delve into the fundamentals of declarative programming, and harness the full potential of dynamic, single-page web applications. Packed with insightful explanations, practical examples, and hands-on exercises, this book ensures you grasp AngularJS concepts effortlessly. Whether you're aspiring to enter the web development arena or seeking to elevate your skill set, 'AngularJS Notes' is your indispensable companion for unlocking the true potential of this innovative framework.",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_28%20GMT+5_30.png?updatedAt=1699381366627",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "LaTex Notes by Career Credentials",
          description: `"LaTeX Notes" by Career Credentials is your indispensable companion to mastering the intricacies of LaTeX typesetting. With a career-focused perspective, this book condenses essential LaTeX concepts into concise and practical notes. From document structure to advanced formatting techniques, each topic is demystified through clear examples and hands-on exercises. Career Credentials ensures that readers not only grasp LaTeX's powerful capabilities but also cultivate the skills necessary for professional document preparation. Whether you're a novice entering the world of scientific writing or an experienced user seeking to refine your skills, "LaTeX Notes" is the go-to resource for creating polished, professional documents with efficiency and precision.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2022_18_23%20GMT+5_30.png?updatedAt=1699381363793",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Android Notes  by Career Credentials",
          description:
            "Unlock the power of Android development with 'Android Notes' by Career Credentials. This comprehensive guide is your gateway to mastering the intricacies of Android app creation, designed for both beginners and seasoned developers. Dive into the fundamentals of Android architecture, learnto navigate the Android Studio environment, and discover the secrets of crafting efficient and user-friendly applications. With clear explanations, practical examples, and hands-on exercises, this book equips you with the skills needed to build cutting-edge Android apps. Whether you're aiming to kickstart a career in mobile development or enhance your existing expertise, 'Android Notes' is your indispensable companion to success.",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_25%20GMT+5_30.png?updatedAt=1699381366839",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "JavaScript Notes by Career Credentials",
          description: `JavaScript Notes" by Career Credentials is an indispensable guide for both novices and seasoned developers navigating the dynamic landscape of JavaScript. With a career-focused approach, this book delivers concise, hands-on insights that accelerate proficiency. From fundamental syntax to advanced concepts like asynchronous programming and modern frameworks, the author distills complex topics into accessible notes. Real-world examples and practical exercises empower readers to master JavaScript's intricacies while building practical skills for the workplace. Whether you're a coding beginner or a professional seeking to enhance your expertise, "JavaScript Notes" provides an invaluable resource, ensuring your journey through the language is enlightening, efficient, and career-driven.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_13%20GMT+5_30.png?updatedAt=1699381354872",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "ReactJS Notes by Career Credentials",
          description: `"React JS Notes" by Career Credentials is your definitive guide to mastering the React JavaScript library for building dynamic user interfaces. Tailored for career-focused learners, this book distills intricate React concepts into concise and actionable notes. From component architecture to state management and advanced features like hooks, each topic is demystified through real-world examples and hands-on exercises. Career Credentials ensures readers not only understand React's robust capabilities but also cultivate the skills vital for professional front-end development. Whether you're a beginner delving into modern web development or an experienced developer seeking to refine your ReactJS expertise, "ReactJS Notes" is your essential resource for career-driven learning.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_27%20GMT+5_30.png?updatedAt=1699381360952",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "C notes by Career Credentials",
          description:
            "Embark on a coding odyssey with 'C Notes' by Career Credentials, your indispensable guide to mastering the timeless language of C. Tailored for both beginners and experienced programmers, this book offers a comprehensive exploration of C programming essentials. Delve into the intricacies of syntax, data structures, and algorithms, and gain a deep understanding of low-level programming concepts. With clear explanations, practical examples, and hands-on exercises, 'C Notes' equips you with the skills needed to write efficient and robust code. Whether you're starting your coding journeyor seeking to enhance your expertise, this book is your key to unlocking the vast potential of the C language.",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/C%20cover.png?updatedAt=1699381363862",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "HTML5 Canvas by Career credentials",
          description:
            "Embark on a creative journey with 'HTML5 Canvas Notes' by Career Credentials, your definitive guide to unleashing the full potential of HTML5 canvas. Designed for web developers and designers, this book delves into the intricacies of canvas elements, enabling you to craft visually stunning and interactive web applications. From drawing graphics to handling user input, explore the capabilities of HTML5 canvas with practical examples and hands-on exercises. Whether you're a coding enthusiast or a seasoned professional, 'HTML5 Canvas Notes' equips you with the skills to transform your web projects into dynamic, engaging experiences. Elevate your HTML5 canvas proficiency with this essential resource.",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_39%20GMT+5_30.png?updatedAt=1699381354484",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "PHP Notes By Career Credentials ",
          description: ` "PHP Notes" by Career Credentials is your indispensable companion on the journey to mastering the dynamic PHP programming language for web development. Tailored with a career-centric approach, this book simplifies intricate PHP concepts into succinct and actionable notes. Covering fundamental syntax to advanced web application development and database integration, each topic is unraveled through pragmatic examples and hands-on exercises. Career Credentials ensures not only a comprehensive understanding of PHP's capabilities but also the cultivation of skills essential for success in web development and programming. Whether you're a newcomer venturing into the realm of PHP or a seasoned developer looking to hone your expertise, "PHP Notes" is the definitive resource to elevate your proficiency in the world of web programming.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_23%20GMT+5_30.png?updatedAt=1699381357468",
          url: " ",
          trending: "false",
          author: "Career Credentials ",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Haskell  Notes by Career Credentials",
          description: `Delve into the world of functional programming and elegant code with 'Haskell Notes.' These comprehensive notes provide a solid foundation for mastering Haskell, a language known for its simplicity and power. Whether you're a student, a programmer, or an enthusiast of functional programming, 'Haskell Notes' guide you through the language's unique features, type system, and advanced functional techniques. Learn to write clean, concise, and bug-free code while exploring the beauty of functional programming. 'Haskell Notes' empowers you with the skills and insights needed to excel in the world of functional programming, making it an essential resource for enthusiasts and aspiring Haskell developers."`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_37%20GMT+5_30.png?updatedAt=1699381366623",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Linux Notes by Career Credentials",
          description: `Linux Notes" by Career Credentials is a comprehensive guide for mastering the Linux operating system, tailored for career success. Offering succinct and practical insights, this book covers essential command-line skills, system administration, and security practices. From navigating file systems to deploying services and optimizing performance, each topic is distilled into actionable notes with real-world examples. Career Credentials ensures readers not only acquire technical expertise but also cultivate the practical skills crucial for professional Linux usage. Whether you're a beginner venturing into open-source environments or an IT professional aiming to enhance your Linux proficiency, "Linux Notes" is the ultimate resource for a successful career in the world of Linux.`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_15%20GMT+5_30.png?updatedAt=1699381354567",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Git Notes by Career Credentials",
          description:
            "Master the art of version control and collaborative software development with 'Git Notes.' These comprehensive notes provide insights into the world of Git, offering a clear roadmap for effective collaboration and source code management. Whether you're a novice or an experienced developer, these notes cover fundamental concepts, advanced strategies, and best practices. Learn to track changes, manage code repositories, and collaborate seamlessly with teams. With 'Git Notes' as your companion, you'll gain the knowledge and skills needed to excel in the world of version control, ensuring that your development projects are efficient and well-managed",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_36%20GMT+5_30.png?updatedAt=1699381354579",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "Microsoft SQL Server Notes by Career Credentials",
          description: `"Master the art of scientific computing and data analysis with 'MATLAB Notes.' These meticulously crafted notes offer a comprehensive guide to MATLAB, the versatile software environment for engineers, scientists, and data analysts. Whether you're a student or a professional, 'MATLAB Notes' demystify its powerful capabilities, helping you solve complex mathematical problems, analyze data, and visualize results. With clear explanations and practical examples, these notes provide a solid foundation for harnessing MATLAB's capabilities. Elevate your computational skills and embark on an exciting journey through the world of scientific computing with 'MATLAB Notes' as your trusted companion."`,
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_17%20GMT+5_30.png?updatedAt=1699381357330",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "IOS Notes by Career Credentials",
          description:
            "Embark on a journey into the dynamic world of iOS development with 'iOS Notes' by Career Credentials. Tailored for both beginners and seasoned developers, this comprehensive guide demystifies the intricacies of iOS app creation. From mastering Swift programming language to navigating Xcode and Interface Builder, this book provides clear insights, practical examples, and hands-on exercises. Elevate your skills in building sleek and efficient iOS applications, whether you're a coding enthusiast or a professional developer. 'iOS Notes' is your essential companion for unlocking the full potential of Apple's mobile platform and crafting compelling user experiences",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2013_15_40%20GMT+5_30.png?updatedAt=1699381354864",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
        {
          title: "NodeJS Notes by Career Credentials",
          description:
            "Build scalable and high-performance web applications with 'Node.js Notes.' These comprehensive notes serve as your guide to mastering Node.js, the runtime environment for server-side JavaScript development. Whether you're a novice or an experienced developer, these notes provide a clear pathway to creating efficient and scalable web applications. Discover the power of asynchronous programming, server-side scripting, and event-driven development with Node.js. With 'Node.js Notes' as your companion, you'll unlock the potential of this versatile platform and become a proficient developer, capable of building web applications that can handle a large number of concurrent users with ease",
          category: "Miscellaneous",
          img: "https://ik.imagekit.io/vv0gy8rix/Miscellaneous/2023,%2015_30_19%20GMT+5_30.png?updatedAt=1699381357500",
          url: " ",
          trending: "false",
          author: "  Career Credentials",
          source: "careercredentials.in",
          buyAvailable: "No",
        },
      ],
    ],
    [
      [
        {
          title: "50 Most Asked OOP Interview QnA by Career Credentials",
          description: `"50 OOP Interview Questions" by Career Credentials is the ultimate guide to mastering Object-Oriented Programming (OOP) interviews. Designed for both aspiring and seasoned developers, this comprehensive resource ensures you're superbly prepared for OOP-related interviews. Featuring a carefully curated selection of 100 frequently asked questions, each backed by detailed explanations and practical examples, you'll develop a deep understanding of OOP principles and practices. Staying current with the latest industry trends and best practices is vital, and this book ensures your knowledge remains up-to-date. Proficiency in OOP is pivotal in software development, and this resource enhances your expertise and confidence, positioning you as the top candidate. Prepare with "100 OOP Interview Questions" and unlock new career opportunities.`,
          category: "Material",
          subcategory: "Interview Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Interview/OOP%20cover%20resized.png?updatedAt=1700375870140",
          url: " ",
          trending: "false",
          author: "Career Credentials ",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "100 JavaScript Interview QnA by Career Credentials",
          description:
            '"100 JavaScript Interview Questions" by Career Credentials is your essential resource for excelling in JavaScript interviews. This comprehensive book caters to both novice and seasoned developers, providing a deep understanding of JavaScript with a meticulously chosen set of 100 frequently asked interview questions, each accompanied by detailed explanations and practical examples. Staying current with the latest industry trends and best practices, this guide ensures your knowledge remains up to date. Your performance in JavaScript interviews is pivotal for career advancement, and this book equips you with the confidence and knowledge to shine, making you the standout candidate. Prepare with "100 JavaScript Interview Questions" to unlock your full career potential.',
          category: "Material",
          subcategory: "Interview Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Interview/Js%20cover%20resized.png?updatedAt=1700375870136",
          url: " ",
          trending: "false",
          author: "Career Credentials ",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "100 Most asked HTML Interview QnA by Career Credentials",
          description: `"100 HTML Interview Questions" by Career Credentials is the essential resource for mastering HTML interviews. Whether you're a novice or a seasoned developer, this comprehensive guide empowers you with the knowledge and confidence to excel in HTML interviews. Featuring a handpicked selection of 100 commonly asked questions, each accompanied by detailed explanations and practical examples, it ensures a thorough understanding of HTML. Stay current with the latest industry best practices and trends, enhancing your qualifications. Proficiency in HTML is fundamental for any web development role, and this book equips you with the expertise and assurance to succeed, making you the top candidate. Prepare for HTML interviews with "100 HTML Interview Questions" and propel your career forward.`,
          category: "Material",
          subcategory: "Interview Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Interview/HTML%20Cover%20Resized.png?updatedAt=1700375870061",
          url: " ",
          trending: "false",
          author: "Career Credentials ",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "50 Most Asked Android Interview QnA by Career Credentials",
          description:
            "Elevate your career with Android Interview Mastery. Authored by Career Credentials, this compact guide presents the top 50 Android interview questions and answers, ensuring you're ready for any job interview. From core Android concepts to advanced topics, this book provides in-depth explanations and expert insights, enhancing your understanding of Android development. With practical examples and the latest industry trends, it boosts your confidence, making you a standout candidate. Whether you're a junior developer starting your career or a seasoned pro looking to level up,  Android Interview Mastery is your key to career success in the competitive world of Android development.",
          category: "Material",
          subcategory: "Interview Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Interview/Android%20Cover%20Resized.png?updatedAt=1700375870359",
          url: " ",
          trending: "false",
          author: "Career Credentials ",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "100 Most Asked Angular QnA by Career Credentials",
          description: `"100 Angular Interview Questions" by Career Credentials is your ultimate companion for conquering Angular interviews. Ideal for developers at all levels, this comprehensive guide ensures you're well-prepared to ace Angular interviews. Featuring a curated selection of 100 frequently asked questions, each comes with detailed explanations and real-world examples, helping you comprehend Angular concepts thoroughly. Stay updated with the latest industry trends and best practices to stand out during interviews. Angular proficiency is a crucial career asset, and this book enhances your knowledge and confidence, making you the preferred candidate. Elevate your interview preparation with "100 Angular Interview Questions" and open doors to career success.`,
          category: "Material",
          subcategory: "Interview Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Interview/Angular%20Cover%20Resized.png?updatedAt=1700375870147",
          url: " ",
          trending: "false",
          author: "Career Credentials",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "100 Most Asked Java Interview QnA by Career Credentials",
          description:
            "Java Interview 100 Questions Unlocked by Career Credentials is your essential guide to career advancement. Featuring the top 100 Java interview questions and expert answers, this concise resource ensures readiness for any interview scenario. From fundamental concepts to advanced topics, the book provides comprehensive insights, deepening your understanding of Java development. Supported by practical examples and insights into the latest industry trends, it boosts your confidence to stand out as a top candidate. Whether you're a junior developer or a seasoned pro, this is your key to success in the competitive world of Java development, elevating your career to new heights.",
          category: "Material",
          subcategory: "Interview Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Interview/Java%20cover%20resized.png?updatedAt=1700375870058",
          url: " ",
          trending: "false",
          author: "Career Credentials ",
          source: "",
          buyAvailable: "No",
        },
        {
          title: "100 Most Asked SQL Interview QnA by Career Credentials",
          description: `"100 SOL Interview Questions" by Career Credentials is your indispensable resource for mastering SOL (Structured Query Language) interviews. Catering to both novice and experienced database professionals, this comprehensive guide ensures you're well-prepared to excel in SOL interviews. Featuring a meticulously chosen set of 100 commonly asked questions, each is accompanied by in-depth explanations and practical examples, enhancing your SOL knowledge. Staying current with the latest industry trends and best practices is crucial, and this book keeps your knowledge up-to-date. Proficiency in SOL is fundamental for roles involving databases and data management, and this book enriches your expertise and confidence, making you the standout candidate. Elevate your interview preparation with "100 SOL Interview Questions" and open doors to career success.`,
          category: "Material",
          subcategory: "Interview Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Interview/SQL%20Cover%20Resized.png?updatedAt=1700375872844",
          url: " ",
          trending: "false",
          author: "Career Credentials",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "100 Most Asked NODE.JS  QnA by Career Credentials",
          description: `"100 Node.js Interview Questions" by Career Credentials is your ultimate guide to acing Node.js interviews. Whether you're a budding developer or a seasoned pro, this comprehensive resource ensures you're well-prepared for Node.js interviews. Featuring a curated collection of 100 frequently asked questions, each comes with in-depth explanations and real-world examples, fostering a deep understanding of Node.js. Keep up with the latest industry trends and best practices to shine during interviews. Node.js expertise is a key asset in the tech industry, and this book enriches your knowledge and confidence, positioning you as the standout candidate. Elevate your interview preparation with "100 Node.js Interview Questions" and unlock new career opportunities.`,
          category: "Material",
          subcategory: "Interview Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Interview/Node%20JS%20Cover%20Resized.png?updatedAt=1700375870144",
          url: " ",
          trending: "false",
          author: "Career Credentials ",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "100 Most Asked React.js  QnA by Career Credentials",
          description: `"100 React.js Interview Questions" by Career Credentials is your essential companion for mastering React.js interviews. Tailored for developers of all levels, this comprehensive guide ensures you're thoroughly prepared for React.js interviews. With a handpicked selection of 100 frequently asked questions, each explained in detail with real-world examples, you'll develop a deep understanding of React.js concepts. Staying up-to-date with the latest industry trends and best practices is crucial, and this book keeps your knowledge current. React.js proficiency is a coveted skill in the tech industry, and this resource boosts your expertise and confidence, making you the standout candidate. Elevate your interview readiness with "100 React.js Interview Questions" and open the door to new career opportunities.`,
          category: "Material",
          subcategory: "Interview Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Interview/React%20JS%20Cover%20Resized.png?updatedAt=1700375870046",
          url: " ",
          trending: "false",
          author: "Career Credentials ",
          source: null,
          buyAvailable: "No",
        },
        {
          title: "100 Most Asked Python QnA by Career Credentials",
          description: `"100 Python Interview Questions" by Career Credentials is the definitive guide to mastering Python interviews. Suitable for both novice and seasoned developers, this comprehensive resource ensures you're exceptionally prepared for Python-related interviews. With a carefully selected array of 100 commonly asked questions, each accompanied by detailed explanations and real-world examples, you'll gain a profound understanding of Python. Staying updated with the latest industry trends and best practices is essential, and this book guarantees your knowledge remains current. Python proficiency is vital for success in various tech roles, and this book enhances your expertise and self-assurance, making you the preferred candidate. Prepare with "100 Python Interview Questions" and unlock new career possibilities.`,
          category: "Material",
          subcategory: "Interview Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Interview/Python%20Cover%20Resized.png?updatedAt=1700375870156",
          url: " ",
          trending: "false",
          author: "Career Credentials ",
          source: null,
          buyAvailable: "No",
        },
      ],
    ],
    [
      [
        {
          title: "Practice Questions on Ruby by Career Credentials ",
          description:
            "This book is a practical guide tailored for those seeking proficiency in the Ruby programming language. Authored by Career Credentials, this book provides a structured collection of questions, ranging from foundational concepts to advanced topics. Each question is paired with a clear and concise solution, ensuring readers grasp the underlying principles. Designed to be both comprehensive and approachable, the book serves as an invaluable resource for beginners and experienced developers alike. With its focus on clarity and real-world relevance, Career Credentials delivers a straightforward and effective tool for enhancing one's skills in Ruby.",
          category: "Material",
          img: "https://ik.imagekit.io/vv0gy8rix/Practice/Ruby.png?updatedAt=1697477481985",
          subcategory: "Practice Questions",
          url: " ",
          trending: "true",
          author: "Career Credentials",
          buyAvailable: "No",
        },
        {
          title: "Practice Questions on C++ by Career Credentials",
          description: `"Practice Questions on C++ Programming" by Career Credentials exemplifies the company's unwavering commitment to empowering and educating programming enthusiasts. This exceptional resource offers a meticulously curated selection of C++ programming exercises and challenges, tailored to sharpen coding skills and master this versatile language. Career Credentials has a well-earned reputation for delivering high-quality educational materials, and this guide is no exception. With its clear explanations, diverse problem sets, and hands-on learning approach, it reflects Career Credentials' dedication to nurturing programming excellence. For those aspiring to excel in C++, look no further than Career Credentials' expertly designed practice questions, a testament to their commitment to fostering knowledge and skill development in the programming world.`,
          category: "Material",
          img: "https://ik.imagekit.io/vv0gy8rix/Practice/c++.png?updatedAt=1697477482284",
          subcategory: "Practice Questions",
          url: " ",
          trending: "true",
          author: "Career Credentials",
          buyAvailable: "No",
        },
        {
          title: "Quantitative Aptitude by Campus Credentials",
          description:
            " Embark on a journey to numerical mastery with 'Quantitative Aptitude' by Campus Credentials. This indispensable guide unveils a treasure trove of tips, tricks, and essential formulas designed to streamline your problem-solving prowess. Whether you're gearing up for competitive exams or seeking to enhance your quantitative skills, this book equips you with the tools to conquer any challenge. From arithmetic to advanced concepts, each page is meticulously crafted to empower learners with the confidence to tackle complex problems effortlessly. This book is your last minute guide you need to crack your aptitude exam. Elevate your mathematical acumen and unlock your potential with Campus Credentials' Quantitative Aptitude, your ultimate companion to numerical success.",
          category: "Material",
          subcategory: "Practice Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Practice/career.jpg?updatedAt=1706202276636",
          url: " ",
          trending: "false",
          author: "Campus Credentials",
          source: "Campus Credentials",
        },
        {
          title: "OOPS Interview Preparation Codes By Career Credentials",
          description:
            "Unlock the power of Object-Oriented Programming (OOP) with Career Credentials' Practice Code Guide. Tailored for learners of all levels, this comprehensive resource is designed to elevate your proficiency in OOP languages. Immerse yourself in a curated collection of practice codes meticulously crafted to reinforce core principles such as encapsulation, inheritance, and polymorphism. Career Credentials ensures a seamless learning journey, offering a diverse range of exercises that cater to both beginners and seasoned developers. Through practical application, this guide not only imparts theoretical knowledge but also cultivates the skills needed to tackle real-world programming challenges, making it an invaluable asset on your coding expedition.",
          category: "Material",
          subcategory: "Practice Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Practice/3.png?updatedAt=1702233520170",
          url: " ",
          trending: "false",
          author: "Dr. Amar Panchal",
          source: "Career Credentials",
          buyAvailable: "No",
        },
        {
          title:
            "Primitive data types Interview Preparation Codes By Career Credentials",
          description:
            " Career Credentials presents an indispensable Interview Preparation Code Guide focused on mastering Primitive Data Types. Tailored for aspiring candidates, this guide meticulously curates a collection of practice codes designed to sharpen your proficiency in handling fundamental data types. From integers and floating-point numbers to characters and booleans, each code snippet is thoughtfully crafted to simulate real-world interview scenarios. Elevate your preparation with precision and confidence, as Career Credentials ensures comprehensive coverage of key concepts. Equip yourself with the skills needed to tackle interview questions with ease, making this guide an essential companion for anyone seeking success in the competitive landscape of technical interviews.",
          category: "Material",
          subcategory: "Practice Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Practice/1.png?updatedAt=1702233520115",
          url: " ",
          trending: "false",
          author: "Dr. Amar Panchal",
          source: "Career Credentials",
          buyAvailable: "No",
        },
        {
          title: "Practice Questions on C by Career Credentials",
          description: `"Practice Questions on C Programming" by Career Credentials is a remarkable resource that showcases the company's commitment to empowering aspiring programmers. This comprehensive guide offers a curated collection of C programming exercises and problems, meticulously designed to enhance coding skills and proficiency in this foundational language. Career Credentials, known for its dedication to quality educational materials, has created a valuable tool for students and enthusiasts looking to master C programming. With its clear explanations, diverse problem sets, and a focus on hands-on learning, this resource reflects Career Credentials' dedication to fostering excellence in programming education. Prepare to excel in C programming with Career Credentials' expertly crafted practice questions.`,
          category: "Material",
          subcategory: "Practice Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Practice/c.png?updatedAt=1697477482273",
          url: " ",
          trending: "false",
          author: "Career Credentials",
          buyAvailable: "No",
        },
        {
          title: "Practice Questions on Python by Career Credentials",
          description: `"Practice Questions on Python Programming" by Career Credentials is a testament to the company's unwavering dedication to empowering individuals in the world of programming. This outstanding resource offers a meticulously crafted assortment of Python programming exercises and challenges, meticulously designed to enhance coding abilities and master this versatile language. Career Credentials has earned a stellar reputation for providing top-quality educational materials, and this guide is no exception. With its clear explanations, diverse problem sets, and hands-on learning approach, it reflects Career Credentials' unwavering commitment to nurturing excellence in programming. For those aspiring to excel in Python, Career Credentials' practice questions stand as a shining example of their commitment to advancing knowledge and skill development in the programming realm.`,
          category: "Material",
          subcategory: "Practice Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Practice/python.png?updatedAt=1697477255359",
          url: " ",
          trending: "false",
          author: "Career Credentials",
          buyAvailable: "No",
        },
        {
          title:
            "Function Handling Interview Preparation Codes By Career Credentials",
          description:
            "Career Credentials introduces the ultimate Interview Preparation Code Guide for Function Handling, a resource meticulously crafted to empower candidates aiming for success in technical interviews. Dive into a curated collection of practice codes that focus on mastering function-related challenges, covering topics like parameter handling, return types, and advanced function concepts. Each code snippet is designed to simulate real-world interview scenarios, providing a targeted approach to enhance problem-solving skills and code optimization techniques. With precision and clarity, Career Credentials ensures that this guide becomes an invaluable companion, preparing candidates to confidently tackle function-related interview questions and stand out in the competitive landscape of technical assessments.",
          category: "Material",
          subcategory: "Practice Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Practice/2.png?updatedAt=1702233520179",
          url: " ",
          trending: "false",
          author: "Dr. Amar Panchal",
          source: "Career Credentials",
          buyAvailable: "No",
        },
        {
          title: "Practice Paper On Java by Career Credentials ",
          description:
            "This book is a structured guide designed for individuals aiming to deepen their understanding of the Java programming language. Authored by Career Credentials, this book offers a systematic assortment of questions, spanning from basic fundamentals to intricate topics. Accompanying each question is a detailed solution, ensuring that readers fully comprehend the core concepts. Crafted to be both thorough and accessible, the book stands as a vital resource for novices and seasoned developers alike. With its emphasis on clarity and practical application, Career Credentials presents a straightforward and efficient resource for refining one's expertise in Java.",
          category: "Material",
          subcategory: "Practice Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Practice/java.png?updatedAt=1697477482342",
          url: " ",
          trending: "false",
          author: "Career Credentials",
          buyAvailable: "No",
        },
        {
          title:
            "Data Structures and Algorithms Interview Preparation Codes By Career Credentials",
          description:
            "Prepare for success in technical interviews with Career Credentials' Interview Preparation Code Guide for Data Structures and Algorithms. This meticulously curated resource is tailored to equip aspiring candidates with the skills needed to navigate complex interview scenarios. Covering a comprehensive range of data structures and algorithms, each practice code is designed to hone problem-solving abilities and algorithmic thinking. Whether you're tackling linked lists, trees, sorting algorithms, or dynamic programming challenges, this guide ensures a thorough and strategic preparation process. Elevate your confidence, proficiency, and interview performance with Career Credentials, your trusted partner in mastering the intricacies of data structures and algorithms for career advancement.",
          category: "Material",
          subcategory: "Practice Questions",
          img: "https://ik.imagekit.io/vv0gy8rix/Practice/4.png?updatedAt=1702233520230",
          url: " ",
          trending: "false",
          author: "Dr. Amar Panchal",
          source: "Career Credentials",
          buyAvailable: "No",
        },
      ],
    ],
    [
      [
        {
          title: "UX Design Roadmap by Career Credentials",
          description:
            "Embark on a creative journey as a UX designer with Career Credentials' role-based roadmap. Crafted for aspiring designers and seasoned professionals, our step-by-step guide ensures a clear and confident path. From user research and wireframing to interactive prototyping and usability testing, this comprehensive roadmap offers precision and practicality, making it an essential tool for your UX design career.",
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/2.png?updatedAt=1700381283260",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Frontend Roadmap by Career Credentials",
          description:
            'The "Frontend Roadmap" by Career Credentials is a strategic guide for individuals aspiring to excel in frontend development. This roadmap provides a systematic approach, guiding professionals through mastering HTML, CSS, and JavaScript fundamentals, advancing to popular frameworks like React, Angular, or Vue.js. Emphasizing responsive design, user interface (UI) principles, and accessibility standards, the Frontend Roadmap ensures a comprehensive skill set for creating visually appealing and user-friendly websites. From API integration to performance optimization, this guide equips developers with the proficiency to build modern and engaging user interfaces. Follow this roadmap to navigate the frontend landscape and advance your career in web development.',
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/6.png?updatedAt=1700381278746",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Android Developer Roadmap by Career Credentials",
          description:
            "Embark on a journey to become an Android developer with Career Credentials' role-based roadmap. Crafted for aspiring app creators and seasoned developers, our step-by-step guide ensures a clear and confident path. From mastering Java and Kotlin to UI/UX design principles and app deployment, this comprehensive roadmap offers precision and practicality, making it an essential tool for your Android development career.",
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/1.png?updatedAt=1700381283525",
          url: " ",
          trending: "false",
          author: "Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Cyber Security Roadmap by Career Credentials",
          description:
            "Build a career in cybersecurity with Career Credentials' expertly designed roadmap. Suitable for beginners and experienced professionals, our step-by-step guide ensures a seamless learning experience. From mastering ethical hacking techniques to cybersecurity policy and risk management, this user-friendly roadmap offers precision and practicality, making it an indispensable resource for becoming a cybersecurity specialist.",
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/3.png?updatedAt=1700381284581",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Full Stack Developer Roadmap by Career Credentials",
          description:
            "Unlock the potential of a full stack developer with Career Credentials' comprehensive roadmap. Whether you're new to web development or looking to expand your skills, our guide provides a clear and confident path. From front-end technologies like HTML/CSS to back-end frameworks and databases, this role-based roadmap combines precision and practicality, making it an essential tool for your full stack development career.",
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/5.png?updatedAt=1700381278664",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "QA Roadmaps by CAreer Credentials",
          description:
            'The "QA Roadmap" by Career Credentials is a strategic guide for professionals aspiring to excel in Quality Assurance (QA). This roadmap navigates through essential testing methodologies, automation tools, and software development life cycle integration. From mastering manual testing techniques to adopting automated testing frameworks like Selenium and JUnit, this guide ensures a comprehensive skill set. Emphasizing agile methodologies, continuous integration, and defect tracking, the QA Roadmap equips individuals with the expertise to ensure software quality and reliability. From performance testing to security assessments, follow this roadmap to confidently navigate the QA landscape and advance your career in software quality assurance.',
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/9.png?updatedAt=1700381278741",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "React Native Roadmap by Career Credentials",
          description:
            "Embark on the Native React Roadmap by Career Credentials—an essential guide for professionals seeking mastery in Native React development. This strategic roadmap systematically leads individuals through the intricacies of crafting native mobile applications. From gaining proficiency in React Native fundamentals to navigating advanced components, state management, and efficient navigation techniques, this guide ensures a well-rounded skill set. Prioritizing responsive design principles, API integration strategies, and performance optimization, the Native React Roadmap equips learners to create seamless and high-performance mobile experiences. With a dedicated focus on cross-platform development and adherence to UI/UX best practices, follow this roadmap to confidently navigate the Native React landscape and propel your career in mobile app development.",
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/18.png?updatedAt=1700381284412",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Blockchain Roadmap by Career Credentials",
          description:
            "Navigate the complex world of blockchain technology with Career Credentials' meticulously structured roadmap. Designed for both blockchain enthusiasts and industry professionals, our guide provides clarity and confidence at every step. From understanding the basics of distributed ledger technology to developing decentralized applications and smart contracts, trust in our precision and practicality as you become a blockchain expert.",
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/4.png?updatedAt=1700381278646",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "AI and Data Scientist Roadmap by Career Credentials",
          description:
            'The "AI and Data Scientist Roadmap" by Career Credentials is a strategic guide designed for professionals aiming to excel in the dynamic realms of artificial intelligence and data science. This roadmap navigates through foundational concepts, advanced algorithms, and hands-on programming languages crucial for AI and data analysis. From mastering machine learning frameworks to understanding big data technologies, this comprehensive guide ensures a well-rounded skill set. Emphasizing real-world applications, ethical considerations, and staying abreast of industry trends, the AI and Data Scientist Roadmap equips individuals with the expertise to harness the power of data and drive innovation in the evolving landscape of artificial intelligence.',
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/13.png?updatedAt=1700381278306",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Game Developer Roadmap by Career Credentials",
          description:
            'Embark on the "Game Developer" roadmap, a thrilling odyssey into the realm of interactive storytelling and digital innovation. This guide steers you through the fundamentals of game design, programming, and graphics, unraveling the intricacies of crafting immersive gameplay experiences. Explore diverse game engines, honing your skills in Unity or Unreal Engine. From 2D pixel art to 3D modeling, delve into the visual aesthetics that breathe life into your creations. Learn the art of game physics, AI scripting, and multiplayer integration. Whether you dream of indie gems or AAA titles, this roadmap is your compass to turning gaming visions into reality. 🎮✨',
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/16.png?updatedAt=1700381283892",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "C++ Roadmap by Career Credentials",
          description: `The "C++ Roadmap" by Career Credentials is a comprehensive guide designed for individuals aspiring to master the intricacies of C++ programming. This strategic roadmap navigates through the fundamentals, emphasizing syntax, data structures, and algorithms. It progresses to advanced topics such as memory management, multithreading, and object-oriented design principles. With a focus on practical application and hands-on projects, the C++ Roadmap ensures a well-rounded skill set. From mastering standard template libraries to understanding performance optimization, this guide equips learners to become proficient C++ developers. Follow the roadmap to confidently navigate the language's complexities and propel your career in software development.`,
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/12.png?updatedAt=1700381278649",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "DevOps Roadmaps by Career Credentials",
          description:
            'The "DevOps Roadmap" by Career Credentials is a targeted pathway for professionals aspiring to thrive in the DevOps domain. This strategic guide is meticulously crafted to provide a step-by-step journey, integrating essential technical skills and industry-relevant certifications. Focused on mastering cutting-edge tools like Kubernetes and Ansible, embracing CI/CD principles, and fostering collaboration, this roadmap ensures a well-rounded skill set. With a keen emphasis on cloud technologies and automation, the DevOps Roadmap empowers individuals to navigate the complex intersection of development and operations. Earn your DevOps credentials and chart a course toward seamless, efficient, and collaborative software development.',
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/8.png?updatedAt=1700381278310",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Software Architect by Career Credentials",
          description:
            'The "Software Architect Roadmap" by Career Credentials is a strategic compass for professionals aspiring to excel in the dynamic role of a software architect. This roadmap guides individuals through the intricacies of crafting scalable and resilient software systems. From mastering architectural patterns and design principles to navigating the landscape of cloud-native technologies and microservices, this guide ensures a comprehensive skill set. Focused on effective communication, collaboration with cross-functional teams, and continuous adaptation to emerging technologies, the Software Architect Roadmap equips individuals to shape the architecture of sophisticated software solutions. Follow this roadmap to confidently navigate the ever-evolving field of software architecture and elevate your career in designing cutting-edge software systems.',
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/14.png?updatedAt=1700381283013",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "ASP.NET Core by Career Credentials",
          description:
            'The "ASP.NET Core Roadmap" by Career Credentials is a strategic guide for professionals aspiring to excel in web development using the ASP.NET framework. This roadmap navigates through foundational concepts, mastering C# programming, and understanding ASP.NET MVC or Razor Pages. From database integration using Entity Framework to authentication and authorization mechanisms, this guide ensures a comprehensive skill set. Emphasizing responsive design, API development, and cloud deployment, the ASP.NET Roadmap equips individuals to create robust and scalable web applications. From server-side rendering to client-side interactivity, follow this roadmap to confidently navigate the ASP.NET landscape and advance your career in web development.',
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/15.png?updatedAt=1700381282536",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Flutter Roadmap by Career Credentials",
          description:
            'The "Flutter Roadmap" by Career Credentials is a strategic guide for individuals eager to excel in mobile app development using Flutter. This roadmap provides a systematic approach, guiding professionals through mastering Dart programming, Flutter widgets, and responsive UI design. With an emphasis on state management, integration of APIs, and navigation patterns, the Flutter Roadmap ensures a comprehensive skill set for creating cross-platform applications. From widget customization to advanced features like animations, this roadmap equips developers with the proficiency to build visually appealing and high-performance mobile apps. Follow this roadmap to navigate the Flutter framework and propel your career in mobile development.',
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/11.png?updatedAt=1700381278316",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "PostGre SQL by Career Credentials",
          description:
            'The "PostgreSQL Roadmap" by Career Credentials is a strategic guide tailored for professionals aiming to master the complexities of PostgreSQL, a powerful relational database system. This roadmap navigates through foundational concepts, SQL syntax, and schema design, progressing to advanced topics like indexing, query optimization, and database administration. Emphasizing real-world application scenarios, security protocols, and scalability considerations, the PostgreSQL Roadmap ensures a robust skill set. From data modeling to backup and recovery strategies, this guide equips individuals to become proficient PostgreSQL developers and administrators. Follow this roadmap to confidently navigate the world of PostgreSQL and elevate your expertise in database management.',
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/10.png?updatedAt=1700381278751",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Technical Writer Roadmap by Career Credentails",
          description: `Embark on the "Technical Writer" roadmap, a transformative journey into the art of crafting clear, concise, and engaging technical documentation. Navigate through the intricacies of effective communication, mastering the skills to translate complex concepts into user-friendly guides. From understanding audience needs to creating comprehensive API documentation, this guide equips you with the tools to excel in the field. Explore different documentation formats, dive into version control, and learn the nuances of collaboration. Whether you're a seasoned professional or exploring the world of technical writing, this roadmap is your compass to becoming a proficient and influential communicator in the tech landscape. `,
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/17.png?updatedAt=1700381282755",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
        {
          title: "Backend Roadmap by Career Credentials",
          description:
            'The "Backend Roadmap" by Career Credentials is a meticulously crafted guide for professionals aspiring to thrive in backend development. This  roadmap outlines a step-by-step journey encompassing essential skills and technologies. From mastering server-side programming languages like Python and Node.js to understanding database management systems, RESTful APIs, and cloud platforms, this guide ensures a comprehensive skill set. Emphasizing security, scalability, and performance optimization, the Backend Roadmap equips individuals with the expertise to build robust, efficient, and scalable server-side solutions. Follow this roadmap to navigate the intricacies of backend development and excel in crafting the backbone of dynamic applications.',
          category: "Roadmaps",
          subcategory: "Role-Based",
          img: "https://ik.imagekit.io/vv0gy8rix/Roadmaps/Role-based/7.png?updatedAt=1700381278482",
          url: " ",
          trending: "false",
          author: " Kamran Ahmed",
          source: "roadmap.sh",
          buyAvailable: "No",
        },
      ],
    ],
    [
      [
          {
              "title": "CET PYQ Practice Set 3 by Cat Credentials",
              "description": "\"This book consists of an invaluable compilation of MBA CET previous year practice set - 3, officially authorized by CAT Credentials. Delve into the intricacies of the exam, decode its patterns, and refine your preparation strategy with authentic practice material. Elevate your confidence and performance, ensuring you're well-prepared to navigate the challenges of the MBA CET. This comprehensive resource is your key to success on the path to mastering the MBA entrance exam.\"",
              "category": "Higher Studies",
              "img": "https://ik.imagekit.io/vv0gy8rix/Higher%20Studies/CAT%20Credentials/cover%20page%203%201.png?updatedAt=1709145355876",
              "url": " ",
              "link": "https://campuscredentials.b-cdn.net/Higher%20Studies/CAT%20Credentials/CET%20Sample%20Paper%203.pdf",
              "view": "https://campuscredentials.b-cdn.net/Higher%20Studies/CAT%20Credentials/View/CET%20Sample%20Paper%203_removed.pdf",
              "trending": "false",
              "author": "Cat Credentials",
              "source": "Catcredentials.com",
              "buyAvailable": "No",
              "buyLink": null
          },
          {
              "title": "CET PYQ Practice Set 2 by Cat Credentials",
              "description": "\"This book consists of an invaluable compilation of MBA CET previous year practice set - 2, officially authorized by CAT Credentials. Delve into the intricacies of the exam, decode its patterns, and refine your preparation strategy with authentic practice material. Elevate your confidence and performance, ensuring you're well-prepared to navigate the challenges of the MBA CET. This comprehensive resource is your key to success on the path to mastering the MBA entrance exam.\"",
              "category": "Higher Studies",
              "img": "https://ik.imagekit.io/vv0gy8rix/Higher%20Studies/CAT%20Credentials/cover%20page2%201.png?updatedAt=1709145355891",
              "url": " ",
              "link": "https://campuscredentials.b-cdn.net/Higher%20Studies/CAT%20Credentials/CET%20Sample%20paper%202.pdf",
              "view": "https://campuscredentials.b-cdn.net/Higher%20Studies/CAT%20Credentials/View/CET%20Sample%20paper%202_removed.pdf",
              "trending": "false",
              "author": "Cat Credentials",
              "source": "Catcredentials.com",
              "buyAvailable": "No",
              "buyLink": null
          },
          {
              "title": "CET PYQ Practice Set 1 by Cat Credentials",
              "description": "\"This book consists of an invaluable compilation of MBA CET previous year practice set - 1, officially authorized by CAT Credentials. Delve into the intricacies of the exam, decode its patterns, and refine your preparation strategy with authentic practice material. Elevate your confidence and performance, ensuring you're well-prepared to navigate the challenges of the MBA CET. This comprehensive resource is your key to success on the path to mastering the MBA entrance exam.\"",
              "category": "Higher Studies",
              "img": "https://ik.imagekit.io/vv0gy8rix/Higher%20Studies/CAT%20Credentials/cover%20page1%201.png?updatedAt=1709145355824",
              "url": " ",
              "link": "https://campuscredentials.b-cdn.net/Higher%20Studies/CAT%20Credentials/CET%20Sample%20Question%20Paper%20(1)%2C.pdf",
              "view": "https://campuscredentials.b-cdn.net/Higher%20Studies/CAT%20Credentials/View/CET%20Sample%20Question%20Paper%20(1)%2C_removed.pdf",
              "trending": "false",
              "author": "Cat Credentials ",
              "source": "Catcredentials.com",
              "buyAvailable": "No",
              "buyLink": null
          },
          {
              "title": " CAT Essay Booklet",
              "description": "“Practice makes a man perfect” …  We at CAT Credentials believe that the phrase if tweaked properly can help you  achieve your dreams, in this case, your dream b-school. The saying that we believe in  is “Perfect practice makes a man perfect”. Over the tenure of our teaching, we have seen that the people have a phobia of reading  the topics which move out of their comfort zone. This essay booklet will help you walk  through the different topics and genre. While an apple a day keeps a doctor away, a  page of this essay booklet every day should help you keep your phobia of reading the  topics out of your comfort zone away while solving the reading comprehension topics. ",
              "category": "Higher Studies",
              "img": "https://ik.imagekit.io/vv0gy8rix/Higher%20Studies/CAT%20Credentials/CAT-%20Essay%20Booklet.png?updatedAt=1709145355934",
              "url": " ",
              "link": "https://campuscredentials.b-cdn.net/Higher%20Studies/CAT%20Credentials/CAT%20-%20Essay%20Booklet.pdf",
              "view": "https://campuscredentials.b-cdn.net/Higher%20Studies/CAT%20Credentials/View/CAT%20-%20Essay%20Booklet_compressed.pdf",
              "trending": "false",
              "author": "CAT Credentials",
              "source": "catcredentials.com",
              "buyAvailable": "No",
              "buyLink": null
          }
      ]
  ]
  ]);
  const [totalLength, setTotalLength] = useState(0);
  useEffect(() => {
    try {
      if (cardData[0][0].length > 0) {
        setTotalLength(
          cardData[0][0].length +
            cardData[1][0].length +
            cardData[2][0].length +
            cardData[3][0].length +
            cardData[4][0].length +
            cardData[5][0].length
        );
        setBookData(cardData);
      }
    } catch (e) {
      setTimeout(() => {
        try {
          if (cardData[0][0].length > 0) {
            setTotalLength(
              cardData[0][0].length +
                cardData[1][0].length +
                cardData[2][0].length +
                cardData[3][0].length +
                cardData[4][0].length +
                cardData[5][0].length
            );
            setBookData(cardData);
          }
        } catch (e) {
          setTimeout(() => {
            try {
              if (cardData[0][0].length > 0) {
                setTotalLength(
                  cardData[0][0].length +
                    cardData[1][0].length +
                    cardData[2][0].length +
                    cardData[3][0].length +
                    cardData[4][0].length +
                    cardData[5][0].length
                );
                setBookData(cardData);
              }
            } catch (e) {
              setTimeout(() => {
                try {
                  if (cardData[0][0].length > 0) {
                    setTotalLength(
                      cardData[0][0].length +
                        cardData[1][0].length +
                        cardData[2][0].length +
                        cardData[3][0].length +
                        cardData[4][0].length +
                        cardData[5][0].length
                    );
                    setBookData(cardData);
                  }
                } catch (e) {
                  setTimeout(() => {
                    try {
                      if (cardData[0][0].length > 0) {
                        setTotalLength(
                          cardData[0][0].length +
                            cardData[1][0].length +
                            cardData[2][0].length +
                            cardData[3][0].length +
                            cardData[4][0].length +
                            cardData[5][0].length
                        );
                        setBookData(cardData);
                      }
                    } catch (e) {
                      setTimeout(() => {
                        window.location.reload();
                      }, 3000);
                    }
                  }, 15000);
                }
              }, 8000);
            }
          }, 3000);
        }
      }, 800);
    }
  }, []);

  return (
    <>
      {false && (
        <div className="loading-background">
          <div className="custom-loader"></div>
        </div>
      )}

      {true && (
        <>
          <div
            className="book-form-outer"
            id="request-form"
            style={{ alignItems: "center" }}
          >
            <RequestForm />
          </div>
          <div
            className="book-form-outer landing-book-form-outer"
            id="delete-form"
            style={{ alignItems: "center" }}
          >
            <DeleteForm />
          </div>
          <div
            className="book-form-outer landing-book-form-outer"
            id="report-form"
            style={{ alignItems: "center" }}
          >
            <ReportForm />
          </div>
          <div
            className="book-form-outer landing-book-form-outer"
            id="term-form"
            style={{ alignItems: "center", height: "90%" }}
          >
            <Terms />
          </div>
          <div className="landing-outer-div">
            <Navbar />
            {/* <div className="max-w-[1600px] w-full rounded-full h-[396px] bg-gradient-to-b from-transparent from-0% via-90% to-100% via-gray-700 to-transparent absolute bg-opacity-50 left-1/2 -translate-x-1/2 top-[200px] blur-[100px]"></div> */}
            <div className="front-page-info  ">
              <h1 className="linear-wipe">Free Online Books and Resources</h1>
              <div className="front-page-subheading">
                Download{" "}
                <span className="subhead-span">
                  {" "}
                  {Math.round(totalLength / 10) * 10 !== 0
                    ? Math.round(totalLength / 10) * 10
                    : 130}
                  +{" "}
                </span>
                books and freebies for free and kickstart your career
              </div>
              <h5 style={{marginTop:"15px",padding:"15px"}}>Experiencing issues downloading books ? Please <a style={{color:"#00FCFC"}} href="mailto:support@prepcrazy.com">mail</a> us with details for assistance !</h5>
            </div>

            <form className="search-container" id="form">
              <input
                required
                type="text"
                id="search-bar"
                placeholder="Search books, roadmaps, practices or miscellaneous.."
                onChange={handleChange}
                autoComplete="off"
              />
              <a href="/#" className="search-anchor-tag">
                <svg
                  className="mr-2 h-3 w-3 search-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.4145 20.5913L18.7695 15.9463C20.1838 13.8291 20.7601 11.2616 20.3862 8.74311C20.0123 6.22462 18.715 3.93524 16.7466 2.32029C14.7782 0.705331 12.2795 -0.119724 9.73651 0.00560621C7.19351 0.130936 4.78803 1.19769 2.98799 2.99837C1.18795 4.79905 0.122047 7.2049 -0.00238424 9.74795C-0.126815 12.291 0.699123 14.7894 2.31477 16.7572C3.93042 18.725 6.22026 20.0215 8.73889 20.3945C11.2575 20.7675 13.8248 20.1903 15.9415 18.7753L20.5865 23.4193C20.9647 23.7882 21.4721 23.9947 22.0005 23.9947C22.5288 23.9947 23.0363 23.7882 23.4145 23.4193C23.7894 23.0442 24 22.5356 24 22.0053C24 21.4749 23.7894 20.9663 23.4145 20.5913ZM10.2505 3.00527C11.6844 3.00527 13.0861 3.43047 14.2784 4.22711C15.4706 5.02375 16.3999 6.15605 16.9486 7.48081C17.4973 8.80558 17.6409 10.2633 17.3612 11.6697C17.0814 13.076 16.3909 14.3679 15.377 15.3818C14.3631 16.3957 13.0712 17.0862 11.6649 17.366C10.2585 17.6457 8.80078 17.5021 7.47602 16.9534C6.15125 16.4047 5.01896 15.4754 4.22232 14.2832C3.42568 13.0909 3.00047 11.6892 3.00047 10.2553C3.00259 8.3331 3.7671 6.49026 5.12628 5.13108C6.48546 3.7719 8.3283 3.00739 10.2505 3.00527Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div className="search-box" id="search-box"></div>
            </form>
            <BookTabs cardData={bookData} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
