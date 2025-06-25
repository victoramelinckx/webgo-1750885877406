
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Online en 24 Horas" subheadline="Digitaliza tu negocio con una web lista en un día y soporte continuo." cta1="Empieza Ahora" />
<How step1Title="Contáctanos" step1Desc="Cuéntanos sobre tu negocio en minutos." step2Title="Creamos tu web" step2Desc="Desarrollamos tu sitio de ventas en 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para maximizar tus ventas online." />
<Aboutus headline="WebGo: Digitaliza y crece fácil" subheadline="Transformamos recomendaciones en ventas online, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Venta Instantánea" beneficio1="Aumenta tus ventas online rápidamente" beneficiotitulo2="Fácil Gestión" beneficio2="Nos encargamos del sitio web por ti" />
<Services heading="Impulsa Tus Ventas en Horas" description="Asdad - adsa digitaliza ventas rápidamente para dueños ocupados." services={[{"name":"Desarrollo Exprés","icon":"bolt","description":"Tu web lista en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia constante para tu web."},{"name":"Optimización SEO","icon":"search","description":"Aumenta tu visibilidad online."},{"name":"Integración E-commerce","icon":"cart","description":"Vende online fácilmente."},{"name":"Gestión de Contenidos","icon":"edit","description":"Actualización de contenido sin esfuerzo."},{"name":"Análisis de Trafico","icon":"chart-line","description":"Conoce y comprende tus visitantes."}]} />
<BeforeAndAfter subheadline="Transformaciones digitales que superan las expectativas de nuestros clientes." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio?","respuesta":"WebGo te ayuda a crear una tienda online atractiva y fácil de usar, permitiéndote llegar a más clientes y aumentar tus ventas sin depender solo de recomendaciones."},{"pregunta":"¿Qué beneficios obtengo al usar el servicio asdad de WebGo?","respuesta":"El servicio asdad, con un precio accesible de 123, te ofrece una plataforma completa para gestionar tu tienda online, facilitando la venta de productos y mejorando la experiencia de compra de tus clientes."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿qué soluciones ofrece WebGo?","respuesta":"WebGo se encarga de todo por ti. Diseñamos y gestionamos tu tienda online para que puedas concentrarte en lo que mejor haces: dirigir tu negocio."},{"pregunta":"¿Cómo me asegura WebGo que aumentaré mis ventas online?","respuesta":"Con WebGo, utilizamos estrategias probadas de SEO y marketing digital para aumentar la visibilidad de tu tienda online, atrayendo más clientes potenciales y aumentando tus ventas."},{"pregunta":"¿Qué tan fácil es usar la plataforma adsa de WebGo?","respuesta":"La plataforma adsa de WebGo está diseñada para ser intuitiva y fácil de usar, incluso si no tienes experiencia previa en tecnología. Te guiamos en cada paso del proceso."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio con WebGo" 
                      description="Deja de depender solo de recomendaciones; digitaliza tus ventas con WebGo y alcanza más clientes en línea. Descubre cómo por solo 123."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
