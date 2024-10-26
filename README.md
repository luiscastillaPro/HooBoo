# HooBoo
![image](https://github.com/user-attachments/assets/4c86259c-b5ac-4512-8a78-8856aa298e1a)

## Descripción del Proyecto

HooBoo es una plataforma interactiva diseñada para conectar a lectores y escritores a través de una experiencia social centrada en la literatura. Los usuarios pueden explorar una amplia variedad de libros, compartir reseñas, y conectarse con otros lectores, mientras disfrutan de un diseño visualmente atractivo y adaptable.
HooBoo no solo fomenta la lectura, sino que también promueve el crecimiento de nuevos lectores y escritores, ofreciendo una experiencia literaria única.

## Motivación e Historia de HooBoo

La idea inicial de Hooboo era crear una plataforma que combinara la experiencia visual y social de redes como Instagram o Pinterest, pero dedicada exclusivamente a los libros. 

Queríamos que los usuarios pudieran registrarse, subir reseñas de sus libros, publicar reseñas, compartir fotos relacionadas con su pasión literaria, y tener un feed personalizado con las publicaciones de otros usuarios a los que siguen.

La idea de Hooboo surgió porque nos gusta leer y nos dimos cuenta de que no hay muchas plataformas dedicadas a los libros que realmente ofrezcan una experiencia completa. 

Aunque existen sitios como Goodreads, sentimos que hacía falta algo más, especialmente en lo visual y social.

Queríamos llenar ese vacío, ofreciendo una plataforma que fuera tanto informativa como que englobase todos los aspectos de una red social.

## Funcionalidades Principales
- **Exploración de Libros**: Todos los usuarios pueden navegar y buscar libros en una biblioteca visualmente atractiva.
- **Interacción Social**: Los usuarios registrados pueden añadir libros a favoritos, comentar, y compartir reseñas.
- **Personalización**: Opción de cambiar entre modo claro y oscuro.
- **Gestión de Perfil**: Los usuarios pueden personalizar su avatar, nombre de usuario y configuración de privacidad.
- **Calificación y Opinión del Usuario**: Sistema de calificación visible para todos los visitantes, que recopila y muestra una media basada en los votos de los usuarios.

## Vista de Login y Registro: 
Para el registro se añade un nombre de usuario, con el que se personalizará el mensaje de bienvenida. También un correo electrónico y una contraseña que serán sus datos de acceso a la página. Una vez registrado, se mostrará un mensaje de registro exitoso y te redireccionará al formulario de Login. En caso de perder u olvidar la contraseña, tenemos una opción de recuperación de contraseña a través del email de registro. Una vez reseteada la contraseña a través del enlace enviado por email, se redirecciona automáticamente a la página de inicio de sesión.
<table style="width:100%">
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/ead7164d-b913-4942-ab69-2c6b440226ee" alt="Imagen 1" width="400">
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/662072cd-1c8c-44e7-a120-256ba9400fd0" alt="Imagen 2" width="400">
    </td>
  </tr>
</table>
*Formulario de inicio de sesión para usuarios registrados.*

## Vista para Usuarios no registrdos:
Pueden explorar libros, utilizar el buscador y acceder a una vista general de los libros. Sin embargo, no tienen acceso a la opción de agregar libros a favoritos ni a la ficha detallada de cada libro.
También nos enfocamos mucho en la responsividad, en la parte del diseño y la experiencia de usuario, utilizando Bootstrap y CSS para asegurar que la plataforma se vea bien en dispositivos móviles y una variedad de tamaños de pantalla.

<table style="width:100%">
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/2acd1259-cdd4-4d28-931e-56a21bf2d23a" alt="Imagen 1" width="400">
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/c89e27ac-476b-420b-8aa7-dac7f931b692" alt="Imagen 2" width="400">
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/7175be5c-f026-4ea2-9700-ca29ac0ebf3e" alt="Imagen 3" width="400">
    </td>
  </tr>
</table>
Decidimos añadir en el footer para su mayor visibilidad en la pantalla principal, una opción de calificación que se muestra para todos los visitantes al sitio web, con una nota media que sale de los votos de los usuarios registrados.

## Vista para Usuarios registrados:
Pueden acceder a funciones adicionales como agregar libros a su lista de favoritos, tanto leídos como por leer (sin distinción), ver información más detallada de los libros (como sinopsis y autor) y utilizar la sección de comentarios visible para todos los usuarios.

También tenemos nuestras redes sociales conectadas en el footer para un mas fácil acceso. Además tiene varios aspectos: para usuarios no registrados se mantiene visible en todas las vistas, mientras que para los usuarios registrados está la opción de colapsar y descolapsar su vista.

<table style="width:100%">
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/2822ca4a-b4b7-451f-852c-48f27974e805" alt="Imagen 1" width="400">
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/e4180529-3c4c-4054-a9c2-fe0cbc6ff524" alt="Imagen 2" width="400">
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/1ca8e0c2-b9c6-46c1-83d0-c414e1bbafaf" alt="Imagen 4" width="400">
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/cd3217c1-a408-434c-a763-6efc5eac6e15" alt="Imagen 3" width="400">
    </td>
  </tr>
</table>
- Los usuarios registrados pueden añadir libros a sus favoritos y personalizar la interfaz con un modo oscuro o claro, que también está disponible para los no registrados.
- En el perfil, los usuarios registrados pueden cambiar su nombre de usuario, su avatar y su contraseña.
- Los usuarios pueden compartir los enlaces de libros y reseñas a través de plataformas como Facebook o email, entre otras. 

## Tecnologías y APIs
- **Google Books API**: Permite acceder a una biblioteca extensa de libros, con detalles como descripción, imágenes y autores.
- **Commento**: Gestiona el sistema de comentarios para fomentar la interacción de los usuarios.
- **CHATRA**: Integración de un chat en vivo para mejorar la experiencia de usuario.

## Bases De Datos: 
- **Base de Datos de Usuarios**: Almacena credenciales, preferencias de usuario, y tokens de autenticación.
- **Base de Datos de Libros de Respaldo**: Incluye información relevante de los libros para garantizar disponibilidad aún sin conexión a Google Books.
- **Base de Datos de Calificaciones**: Recopila y promedia calificaciones de usuarios, proporcionando feedback valioso.

### Acerca de Nosotros: 

![image](https://github.com/user-attachments/assets/43960721-e647-4603-bd83-d53a6212d2b1)

