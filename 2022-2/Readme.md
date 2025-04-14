Advent of Code 2022 day 2
====

## Approach
Since this is a publicly accessible problem, I simply asked chatGPT to solve it using this prompt:
```Can you solve the programming challenge at https://adventofcode.com/2022/day/2```
This produced code in python.  I changed the prompt to deliver the solution in Typescript via:
```Can you solve the programming challenge at https://adventofcode.com/2022/day/2 in typescript```
I then asked for test cases by providing
```You said:
Can you write some test cases using typescript and jest for the problem at https://adventofcode.com/2022/day/2 ```

I then cleaned up the files produced, generated npm package.json's for them and tested to be sure it would pass the tests.  Due the current nature of AI, its own tests didn't pass when testing the problem.  I then double-checked the generated solution and tests finding that the tests' expected results didn't match up with the stated problem.  I altered the tests accordingly, and once all tests passed, I committed my solution.