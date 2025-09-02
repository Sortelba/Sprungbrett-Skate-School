export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  videoId?: string;
  instagramUrl?: string;
  websiteUrl?: string;
}

export const allPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'skate-contest-ankuendigung',
    title: 'Ankündigung: Großer Skate Contest im Otto-Dullenkopf-Park',
    date: '28. Juli 2024',
    excerpt: 'Rollbrett e.V. Karlsruhe: Die Skate-Community, die mehr bewegt als nur Boards – jetzt mehr erfahren!',
    content: `Rollbrett e.V. Karlsruhe – mehr als nur ein Skateverein

Wer in Karlsruhe skatet, kommt am Rollbrett e.V. kaum vorbei. Der Verein setzt sich seit Jahren für die Förderung der lokalen Skateszene ein – mit viel Leidenschaft, Herzblut und einem echten Gemeinschaftsgefühl.

Ob beim Bau und Erhalt von Skateparks, bei Contests oder Workshops für Kinder und Jugendliche: Der Rollbrett e.V. schafft Orte, an denen Skater:innen zusammenkommen, voneinander lernen und ihre Leidenschaft teilen können.

Besonders wichtig ist dabei die Idee, die Kultur des Skateboardings lebendig zu halten. Es geht nicht nur um Tricks und Technik, sondern auch um Kreativität, Freiheit und den Spaß, gemeinsam Zeit auf dem Board zu verbringen.

Wenn du also aus Karlsruhe kommst oder einfach Lust hast, Teil einer aktiven und offenen Skate-Community zu werden, lohnt es sich definitiv, beim Rollbrett e.V. vorbeizuschauen.`,
    imageUrl: '/images/rollbrett-ev.jpg' ,
    websiteUrl: 'https://www.rollbrett-ev.de/',
    instagramUrl: 'https://www.instagram.com/rollbrett_ev/',
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
  // FIX: Corrected syntax errors, content, title, and videoId for the heelflip post.
  {
    id: 4,
    slug: 'heelflip-tutorial-video',
    title: 'Video-Tipp: So lernst du den Heelflip',
    date: '5. Juli 2024',
    excerpt: 'Du willst den legendären Heelflip lernen? 🚀 Check unser 5-Schritte-Tutorial und mach den nächsten Step in deinem Skate-Progress!',
    content: `Dann gehts hier entlang!

In unserem neuen Video im "Fortgeschrittenen"-Dojo gehen wir die Bewegung Schritt für Schritt durch:

1. Stance einnehmen
   Vordere Fußspitze leicht über die Kante des Boards, hinterer Fuß auf dem Tail wie beim Ollie.

2. Pop & Absprung
   Drücke das Tail kräftig nach unten und springe ab – wie beim Ollie.

3. Flick mit der Ferse
   Streife mit der Innenseite deiner vorderen Ferse über die vordere Kante, um das Board in die Heelflip-Rotation zu bringen.

4. Über dem Board bleiben
   Zieh die Beine hoch und halte dich zentriert über dem Deck, während es sich dreht.

5. Fangen & Landen
   Fang das Board mit dem hinteren Fuß ab, lande mit beiden Füßen über den Schrauben und roll entspannt weiter.

Wir zeigen euch auch die häufigsten Fehler und wie ihr sie vermeiden könnt. Schaut euch das Video an und schnappt euch euer Board. Viel Erfolg beim Üben!`,
    videoId: 'https://www.youtube.com/watch?v=c6zsdJsdXb4&t=77s&ab_channel=sortelba',
  },
];