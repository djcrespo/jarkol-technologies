// plugins/i18n.js
import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'es', // idioma predeterminado
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
                    },
                    gallery_op: {
                        text_1: 'Geothermal',
                        text_2: 'Hydrocarbons',
                        text_3: 'Mining',
                        text_4: 'Civil Engineering'
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
                },
                contact: {
                    title_1: 'Contact us today and find out how we can take your project to the next level',
                    info: {
                        title: 'We Boost Your Success with High Impact Geoscientific Solutions',
                        text_mail: 'Email'
                    },
                    form: {
                        first_name: 'Name',
                        last_name: 'Last name',
                        mail: 'Email',
                        phone: 'Phone',
                        subject: 'Subject',
                        message: 'Message',
                        button: 'Send',
                        message_toast: 'Message sent'
                    }
                },
                noticies: {
                    news_1: {
                        title: 'Geophysical Area Prospecting with Drones',
                        text: 'Complemented by the Zenmuse L1 LiDAR sensor, Zenmuse P1 camera and GEM Systems magnetometer.'
                    },
                    news_2: {
                        title: 'Discover SUPREME300 from Jarkol Technologies',
                        text: 'The Revolution in Geothermal Monitoring.'
                    },
                    news_3: {
                        title: 'ExtremeVISION',
                        text: 'Hybrid camera technology that can operate on both standard single-conductor power line and Slickline cable.'                    }
                },
                djimatrice: {
                    header: {
                        text: 'Complemented by the Zenmuse L1 LiDAR sensor, Zenmuse P1 camera and GEM Systems magnetometer.'
                    },
                    mapping: {
                        title: 'Mapping and topography',
                        text_1: {
                            part_1: 'Advanced Reservoir Characterization',
                            part_2: 'Use of LiDAR and photogrammetry to obtain detailed subsurface and surface models, essential in geothermal and geophysical exploration.'
                        },
                        text_2: {
                            part_1: 'Geological and Topographic Surveys',
                            part_2: 'Precision in the mapping of complex terrain, facilitating the identification of natural resources.'
                        }
                    },
                    inspection: {
                        title: 'Inspection and Surveillance',
                        text_1: {
                            part_1: 'Infrastructure Inspections',
                            part_2: 'Detailed evaluation of energy structures, identifying possible risks or maintenance needs.'
                        },
                        text_2: {
                            part_1: 'Wide Area Surveillance',
                            part_2: 'Aerial monitoring for the security of facilities and projects, including remote or difficult-to-access areas.'
                        }
                    },
                    applications: {
                        title: 'Applications in Specific Industries',
                        text_1: {
                            part_1: 'Mining and Geothermal Energy',
                            part_2: 'Prospecting and monitoring of operations, improving safety and efficiency.'
                        },
                        text_2: {
                            part_1: 'Construction',
                            part_2: 'Monitoring progress in projects, using high-resolution 3D images and models.'
                        },
                        text_3: {
                            part_1: 'Agriculture',
                            part_2: 'Crop monitoring and resource management, optimizing production and sustainability.'
                        },
                        text_4: {
                            part_1: 'Disaster Management',
                            part_2: 'Rapid damage assessment and response planning to natural events.'
                        }
                    },
                    othersApplications: {
                        title: 'Additional Applications',
                        text_1: {
                            part_1: 'Tourism and Real Estate Promotion',
                            part_2: 'Creation of striking visual material for the promotion of places or properties.'
                        },
                        text_2: {
                            part_1: 'Event Coverage',
                            part_2: 'Support in the documentation of sporting, cultural and news events, providing unique perspectives.'
                        },
                        text_3: {
                            part_1: 'Telecommunications',
                            part_2: 'Rapid damage assessment and response planning to natural events.'
                        },
                        text_4: {
                            part_1: 'Environmental Monitoring',
                            part_2: 'Support in the inspection and maintenance of communications infrastructure.'
                        }
                    },
                    otherServices: {
                        title: 'Mapping and topography',
                        text_1: {
                            part_1: 'Advanced Reservoir Characterization',
                            part_2: 'Use of LiDAR and photogrammetry to obtain detailed subsurface and surface models, essential in geothermal and geophysical exploration.'
                        },
                        text_2: {
                            part_1: 'Geological and Topographic Surveys',
                            part_2: 'Precision in the mapping of complex terrain, facilitating the identification of natural resources.'
                        }
                    },
                    innovation: {
                        title: 'Innovative Technology and Services',
                        text_1: {
                            part_1: 'Cinematography and Aerial Photography',
                            part_2: 'Use of high-resolution cameras for high-quality recordings and aerial photographs.'
                        },
                    }
                },
                cotizar: {
                    title: 'Quote with us',
                    text_filter: 'Filter by',
                    select_1: 'Select a',
                    select_2: 'Select an option',
                    options: {
                        value_1: "Service",
                        value_2: "Product"
                    },
                    form: {
                        title_1: 'Contact details',
                        person: {
                            first_name: 'Name',
                            last_name: 'Last name',
                            mail: 'Email',
                            phone: 'Phone',
                        },
                        title_2: 'Address',
                        address: {
                            address: 'Address',
                            cp: 'Postal code'
                        },
                        button: 'Send'
                    }
                },
                supreme300: {
                    title: 'Discover SUPREME300 from Jarkol Technologies: The Revolution in Geothermal Monitoring',
                    description_1: {
                        title: 'Exceptional Features for Extreme Operations',
                        description: 'The SUPREME300 is not just a sensor; It is a technological masterpiece, meticulously designed to withstand the most demanding conditions. Capable of operating continuously in temperatures up to 300°C, this pioneering technology ensures accurate and reliable measurements in the most extreme environments, ensuring maximum efficiency and safety for your geothermal project.'
                    },
                    description_2: {
                        title: 'Unprecedented Innovation and Durability',
                        description: "SUPREME300 technology represents the pinnacle of geothermal engineering," +
                            " combining robustness, precision and reliability. Its innovative design not only meets today's advanced monitoring needs, but also sets a new standard for performance and durability in the industry."
                    },
                    advantages: {
                        title: 'Competitive Advantages',
                        ven_1: {
                            title: 'High Thermal Resistance',
                            text: 'Continuous operation at extreme temperatures, exceeding the limits of conventional sensors.'
                        },
                        come_2: {
                            title: 'Superior Precision',
                            text: 'Detailed and accurate monitoring for optimal management of geothermal reservoirs.'
                        },
                        ven_3 : {
                            title: 'Proven Durability',
                            text: 'Built to withstand the harshest conditions and ensure long-term performance.'
                        }
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
                    },
                    gallery_op: {
                        text_1: 'Geotermia',
                        text_2: 'Hidrocarburos',
                        text_3: 'Minería',
                        text_4: 'Ingeniería Civil'
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
                },
                contact: {
                    title_1: 'Contáctenos hoy y descubra cómo podemos llevar su proyecto al próximo nivel',
                    info: {
                        title: 'Impulsamos su Éxito con Soluciones Geocientíficas de Alto Impacto',
                        text_mail: 'Correo electrónico'
                    },
                    form: {
                        first_name: 'Nombre(s)',
                        last_name: 'Apellido(s)',
                        mail: 'Correo electrónico',
                        phone: 'Teléfono',
                        subject: 'Asunto',
                        message: 'Mensaje',
                        button: 'Enviar',
                        message_toast: 'Mensaje enviado'
                    }
                },
                noticies: {
                    news_1: {
                        title: 'Prospección Geofísica Área con drones',
                        text: 'Complementado con el sensor LiDAR Zenmuse L1, la cámara Zenmuse P1 y magnetómetro GEM Systems.'
                    },
                    news_2: {
                        title: 'Descubre SUPREME300 de Jarkol Technologies',
                        text: 'La Revolución en Monitoreo Geotérmico.'
                    },
                    news_3: {
                        title: 'ExtremeVISION',
                        text: 'Tecnología de cámara híbrida que puede funcionar tanto en línea eléctrica monoconductora estándar como en cable Slickline.'
                    }
                },
                djimatrice: {
                    header: {
                        text: 'Complementado con el sensor LiDAR Zenmuse L1, la cámara Zenmuse P1 y magnetómetro GEM Systems.'
                    },
                    mapping: {
                        title: 'Mapeo y topografia',
                        text_1: {
                            part_1: 'Caracterización Avanzada de Yacimientos',
                            part_2: 'Uso del LiDAR y fotogrametría para obtener modelos detallados del subsuelo y superficie, esenciales en la exploración geotérmica y geofísica.'
                        },
                        text_2: {
                            part_1: 'Levantamientos Geológicos y Topográficos',
                            part_2: 'Precisión en la cartografía de terrenos complejos, facilitando la identificación de recursos naturales.'
                        }
                    },
                    inspection: {
                        title: 'Inspección y Vigilancia',
                        text_1: {
                            part_1: 'Inspecciones de Infraestructura',
                            part_2: 'Evaluación detallada de estructuras energéticas, identificando posibles riesgos o necesidades de mantenimiento.'
                        },
                        text_2: {
                            part_1: 'Vigilancia de Áreas Extensas',
                            part_2: 'Monitoreo aéreo para la seguridad de instalaciones y proyectos, incluyendo áreas remotas o de difícil acceso.'
                        }
                    },
                    applications: {
                        title: 'Aplicaciones en Industrias Específicas',
                        text_1: {
                            part_1: 'Minería y Geotermia',
                            part_2: 'Prospección y monitoreo de operaciones, mejorando la seguridad y eficiencia.'
                        },
                        text_2: {
                            part_1: 'Construcción',
                            part_2: 'Seguimiento de avances en proyectos, mediante imágenes y modelos 3D de alta resolución.'
                        },
                        text_3: {
                            part_1: 'Agricultura',
                            part_2: 'Monitoreo de cultivos y gestión de recursos, optimizando la producción y sostenibilidad.'
                        },
                        text_4: {
                            part_1: 'Gestión de Desastres',
                            part_2: 'Evaluación rápida de daños y planificación de respuestas ante eventos naturales.'
                        }
                    },
                    othersApplications: {
                        title: 'Aplicaciones Adicionales',
                        text_1: {
                            part_1: 'Promoción Turística e Inmobiliaria',
                            part_2: 'Creación de material visual impactante para la promoción de lugares o propiedades.'
                        },
                        text_2: {
                            part_1: 'Cobertura de Eventos',
                            part_2: 'Soporte en la documentación de eventos deportivos, culturales y noticieros, proporcionando perspectivas únicas.'
                        },
                        text_3: {
                            part_1: 'Telecomunicaciones',
                            part_2: 'Evaluación rápida de daños y planificación de respuestas ante eventos naturales.'
                        },
                        text_4: {
                            part_1: 'Monitoreo Ambiental',
                            part_2: 'Apoyo en la inspección y mantenimiento de infraestructuras de comunicaciones.'
                        }
                    },
                    otherServices: {
                        title: 'Mapeo y topografia',
                        text_1: {
                            part_1: 'Caracterización Avanzada de Yacimientos',
                            part_2: 'Uso del LiDAR y fotogrametría para obtener modelos detallados del subsuelo y superficie, esenciales en la exploración geotérmica y geofísica.'
                        },
                        text_2: {
                            part_1: 'Levantamientos Geológicos y Topográficos',
                            part_2: 'Precisión en la cartografía de terrenos complejos, facilitando la identificación de recursos naturales.'
                        }
                    },
                    innovation: {
                        title: 'Tecnología y Servicios Innovadores',
                        text_1: {
                            part_1: 'Cinematografía y Fotografía Aérea',
                            part_2: 'Uso de cámaras de alta resolución para grabaciones y fotografías aéreas de alta calidad.'
                        }
                    }
                },
                cotizar: {
                    title: 'Cotice con nosotros',
                    text_filter: 'Filtrar por',
                    select_1: 'Selecciona un',
                    select_2: 'Selecciona una opción',
                    options: {
                        value_1: "Servicio",
                        value_2:  "Producto"
                    },
                    form: {
                        title_1: 'Datos de contacto',
                        person: {
                            first_name: 'Nombre(s)',
                            last_name: 'Apellido(s)',
                            mail: 'Correo electrónico',
                            phone: 'Teléfono',
                        },
                        title_2: 'Dirección',
                        address: {
                            address: 'Dirección',
                            cp: 'Código postal'
                        },
                        button: 'Enviar'
                    }
                },
                supreme300: {
                    title: 'Descubre SUPREME300 de Jarkol Technologies: La Revolución en Monitoreo Geotérmico',
                    description_1: {
                        title: 'Características Excepcionales para Operaciones Extremas',
                        description: 'El SUPREME300 no es solo un sensor; es una obra maestra tecnológica, diseñada meticulosamente para soportar las condiciones más exigentes. Capaz de operar de manera continua en temperaturas de hasta 300 °C, esta tecnología pionera garantiza mediciones precisas y confiables en los ambientes más extremos, asegurando la máxima eficiencia y seguridad para su proyecto geotérmico.'
                    },
                    description_2: {
                        title: 'Innovación y Durabilidad sin Precedentes',
                        description: 'La tecnología SUPREME300 representa el pináculo de la ingeniería geotérmica, combinando robustez, precisión y fiabilidad. Su diseño innovador no solo responde a las necesidades actuales de monitoreo avanzado, sino que también establece un nuevo estándar de rendimiento y durabilidad en el sector.'
                    },
                    advantages: {
                        title: 'Ventajas Competitivas',
                        ven_1: {
                            title: 'Alta Resistencia Térmica',
                            text: 'Operación continua a temperaturas extremas, superando los límites de los sensores convencionales.'
                        },
                        ven_2: {
                            title: 'Precisión Superior',
                            text: 'Monitoreo detallado y exacto para una gestión óptima de yacimientos geotérmicos.'
                        },
                        ven_3 : {
                            title: 'Durabilidad Comprobada',
                            text: 'Construido para resistir las condiciones más adversas y garantizar un rendimiento a largo plazo.'
                        }
                    }
                }

            }
        }
    })

    nuxtApp.vueApp.use(i18n)
})
