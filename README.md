# Aplicación firebase
## Sebastián Caiza, Francisco Caero
### Creación de una aplicación que permita usar autenticación y subida de archivos con firebase


Se procedió a crear los módulos según las directrices del ejemplo utilizando las credenciales de Firebase.

![image](https://github.com/user-attachments/assets/649e63e3-08ea-471a-bf31-60e374221aa2)

Se inició instalando, importando y configurando los módulos necesarios para el funcionamiento:

![image](https://github.com/user-attachments/assets/bc7c1204-95c1-4fb1-b638-bd114386b320)

Para realizar el login tenemos que controlar los archivos para la lógica, el diseño y la rutadonde se va a encontrar.

![image](https://github.com/user-attachments/assets/88b1612e-4f3d-4373-93a1-66ffd2b022ec)

![image](https://github.com/user-attachments/assets/577f262a-de68-4cb3-8dd4-befd650672e9)

![image](https://github.com/user-attachments/assets/02d415f8-a2f9-49ce-bdd4-a336f698c66d)

Si funciona y nos da la autorización se va a hacer la funcionalidad para poder guardar las imágenes que se escoja como avatar personal.

![image](https://github.com/user-attachments/assets/c1ef2988-6eb2-4fd7-9e52-f2f59c435274)


Se creó archivos para controlar el inicio de sesión en una aplicación antes de pasar al módulo de subior archivos.

![image](https://github.com/user-attachments/assets/01701530-5ad6-4b8d-bec3-f18be46f6a38)

Una vez se probó la aplicación en el navegador se procedió con la construcción de la aplicación móvil.

**Aplicacion movil**

Haciendo uso de Android Studio se realizó la construcción de un apk para ejecutar en el celular y probar la funcionalidad.

Se comprobó la correcta instalación de la apk en el celular.

![82fe3178-8b46-4c06-9e24-d34ca3835c7c](https://github.com/user-attachments/assets/bfda3e99-fc62-4f00-b6c2-d336ed848a95)

Si la instalación fue exitosa, se podía continuar con la ejecución, abrimos la app y probamos las distintas funciones.

![6d142dfd-9108-4d5c-ab29-860cb3b102ce](https://github.com/user-attachments/assets/dc6a141e-7927-43a8-b4fd-c805dd4eb9c7)

![43461405-613c-4603-b603-f455829985e5](https://github.com/user-attachments/assets/5956638f-7fd5-4867-9369-f24513d030ef)

La aplicación carga los componentes, así que se procede a probar las funciones, se ingresó un correo y una contraseña, y se escogió registrar, tras esto,la aplicación debería conceder aceso y redirigir a la siguiente pantalla.

![cf358511-f90d-49b9-921f-ed4d51749d53](https://github.com/user-attachments/assets/8661b763-045d-4d2a-b249-e0dabfc6a276)

![37fe2f2b-1fd8-4b77-ad44-5be136c21f2a](https://github.com/user-attachments/assets/4de6ecf0-f10e-4257-990c-aaf05b5cd298)


Si esto funciona, la aplicación debió usar Firebase para la autenticación por lo que se comprobó que se hubiera almacenado el usuario aquí.

![autent](https://github.com/user-attachments/assets/bc37a13f-f7ad-48b0-b87c-e93bb35b3744)


Lo siguiente será testear la subida de fotos, cuando se pulse el boton de seleccioanr avatar nos debe permitir ver la galeria y escoger un archivo.

![f91d46ad-c6d8-4692-b1a4-d364b976ebc2](https://github.com/user-attachments/assets/2dcaa1e5-5e9b-4dc8-b5ac-660a28c9b6d7)

![avatar_upl](https://github.com/user-attachments/assets/8857bd7d-81bb-484c-8970-f577faf03e2b)

La aplicación sí desea realizar la solicitud, en este caso, se queda en este paso y no se sube ya que el storage rechaza la subida, esta opción es de paga.

![image](https://github.com/user-attachments/assets/e2d6a460-5952-4664-9dde-b2e45d03e9df)

**Tareas:**

* Sebastián Caiza:
  - Configuración básica de la aplicación.
  - Creación de los módulos para iniciar sesión.
  - Archivo para subida de fotos.
* Francisco Caero:
  - Pruebas de la aplicación.
  - Construcción del APK.
  - Registro funcionamiento móvil.
  

***APK:***

[APK del proyecto](https://github.com/ericksebastian2003/autenticacion_aplicacion/tree/215f488a01e288a43916c7c50751fa1a5becde56/apk)

