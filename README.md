# Planterplaneter

A small website for a European store with ornamental plants.
<p>I found his layout in the vastness of Figma, and I liked him right away.</p>
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/92833239/172631829-91708094-9e69-423f-a4b2-37692ad092f7.png">

## Deployment
### Click [here](https://gagarin-one.github.io/Planterplaneter/) to view the deployment


![some](https://media.giphy.com/media/kD3qpN0pnc58KsAQoE/giphy.gif)
## Technologies
Project is created with:
  Create react app
* React version:18.1.0
* Redux 
* Redux-thunk
* Typescript
* Saas
* axios
## Problems that have arisen
<p>I used the "Mock Api" as the server api. It has several conventions (it automatically sets the id for elements, which makes it difficult to find elements between different arrays), I had to do additional checks for additional ones when making requests to the server.</p>
<p>In this project several elements are absolutely located (position: absolute), there was a difference when displaying elements in safari and chrome, which I solved for safari in the following way</p>	

```
@media not all and (min-resolution:.001dpcm)
{ @supports (-webkit-appearance:none) {
    .shop { 
      margin-top:clamp(100px, 25vw, 300px);
    }
}}
```

## Setup
To run this project, install it locally using npm:

```
$ cd ../Planterplaneter
$ npm install
$ npm start
```
