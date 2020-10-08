# RnS v2
- Front End
  > Implement "Free Estimate" and "Call Now" buttons on landing page for mobile
  > Implement lazy-loading for 'Services' and 'Our Work' images
  > Implement lazy-loading for Google Map in footer
  > Implement fade-in effects where relevant (text, images, buttons, etc.)
  > Implement progress/loading spinner/bar

- Back End
  > Update contact form template in AWS lambda function
  > Implement reCaptcha for form submissions
  > Update contact form lambda function to include Joy's email in SES recipient list
  > Update Access-Control-Header-Origin header for the ContactFormAPI in API Gateway to only allow rspressurewashing.com
  > Route rspressurewashing.com to Netlify
  > Decommission AWS Elastic Beanstalk, Load Balancer, and RDS
  > Create lambda function to handle bounce & complaint notifications in order to move AWS SES out of the sandbox & send confirmation emails to customers after successful contact form submission

- Front & Back End
  > Implement UI interface & backend to manage pictures in 'Our Work' component

- Throttling
  > AWS Lambda 
    • Functions -> Configuration -> Concurrency
    • https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html
  > API Gateway
    • APIs -> (select) -> Stages -> (select) -> Settings
    • https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html
    • https://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html#how-to-stage-settings
  > AWS SES - Simple Email Service
    •




