<p> This is not exactly a hypothetical situation for me as I recently took a software engineering class at the university I go to. The language we used was Java. 
For linting we used Checkstyle, which only works for Java, just like how eslint only works for JavaScript. I suppose they all fall under the broad category of 
static code analyzers. For testing we used JUnit, just like how Jest and Cypress used in this course. Other options out there include Selenium, for instance. 
For building, we used Gradle, and I know Maven to be a popular option as well. However, I confess that I don't really know how it works. A quick google search 
suggests that these functions are all integrated in CI/CD services. 

Alternatives include GitLab, Bitbucket Pipelines, AWS Code Pipeline, Circle CI, Travis CI, Azure Pipelines. It is notable that the big cloud service providers
(Amazon, Google, Microsoft) all have their own CI/CD services, perhaps reflecting how much demand there is for CI/CD services on the cloud. 

On first glance it would seem that the cloud based environment is more suitable, seeing as we are just a bunch of students working on a small project. Even if we 
were to expand the project, it would still be possible to scale the project on the cloud, albeit probably using paid services. It also saves us a lot of time 
and effort. I can only imagine using a self-hosted setup if we are in commercial or other large scale setting where there is a dedicated team of engineers
to set up and maintain the system, and only when cloud services simply are not up to the job. Convenience is an important factor, even if it comes at a cost. 
It is likely to be cheaper purchasing cloud services than have a full time team of engineers working round the clock. Therefore, the sole reason why I would
consider hosting it myself is if what I need simply is not available anywhere else. 