const translations = {
  en: {
    skip: "Skip to content", menu: "Open menu", navWork: "Work", navAbout: "About", navProcess: "Process", navTools: "Tools", navContact: "Contact", requestCv: "Request CV",
    heroEyebrow: "JUNIOR UX/UI DESIGNER · COSTA RICA", heroTitle: 'UX/UI design<br>that feels <em>good</em>', heroIntro: "I'm Jazmín, a junior UX/UI designer who turns research and bold visuals into digital products people enjoy using.", viewWork: "View my work", aboutMe: "About me", chipLanguages: "Trilingual: EN · ES · PT", marquee: "Turning ideas into experiences<b>•</b>Clarity over complexity<b>•</b>Human-centered thinking<b>•</b>Turning ideas into experiences<b>•</b>Clarity over complexity<b>•</b>Human-centered thinking<b>•</b>", chipAi: "AI-assisted workflow", chipLocation: "Based in Costa Rica", noteMake: "make it human!", scrollHint: "SCROLL A LITTLE",
    workEyebrow: "A FEW THINGS I'VE BEEN MAKING", workTitle: "Selected <em>work</em>", workIntro: "Small ideas, big feelings. Three concept projects built around real-life needs.", nomaTag: "WEB APP · AI", concept: "Concept project", viewCaseStudy: "View case study", liveDemo: "Live demo", viewCode: "GitHub", nomaDesc: "Plan your trip from start to finish: itinerary, budget and smart suggestions that adapt when plans change.", kindaTag: "WEB APP · HABITS", kindaDesc: "A habit tracker with insights that show you what's working and what's not.", fuegoTag: "WEB APP · EDTECH", fuegoDesc: "Gamified courses and progress tracking for young Christians, Duolingo-style.",
    aboutEyebrow: "A LITTLE ABOUT ME", aboutTitle: 'Hi, I\'m<br>Jazmín<span class="heart-doodle">♡</span>!', aboutText: "I’m a junior UX/UI designer with a passion for creating thoughtful visual experiences and meaningful digital products. I enjoy exploring ideas, shaping visual identities, and designing interfaces that balance aesthetics, clarity, and functionality. With an eye for detail and a curiosity for how things work, I approach each project as an opportunity to turn concepts into intuitive, purposeful experiences.", focusResearch: "UX research", focusUi: "UI design", focusProto: "Prototyping", focusVisual: "Visual design", focusMotion: "Motion",
    processEyebrow: "GOOD WORK, GOOD PROCESS", processTitle: "How I get <em>there</em>", processIntro: "A little structure makes room for a lot of creativity.", step1Title: "Research & Understand", step1Desc: "Understand the problem, the target audience and their needs. Explore the context, gather insights and identify opportunities through research and references.", step1Tags: "Empathize · Discover", step2Title: "Define & Strategize", step2Desc: "Establish the project's direction by defining its goals, core features, information architecture and user flows. Align functionality with the overall vision.", step2Tags: "Define", step3Title: "Explore & Design", step3Desc: "Explore visual references, establish a cohesive design language and shape the interface through typography, color, composition and visual hierarchy.", step3Tags: "Ideate · Visual Direction", step4Title: "Prototype & Build", step4Desc: "Transform ideas into interactive experiences. Use AI-assisted tools to accelerate development, explore possibilities and refine each screen with attention to detail.", step4Tags: "Prototype · Develop", step5Title: "Evaluate & Refine", step5Desc: "Review the experience, gather feedback and identify areas for improvement. Iterate on the design to make the product clearer, more intuitive and more consistent.", step5Tags: "Test · Iterate",
    toolsEyebrow: "MY CREATIVE TOOLBOX", toolsTitle: "Tools of the <em>trade</em>", toolsIntro: "The right tool for the right moment. Always curious about what's next.", designTools: "Design", aiTools: "AI tools", learning: "LEARNING", aiNote: "Curious by nature, human by design.", collabTools: "Collaboration & code",
    contactEyebrow: "YOUR NEXT DESIGN BUDDY?", contactTitle: "Let's create<br>something <em>together</em>", contactText: "Open to junior UX/UI opportunities and excited to grow as part of a creative team.", emailMe: "Email me", contactNote: "let's make<br>good things!", contactRing: "DESIGN MINDED ✱ DETAIL DRIVEN ✱ ALWAYS CURIOUS ✱", footerCopy: "© 2026 Jazmín Picado · Designed with love and a little help from AI",
    csPageTitle: "Case studies — Jazmín Picado", csEyebrow: "CASE STUDIES", csTitle: "Behind the <em>decisions</em>", csCardText: "How I spotted what wasn't working in Noma and Kinda, and what I changed.", csCardCta: "Read the case studies", csIntro: "Two concept projects, two real problems I found while reviewing what I built, and how I solved them.", csJumpNoma: "Noma: booking statuses", csJumpKinda: "Kinda: insights layout", csNomaShort: "Booking statuses", csKindaShort: "Insights layout", csWorkedEyebrow: "THE PROCESS BEHIND BOTH", csWorkedTitle: "How I <em>worked</em>", csWorkedIntro: "I built both projects with an AI-first workflow.", csStep1Title: "References & brief", csStep1Desc: "I curated visual references and wrote a clear design brief.", csStep2Title: "Build with Claude Code", csStep2Desc: "I built each project with Claude Code, working from that brief.", csStep3Title: "Review & spot issues", csStep3Desc: "I reviewed each screen in the browser, spotted what felt confusing and iterated.", csStep4Title: "Document in Figma", csStep4Desc: "Afterwards, I documented the key screens as mid-fidelity wireframes in Figma to analyze and explain each decision.", csRole: "Role", csTools: "Tools", csFocus: "Focus", csProblem: "THE PROBLEM", csDecision: "THE DECISION", csResult: "THE RESULT", csBefore: "Before", csAfter: "After", csCompare: "Compare before and after", csTryIt: "try it!", csEnlarge: "Open larger image:", csClose: "Close image", csNoteWord: "Note", csSeeAll: "See all patterns", csMoreTitle: "Want to see <em>more</em>?", csBack: "Back to work", csRoleValue: "UX/UI design & AI-assisted build", csNomaTitle: "Booking statuses that answer the real <em>question</em>", csNomaFocus: "UX writing, status design", csNomaProblem: "Bookings were labeled \"Confirmed\" or \"Unconfirmed\". Travelers couldn't tell <mark>whether they had already paid or still owed money on the trip</mark>. \"Unconfirmed\" mixed two different situations: not booked yet, or waiting for the provider. Meanwhile, the summary above already talked about money (\"$1,864 paid · $1,640 to pay on the trip\"), so the summary and the statuses spoke two different languages.", csNomaDecision: "I replaced the two labels with three states based on what the traveler needs to do:", csPaidDesc: "Booked and paid, nothing to do.", csReservedDesc: "Booked, pay later, always with how and when (\"Pay at the station\", \"Pay at check-in\").", csPendingDesc: "Not booked yet, needs action.", csNomaDecisionEnd: "Each state has its own visual treatment, so they can be told apart at a glance.", csNomaR1: "Statuses now match the money summary.", csNomaR2: "Travelers know exactly what is left to pay and where.", csNomaR3: "The same states feed the trip overview and let the assistant answer \"what's still pending?\".", csNomaBeforeAlt: "Noma bookings screen before: statuses labeled Confirmed and Unconfirmed.", csNomaAfterAlt: "Noma bookings screen after: statuses labeled Paid, Reserved and Pending.", csNomaB1: "Confirmed: the booking or the payment? The label doesn't say.", csNomaB2: "The summary already talks about money paid and money to pay.", csNomaB3: "\"Unconfirmed · Pending confirmation\": not booked, or waiting for the provider?", csNomaB4: "The sidebar repeats the same ambiguous labels.", csNomaA1: "Three states that match the money summary: 5 paid, 3 reserved, 1 pending.", csNomaA2: "Reserved means booked, pay later.", csNomaA3: "Every reserved booking says how and where to pay.", csNomaA4: "The sidebar uses the same language as the list.", csKindaTitle: "Putting the summary where it <em>helps</em>", csKindaFocus: "Information architecture", csKindaProblem: "The Insights page had a large summary card that <mark>showed one pattern and linked to the full list on the same page</mark>. Clicking \"See all patterns\" only scrolled down a few hundred pixels, and the same pattern appeared twice, in the card and at the top of the list. The card took space from the content it was pointing to.", csKindaDecision: "Summary where people don't see the detail yet; detail where it lives.", csKindaD1: "The card moved to the Overview, as a preview that shows one pattern at a time.", csKindaD2: "\"See all patterns\" now opens Insights right at the list.", csKindaD3: "On Insights, the patterns section gets the spotlight: a bigger title, filters up front, and weekly consistency at full width.", csKindaR1: "No repeated content.", csKindaR2: "Insights reads top to bottom without jumps.", csKindaR3: "The Overview gains a gentle entry point to the patterns.", csKindaBeforeLabel: "Before · Insights", csKindaOverviewLabel: "After · Overview", csKindaInsightsLabel: "After · Insights", csKindaBeforeAlt: "Kinda Insights page before: a large pattern card next to weekly consistency, with the full pattern list below.", csKindaOverviewAlt: "Kinda Overview after: the pattern card now lives here, showing one pattern at a time.", csKindaInsightsAlt: "Kinda Insights page after: weekly consistency at full width and a larger patterns section.", csKindaB1: "A summary card on the same page as the full list.", csKindaB2: "This button only scrolls down the same page.", csKindaB3: "The same pattern again, a few hundred pixels below.", csKindaO1: "The summary now lives in the Overview, one pattern at a time.", csKindaO2: "Opens Insights right at the patterns list.", csKindaI1: "The patterns section gets the spotlight.", csKindaI2: "Filters up front to explore by type.", csKindaI3: "Weekly consistency now uses the full width."
  },
  es: {
    skip: "Saltar al contenido", menu: "Abrir menú", navWork: "Proyectos", navAbout: "Sobre mí", navProcess: "Proceso", navTools: "Herramientas", navContact: "Contacto", requestCv: "Solicitar CV",
    heroEyebrow: "DISEÑADORA UX/UI JUNIOR · COSTA RICA", heroTitle: 'Diseño UX/UI<br>que se siente <em>bien</em>', heroIntro: "Soy Jazmín, diseñadora UX/UI junior. Transformo investigación y visuales atrevidos en productos digitales que la gente disfruta usar.", viewWork: "Ver proyectos", aboutMe: "Sobre mí", chipLanguages: "Trilingüe: EN · ES · PT", marquee: "Convirtiendo ideas en experiencias<b>•</b>Claridad sobre complejidad<b>•</b>Pensamiento centrado en las personas<b>•</b>Convirtiendo ideas en experiencias<b>•</b>Claridad sobre complejidad<b>•</b>Pensamiento centrado en las personas<b>•</b>", chipAi: "Flujo de trabajo con IA", chipLocation: "Desde Costa Rica", noteMake: "¡que se sienta humano!", scrollHint: "SIGUE BAJANDO",
    workEyebrow: "ALGUNAS COSAS QUE HE CREADO", workTitle: "Proyectos <em>destacados</em>", workIntro: "Ideas pequeñas, grandes emociones. Tres proyectos conceptuales para necesidades reales.", nomaTag: "APP WEB · IA", concept: "Proyecto conceptual", viewCaseStudy: "Ver caso de estudio", liveDemo: "Ver demo", viewCode: "GitHub", nomaDesc: "Planifica tu viaje de principio a fin: itinerario, presupuesto y sugerencias inteligentes que se adaptan a los cambios.", kindaTag: "APP WEB · HÁBITOS", kindaDesc: "Un rastreador de hábitos con información para descubrir qué funciona y qué no.", fuegoTag: "APP WEB · EDTECH", fuegoDesc: "Cursos gamificados y seguimiento del progreso para jóvenes cristianos, al estilo Duolingo.",
    aboutEyebrow: "UN POCO SOBRE MÍ", aboutTitle: '¡Hola, soy<br>Jazmín<span class="heart-doodle">♡</span>!', aboutText: "Soy diseñadora UX/UI junior, apasionada por crear experiencias visuales cuidadas y productos digitales con sentido. Disfruto explorar ideas, dar forma a identidades visuales y diseñar interfaces que equilibran estética, claridad y funcionalidad. Con ojo para el detalle y curiosidad por cómo funcionan las cosas, veo cada proyecto como una oportunidad para convertir conceptos en experiencias intuitivas y con propósito.", focusResearch: "Investigación UX", focusUi: "Diseño UI", focusProto: "Prototipado", focusVisual: "Diseño visual", focusMotion: "Motion",
    processEyebrow: "BUEN DISEÑO, BUEN PROCESO", processTitle: "Así llego <em>allá</em>", processIntro: "Un poco de estructura deja espacio para mucha creatividad.", step1Title: "Investigar y comprender", step1Desc: "Comprender el problema, el público objetivo y sus necesidades. Explorar el contexto, reunir hallazgos e identificar oportunidades a través de la investigación y las referencias.", step1Tags: "Empatizar · Descubrir", step2Title: "Definir y planificar", step2Desc: "Establecer la dirección del proyecto definiendo sus objetivos, funciones clave, arquitectura de la información y flujos de usuario. Alinear la funcionalidad con la visión general.", step2Tags: "Definir", step3Title: "Explorar y diseñar", step3Desc: "Explorar referencias visuales, establecer un lenguaje de diseño coherente y dar forma a la interfaz a través de la tipografía, el color, la composición y la jerarquía visual.", step3Tags: "Idear · Dirección visual", step4Title: "Prototipar y construir", step4Desc: "Transformar ideas en experiencias interactivas. Usar herramientas con IA para acelerar el desarrollo, explorar posibilidades y refinar cada pantalla con atención al detalle.", step4Tags: "Prototipar · Desarrollar", step5Title: "Evaluar y refinar", step5Desc: "Revisar la experiencia, recopilar comentarios e identificar mejoras. Iterar el diseño para que el producto sea más claro, intuitivo y consistente.", step5Tags: "Probar · Iterar",
    toolsEyebrow: "MI CAJA DE HERRAMIENTAS", toolsTitle: "Herramientas de mi <em>oficio</em>", toolsIntro: "La herramienta ideal para cada momento. Siempre con curiosidad por lo que sigue.", designTools: "Diseño", aiTools: "Herramientas de IA", learning: "APRENDIENDO", aiNote: "Curiosa por naturaleza, humana por diseño.", collabTools: "Colaboración y código",
    contactEyebrow: "¿TU PRÓXIMA COMPAÑERA DE DISEÑO?", contactTitle: "Creemos<br>algo <em>juntas</em>", contactText: "Abierta a oportunidades UX/UI junior y con ganas de crecer como parte de un equipo creativo.", emailMe: "Escríbeme", contactNote: "¡hagamos<br>cosas bonitas!", contactRing: "MENTE CREATIVA ✱ ATENTA AL DETALLE ✱ SIEMPRE CURIOSA ✱", footerCopy: "© 2026 Jazmín Picado · Diseñado con cariño y un poquito de IA",
    csPageTitle: "Casos de estudio — Jazmín Picado", csEyebrow: "CASOS DE ESTUDIO", csTitle: "Detrás de las <em>decisiones</em>", csCardText: "Cómo detecté lo que no funcionaba en Noma y Kinda, y qué cambié.", csCardCta: "Leer los casos de estudio", csIntro: "Dos proyectos conceptuales, dos problemas reales que encontré al revisar lo que construí, y cómo los resolví.", csJumpNoma: "Noma: estados de reserva", csJumpKinda: "Kinda: diseño de Insights", csNomaShort: "Estados de reserva", csKindaShort: "Diseño de Insights", csWorkedEyebrow: "EL PROCESO DETRÁS DE AMBOS", csWorkedTitle: "Cómo <em>trabajé</em>", csWorkedIntro: "Construí ambos proyectos con un flujo de trabajo centrado en IA.", csStep1Title: "Referencias y brief", csStep1Desc: "Seleccioné referencias visuales y escribí un brief de diseño claro.", csStep2Title: "Construir con Claude Code", csStep2Desc: "Construí cada proyecto con Claude Code, a partir de ese brief.", csStep3Title: "Revisar y detectar problemas", csStep3Desc: "Revisé cada pantalla en el navegador, detecté lo que resultaba confuso e iteré.", csStep4Title: "Documentar en Figma", csStep4Desc: "Después, documenté las pantallas clave como wireframes de fidelidad media en Figma para analizar y explicar cada decisión.", csRole: "Rol", csTools: "Herramientas", csFocus: "Enfoque", csProblem: "EL PROBLEMA", csDecision: "LA DECISIÓN", csResult: "EL RESULTADO", csBefore: "Antes", csAfter: "Después", csCompare: "Comparar antes y después", csTryIt: "¡pruébalo!", csEnlarge: "Abrir imagen en grande:", csClose: "Cerrar imagen", csNoteWord: "Nota", csSeeAll: "See all patterns", csMoreTitle: "¿Quieres ver <em>más</em>?", csBack: "Volver a proyectos", csRoleValue: "Diseño UX/UI y desarrollo asistido por IA", csNomaTitle: "Estados de reserva que responden la pregunta <em>real</em>", csNomaFocus: "UX writing, diseño de estados", csNomaProblem: "Las reservas decían \"Confirmed\" o \"Unconfirmed\". Las personas no podían saber <mark>si ya habían pagado o si todavía debían dinero en el viaje</mark>. \"Unconfirmed\" mezclaba dos situaciones distintas: todavía sin reservar, o a la espera del proveedor. Mientras tanto, el resumen de arriba ya hablaba de dinero (\"$1,864 paid · $1,640 to pay on the trip\"), así que el resumen y los estados hablaban idiomas diferentes.", csNomaDecision: "Reemplacé las dos etiquetas por tres estados basados en lo que la persona necesita hacer:", csPaidDesc: "Reservado y pagado, no hay nada que hacer.", csReservedDesc: "Reservado, se paga después, siempre indicando cómo y cuándo (\"Pay at the station\", \"Pay at check-in\").", csPendingDesc: "Todavía sin reservar, requiere acción.", csNomaDecisionEnd: "Cada estado tiene su propio tratamiento visual, para distinguirlos de un vistazo.", csNomaR1: "Los estados ahora coinciden con el resumen de dinero.", csNomaR2: "Las personas saben exactamente cuánto falta por pagar y dónde.", csNomaR3: "Los mismos estados alimentan el resumen del viaje y permiten que el asistente responda \"¿qué sigue pendiente?\".", csNomaBeforeAlt: "Pantalla de reservas de Noma antes: estados con las etiquetas Confirmed y Unconfirmed.", csNomaAfterAlt: "Pantalla de reservas de Noma después: estados con las etiquetas Paid, Reserved y Pending.", csNomaB1: "Confirmed: ¿la reserva o el pago? La etiqueta no lo dice.", csNomaB2: "El resumen ya habla de dinero pagado y dinero por pagar.", csNomaB3: "\"Unconfirmed · Pending confirmation\": ¿sin reservar, o a la espera del proveedor?", csNomaB4: "El panel lateral repite las mismas etiquetas ambiguas.", csNomaA1: "Tres estados que coinciden con el resumen de dinero: 5 pagados, 3 reservados, 1 pendiente.", csNomaA2: "Reserved significa reservado, se paga después.", csNomaA3: "Cada reserva indica cómo y dónde pagar.", csNomaA4: "El panel lateral usa el mismo lenguaje que la lista.", csKindaTitle: "Poner el resumen donde <em>ayuda</em>", csKindaFocus: "Arquitectura de información", csKindaProblem: "La página de Insights tenía una tarjeta de resumen grande que <mark>mostraba un patrón y enlazaba a la lista completa en la misma página</mark>. Al hacer clic en \"See all patterns\" solo se bajaban unos cientos de píxeles, y el mismo patrón aparecía dos veces: en la tarjeta y al inicio de la lista. La tarjeta le quitaba espacio al contenido al que apuntaba.", csKindaDecision: "El resumen donde todavía no se ve el detalle; el detalle donde realmente vive.", csKindaD1: "La tarjeta pasó al Overview, como una vista previa que muestra un patrón a la vez.", csKindaD2: "\"See all patterns\" ahora abre Insights justo en la lista.", csKindaD3: "En Insights, la sección de patrones toma el protagonismo: un título más grande, filtros a la vista y la consistencia semanal a todo el ancho.", csKindaR1: "Sin contenido repetido.", csKindaR2: "Insights se lee de arriba abajo, sin saltos.", csKindaR3: "El Overview gana una entrada amable hacia los patrones.", csKindaBeforeLabel: "Antes · Insights", csKindaOverviewLabel: "Después · Overview", csKindaInsightsLabel: "Después · Insights", csKindaBeforeAlt: "Página de Insights de Kinda antes: una tarjeta de patrón grande junto a la consistencia semanal, con la lista completa de patrones debajo.", csKindaOverviewAlt: "Overview de Kinda después: la tarjeta de patrones ahora vive aquí y muestra un patrón a la vez.", csKindaInsightsAlt: "Página de Insights de Kinda después: consistencia semanal a todo el ancho y una sección de patrones más grande.", csKindaB1: "Una tarjeta de resumen en la misma página que la lista completa.", csKindaB2: "Este botón solo baja por la misma página.", csKindaB3: "El mismo patrón otra vez, unos cientos de píxeles más abajo.", csKindaO1: "El resumen ahora vive en el Overview, un patrón a la vez.", csKindaO2: "Abre Insights justo en la lista de patrones.", csKindaI1: "La sección de patrones toma el protagonismo.", csKindaI2: "Filtros a la vista para explorar por tipo.", csKindaI3: "La consistencia semanal ahora usa todo el ancho."
  },
  pt: {
    skip: "Pular para o conteúdo", menu: "Abrir menu", navWork: "Trabalhos", navAbout: "Sobre", navProcess: "Processo", navTools: "Ferramentas", navContact: "Contato", requestCv: "Solicitar CV",
    heroEyebrow: "DESIGNER UX/UI JÚNIOR · COSTA RICA", heroTitle: 'Design UX/UI<br>que faz sentir <em>bem</em>', heroIntro: "Sou Jazmín, designer UX/UI júnior. Transformo pesquisa e visuais marcantes em produtos digitais que as pessoas adoram usar.", viewWork: "Ver trabalhos", aboutMe: "Sobre mim", chipLanguages: "Trilíngue: EN · ES · PT", marquee: "Transformando ideias em experiências<b>•</b>Clareza acima da complexidade<b>•</b>Pensamento centrado nas pessoas<b>•</b>Transformando ideias em experiências<b>•</b>Clareza acima da complexidade<b>•</b>Pensamento centrado nas pessoas<b>•</b>", chipAi: "Fluxo de trabalho com IA", chipLocation: "Na Costa Rica", noteMake: "mais humano!", scrollHint: "CONTINUE DESCENDO",
    workEyebrow: "ALGUMAS COISAS QUE CRIEI", workTitle: "Trabalhos em <em>destaque</em>", workIntro: "Ideias pequenas, grandes sentimentos. Três projetos conceituais para necessidades reais.", nomaTag: "APP WEB · IA", concept: "Projeto conceitual", viewCaseStudy: "Ver estudo de caso", liveDemo: "Ver demo", viewCode: "GitHub", nomaDesc: "Planeje sua viagem do início ao fim: roteiro, orçamento e sugestões inteligentes que se adaptam quando os planos mudam.", kindaTag: "APP WEB · HÁBITOS", kindaDesc: "Um rastreador de hábitos com insights para descobrir o que está funcionando e o que não está.", fuegoTag: "APP WEB · EDTECH", fuegoDesc: "Cursos gamificados e acompanhamento do progresso para jovens cristãos, no estilo Duolingo.",
    aboutEyebrow: "UM POUCO SOBRE MIM", aboutTitle: 'Oi, sou<br>Jazmín<span class="heart-doodle">♡</span>!', aboutText: "Sou designer UX/UI júnior, apaixonada por criar experiências visuais cuidadosas e produtos digitais significativos. Gosto de explorar ideias, dar forma a identidades visuais e projetar interfaces que equilibram estética, clareza e funcionalidade. Com olhar atento aos detalhes e curiosidade sobre como as coisas funcionam, vejo cada projeto como uma oportunidade de transformar conceitos em experiências intuitivas e com propósito.", focusResearch: "Pesquisa UX", focusUi: "Design UI", focusProto: "Prototipagem", focusVisual: "Design visual", focusMotion: "Motion",
    processEyebrow: "BOM DESIGN, BOM PROCESSO", processTitle: "Como eu chego <em>lá</em>", processIntro: "Um pouco de estrutura abre espaço para muita criatividade.", step1Title: "Pesquisar e entender", step1Desc: "Entender o problema, o público-alvo e suas necessidades. Explorar o contexto, reunir insights e identificar oportunidades por meio de pesquisa e referências.", step1Tags: "Empatizar · Descobrir", step2Title: "Definir e planejar", step2Desc: "Estabelecer a direção do projeto definindo objetivos, funcionalidades principais, arquitetura da informação e fluxos de usuário. Alinhar a funcionalidade com a visão geral.", step2Tags: "Definir", step3Title: "Explorar e desenhar", step3Desc: "Explorar referências visuais, estabelecer uma linguagem de design coesa e dar forma à interface por meio de tipografia, cor, composição e hierarquia visual.", step3Tags: "Idear · Direção visual", step4Title: "Prototipar e construir", step4Desc: "Transformar ideias em experiências interativas. Usar ferramentas com IA para acelerar o desenvolvimento, explorar possibilidades e refinar cada tela com atenção aos detalhes.", step4Tags: "Prototipar · Desenvolver", step5Title: "Avaliar e refinar", step5Desc: "Revisar a experiência, coletar feedback e identificar melhorias. Iterar o design para tornar o produto mais claro, intuitivo e consistente.", step5Tags: "Testar · Iterar",
    toolsEyebrow: "MINHA CAIXA DE FERRAMENTAS", toolsTitle: "Ferramentas do <em>ofício</em>", toolsIntro: "A ferramenta certa para cada momento. Sempre curiosa pelo que vem a seguir.", designTools: "Design", aiTools: "Ferramentas de IA", learning: "APRENDENDO", aiNote: "Curiosa por natureza, humana por design.", collabTools: "Colaboração e código",
    contactEyebrow: "SUA PRÓXIMA PARCEIRA DE DESIGN?", contactTitle: "Vamos criar<br>algo <em>juntas</em>", contactText: "Aberta a oportunidades de UX/UI júnior e animada para crescer como parte de uma equipe criativa.", emailMe: "Me escreva", contactNote: "vamos criar<br>coisas boas!", contactRing: "MENTE CRIATIVA ✱ ATENTA AOS DETALHES ✱ SEMPRE CURIOSA ✱", footerCopy: "© 2026 Jazmín Picado · Feito com carinho e uma ajudinha da IA",
    csPageTitle: "Estudos de caso — Jazmín Picado", csEyebrow: "ESTUDOS DE CASO", csTitle: "Por trás das <em>decisões</em>", csCardText: "Como identifiquei o que não funcionava no Noma e no Kinda, e o que mudei.", csCardCta: "Ler os estudos de caso", csIntro: "Dois projetos conceituais, dois problemas reais que encontrei ao revisar o que construí, e como os resolvi.", csJumpNoma: "Noma: status de reserva", csJumpKinda: "Kinda: layout de Insights", csNomaShort: "Status de reserva", csKindaShort: "Layout de Insights", csWorkedEyebrow: "O PROCESSO POR TRÁS DOS DOIS", csWorkedTitle: "Como eu <em>trabalhei</em>", csWorkedIntro: "Construí os dois projetos com um fluxo de trabalho centrado em IA.", csStep1Title: "Referências e brief", csStep1Desc: "Selecionei referências visuais e escrevi um brief de design claro.", csStep2Title: "Construir com Claude Code", csStep2Desc: "Construí cada projeto com Claude Code, a partir desse brief.", csStep3Title: "Revisar e identificar problemas", csStep3Desc: "Revisei cada tela no navegador, identifiquei o que parecia confuso e iterei.", csStep4Title: "Documentar no Figma", csStep4Desc: "Depois, documentei as telas principais como wireframes de média fidelidade no Figma para analisar e explicar cada decisão.", csRole: "Função", csTools: "Ferramentas", csFocus: "Foco", csProblem: "O PROBLEMA", csDecision: "A DECISÃO", csResult: "O RESULTADO", csBefore: "Antes", csAfter: "Depois", csCompare: "Comparar antes e depois", csTryIt: "experimente!", csEnlarge: "Abrir imagem ampliada:", csClose: "Fechar imagem", csNoteWord: "Nota", csSeeAll: "See all patterns", csMoreTitle: "Quer ver <em>mais</em>?", csBack: "Voltar aos projetos", csRoleValue: "Design UX/UI e desenvolvimento assistido por IA", csNomaTitle: "Status de reserva que respondem à pergunta <em>real</em>", csNomaFocus: "UX writing, design de status", csNomaProblem: "As reservas diziam \"Confirmed\" ou \"Unconfirmed\". As pessoas não conseguiam saber <mark>se já tinham pagado ou se ainda deviam dinheiro na viagem</mark>. \"Unconfirmed\" misturava duas situações diferentes: ainda não reservado, ou aguardando o fornecedor. Enquanto isso, o resumo acima já falava de dinheiro (\"$1,864 paid · $1,640 to pay on the trip\"), então o resumo e os status falavam línguas diferentes.", csNomaDecision: "Substituí as duas etiquetas por três estados baseados no que a pessoa precisa fazer:", csPaidDesc: "Reservado e pago, nada a fazer.", csReservedDesc: "Reservado, paga depois, sempre indicando como e quando (\"Pay at the station\", \"Pay at check-in\").", csPendingDesc: "Ainda não reservado, precisa de ação.", csNomaDecisionEnd: "Cada estado tem seu próprio tratamento visual, para serem diferenciados num piscar de olhos.", csNomaR1: "Os status agora combinam com o resumo financeiro.", csNomaR2: "As pessoas sabem exatamente quanto falta pagar e onde.", csNomaR3: "Os mesmos estados alimentam o resumo da viagem e permitem que o assistente responda \"o que ainda está pendente?\".", csNomaBeforeAlt: "Tela de reservas do Noma antes: status com as etiquetas Confirmed e Unconfirmed.", csNomaAfterAlt: "Tela de reservas do Noma depois: status com as etiquetas Paid, Reserved e Pending.", csNomaB1: "Confirmed: a reserva ou o pagamento? A etiqueta não diz.", csNomaB2: "O resumo já fala de dinheiro pago e dinheiro a pagar.", csNomaB3: "\"Unconfirmed · Pending confirmation\": não reservado, ou aguardando o fornecedor?", csNomaB4: "O painel lateral repete as mesmas etiquetas ambíguas.", csNomaA1: "Três estados que combinam com o resumo financeiro: 5 pagos, 3 reservados, 1 pendente.", csNomaA2: "Reserved significa reservado, paga depois.", csNomaA3: "Cada reserva indica como e onde pagar.", csNomaA4: "O painel lateral usa a mesma linguagem da lista.", csKindaTitle: "Colocar o resumo onde ele <em>ajuda</em>", csKindaFocus: "Arquitetura da informação", csKindaProblem: "A página de Insights tinha um cartão de resumo grande que <mark>mostrava um padrão e levava à lista completa na mesma página</mark>. Clicar em \"See all patterns\" só descia algumas centenas de pixels, e o mesmo padrão aparecia duas vezes: no cartão e no topo da lista. O cartão tirava espaço do conteúdo para o qual apontava.", csKindaDecision: "O resumo onde o detalhe ainda não aparece; o detalhe onde ele realmente vive.", csKindaD1: "O cartão foi para o Overview, como uma prévia que mostra um padrão por vez.", csKindaD2: "\"See all patterns\" agora abre Insights direto na lista.", csKindaD3: "Em Insights, a seção de padrões ganha destaque: um título maior, filtros à vista e a consistência semanal em largura total.", csKindaR1: "Nenhum conteúdo repetido.", csKindaR2: "Insights é lido de cima a baixo, sem saltos.", csKindaR3: "O Overview ganha uma entrada suave para os padrões.", csKindaBeforeLabel: "Antes · Insights", csKindaOverviewLabel: "Depois · Overview", csKindaInsightsLabel: "Depois · Insights", csKindaBeforeAlt: "Página de Insights do Kinda antes: um cartão de padrão grande ao lado da consistência semanal, com a lista completa de padrões abaixo.", csKindaOverviewAlt: "Overview do Kinda depois: o cartão de padrões agora fica aqui e mostra um padrão por vez.", csKindaInsightsAlt: "Página de Insights do Kinda depois: consistência semanal em largura total e uma seção de padrões maior.", csKindaB1: "Um cartão de resumo na mesma página da lista completa.", csKindaB2: "Este botão só desce pela mesma página.", csKindaB3: "O mesmo padrão de novo, algumas centenas de pixels abaixo.", csKindaO1: "O resumo agora fica no Overview, um padrão por vez.", csKindaO2: "Abre Insights direto na lista de padrões.", csKindaI1: "A seção de padrões ganha destaque.", csKindaI2: "Filtros à vista para explorar por tipo.", csKindaI3: "A consistência semanal agora usa toda a largura."
  }
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translatable = document.querySelectorAll("[data-i18n]");

const languageKey = "portfolio-language";

function applyLanguage(language) {
  const strings = translations[language];
  document.documentElement.lang = language;
  translatable.forEach((element) => {
    const translation = strings[element.dataset.i18n];
    if (translation) element.innerHTML = translation;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const translation = strings[element.dataset.i18nAlt];
    if (translation) element.alt = translation;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const translation = strings[element.dataset.i18nAria];
    if (translation) element.setAttribute("aria-label", translation);
  });
  splitTitles();
  languageButtons.forEach((item) => item.setAttribute("aria-pressed", String(item.dataset.lang === language)));
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
    try { localStorage.setItem(languageKey, button.dataset.lang); } catch (error) { /* storage unavailable: the choice lasts for this page only */ }
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navPanel.classList.toggle("is-open", !isOpen);
});
navPanel.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navPanel.classList.remove("is-open");
  });
});

