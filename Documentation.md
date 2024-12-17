For Running the project please enter your Gemini API key in index.js
# Task Documentation

## **Overview**
This document provides an overview of the steps, tools, and methods used to analyze and implement the requested task. It includes details about AI tools utilized, specific prompts applied, challenges encountered, and key learnings.

---

## **Approach**
### Steps Taken:
1. **Repository Setup**:
   - Forked the original repository from GitHub.
   - Cloned the forked repository to the local machine using `git clone`.

2. **Selecting Frameworks and Libraries for Implementation**:
   - Used Node.js for backend.
   - Used EJS templating along with HTML libraries like BootStrap.

3. **Feature Implementation**:
   - Used Gemini SDK for Node to interact with Gemini.
   - Used Express in backend to respond to frontend requests.
   - Used Gemini for tone analysis, error detection and also for Draft Creation.
   - Implemented Voice Transcription.

4. **Version Control**:
   - Commited all local changes to pushed them to GitHub.
   - Moved all files and directories except `node_modules/` and `.env` to a single directory for better structure.

6. **Documentation**:
   - Prepared this markdown file to summarize the process, tools used, and learnings.

---

## **AI Tools Used**
### Tools/Frameworks:
1. **Gemini/Gemini 1.5 Flash**:
   - **Purpose**: Used for technical guidance, issue resolution, and process optimization.
   - **Application**: Provided detailed instructions for resolving Git conflicts, organizing files, and best practices for pushing changes.

2. **google/generative-ai**:
   - NPM package for using Gemini with Node.js .


### Specific Prompts Used:
1. "Specify whether the following contains any grammatical or tone errors in not: "
2. "Steps to push local changes to a forked GitHub repository."
3. "How to organize files into a single directory and push them to GitHub?"
4. "What does the error 'refusing to merge unrelated histories' mean, and how can I fix it?"

---

## **Challenges and Learnings**
### Challenges:
1. **Divergent Branches**:
   - Encountered an error while pushing changes due to differences between local and remote branches.
   - Resolved by performing a `git pull` with the `--allow-unrelated-histories` flag.


### Learnings:
1. Gained deeper insight into how API's work and how they must be integrated.
2. Enhanced technical documentation skills by summarizing the process and tools effectively.

---


---

### **Contact**
For any further queries or contributions, feel free to contact:  
**Name**: Aditya Inamdar  
**GitHub Profile**: [Aditya-711](https://github.com/Aditya-711)  
**Email**: adityainamdar711@gmail.com
