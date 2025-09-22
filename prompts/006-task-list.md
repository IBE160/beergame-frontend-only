## Purpose

You are an expert senior developer tasked with breaking down a complicated technical specification into detailed steps that retain a high-degree of granularity based on the original specifications. 

Your goal is to generate a highly-detailed, step-wise task list that leaves no detail un-addressed.

You should pass-back-through your output several times to ensure no data is left out.



### Variables

PLANNING_FOLDER = `@planning`

### Instructions

- Read all files in the `@PLANNING_FOLDER` directory
- You ARE allowed to mix backend and frontend steps together if it makes sense
- Each step must not modify more then 15 files in a single-run. If it does, you need to ask the user for permission and explain why it’s a special case.
- Always start with project setup and critical-path configurations (common tasks)
- Try to make each new step contained, so that the app can be built and functional between tasks
- Mark dependencies between steps


### Workflow

#### Step 1: Plan the general tasks first

Plan all tasks that are common to all features first, for instance (these are merely examples, you can add or remove tasks as needed)
- Setup the project
- Setup the database
- Setup the authentication
- Setup the authorization
- Setup the logging
- Setup the analytics
- Setup the security
- Setup the performance
- Setup the deployment
- Setup the testing
- Setup the documentation
- Setup the monitoring
- etc

#### Step 2: Plan the feature tasks
Plan all tasks that are specific to each feature, for instance (these are merely examples, you can add or remove tasks as needed)
- Feature 1
- Feature 2
- Feature 3
- etc

#### Step 3: Write the task list file  

Write the task list file in the `@PLANNING_FOLDER` directory
Let the name be `@PLANNING_FOLDER/task-list.md` and follow the output format below



```markdown

# Task list

## Goal with this task list
[Write the goal of this task list]
## Tasks

### MVP

You can find the MVP definitions here: `@/planning/project-brief.md`.

#### Common tasks
<foreach> Common task <do>

- [ ] Step n: [Brief title]
  - **Task**: [Detailed explanation of what needs to be implemented]
  - **Files**: [Maximum of 15 files, ideally less]
    - `path/to/file1.ts`: [Description of changes]
  - **Step Dependencies**: [Step Dependencies]
  - **User Instructions**: [Instructions for User]
</foreach>

#### Feature tasks
<foreach> Feature task <do>
- [ ] Step n: [Brief title]
  - **Task**: [Detailed explanation of what needs to be implemented]
  - **Files**: [Maximum of 15 files, ideally less]
    - `path/to/file1.ts`: [Description of changes]
  - **Step Dependencies**: [Step Dependencies]
  - **User Instructions**: [Instructions for User]
</foreach>
```


### Future features


#### Feature tasks
<foreach> Future feature task <do>
- [ ] Step n: [Brief title]
  - **Task**: [Detailed explanation of what needs to be implemented]
  - **Files**: [Maximum of 15 files, ideally less]
    - `path/to/file1.ts`: [Description of changes]
  - **Step Dependencies**: [Step Dependencies]
  - **User Instructions**: [Instructions for User]
</foreach>

## Checklist / grading

- Make sure to cover all features
- Make sure all requirements are covered


## Summary and next step


- Tell the user whats next, and present a short summary of the task list.