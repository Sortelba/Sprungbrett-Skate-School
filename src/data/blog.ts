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
    imageUrl: '/images/rollbrett-ev.jpg',
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
    slug: 'heelflip tutorial-video',
    title: 'Video-Tipp: Der Kickflip - So lernst du den König der Tricks',
    date: '5. Juli 2024',
    excerpt: 'Du willst den legendären Heelflip lernen? 🚀 Check unser 5-Schritte-Tutorial und mach den nächsten Step in deinem Skate-Progress!“
    content: `

In unserem neuen Video im "Fortgeschrittenen"-Dojo gehen wir die Bewegung Schritt für Schritt durch:

1.Stance einnehmen
  Vordere Fußspitze leicht über die Kante des Boards, hinterer Fuß auf dem Tail wie beim Ollie.

2.Pop & Absprung
  Drücke das Tail kräftig nach unten und springe ab – wie beim Ollie.

3.Flick mit der Ferse
  Streife mit der Innenseite deiner vorderen Ferse über die vordere Kante, um das Board in die Heelflip-Rotation zu bringen.

4.Über dem Board bleiben
  Zieh die Beine hoch und halte dich zentriert über dem Deck, während es sich dreht.

5.Fangen & Landen
  Fang das Board mit dem hinteren Fuß ab, lande mit beiden Füßen über den Schrauben und roll entspannt weiter.

Wir zeigen euch auch die häufigsten Fehler und wie ihr sie vermeiden könnt. Schaut euch das Video an und schnappt euch euer Board. Viel Erfolg beim Üben!`,
    videoId: 'c6zsdJsdXb4&t=77s&ab_channel=sortelba', 
];