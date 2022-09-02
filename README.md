# Tic Tac Toe game with ReactJS - Juego Tres en raya con ReactJS

Tic Tac Toe is a game to play in a board of 3x3 using Xs and Os to identify players. The first one who orders three of his pieces in a row, column or diagonal wins. Enjoy the game selecting the theme for the icons!

Tres en raya es un juego de tablero de 3x3 usando Xs y Os para identificar a los jugadores. El primero que consigue ordenar tres de sus piezas en fila, columna o diagonal gana. Disfrutá del juego seleccionando un tema para los íconos!

## Installing on your computer - Instalar en tu computador

<p>1-. Open your terminal and then type:</p>

`$ git clone https://github.com/kevporti/TicTacToe_ReactJs.git`

###### This clones the repository on your computer

<p>2-. cd into the new folder and then type:</p>

`$ npm install`

###### This will install all the required dependencies

<p>3-. To run the project type:</p>

`$ npm start`

<hr>

<p>1-. Abre tu terminal y luego escribe:</p>

`$ git clone https://github.com/kevporti/TicTacToe_ReactJs.git`

###### Esto clona el repositorio en tu computador

<p>2-. cd en la nueva carpeta y luego escribe:</p>

`$ npm install`

###### Esto instalará todas las dependencias requeridas

<p>3-. Para correr el proyecto escribe:</p>

`$ npm start`

## Workflow - Flujo de trabajo

<img width="400" src="https://user-images.githubusercontent.com/85496623/188173950-b8d9166f-73d1-4cae-83b4-1185d585da18.PNG"></img>

Above is shown the hierarchy of the components used in the project, let's get a revision from bottom to top.
  - In the __Box__ component we have the design of one box that will be displayed in the game. In here we import and display the icons of the players, this is handled by the function _handleChangeIcons_. We also get from the parent component the _boxContent_ which reffers to Xs or Os, the _iconType_ which reffers to the theme of the icons, and a function to handle the logic of the game when clicking the box called _handleGame_.
  - In the __Table__ component we have the design of the table and display the Boxes. We get the _boxes_ to display from the parent component, the function _handleGame_ and the _iconType_ that we are passing to each box.
  - In the __Settings__ component we have the design of the settings which contains the reset button and the configuration of the icons. The configuration is handled using a modal from headlessui, TailwindCSS. We needed to import the icons to show the user, the tools to configurate the modal and some logic from react such as useState. We also get from the parent the _restartGame_ function to use in the restart button and the _setIconType_ to change the state of the _iconType_ variable stored in the parent component.
  - In the __Home__ component, parent of both __Table__ and __Settings__ components, we have the desing to show those components as clear as possible. Here is where the most part of the game logic is set. We have _history_ and _stepNumber_ to track what's happening in the table with an array, we have a _xIsNext_, _whoIsIt_ to know exactly which participant is playing/is next, and _iconType_ set to "default" to use the default icons. We also use an imported function from a separated file called _calculateWinner_ so if there's a winner, it'll be stored who is in the _winner_ variable, and if that happens, a modal opens up giving feedback of the winner. The _restartGame_ function sets all variables to start a new game. The function _handleGame_ change variables such as _stepNumber_ and _history_ to continue with the game or do nothing if the box is already selected or there's a winner.
  - In the __Nav__ component we show the logo of the game and center it to keep a clean interface.
  - In the __App__ component we display the __Nav__ and __Home__ and set some styling such as height of the page to make all components work within those boundaries.

Arriba se muestra la jerarquía de los componentes usados en este proyecto, vamos a darle una revisión desde abajo hacia arriba.
  - En el componente __Box__ tenemos el diseño de uno de los cuadrados que se desplegarán en el juego. Aquí importamos y desplegamos los íconos de los jugadores, esto está manejado por la función _handleChangeIcons_. También recibimos del componente padre la variable _boxComponent_ que referencia a las Xs o Os, el _iconType_ que referencia al tema de los íconos, y una función que maneja la lógica del juego al clickear el cuadrado, llamada _handleGame_.
  - En el componente __Table__ tenemos el diseño del tablero y desplegamos los cuadrados. Tenemos los _boxes_ a desplegar recibidos del componente padre, la función _handleGame_ y el _iconType_ que pasamos a cada cuadrado.
  - En el componente __Settings__ tenemos el diseño de los ajustes que contienen el botón de reiniciar y la configuración de los íconos. La configuración es manejada usando un modal de headlessui, TailwindCSS. Tenemos que importar los íconos para mostrarle al usuario, las herramientas para configurar el modal y algo de lógica de react como useState. También obtenemos del componente padre la función _restartGame_ para usar en el botón de reseteo y _setIconType_ para cambiar el estado de la variable _iconType_ guardada en el componente padre.
  - En el componente __Home__, padre de los componentes __Table__ y __Settings__, tenemos el diseño para mostrar esos componentes lo más limpio posible. Aquí es donde está la mayor parte de lógica del juego. Tenemos _history_ y _stepNumber_ para el seguimiento de la tabla con un array, tenemos a _xIsNext_, _whoIsIt_ para saber exactamente qué participante está jugando/es el siguiente, y _iconType_ establecido como "default" para usar los íconos predeterminados. También se usa una función importada de un archivo separado llamado _calculateWinner_ así, si hay un ganador, será guardado en la variable _winner_, y si eso pasa, se abre un modal informándole a los jugadores sobre el ganador. La función _restartGame_ reestablece todas las variables para comenzar un juego nuevo. La función _handleGame_ cambia las variables como _stepNumber_ y _history_ para continuar con el juego o no hacer nada si el cuadrado ya fue seleccionado o ya hay un ganador.
  - En el componente __Nav__ mostramos el logo del juego y lo centramos para mantener una interfaz limpia.
  - En el componente __App__ desplegamos los componentes __Nav__ y __Home__  y establecer algunos estilos como la altura de la página para que todos los componentes funcionen dentro de esos límites.
