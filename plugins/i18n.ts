// plugins/i18n.js
import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'en', // idioma predeterminado
        messages: {
            en: {
                language: 'English',
                home: {
                    news: 'News',
                    hero: {
                        title_1: 'Leaders in Geothermal Solutions and Geophysical Exploration with Innovative and Multidisciplinary Approaches.',
                        title_2: 'We Boost Your Success with High Impact Geoscientific Solutions.',
                        title_3: 'We transform geothermal and geophysical challenges into opportunities, guiding you into the future of energy exploration.',
                        title_4: 'Contact us today and find out how we can take your project to the next level.'
                    },
                    extra: {
                        title: 'We Boost Your Success with High Impact Geoscientific Solutions',
                        subtext_1: 'From addressing personal decisions to reaching important milestones, our job is to guide you on the path to success. As professional engineering consultants, we guarantee excellent results.',
                        subtext_2: 'We are a service company for the Energy and Extractive Industry, with direct experience in Oil and Gas, Mining and Geothermal, particularly in drilling operations, geophysical logging both with cable and during drilling with tools and monitoring of production parameters , focused on the introduction of new, better and more accessible technologies in the Latin American market.',
                        button: 'Learn more'
                    }
                },
                footer: {
                    text_1: 'Transforming Challenges into Opportunities',
                    text_2: 'Jarkol Technologies S.A. of C.V. All rights reserved.'
                },
                header: {
                    page_1: 'Home',
                    page_2: 'We',
                    page_3: 'Products',
                    page_4: 'Services',
                    page_5: 'Customers',
                    page_6: 'Contact',
                    page_7: 'Quote'
                },
                clients: {
                    title: 'Our clients',
                    text: 'We are proud to collaborate with the main leaders of the energy industry in Mexico and with prominent exponents worldwide. Jointly offering comprehensive and high quality solutions in Geothermal, Hydrocarbon, Mining and Civil Engineering projects.',
                    button_1: 'Quote',
                    button_2: 'Contact'
                },
                services: {
                    title: 'We transform geothermal and geophysical challenges into opportunities, guiding you towards the future of energy exploration.',
                    button_1: 'Quote',
                    button_2: 'Contact'
                },
                products: {
                    title: 'We Boost Your Success with High Impact Geoscientific Solutions.',
                    text_1: 'Products',
                    text_2: 'Accessories'
                },
                nosotros: {
                    principal_title: 'We Boost Your Success with High Impact Geoscientific Solutions',
                    object_1: {
                        title: 'Integral Geothermal',
                        short_description: 'Advanced reservoir characterization and geophysical well logs under HPHT conditions.',
                        description: "We specialize in advanced reservoir characterization, optimizing seismic interpretation and offering exceptional geophysical well logging services for accurate assessment of your resources."
                    },
                    object_2: {
                        title: 'Vanguard Exploration',
                        short_description: 'Cutting edge technology with AI, proprietary algorithms, supercomputing and LiDAR mapping with Drones.',
                        description: 'We advance the frontier of geophysical exploration by developing and implementing exclusive algorithms based on artificial intelligence, powered by portable supercomputing and emerging technologies such as quantum computing. Our services include high-definition LiDAR mapping with drones, ensuring effective integration of multidisciplinary methods for unprecedented results.'
                    },
                    object_3: {
                        title: 'Data Processing',
                        short_description: 'We transform complex data into clear strategic decisions.',
                        description: 'We provide complete solutions from geophysical exploration to production log evaluation. Our goal is to convert complex data into clear, actionable information, supporting strategic decision making for your project.'
                    },
                    object_4: {
                        title: 'Advanced Consulting',
                        short_description: 'Expert guidance in onshore and offshore operations.',
                        description: 'Synergy between a team of experts with solid trajectories in industry and academia, we offer high-level technical consulting for onshore and offshore operations. Our deep knowledge of the energy industry translates into effective solutions, tailored to your specific needs.'
                    },
                    comunidades: {
                        title: "We support other communities",
                        text_1: "We are an association that cares about the technological development of the country, that is why we became one of the sponsors of the AAAI Mexico Student Chapter, contributing to more students acquiring knowledge about artificial intelligence and other related fields that are becoming more popular .",
                        text_2: "We care about the well-being of the community that will be in charge of leading towards a better future in this country, which is why we have joined forces with the Youth Support Foundation, which supports young people who find themselves in situations of serious vulnerability and discrimination, accompanying them in planning their life project."
                    },
                    mission: {
                        title: 'Mission',
                        text: 'Provide, import and develop technology for the oil, geothermal and mining industry in the Mexican market in order to promote and enhance competitiveness.'
                    },
                    vision: {
                        title: 'Vision',
                        text: 'To become one of the leading Mexican companies in promoting the development of technology and strategic tools for the energy industry in Mexico and Latin America.'
                    }
                }
            },
            es: {
                language: 'Español',
                home: {
                    news: 'Novedades',
                    hero: {
                        title_1: 'Líderes en Soluciones Geotérmicas y Exploración Geofísica con Enfoques Innovadores y Multidisciplinarios.',
                        title_2: 'Impulsamos su Éxito con Soluciones Geocientíficas de Alto Impacto.',
                        title_3: 'Transformamos desafíos geotérmicos y geofísicos en oportunidades, guiándolo hacia el futuro de la exploración energética.',
                        title_4: 'Contáctenos hoy y descubra cómo podemos llevar su proyecto al próximo nivel.'
                    },
                    extra: {
                        title: 'Impulsamos su Éxito con Soluciones Geocientíficas de Alto Impacto',
                        subtext_1: 'Desde abordar decisiones personales hasta alcanzar hitos importantes, nuestro trabajo es guiarlo por el camino del éxito. Como consultores de ingeniería profesionales, garantizamos excelentes resultados.',
                        subtext_2: 'Somos una empresa de servicios para la Industria Energética y Extractiva, con experiencia directa en Petróleo y Gas, Minería y Geotérmica, particularmente en operaciones de perforación, registro geofísico tanto con cable como durante la perforación con herramientas y monitoreo de parámetros de producción, enfocados en la introducción de nuevos, Mejores y más accesibles tecnologías en el mercado latinoamericano.',
                        button: 'Conoce más'
                    }
                },
                footer: {
                    text_1: 'Transformando Retos en Oportunidades',
                    text_2: 'Jarkol Techonologies S.A. de C.V. Todos los derechos reservados.'
                },
                header: {
                    page_1: 'Inicio',
                    page_2: 'Nosotros',
                    page_3: 'Productos',
                    page_4: 'Servicios',
                    page_5: 'Clientes',
                    page_6: 'Contacto',
                    page_7: 'Cotizar'
                },
                clients: {
                    title: 'Nuestros clientes',
                    text: 'Nos enorgullece colaborar con los principales líderes de la industria energética en México y con destacados exponentes a nivel mundial. Ofreciendo en conjunto soluciones integrales y de alta calidad en proyectos de Geotermia, Hidrocarburos, Minería e Ingeniería Civil.',
                    button_1: 'Cotizar',
                    button_2: 'Contacto'
                },
                services: {
                    title: 'Transformamos desafíos geotérmicos y geofísicos en oportunidades, guiándolo hacia el futuro de la exploración energética.',
                    button_1: 'Cotizar',
                    button_2: 'Contacto'
                },
                products: {
                    title: 'Impulsamos su Éxito con Soluciones Geocientíficas de Alto Impacto.',
                    text_1: 'Productos',
                    text_2: 'Accesorios'
                },
                nosotros: {
                    principal_title: 'Impulsamos su Éxito con Soluciones Geocientíficas de Alto Impacto',
                    object_1: {
                        title: 'Geotermia Integral',
                        short_description: 'Caracterización avanzada de yacimientos y registros geofísicos de pozo en condiciones HPHT.',
                        description: "Nos especializamos en la caracterización avanzada de yacimientos, optimizando la interpretación sísmica y ofreciendo servicios excepcionales de registros geofísicos de pozo para una evaluación precisa de sus recursos."
                    },
                    object_2: {
                        title: 'Exploración de Vanguardia',
                        short_description: 'Tecnología de punta con IA, algoritmos propios, supercomputación y mapeo LiDAR con Drones.',
                        description: 'Avanzamos la frontera de la exploración geofísica mediante el desarrollo e implementación de algoritmos exclusivos basados en inteligencia artificial, potenciados por supercomputación portátil y tecnologías emergentes como el cómputo cuántico. Nuestros servicios incluyen mapeo LiDAR de alta definición con drones, garantizando una integración eficaz de métodos multidisciplinarios para resultados sin precedentes.'
                    },
                    object_3: {
                        title: 'Procesamiento de Datos',
                        short_description: 'Transformamos datos complejos en decisiones estratégicas claras.',
                        description: 'Brindamos soluciones completas desde la exploración geofísica hasta la evaluación de registros de producción. Nuestra meta es convertir datos complejos en información clara y accionable, apoyando la toma de decisiones estratégicas para su proyecto.'
                    },
                    object_4: {
                        title: 'Consultoría Avanzada',
                        short_description: 'Orientación experta en operaciones en tierra y costa afuera.',
                        description: 'Sinergia entre un equipo de expertos con trayectorias sólidas en la industria y la academia, ofrecemos consultoría técnica de alto nivel para operaciones en tierra y costa afuera. Nuestro profundo conocimiento en la industria energética se traduce en soluciones efectivas, adaptadas a sus necesidades específicas.'
                    },
                    comunidades: {
                        title: "Apoyamos a otras comunidades",
                        text_1: "Somos una asociación que se preocupa por el desarrollo tecnológico del país, por eso nos convertimos en uno de los patrocinadores del Capítulo Estudiantil AAAI México, contribuyendo a que más estudiantes adquieran conocimientos sobre inteligencia artificial y otros campos relacionados que están volviéndose más populares.",
                        text_2: "Nos preocupamos por el bienestar de la comunidad que estará a cargo de liderar hacia un futuro mejor en este país, por lo que hemos unido fuerzas con la Fundación de Apoyo a la Juventud, que apoya a jóvenes que se encuentran en situaciones de grave vulnerabilidad y discriminación, acompañándolos en la planificación de su proyecto de vida."
                    },
                    mision: {
                        title: 'Misión',
                        text: 'Proporcionar, importar y desarrollar tecnología para la industria petrolera, geotérmica y minera en el mercado mexicano con el fin de promover y potenciar la competitividad.'
                    },
                    vision: {
                       title: 'Visión',
                       text:  'Convertirnos en una de las empresas mexicanas líderes en impulsar el desarrollo de tecnología y herramientas estratégicas para la industria de la energía en México y América Latina.'
                    }
                }
            }
        }
    })

    nuxtApp.vueApp.use(i18n)
})
