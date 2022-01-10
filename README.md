# TropiPay Demo based on DotNet Framework 6.0 and Angular
Simple demo web API with client credential authentication for TropiPay based on MS DotNet Framework 6.0 and Angular 12.2 This is an example that shows an example of obtaining the user profile data from the authentication with an apikey.

**Note:** the credentials are specified in the ```appsettings.Development.json``` or ```appsettings.json``` file, using the key named *ClientId* and *ClientSecret*.

## Develop steps 
- dotnet new --list
- dotnet new angular --name demo-tpp-dotnet-angular
- cd demo-tpp-dotnet-angular
- dotnet publish

## Run steps
- git clone https://github.com/ameksike/demo-tpp-dotnet-angular.git
- cd demo-tpp-dotnet-angular
- dotnet run 
- https://localhost:7036/

## Docs
- For more information about ASP Net, see the [link below](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-6.0&tabs=visual-studio-code).

- For more information about TropiPay API, see the [link below](https://tpp.stoplight.io/docs/tropipay-api-doc/ZG9jOjEwMDY4ODg3-getting-started).
