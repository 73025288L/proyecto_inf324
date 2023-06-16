//Laboratorio piso 4 de la carrera Informatica

var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;

function init() {
   var canvasWidth = window.innerWidth * 0.9;
   var canvasHeight = window.innerHeight * 0.9;

   // CAMERA

   camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      1,
      80000
   );
   camera.position.set(-1, 1, 10);
   camera.lookAt(0, 0, 0);

   // LIGHTS

   light = new THREE.DirectionalLight(0xffffff, 0.7);
   light.position.set(1, 1, 1);
   light.target.position.set(0, 0, 0);
   light.target.updateMatrixWorld();

   var ambientLight = new THREE.AmbientLight(0x111111);

   // RENDERER
   renderer = new THREE.WebGLRenderer({ antialias: true });
   renderer.setSize(canvasWidth, canvasHeight);
   renderer.setClearColor(0xaaaaaa, 1.0);

   renderer.gammaInput = true;
   renderer.gammaOutput = true;

   // Add to DOM
   var container = document.getElementById("container");
   container.appendChild(renderer.domElement);

   // CONTROLS
   cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
   cameraControls.target.set(0, 0, 0);

   // SCENE
   scene = new THREE.Scene();
   scene.add(light);
   scene.add(ambientLight);

   /*=======================================================
   Pizarrones
   =========================================================*/
   //pizarron del fondo del laboratorio lado derecho
   objetocub(
      0.1, //eje x negativo inferior
      0.05,
      1.8, //eje x positivo superior
      0.05,
      1.8, //eje x positivo superior
      0.7, // eje y positivo derecho
      0.1, //eje x negativo superior
      0.7, // eje y positivo izquierda
      0.02, //grosor del border de la pizarra
      -3.55, //mover el cubo de posicion en eje z
      -3.55,
      0xaeb6bf,
      0xf8f9f9
   );

   //pizarron del fondo del laboratorio lado izquierdo
   objetocub(
      -1.6, //eje x negativo inferior
      0.05,
      0.08, //eje x positivo superior
      0.05,
      0.08, //eje x positivo inferior
      0.7,
      -1.6, //eje x negativo superior
      0.7, // eje y positivo izquierda
      0.02, //grosor del border de la pizarra
      -3.55,
      -3.55,
      0xaeb6bf,
      0xf8f9f9
   );

   /*=======================================================
   puerta del aula
   =========================================================*/

   objetocub(
      2.45,
      -0.3, //
      2.65, //eje x positivo superior
      -0.3, //
      2.65, //eje x positivo superior
      0.6,
      2.45,
      0.6,
      0.01,
      -3,
      -2.5,
      0x873600,
      0xba4a00
   );

   /*=======================================================
   ventanas del aula lado derecho
   =========================================================*/

   objetocub(
      2.45, // eje x negativo
      0.4, //
      2.65, ///eje x positivo superior
      0.4, //
      2.65, ///eje x positivo superior
      0.7, //
      2.45, // eje x negativo
      0.7, //
      0.01, //
      -2,
      -1,
      0x626550,
      0x626550
   );

   objetocub(
      2.45, // eje x negativo
      0.4, //
      2.65, ///eje x positivo superior
      0.4, //
      2.65, ///eje x positivo superior
      0.7, //
      2.45, // eje x negativo
      0.7, //
      0.01, //
      -0.5,
      0.5,
      0x626550,
      0x626550
   );

   objetocub(
      2.45, // eje x negativo
      0.4, //
      2.65, ///eje x positivo superior
      0.4, //
      2.65, ///eje x positivo superior
      0.7, //
      2.45, // eje x negativo
      0.7, //
      0.01, //
      1.5,
      2.5,
      0x626550,
      0x626550
   );

   objetocub(
      2.45, // eje x negativo
      0.4, //
      2.65, ///eje x positivo superior
      0.4, //
      2.65, ///eje x positivo superior
      0.7, //
      2.45, // eje x negativo
      0.7, //
      0.01, //
      3,
      4,
      0x626550,
      0x626550
   );

   /*=======================================================
   ventanas del aula lado izquierdo
   =========================================================*/

   objetocub(
      -2.45, // eje x negativo
      0.1, //
      -2.45, ///eje x positivo superior
      0.1, //
      -2.45, ///eje x positivo superior
      0.7, //
      -2.45, // eje x negativo
      0.7, //
      0.01, //
      -2,
      -1,
      0x626550,
      0x626550
   );

   objetocub(
      -2.45, // eje x negativo
      0.1, //
      -2.45, ///eje x positivo superior
      0.1, //
      -2.45, ///eje x positivo superior
      0.7, //
      -2.45, // eje x negativo
      0.7, //
      0.01, //
      -0.5,
      0.5,
      0x626550,
      0x626550
   );

   objetocub(
      -2.45, // eje x negativo
      0.1, //
      -2.45, ///eje x positivo superior
      0.1, //
      -2.45, ///eje x positivo superior
      0.7, //
      -2.45, // eje x negativo
      0.7, //
      0.01, //
      1.5,
      2.5,
      0x626550,
      0x626550
   );

   objetocub(
      -2.45, // eje x negativo
      0.1, //
      -2.45, ///eje x positivo superior
      0.1, //
      -2.45, ///eje x positivo superior
      0.7, //
      -2.45, // eje x negativo
      0.7, //
      0.01, //
      3,
      4,
      0x626550,
      0x626550
   );

   /*=======================================================
   Paredes del laboratorio
   =========================================================*/
   //Pared del fondo sin pizarras
   objetocub(
      -2.4, //crecimiento de la pared a la izquierda inferior
      -0.3,
      2.6,
      -0.3,
      2.6, //crecimiento de la pared a la izquierda inferior
      0.9,
      -2.4,
      0.9,
      0.02,
      -3.9,
      -3.58,
      0xd9b68e,
      0xd9b68e
      // 0xf9e79f
   );

   //pared lado derecho
   objetocub(
      2.5, //crecimiento de la pared a la izquierda inferior
      -0.3, //crecimiento en el eje y positivo
      2.6, //crecimiento en el eje x positivo
      -0.3, //crecimiento en el eje y negativo
      2.6, //crecimiento en el eje x positivo
      0.9, //alto del cubo
      2.5,
      0.9, //alto del cubo
      0.01,
      -3.6, //crecimiento a lo largo al lado izquierdo
      5, //crecimiento a lo largo al lado derecho
      0xf5b7b1,
      0xf9e79f
   );
   //pared lado izquierdo
   objetocub(
      -2.4, //crecimiento de la pared a la izquierda inferior
      -0.3, //crecimiento en el eje y positivo
      -2.5, //crecimiento en el eje x positivo
      -0.3, //crecimiento en el eje y negativo
      -2.5, //crecimiento en el eje x positivo
      0.9, //alto del cubo
      -2.4, //crecimiento de la pared a la izquierda superior
      0.9, //alto del cubo
      0.01,
      -3.6, //crecimiento a lo largo al lado izquierdo
      5, //crecimiento a lo largo al lado derecho
      0xf5b7b1,
      0xf9e79f
   );

   /*=======================================================
   Piso del laboratorio
   =========================================================*/
   objetocub(
      -2.4,
      -0.32,
      2.6,
      -0.3,
      2.6,
      -0.31,
      -2.4,
      -0.31,
      0.02,
      -4.0,
      5,
      0xaab7b8,
      0xaed6f1
   );

   /*=======================================================
   Prueba del ejemplo del laboratorio
   =========================================================*/
   objetocub(
      -2.45,
      0.9,
      2.5,
      0.9,
      2.5,
      0.9,
      -2.45,
      0.9,
      1.2,
      5.2,
      -4,
      0xaab7b8,
      0xaed6f1
   );

   /*=======================================================
   Computadoras del laboratorio
   =========================================================*/

   //lado izquierdo

   PCs(-2.3, 0.0, -2.1, 0.0, -2.1, 0.15, -2.3, 0.15, -3, 1, 1);
   PCs(-2.1, 0.0, -1.9, 0.0, -1.9, 0.15, -2.1, 0.15, -2.2, 4, 5);
   PCs(-2.1, 0.0, -1.9, 0.0, -1.9, 0.15, -2.1, 0.15, 1, 4, 5);

   //lado derecho
   PCs(0.0, 0.0, 0.2, 0.0, 0.2, 0.15, 0.0, 0.15, -2.2, 5, 5);
   PCs(0.0, 0.0, 0.2, 0.0, 0.2, 0.15, 0.0, 0.15, 1, 5, 5);

   //mesa(0.5, 0.0, 1.1, 0.0, 6, 1);
   mesa(-2, 0.0, -1.3, 0, 5, 1);

   /*=======================================================
   Funcionesdel ejercicio
   =========================================================*/

   function PCs(x1, y1, x2, y2, x3, y3, x4, y4, z, N, F) {
      var a1 = x1;
      var a2 = x2;
      var a3 = x3;
      var a4 = x4;
      var d = 0.31;
      var z1 = z;
      for (var i = 0; i < F; i++) {
         a1 = x1;
         a2 = x2;
         a3 = x3;
         a4 = x4;
         for (var j = 0; j < N; j++) {
            //crea monitor
            objetocub(
               a1,
               y1,
               a2,
               y2,
               a3,
               y3,
               a4,
               y4,
               0.01,
               z1,
               z1 + 0.02,
               0x0000,
               0xaed6f1
            );
            objetocub(
               a1 + 0.09,
               y1 - 0.03,
               a2 - 0.09,
               y2 - 0.03,
               a3 - 0.09,
               y3 - 0.1,
               a4 + 0.09,
               y4 - 0.1,
               0.002,
               z1,
               z1 + 0.005,
               0x0000,
               0x0000
            );
            objetocub(
               a1 + 0.06,
               y1 - 0.035,
               a2 - 0.06,
               y2 - 0.035,
               a3 - 0.06,
               y1 - 0.03,
               a4 + 0.06,
               y1 - 0.03,
               0.002,
               z1 - 0.01,
               z1 + 0.02,
               0x0000,
               0x0000
            );
            //crea escritorio
            objetocub(
               a1 - 0.05,
               y1 - 0.055,
               a2 + 0.05,
               y2 - 0.055,
               a3 + 0.05,
               -0.035,
               a4 - 0.05,
               -0.035,
               0.01,
               z1 - 0.1,
               z1 + 0.1,
               0xe67e22,
               0xe67e22
            );
            objetocub(
               a1 - 0.04,
               -0.3,
               a1 - 0.025,
               -0.3,
               a1 - 0.025,
               y1 - 0.055,
               a4 - 0.04,
               y2 - 0.055,
               0.01,
               z1 - 0.1,
               z1 + 0.1,
               0xe67e22,
               0xe67e22
            );
            objetocub(
               a2 - 0.05,
               -0.3,
               a2 + 0.05,
               -0.3,
               a2 + 0.05,
               -0.3 + 0.05,
               a2 - 0.05,
               -0.3 + 0.05,
               0.01,
               z1 - 0.1,
               z1 + 0.1,
               0xe67e22,
               0xe67e22
            );
            //crea el cpu
            objetocub(
               a2 - 0.05,
               -0.3 + 0.05,
               a2 + 0.05,
               -0.3 + 0.05,
               a2 + 0.05,
               y2 - 0.055,
               a2 - 0.05,
               y2 - 0.055,
               0.01,
               z1 - 0.1,
               z1 + 0.1,
               0x1f618d,
               0xeaecee
            );
            objetocub(
               a2 - 0.03,
               y2 - 0.09,
               a2 + 0.03,
               y2 - 0.09,
               a2 + 0.03,
               y2 - 0.08,
               a2 - 0.03,
               y2 - 0.08,
               0.002,
               z1 - 0.0,
               z1 + 0.11,
               0x000000,
               0xeaecee
            );
            objetocub(
               a2 - 0.03,
               y2 - 0.11,
               a2 + 0.03,
               y2 - 0.11,
               a2 + 0.03,
               y2 - 0.1,
               a2 - 0.03,
               y2 - 0.1,
               0.005,
               z1 - 0.0,
               z1 + 0.11,
               0x000000,
               0xeaecee
            );
            a1 = a1 + d;
            a2 = a2 + d;
            a3 = a3 + d;
            a4 = a4 + d;
         }
         z1 = z1 + 0.5;
      }
   }

   function mesa(x1, y1, x2, y2, N, F) {
      var a1 = x1;
      var a2 = x2;
      var d = 0.7;
      var z = 4;
      //var z = 0.5;
      for (var i = 0; i < F; i++) {
         a1 = x1;
         a2 = x2;
         for (var j = 0; j < N; j++) {
            objetocub(
               a1,
               y1,
               a2,
               y2,
               a2,
               0.05,
               a1,
               0.05,
               0.0,
               z - 0.1,
               z + 0.2,

               0xd35400,
               0xd4ac0d
            );
            objetocub(
               a1 + 0.02,
               -0.3,
               a1 + 0.05,
               -0.3,
               a1 + 0.09,
               0.0,
               a1 + 0.02,
               0.0,
               0.0,
               z - 0.1,
               z + 0.2,

               0xd35400,
               0xd4ac0d
            );
            objetocub(
               a2 - 0.05,
               -0.3,
               a2 - 0.02,
               -0.3,
               a2 - 0.02,
               0.0,
               a2 - 0.09,
               0.0,
               0.0,
               z - 0.1,
               z + 0.2,

               0xd35400,
               0xd4ac0d
            );

            objetocub(
               a1 + 0.05,
               -0.1,
               a2 - 0.05,
               -0.1,
               a2 - 0.05,
               0.08,
               a1 + 0.05,
               0.08,
               0.1,
               z + 0.3,
               z + 0.35,
               0xa04000,
               0xba4a00
            );
            objetocub(
               a1 + 0.05,
               -0.3,
               a2 - 0.05,
               -0.3,
               a2 - 0.05,
               -0.1,
               a1 + 0.05,
               -0.1,
               0.1,
               z + 0.21,
               z + 0.35,
               0xa04000,
               0xba4a00
            );

            a1 = a1 + d;
            a2 = a2 + d;
         }
         z = z + 0.5;
      }
   }

   function objetocub(
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      x4,
      y4,
      m,
      Zi,
      Zj,
      color1,
      color2
   ) {
      var pantalla = new THREE.Geometry();
      var display = new THREE.Geometry();

      /**
       * pantalla.vertices es una propiedad que almacena los vértices de un objeto en Three.js.
        new THREE.Vector3(x2, y2, Zj) crea un nuevo objeto THREE.Vector3 con las coordenadas (x2, y2, Zj). Estas coordenadas representan la posición tridimensional del nuevo vértice.
        x2, y2 y Zj son variables que contienen valores numéricos.
       */
      pantalla.vertices.push(new THREE.Vector3(x1, y1, Zi));
      pantalla.vertices.push(new THREE.Vector3(x2, y2, Zi));
      pantalla.vertices.push(new THREE.Vector3(x3, y3, Zi));
      pantalla.vertices.push(new THREE.Vector3(x4, y4, Zi));

      pantalla.vertices.push(new THREE.Vector3(x1, y1, Zj));
      pantalla.vertices.push(new THREE.Vector3(x2, y2, Zj));
      pantalla.vertices.push(new THREE.Vector3(x3, y3, Zj));
      pantalla.vertices.push(new THREE.Vector3(x4, y4, Zj));

      /*La línea de código en cuestión agrega un nuevo objeto Vector3 a la propiedad vertices de un objeto display. Los objetos Vector3 en Three.js representan puntos en el espacio tridimensional utilizando coordenadas (x, y, z). */

      display.vertices.push(new THREE.Vector3(x1 + m, y1 + m, Zj + 0.001));
      display.vertices.push(new THREE.Vector3(x2 - m, y2 + m, Zj + 0.001));
      display.vertices.push(new THREE.Vector3(x3 - m, y3 - m, Zj + 0.001));
      display.vertices.push(new THREE.Vector3(x4 + m, y4 - m, Zj + 0.001));
      //uniendo atras adelante
      /**pantalla.faces es una propiedad que almacena las caras (triángulos) de un objeto en Three.js.
       * new THREE.Face3(1, 0, 3) crea un nuevo objeto THREE.Face3 que representa una cara con tres vértices. Los números 1, 0 y 3 corresponden a los índices de los vértices en la lista de vértices del objeto pantalla. Estos índices se utilizan para determinar qué vértices forman parte de la cara.
       */
      pantalla.faces.push(new THREE.Face3(1, 0, 3));
      pantalla.faces.push(new THREE.Face3(3, 2, 1));
      pantalla.faces.push(new THREE.Face3(4, 5, 6));
      pantalla.faces.push(new THREE.Face3(4, 6, 7));
      //uniendo laterales
      pantalla.faces.push(new THREE.Face3(0, 4, 7));
      pantalla.faces.push(new THREE.Face3(0, 7, 3));
      pantalla.faces.push(new THREE.Face3(5, 1, 2));
      pantalla.faces.push(new THREE.Face3(5, 2, 6));
      //uniendo arriba
      pantalla.faces.push(new THREE.Face3(2, 3, 7));
      pantalla.faces.push(new THREE.Face3(7, 6, 2));
      //uniendo abajo
      pantalla.faces.push(new THREE.Face3(0, 1, 5));
      pantalla.faces.push(new THREE.Face3(5, 4, 0));
      //uniendo display
      display.faces.push(new THREE.Face3(0, 1, 2));
      display.faces.push(new THREE.Face3(0, 2, 3));

      // Material de color
      var material = new THREE.MeshBasicMaterial({ color: color1 });
      var material2 = new THREE.MeshBasicMaterial({ color: color2 });
      // Crea el objeto
      var miobjeto = new THREE.Mesh(pantalla, material);
      var miobjeto2 = new THREE.Mesh(display, material2);

      scene.add(miobjeto);
      scene.add(miobjeto2);
   }
}

function animate() {
   window.requestAnimationFrame(animate);
   render();
}

function render() {
   var delta = clock.getDelta();
   cameraControls.update(delta);
   renderer.render(scene, camera);
}

try {
   init();
   animate();
} catch (e) {
   var errorReport =
      "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
   $("#container").append(errorReport + e);
}
