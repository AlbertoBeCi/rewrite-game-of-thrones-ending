# 🐉 Rewrite the Ending: Game of Thrones

🇪🇸 Prefer to read this document in Spanish?  
👉 [README.es.md](./README.es.md)

## 🎯 Class objective

Today you will work on a guided web development exercise: create a visual and functional experience inspired by a Figma reference, using a starter project that is already prepared so you can focus on the core challenge.

The idea is that, from a minimal template, you build a page that invites the user to answer a few questions and, based on their answers, display an alternative ending together with a predefined image or video.

This project is meant for learning, putting what you have learned into practice, and gradually internalizing good habits: separating responsibilities, writing clear code, working incrementally, and documenting the decisions you make.

## 🧩 What you will do

In this session you will work on three blocks:
1. Design and build the interface using the Figma reference.
2. Prepare the flow of the questionnaire and the result view.
3. Think about how to connect answers with different endings and a visual image or video.

## 🖼️ Visual reference

Use this reference as your main design guide:

[Open the Figma reference](https://www.figma.com/make/wnq2Z37KdEId5FV1TmwWt0/Cinematic-Landing-Page-Design?code-node-id=0-9&p=f&t=ITWh8GkU4nY3SnMB-0&fullscreen=1)

You do not need to copy it exactly. The important part is to make decisions about:
- the visual atmosphere,
- the layout of the sections,
- the colors,
- the typography,
- the spacing,
- and the overall feel of the page.

## 🚀 Starter prompts

Before writing code, answer these questions as a team or individually:

1. What sections should the page include based on the reference?
2. What elements repeat across the design: buttons, cards, headings, intro text?
3. What tone does the image communicate: epic, dark, premium, cinematic?
4. What parts of the design can be built with HTML and CSS from the start?
5. What areas should remain as placeholders so the questionnaire logic and the result can be completed later?

## 📝 Create your own prompt log

Create a personal Markdown file during the exercise, for example named prompts.md or process-log.md, and use it to record:
- the prompts you try with AI,
- the decisions you make as a team,
- the structure you decide to build,
- and the changes you apply to the code.

This helps you avoid vague prompts such as: "make a Game of Thrones page like this photo". Instead, try more intentional prompts, such as:

> Help me structure a web project in HTML, CSS, and JavaScript for a cinematic landing page. I want the code split by responsibility: HTML for structure, CSS for styles, JS for interactivity, and a data file for alternative endings. I want the solution to be clean, organized, and easy to maintain.

## � How to approach the exercise

To make the challenge genuinely formative, it helps to work in small steps:
- start with the structure and visible content,
- then separate the logic into simple functions,
- keep the code readable and use clear names,
- avoid putting everything in one file,
- and record important decisions in your prompt log.

Each small improvement matters: the goal is not to be perfect from the beginning, but to build a stronger foundation step by step.

## �🧱 What is already prepared

The starter only provides a very minimal base. It does not include the finished solution or a fully completed structure.

What you do have is:
- [index.html](index.html), where you will create or complete the page structure,
- [src/style.css](src/style.css), where you will define the project styling,
- [src/main.js](src/main.js), where you will implement the interactivity,
- and [src/data/endings.js](src/data/endings.js), where you will store the alternative endings data.

That means you will need to build the exercise from the instructions and prompts: HTML, CSS, JavaScript, and ending data. The complete questionnaire and generator logic are not solved yet, so that part is part of the challenge.

## 🛠️ Class steps

### 1. Prepare the environment
1. Install the dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run start
   ```
3. Open the preview in your browser.

### 2. Design the interface
- Organize the page into clear sections: hero, explanation, questionnaire, result, and footer.
- Use semantic tags such as `header`, `main`, `section`, and `footer`.
- Create or complete the HTML and styles so the interface makes sense on its own.
- Keep spaces prepared for future content with comments in the code.

### 3. Define the questionnaire flow
- Create a short list of simple and clear questions.
- Each answer should point to a user orientation, such as A, B or C.
- Think about how to accumulate those answers and decide on an alternative ending.
- Implement the logic in JavaScript so the user can move through the questionnaire and see a result.
- You do not need everything to be perfect; the important thing is that the flow feels coherent.

### 4. Define the final result
- When the user answers, the program can choose a different ending depending on the combination of responses.
- You can think of a logic like this:
  - if the user picks mostly A answers, show an ending A,
  - if the pattern is mostly B, show an ending B,
  - if it is mostly C, show an ending C,
  - and if there is a mix, use an intermediate rule.
- Use [src/data/endings.js](src/data/endings.js) as the source of information for the alternative endings.
- The result should be clear, visual, and easy to read.

### 5. Add the visual image or video
- For the visual part, you can use a predefined image or video based on the chosen ending.
- For example:
  - ending A → image/video of power and the throne,
  - ending B → image/video of mystery and war,
  - ending C → image/video of hope and reunion.
- The important point is that the system can associate a result with a concrete visual reference.

### 6. Upload the work to GitHub
- Create a repository on GitHub.
- Connect your local project to the repository with these basic steps:
  1. Initialize Git in the project folder if it is not already set up: `git init`.
  2. Add the files to version control: `git add .`.
  3. Make your first commit: `git commit -m "Initial commit"`.
  4. Create an empty repository on GitHub.
  5. Connect the remote using the command GitHub provides, usually something like: `git remote add origin https://github.com/your-username/your-repository.git`.
  6. Push your changes: `git push -u origin main`.
- Make clear and frequent commits.
- Upload the project and share the link when it is ready.

## 💡 Help hints

If you get stuck, try these ideas:
- Start with the HTML structure before adding too much logic.
- First make the UI visible and clear.
- Then think about how to collect the answers.
- Finally decide how to show the result and its image or video.

## 🌟 Optional extras

If you want to go a step further:
- deploy it on Vercel:
  - create an account on Vercel,
  - import the GitHub repository,
  - choose the project and click Deploy,
  - Vercel will generate a public URL so the website can be viewed online.
- try a basic AI integration to generate the ending inside the project:
  - for example, you can prepare a button that sends a question or a combination of answers to an AI API,
  - receive a generated response and show it as part of the result,
  - or simply use it to create variations of the alternate ending text.
- improve the design with animations and microinteractions:
  - hover transitions on buttons,
  - animated transitions when switching sections,
  - or more cinematic effects when showing the result.

## ✅ Delivery criteria

To consider the exercise complete, the page should:
- feel inspired by the Figma reference,
- have a clean and clear structure,
- be responsive,
- show a coherent questionnaire and result flow,
- and be prepared to associate answers with an alternative ending and a predefined image or video.

## 🧠 Class wrap-up

The goal is not to solve everything at once, but to build a solid foundation that is visually appealing and ready to keep developing. Think like designers, developers, and experience creators.