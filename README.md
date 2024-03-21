<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="./Logo Polar Fox Games.png" alt="Logo" width="80" height="80">

  <h3 align="center">Pokemon App</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

![Interface Screenshot Home][interface-screenshot-home]
![Interface Screenshot Detail][interface-screenshot-detail]
![Interface Screenshot Pokedex][interface-screenshot-pokedex]

As part of a study project, we were asked to create a complete mobile application with React Native.

It is a Pokedex application that allows users to get all the existing Pokemons, obtain details about them and add the pokemon selected to a Pokedex. This app enables the user to search a pokemon by its name or its ID. This App is based on the Pokeapi.

### Built With

Front-end languages and tools

* [![ReactNative]][ReactNative-url]
* [![ReactNativeNavigation]][ReactNativeNavigation-url]
* [![Redux]][Redux-url]
* [![Axios]][Axios-url]


## Getting Started

### Prerequisites

**Note that this project is made in CLI, not with Expo!**

You should first install Node Package Manager on your device
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is how you can import the project and configure it._

1. Clone the repo
   ```sh
   git clone https://github.com/JaceyStew6/Pokemon-App.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

You should have those packages installed in your node_module folder :

```json
  "dependencies": {
    "@react-native-async-storage/async-storage": "^1.23.1",
    "@react-navigation/bottom-tabs": "^6.5.20",
    "@react-navigation/native": "^6.1.17",
    "@react-navigation/native-stack": "^6.9.26",
    "@reduxjs/toolkit": "^2.2.1",
    "axios": "^1.6.8",
    "react": "18.2.0",
    "react-native": "0.73.6",
    "react-native-safe-area-context": "^4.9.0",
    "react-native-screens": "^3.29.0",
    "react-native-vector-icons": "^10.0.3",
    "react-redux": "^9.1.0"
  },
```
_The dependencies can be found in the `package.json` file_.


3. Run the app in an Android Studio Emulator
```sh
npx react-native run-android
```


<!-- ROADMAP -->
## Roadmap

- [x] Conception
  - [x] UX-UI Design on Figma
- [x] Create main features
  - [x] Store enabling to call the Pokeapi and get every Pokemons
  - [x] Configure Navigation Properties with a Bottom Tab and a Stack
  - [x] Home Screen
    - [x] List of Pokemons with their pic, name and ID
    - [x] Input to search a Pokemon by its name or ID
    - [ ] Filter Pokemons by type
  - [x] Detail Screen
    - [x] Detail of a selected Pokemon with a pic, name, ID, its types, stats...
    - [x] Button to add the Pokemon to a personal Pokedex
    - [ ] Get the Pokemon Evolutions
    - [ ] Implement an optimized description
    - [ ] Optimize the code with different components
  - [x] Detail Screen
    - [x] List of Pokemons with their pic, name and ID
    - [x] Feature to delete a Pokemon when user press on the selected Pokemon
    - [ ] Go to a Pokemon detail when the user do a short press on the selected Pokemon
    - [ ] Delete a Pokemon when the user do a long press on the selected Pokemon



## Contact

Project Link: [https://github.com/JaceyStew6/Pokemon-App.git](https://github.com/JaceyStew6/Pokemon-App.git)



<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/p-roxane/
[interface-screenshot-home]: ./Screenshots/HomeScreenMin.png
[interface-screenshot-detail]: ./Screenshots/PokemonDetailScreenMin.png
[interface-screenshot-pokedex]: ./Screenshots/PokedexScreenMin.png
<!-- front-end links -->
[ReactNative]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNative-url]: https://reactnative.dev/docs/getting-started
[ReactNativeNavigation]: https://img.shields.io/badge/React_Native_Navigation-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNativeNavigation-url]: https://reactnavigation.org/
[Redux]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://react-redux.js.org/
[Axios]: https://img.shields.io/badge/Axios-ED8B00?style=for-the-badge&logo=axios&logoColor=white&color=%235A29E4
[Axios-url]: https://www.npmjs.com/package/axios