# NextAuth-Azure-Login-Template
This is a simple login portal using NextJS, React, Mantine UI and Next Auth. This specific configuration is set to use Azure as it's service provider but is fully customizable to a number of providers (see https://next-auth.js.org/providers/credentials). This is boilerplate code meant to make login portals quick to get up and running if I ever need them on the fly.

## Screenshots
![template-login-dark](https://user-images.githubusercontent.com/26133178/166849919-1373a122-425c-43d3-8fb4-f13ef45ff2e6.PNG)
![template-login-light](https://user-images.githubusercontent.com/26133178/166849860-85832109-d83a-4e5c-b9fd-231d8941ad22.PNG)
![template-dashboard-dark](https://user-images.githubusercontent.com/26133178/166849829-9370d970-2e6a-4175-a72c-c4e4b4332018.png)
![template-dashboard-light](https://user-images.githubusercontent.com/26133178/166849833-326c4d9b-c84f-41bb-9e0c-cf868c19e9f3.png)

## Enviroment Variables
Create a .env.local in the root directory and configure it according to https://next-auth.js.org/configuration/options and the cooresponding provider, in this case https://next-auth.js.org/providers/azure-ad. 
