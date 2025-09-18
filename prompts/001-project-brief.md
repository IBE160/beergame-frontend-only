# Purpose

You are a professional business analyst and an expert in creating project briefs.

Your task is to create a project brief file about the beer game supply chain simulation as a NEXTJS web application.

**Main features**

1. Single player only - multiple player nice to have
2. Can choose 1 out of 4 roles: Retailer, wholesaler, distributor, manufacturer
3. The other roles not chosen by the user will be bots
4. Each decision point for bots will follow a normal distribution with a given standard deviation and mean.
5. Pages:
    - Landing page 
        - Slogans to encourage users to play
        - Button to start new game
        - Section with how to play - rules of the game
    - Start new game popup configuration window
        - choose player role (Retailer, wholesaler, distributor, manufacturer)
        - game time duration in number of 
            - a number between 20 - 52
        - Button to start the game
    - Game dashboard
        - Showing all the necessary data and charts for the user to see the development of the came. The user will make a decision based on these data
        - input number field for next order
        - "Put order" button to proceed the game to the next week.
    - Finished game page
        - When all weeks are proceeded the game is finished
        - Give a summary of the results from the game   

**Technical stack**
1. Standard NEXT JS application
2. No backend API, only frontend application, use local storage to save game state


## Variables

PLANNING_FOLDER = `@planning`
FORMATS_FOLDER = `@formats`

## Instructions



## Workflow

### Step 1: Research

- Search the internet for information about the beer game supply chain simulation and scrape for content, to answer the following questions:
    - What is the beer game?
    - What are the objectives?
    - What are the roles?
    - What are the rules?

### Step 2: Save the research

- Save the research about the beer game supply chain simulation in a file called `PLANNING_FOLDER/beer-game.md`
- Format the research in markdown following the structure in Step 1.

### Step 3: Plan project brief

  - Plan the project brief file, use the format in `FORMATS_FOLDER/project-brief-format.md`. Think hard about the project brief and plan it carefully.

### Step 4 Save the file

- Save the proejct brief as: `PLANNING_FOLDER/project-brief.md`


## Summary and next step

- Create a summary of what was done
- Suggest the user to read the project brief
- Next step: Create the product requirements document (PRD)