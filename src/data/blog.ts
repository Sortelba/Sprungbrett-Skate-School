export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  videoId?: string;
}

export const allPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'skate-contest-ankuendigung',
    title: 'Ankündigung: Großer Skate Contest im Otto-Dullenkopf-Park',
    date: '28. Juli 2024',
    excerpt: 'Seid dabei, wenn die besten lokalen Skater ihr Können unter Beweis stellen! Wir veranstalten einen großen Contest mit tollen Preisen, Musik und guter Stimmung. Melde dich jetzt an oder komm einfach zum Zuschauen vorbei.',
    content: `Markiert euch den Kalender! Am 15. August findet unser bisher größter Skate Contest im Otto-Dullenkopf-Park in Karlsruhe statt. 

Wir haben Kategorien für Anfänger, Fortgeschrittene und auch eine "Best Trick" Session, bei der jeder mitmachen kann. Es gibt Sachpreise von unseren Sponsoren wie Lifeboy Skate Shop und fette Pokale für die Gewinner.

Für Musik und Verpflegung ist gesorgt. Bringt eure Freunde und Familie mit für einen unvergesslichen Tag voller Skateboarding und Community-Vibes. 

Die Anmeldung ist ab sofort über unsere Kontaktseite möglich. Die Teilnahmegebühr beträgt 5€. Zuschauer sind natürlich kostenlos willkommen! Wir freuen uns auf euch!`,
    imageUrl: 'https://source.unsplash.com/800x450/?skatepark,contest',
  },
  {
    id: 2,
    slug: 'neue-anfaengerkurse',
    title: 'Neue Anfängerkurse für die Sommerferien verfügbar!',
    date: '15. Juli 2024',
    excerpt: 'Die Sommerferien stehen vor der Tür und wir haben neue Termine für unsere beliebten Anfängerkurse! Jetzt ist die perfekte Zeit, um mit dem Skateboarden anzufangen. Sichert euch schnell einen Platz.',
    content: `Ihr habt Lust, in den Sommerferien Skaten zu lernen? Dann haben wir gute Nachrichten! Wir haben brandneue Termine für unsere Anfängerkurse für Kinder und Erwachsene aufgeschaltet.

In kleinen Gruppen von maximal 5 Personen lernt ihr von unseren erfahrenen Coaches alles, was ihr für einen sicheren Start auf dem Board braucht:
- Die richtige Fußstellung und Haltung
- Sicheres Pushen und Bremsen
- Lenken und erste Kurven fahren
- Und natürlich das richtige Hinfallen, um Verletzungen zu vermeiden

Die Kurse finden an verschiedenen Terminen über die gesamten Sommerferien statt. Material wie Boards und Schutzausrüstung kann bei Bedarf kostenlos ausgeliehen werden.

Alle Infos und die Möglichkeit zur Buchung findet ihr auf unserer "Trainer Finden"-Seite oder schreibt uns direkt über das Kontaktformular. Die Plätze sind begrenzt, also wartet nicht zu lange!`,
  },
  {
    id: 3,
    slug: 'kickflip-tutorial-video',
    title: 'Video-Tipp: Der Kickflip - So lernst du den König der Tricks',
    date: '5. Juli 2024',
    excerpt: 'Der Kickflip ist für viele der erste große Meilenstein. In unserem neuesten Dojo-Video zeigen wir euch die wichtigsten Schritte, um diesen Trick zu meistern. Schaut rein und fangt an zu üben!',
    content: `Jeder will ihn können: den Kickflip! Er sieht nicht nur super stylisch aus, sondern öffnet auch die Tür zu unzähligen anderen Trick-Kombinationen. Aber keine Sorge, mit der richtigen Technik und etwas Geduld könnt auch ihr ihn lernen.

In unserem neuen Video im "Fortgeschrittenen"-Dojo gehen wir die Bewegung Schritt für Schritt durch:
1. Die richtige Fußposition: Wo stehen Vorder- und Hinterfuß?
2. Der Absprung: Wie poppt man den Ollie richtig?
3. Der "Flick": Die magische Bewegung mit dem vorderen Fuß.
4. Das Fangen und Landen: Wie man das Board wieder unter die Füße bekommt.

Wir zeigen euch auch die häufigsten Fehler und wie ihr sie vermeiden könnt. Schaut euch das Video an und schnappt euch euer Board. Viel Erfolg beim Üben!`,
    videoId: 'gW12-m3_guE', // Example Kickflip Video
  },
  {
    id: 4,
    slug: '5-tipps-fuer-den-ersten-skatepark-besuch',
    title: '5 Tipps für deinen ersten Skatepark-Besuch',
    date: '25. Juni 2024',
    excerpt: 'Der erste Besuch im Skatepark kann einschüchternd sein. Mit diesen 5 einfachen Tipps wird dein erster Besuch ein voller Erfolg und du wirst eine Menge Spaß haben.',
    content: `Der Skatepark ist ein großartiger Ort, um neue Leute kennenzulernen und besser zu werden. Aber gerade am Anfang kann es etwas überwältigend sein. Hier sind 5 Tipps, die dir helfen:

1. **Wähle die richtige Zeit:** Geh am Anfang am besten morgens oder an Wochentagen, wenn es noch nicht so voll ist. So hast du mehr Platz und weniger Stress.

2. **Schutzausrüstung tragen:** Auch wenn es nicht immer "cool" aussieht, trage einen Helm und Schoner. Es gibt dir Selbstvertrauen und schützt dich vor Verletzungen. Profis tun das auch!

3. **Beobachte die "Lines":** Schau dir an, welche Wege (Lines) die anderen Skater fahren. So lernst du die Regeln des Parks und kommst niemandem in die Quere.

4. **Starte klein:** Niemand erwartet von dir, dass du sofort die größte Rampe runterfährst. Such dir eine kleine, ruhige Ecke und übe dort die Grundlagen.

5. **Sei respektvoll und hab Spaß:** Jeder hat mal angefangen. Sei freundlich, frag nach, wenn du unsicher bist, und vor allem: hab Spaß dabei! Darum geht es beim Skaten.`,
    imageUrl: 'https://source.unsplash.com/800x450/?skateboarder,beginner,skatepark',
  },
  {
    id: 5,
    slug: 'workshop-learn-to-grind',
    title: 'Workshop: Learn to Grind!',
    date: '20. August 2024',
    excerpt: 'Bereit, deine Skills auf das nächste Level zu heben? Nimm an unserem exklusiven "Learn to Grind" Workshop im September teil! Wir decken alles ab, vom ersten 50-50 bis zum Boardslide. Die Plätze sind begrenzt!',
    content: `Das Geräusch von Achsen auf Metall oder Stein ist Musik in den Ohren eines jeden Skaters. Wenn du bereit bist, dieses Geräusch selbst zu erzeugen, ist unser "Learn to Grind" Workshop genau das Richtige für dich!

Am Samstag, den 7. September, veranstalten wir einen intensiven Workshop, der sich voll und ganz dem Thema Grinding widmet. Der Kurs richtet sich an fortgeschrittene Fahrer, die bereits sicher im Skatepark unterwegs sind und ihre ersten Obstacles meistern wollen.

**Was du lernen wirst:**
- **Der 50-50 Grind:** Wir starten mit dem absoluten Klassiker auf einer niedrigen Box oder Curb. Du lernst, wie du dich dem Hindernis näherst, auf die Kante springst, die Balance hältst und sicher wieder runterkommst.
- **Der Boardslide:** Als Nächstes wagen wir uns an den Boardslide auf einem flachen Rail. Wir zeigen dir die richtige Technik, um das Board sicher auf das Rail zu bringen und die Rutschbewegung zu kontrollieren.
- **Sicherheitstipps:** Grinden birgt neue Risiken. Wir zeigen dir, wie du richtig fällst und was du tun kannst, um das Verletzungsrisiko zu minimieren.

Der Workshop findet von 14:00 bis 17:00 Uhr statt. Bring dein Board, Schutzausrüstung und eine Menge Motivation mit! Zur Vorbereitung kannst du dir schon mal dieses Tutorial ansehen.`,
    videoId: 'c2p8A0w_g-w', // Example 50-50 Grind Tutorial
  },
];