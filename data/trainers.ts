
export interface Trainer {
  id: number;
  name: string;
  location: string;
  bio: string;
  detailedBio: string;
  imageUrl: string;
  instagramUrl?: string;
  isFictional?: boolean;
}

export const allTrainers: Trainer[] = [
  {
    id: 1,
    name: 'Steffen',
    location: '76131 Karlsruhe',
    bio: 'Leidenschaftlicher Skater seit 1999 mit viel Erfahrung im Coaching von Anfängern und Fortgeschrittenen.',
    detailedBio: 'Steffen ist seit über 20 Jahren auf dem Skateboard und hat in dieser Zeit unzählige Wettbewerbe bestritten und an diversen Videoprojekten mitgewirkt. Seine Leidenschaft ist es, sein Wissen und seine Begeisterung für das Skateboarding an die nächste Generation weiterzugeben. Er ist spezialisiert auf die Grundlagen, kann aber auch fortgeschrittenen Skatern helfen, ihr Trick-Repertoire zu erweitern.',
    imageUrl: 'https://picsum.photos/seed/steffen/400/400',
    instagramUrl: 'https://instagram.com/sortelba',
  },
  {
    id: 2,
    name: 'Rebecca',
    location: 'Berlin',
    bio: 'Spezialisiert auf Street Skating und technische Tricks für Fortgeschrittene.',
    detailedBio: 'Alex kommt aus der Berliner Streetskating-Szene und kennt jeden Spot der Hauptstadt. Sein Coaching konzentriert sich auf technische Flip-Tricks, Ledges und Rails. Wenn du lernen willst, wie man urbanes Gelände kreativ nutzt, ist Alex der richtige Ansprechpartner. Er ist bekannt für seine geduldige Art und seine Fähigkeit, komplexe Bewegungsabläufe verständlich zu erklären.',
    imageUrl: 'https://picsum.photos/seed/rebecca/400/400',
    instagramUrl: 'https://instagram.com/',
    isFictional: true,
  },
  {
    id: 3,
    name: 'Julia',
    location: 'Hamburg',
    bio: 'Hilft dir, deine Balance zu finden und sicher im Park zu fahren.',
    detailedBio: 'Julia hat ihre Wurzeln im Bowl- und Rampenfahren. Sie ist die perfekte Trainerin, um Ängste abzubauen und das Selbstvertrauen in Transitions zu stärken. Ihr Unterricht ist sehr anfängerfreundlich und konzentriert sich auf die richtige Körperhaltung, Balance und Sicherheit im Skatepark. Mit Julia lernst du, wie man Geschwindigkeit aufbaut und die Rampen mit Flow und Stil befährt.',
    imageUrl: 'https://picsum.photos/seed/julia/400/400',
    instagramUrl: 'https://instagram.com/',
    isFictional: true,
  },
  {
    id: 4,
    name: 'Max',
    location: 'München',
    bio: 'Vert-Skating-Experte. Lerne, wie man Rampen sicher meistert.',
    detailedBio: 'Max ist einer der wenigen Vert-Spezialisten in Deutschland. Wenn du hoch hinaus willst und von Airs in der Halfpipe träumst, ist er dein Mann. Sein Training ist intensiv und erfordert ein hohes Maß an Engagement, aber die Ergebnisse sind es wert. Er unterrichtet nur fortgeschrittene Skater, die bereits sicher in der Transition sind.',
    imageUrl: 'https://picsum.photos/seed/max/400/400',
    instagramUrl: 'https://instagram.com/',
    isFictional: true,
  },
  {
    id: 5,
    name: 'Lena',
    location: 'Köln',
    bio: 'Kreatives Skaten und das Entwickeln deines eigenen Stils stehen im Vordergrund.',
    detailedBio: 'Bei Lena geht es weniger um die schwierigsten Tricks, sondern mehr um den kreativen Ausdruck auf dem Skateboard. Sie hilft dir, deinen eigenen Stil zu finden und das Skaten als eine Form der Kunst zu sehen. Ihr Unterricht umfasst Elemente aus dem Freestyle, Dancing und unkonventionellen Ansätzen zum Street Skating.',
    imageUrl: 'https://picsum.photos/seed/lena/400/400',
    instagramUrl: 'https://instagram.com/',
    isFictional: true,
  },
  {
    id: 6,
    name: 'Tom',
    location: 'Frankfurt',
    bio: 'Fokus auf Grundlagen und das Aufbauen von Selbstvertrauen auf dem Board.',
    detailedBio: 'Tom ist der ideale Lehrer für absolute Neulinge. Mit viel Geduld und positiver Verstärkung sorgt er dafür, dass die ersten Schritte auf dem Skateboard zu einer guten Erfahrung werden. Vom richtigen Aufsteigen über das Pushen bis hin zu den ersten Kurven – Tom begleitet dich sicher auf deinem Weg.',
    imageUrl: 'https://picsum.photos/seed/tom/400/400',
    instagramUrl: 'https://instagram.com/',
    isFictional: true,
  },
  {
    id: 7,
    name: 'Sara',
    location: 'Stuttgart',
    bio: 'Longboard-Expertin für entspanntes Cruisen und Dancing.',
    detailedBio: 'Sara ist spezialisiert auf alles, was mit Longboards zu tun hat. Ob du einfach nur entspannt durch die Stadt cruisen, erste Dancing-Schritte lernen oder dich im Downhill versuchen willst – Sara kann dir die richtige Technik beibringen. Ihr Fokus liegt auf Sicherheit und dem fließenden Gefühl des Longboardens.',
    imageUrl: 'https://picsum.photos/seed/sara/400/400',
    instagramUrl: 'https://instagram.com/',
    isFictional: true,
  },
  {
    id: 8,
    name: 'Ben',
    location: 'Düsseldorf',
    bio: 'Bringt dir bei, wie man Hindernisse überwindet und im Skatepark kreativ wird.',
    detailedBio: 'Ben ist ein Allrounder, der sich in jedem Terrain wohlfühlt. Sein Coaching ist sehr vielseitig und passt sich den Wünschen seiner Schüler an. Ob du lernen willst, wie man Curbs hochkommt, eine Miniramp fährst oder deine ersten Grinds lernen möchtest, Ben hat die richtigen Tipps für dich parat.',
    imageUrl: 'https://picsum.photos/seed/ben/400/400',
    instagramUrl: 'https://instagram.com/',
    isFictional: true,
  },
  {
    id: 9,
    name: 'Mia',
    location: 'Leipzig',
    bio: 'Geduldige Lehrerin, perfekt für absolute Anfänger und Kinder.',
    detailedBio: 'Mia hat eine besondere Gabe im Umgang mit Kindern und ängstlichen Anfängern. Ihr Unterricht ist spielerisch aufgebaut und nimmt den Druck raus. Sie sorgt für eine sichere und motivierende Lernumgebung, in der jeder in seinem eigenen Tempo Fortschritte machen kann.',
    imageUrl: 'https://picsum.photos/seed/mia/400/400',
    instagramUrl: 'https://instagram.com/',
    isFictional: true,
  },
  {
    id: 10,
    name: 'Chris',
    location: 'Dortmund',
    bio: 'Old-School-Tricks und die Geschichte des Skatens sind seine Spezialität.',
    detailedBio: 'Chris ist ein wandelndes Skateboard-Lexikon. Er liebt die Old-School-Ära der 80er und 90er und bringt dir gerne Tricks wie Boneless, No-Complys und alte Grab-Variationen bei. Eine Stunde mit ihm ist nicht nur ein Skate-Kurs, sondern auch eine kleine Geschichtsstunde.',
    imageUrl: 'https://picsum.photos/seed/chris/400/400',
    instagramUrl: 'https://instagram.com/',
    isFictional: true,
  },
];