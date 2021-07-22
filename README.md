# Gilded Rose Assignment

In the project directory, you can run:

`yarn start`

To execute tests run

`yarn test`

### Quick introduction of my approach.

After I get to hang of it, i realized that I shouldn't break things while refactoring. I thought it would be wiser to add tests before starting to refactor.
(A naive TDD aproach I tried). After carefully reading the instructions I created tests for each rule.

After I ensure that tests are covering most of edge cases started to simplify conditional statements. At first I extracted increase/decrese quality and decrease sellIn value as a micro function. It simplified most of it. After that I came into a decision point whether I should extract each sub Item type as a new class or not. I decided not to. I believe immature abstraction could make code too verbose and could be time consuming. At the current state, problem is simple enough to handle with a switch case. I opt in to that solution. If the requirements change this solution won't be able to handle every case (a.k.a not scalable enough.)
