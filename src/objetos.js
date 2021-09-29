import Listarobjetos from "./listarobjetos";


const students = [
    {
        "id": 1,
        "name": " Nombre: Chevrolet Corvette Stingray ",
        "Describe": "It has survived not only five centuries, like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "https://st1.uvnimg.com/d4/4a/006304a74db4902c0b4d8d8026c8/chevrolet-corvette-c8-stingray-2020-1280-08.jpg"
    },
    {
        "name": " Nombre: Mercedez Benz AVTR,",
        "Describe": " Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "https://elcomercio.pe/resizer/iO2UZURF2o85-18fyBafP6TSU5Q=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/KX5NCAYQHBG4PJGSCVQXO2PLY4.jpg"

    },
    {
        "name": " Nombre: BMW",
        "Describe": "Lorem Ipsum  It has survived not only five centuries, including versions of Lorem Ipsum.",
        "img": "https://www.comparaonline.com.co/blog-statics/co/uploads/2020/03/BMW-estuvo-entre-las-cinco-marcas-que-m%C3%A1s-carros-de-lujo-vendi%C3%B3-en-2019.jpg"

    },
    {
        "name": " Nombre: Venom white",
        "Describe": " Lorem Ipsum has been the industry's standard dummy, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "https://i.ytimg.com/vi/hV_0IFQCMks/maxresdefault.jpg"

    }
   
]

const Objetos = () => (
    <>
        <nav>
                    <ul class="menu">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/Objetos">Contenido</a></li>
                        <li><a href="/Formulario">Ingresar</a></li>
                    </ul>
                </nav>
        {
            students.map(c => <Listarobjetos name={c.name} tipo={c.Tipo} describe={c.Describe} img={c.img} />)
        }
        <footer>
            <figure class="text-center">
                <blockquote class="blockquote">
            
                    <a href="brvasquez43@misena.edu.co">Email<i class="fab fa-email"></i> </a><br></br>
                    <a href="https://github.com/bsvasquez">Github<i class="fab fa-github"></i> </a><br></br>
                </blockquote>
                <figcaption class="blockquote-footer">
                    <cite title="Source Title">Adsi:2184587</cite>
                </figcaption>
            </figure>
        </footer>
    </>
)

export default Objetos;