/* ---------- Motion ---------- */
const motionOn = document.documentElement.classList.contains("motion") && "IntersectionObserver" in window;

// Wrap each word of the big titles in <span class="wi"> so they can rise one by one.
// Runs again after a language switch, which replays the animation with the new words.
function splitTitles() {
  if (!motionOn) return;
  document.querySelectorAll(".reveal h1[data-i18n], .reveal h2[data-i18n]").forEach((title) => {
    let index = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const parts = child.textContent.split(/(\s+)/);
          if (!parts.some((part) => part.trim())) return;
          const fragment = document.createDocumentFragment();
          parts.forEach((part) => {
            if (!part) return;
            if (!part.trim()) { fragment.append(part); return; }
            const word = document.createElement("span");
            word.className = "wi";
            word.style.setProperty("--wi", index++);
            word.textContent = part;
            fragment.append(word);
          });
          child.replaceWith(fragment);
        } else if (child.nodeType === Node.ELEMENT_NODE && !child.classList.contains("wi")) {
          walk(child);
        }
      });
    };
    walk(title);
  });
}

// Keep the visitor's language when moving between pages
try {
  const savedLanguage = localStorage.getItem(languageKey);
  if (savedLanguage && savedLanguage !== "en" && Object.hasOwn(translations, savedLanguage)) applyLanguage(savedLanguage);
} catch (error) { /* storage unavailable: stay in the default language */ }

if (motionOn) {
  splitTitles();

  // Stagger siblings, and give dealt cards alternating tilts
  document.querySelectorAll(".reveal").forEach((element) => {
    const siblings = [...element.parentElement.children].filter((item) => item.classList.contains("reveal"));
    const position = siblings.indexOf(element);
    element.style.setProperty("--i", position);
    element.style.setProperty("--tilt", `${(position % 2 ? 1 : -1) * (3 + (position % 3))}deg`);
  });

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add(entry.target.classList.contains("process-grid") ? "is-drawn" : "is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".reveal, .process-grid").forEach((element) => observer.observe(element));

  // Marquee: steady drift that speeds up, follows the scroll direction and leans a little while you scroll
  const track = document.querySelector(".marquee-track");
  if (track) {
    track.classList.add("is-driven");
    let offset = 0, boost = 0, direction = 1, lastTime = performance.now(), lastScroll = window.scrollY, running = false;
    const tick = (now) => {
      const delta = Math.min(now - lastTime, 50);
      lastTime = now;
      const scrolled = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      if (scrolled) direction = scrolled > 0 ? 1 : -1;
      boost += (Math.min(Math.abs(scrolled), 90) - boost) * 0.08;
      const half = track.scrollWidth / 2;
      offset += (half / 45000 + boost * 0.012) * delta * direction;
      offset = ((offset % half) + half) % half;
      track.style.transform = `translateX(${-offset}px) skewX(${-Math.min(boost * 0.09, 5) * direction}deg)`;
      if (running) requestAnimationFrame(tick);
    };
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) { running = true; lastTime = performance.now(); lastScroll = window.scrollY; requestAnimationFrame(tick); }
      else if (!entry.isIntersecting) running = false;
    }).observe(track.parentElement);
  }

  // Project cards lean slightly toward the pointer (mouse/trackpad only)
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const box = card.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        card.classList.add("is-tilting");
        card.style.transform = `perspective(1000px) translateY(-6px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
      });
      card.addEventListener("pointerleave", () => {
        card.classList.remove("is-tilting");
        card.style.transform = "";
      });
    });
  }
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

/* ---------- Case studies ---------- */
// Numbered markers and their notes highlight each other
document.querySelectorAll("[data-annotated]").forEach((frame) => {
  const list = document.querySelector(`[data-notes="${frame.dataset.annotated}"]`);
  if (!list) return;
  const markers = [...frame.querySelectorAll(".cs-marker")];
  const notes = [...list.querySelectorAll("[data-note]")];
  let pinned = null;
  const show = (number) => [...markers, ...notes].forEach((item) => item.classList.toggle("is-active", item.dataset.note === number));
  const rest = () => show(pinned);
  [...markers, ...notes].forEach((item) => {
    item.addEventListener("pointerenter", () => show(item.dataset.note));
    item.addEventListener("pointerleave", rest);
  });
  markers.forEach((marker) => {
    const number = marker.dataset.note;
    marker.addEventListener("focus", () => show(number));
    marker.addEventListener("blur", rest);
    marker.addEventListener("click", () => {
      pinned = pinned === number ? null : number;
      show(number);
      const note = notes.find((item) => item.dataset.note === number);
      const box = note.getBoundingClientRect();
      if (box.bottom > window.innerHeight || box.top < 80) note.scrollIntoView({ block: "center" });
    });
  });
});

// Before / After switch
document.querySelectorAll("[data-compare]").forEach((compare) => {
  const buttons = compare.querySelectorAll("[data-show]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      compare.querySelectorAll("[data-state]").forEach((element) => {
        const isOn = element.dataset.state === button.dataset.show;
        if (element.classList.contains("cs-state")) element.classList.toggle("is-active", isOn);
        else element.hidden = !isOn;
      });
    });
  });
});

// Larger image view: the native dialog handles Esc, focus and the backdrop layer
const lightbox = document.querySelector(".cs-lightbox");
if (lightbox) {
  const largeImage = lightbox.querySelector("img");
  document.querySelectorAll(".cs-zoom").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      largeImage.src = image.currentSrc || image.src;
      largeImage.alt = image.alt;
      lightbox.showModal();
      document.documentElement.classList.add("has-lightbox");
    });
  });
  lightbox.querySelector(".cs-lightbox-close").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener("close", () => document.documentElement.classList.remove("has-lightbox"));
}
