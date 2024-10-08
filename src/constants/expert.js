const expert = [
    {
        topic: 'Admirals in Key Naval Battles',
        task: 'Arrange the naval battles in chronological order from the earliest to the latest.',
        options: [
          { title: 'Battle of Trafalgar', subTitle: 'Horatio Nelson' },
          { title: 'Battle of Sinop', subTitle: 'Pavel Nakhimov' },
          { title: 'Battle of Midway', subTitle: 'Isoroku Yamamoto' },
          { title: 'Battle of Lepanto', subTitle: 'Don John of Austria' },
          { title: 'Battle of the Chesapeake', subTitle: 'François-Paul de Grasse' },
          { title: 'Battle of La Rochelle', subTitle: 'Ambrosio Bocanegra' },
          { title: 'Battle of Narva', subTitle: 'Henrik Horn' },
          { title: 'Battle of Mobile Bay', subTitle: 'David Farragut' },
          { title: 'Battle of Salamis', subTitle: 'Themistocles' },
          { title: 'Battle of Dogger Bank', subTitle: 'George Rodney' },
        ],
        correctOrder: [
          { title: 'Battle of Salamis', period: '480 BC' },
          { title: 'Battle of La Rochelle', period: '1372' },
          { title: 'Battle of Lepanto', period: '1571' },
          { title: 'Battle of Narva', period: '1700' },
          { title: 'Battle of Dogger Bank', period: '1781' },
          { title: 'Battle of the Chesapeake', period: '1781' },
          { title: 'Battle of Trafalgar', period: '1805' },
          { title: 'Battle of Sinop', period: '1853' },
          { title: 'Battle of Mobile Bay', period: '1864' },
          { title: 'Battle of Midway', period: '1942' },
        ],
    },
    {
        topic: 'Contributions of Admirals from Different Countries to World Naval History',
        task: 'Arrange the following admirals based on their active periods, from the earliest to the latest.',
        options: [
          { title: 'Admiral Sir Francis Drake', subTitle: 'England' },
          { title: 'Admiral Yi Sun-sin', subTitle: 'Korea' },
          { title: 'Admiral Michiel de Ruyter', subTitle: 'Netherlands' },
          { title: 'Admiral Fyodor Ushakov', subTitle: 'Russia' },
          { title: 'Admiral Federico Gravina', subTitle: 'Spain' },
          { title: 'Admiral Tōgō Heihachirō', subTitle: 'Japan' },
          { title: 'Admiral Pierre-Charles Villeneuve', subTitle: 'France' },
          { title: 'Admiral Chester W. Nimitz', subTitle: 'United States' },
          { title: 'Admiral Georgios Averof', subTitle: 'Greece' },
          { title: 'Admiral Marcantonio Colonna', subTitle: 'Italy' },
        ],
        correctOrder: [
          { title: 'Admiral Sir Francis Drake', period: 'England, 16th century' },
          { title: 'Admiral Yi Sun-sin', period: 'Korea, 16th century' },
          { title: 'Admiral Marcantonio Colonna', period: 'Italy, 16th century' },
          { title: 'Admiral Michiel de Ruyter', period: 'Netherlands, 17th century' },
          { title: 'Admiral Fyodor Ushakov', period: 'Russia, 18th century' },
          { title: 'Admiral Pierre-Charles Villeneuve', period: 'France, 18th century' },
          { title: 'Admiral Federico Gravina', period: 'Spain, 18th-19th century' },
          { title: 'Admiral Tōgō Heihachirō', period: 'Japan, early 20th century' },
          { title: 'Admiral Georgios Averof', period: 'Greece, 19th-20th century' },
          { title: 'Admiral Chester W. Nimitz', period: 'United States, mid-20th century' },
        ],
      },
      {
        topic: 'Evolution of Admiral Ranks and Titles Across Countries and Historical Periods',
        task: 'Arrange the following ranks and titles of admirals based on their first introduction or usage, from the earliest to the latest.',
        options: [
          { title: 'Admiral of the Fleet' },
          { title: 'Admiral', subTitle: 'Russia' },
          { title: 'Grand Admiral' },
          { title: 'Großadmiral' },
          { title: 'Fleet Admiral' },
          { title: 'Gensui', subTitle: 'Japan' },
          { title: 'Admiral of the Fleet of the Soviet Union' },
          { title: 'Ammiraglio di Squadra con Incarichi Speciali' },
          { title: 'Admiral', subTitle: 'France (Middle Ages)' },
          { title: 'Admiral Issimo' },
        ],
        correctOrder: [
          { title: 'Grand Admiral', period: 'Ottoman Empire, 16th century' },
          { title: 'Admiral', period: 'France (Middle Ages), Middle Ages' },
          { title: 'Admiral of the Fleet', period: 'United Kingdom, 17th century' },
          { title: 'Admiral', period: 'Russia, 18th century' },
          { title: 'Großadmiral', period: 'Germany, early 20th century' },
          { title: 'Gensui', period: 'Japan, early 20th century' },
          { title: 'Admiral of the Fleet of the Soviet Union', period: 'Soviet Union, 1940s' },
          { title: 'Fleet Admiral', period: 'United States, World War II' },
          { title: 'Ammiraglio di Squadra con Incarichi Speciali', period: 'Italy, 20th century' },
          { title: 'Admiral Issimo', period: 'Spain, 20th century' },
        ],
      },
      {
        topic: 'Biographies of Notable Admirals: Their Achievements and Challenges',
        task: 'Arrange the following admirals based on their most significant achievements and active periods, from the earliest to the latest.',
        options: [
          { title: 'Admiral Horatio Nelson' },
          { title: 'Admiral Michiel de Ruyter' },
          { title: 'Admiral Yi Sun-sin' },
          { title: 'Admiral Pierre-Charles Villeneuve' },
          { title: 'Admiral Pavel Nakhimov' },
          { title: 'Admiral David Farragut' },
          { title: 'Admiral Tōgō Heihachirō' },
          { title: 'Admiral Chester W. Nimitz' },
          { title: 'Admiral Isoroku Yamamoto' },
          { title: 'Admiral Louis Mountbatten' },
        ],
        correctOrder: [
          { title: 'Admiral Yi Sun-sin', period: 'Korea, late 16th century' },
          { title: 'Admiral Michiel de Ruyter', period: 'Netherlands, 17th century' },
          { title: 'Admiral Horatio Nelson', period: 'United Kingdom, late 18th - early 19th century' },
          { title: 'Admiral Pierre-Charles Villeneuve', period: 'France, early 19th century' },
          { title: 'Admiral Pavel Nakhimov', period: 'Russia, mid-19th century' },
          { title: 'Admiral David Farragut', period: 'United States, mid-19th century' },
          { title: 'Admiral Tōgō Heihachirō', period: 'Japan, early 20th century' },
          { title: 'Admiral Chester W. Nimitz', period: 'United States, World War II' },
          { title: 'Admiral Isoroku Yamamoto', period: 'Japan, World War II' },
          { title: 'Admiral Louis Mountbatten', period: 'United Kingdom, World War II and post-war' },
        ],
      },
      {
        topic: 'Strategies and Tactics Used by Notable Admirals in Naval Battles',
        task: 'Arrange the following naval strategies and tactics used by notable admirals based on their historical implementation, from the earliest to the latest.',
        options: [
          { title: 'Crossing the T' },
          { title: 'Turtle Ship'},
          { title: 'Line-of-Battle Tactics' },
          { title: 'Island-Hopping' },
          { title: 'Attack on the Medway' },
          { title: 'Concentrated Attack' },
          { title: 'Flank Attack' },
          { title: 'Hit-and-Run Tactics' },
          { title: 'Torpedo Response' },
          { title: 'Carrier Warfare' },
        ],
        correctOrder: [
          { title: 'Turtle Ship', period: 'Admiral Yi Sun-sin, late 16th century' },
          { title: 'Attack on the Medway', period: 'Admiral Michiel de Ruyter, Second Anglo-Dutch War, 1667' },
          { title: 'Crossing the T', period: 'Admiral Horatio Nelson, Battle of Trafalgar, 1805' },
          { title: 'Line-of-Battle Tactics', period: 'Admiral Pierre-Charles Villeneuve, Battle of Trafalgar, 1805' },
          { title: 'Concentrated Attack', period: 'Admiral Pavel Nakhimov, Battle of Sinop, 1853' },
          { title: 'Torpedo Response', period: 'Admiral David Farragut, Battle of Mobile Bay, 1864' },
          { title: 'Flank Attack', period: 'Admiral Tōgō Heihachirō, Battle of Tsushima, 1905' },
          { title: 'Carrier Warfare', period: 'Admiral Isoroku Yamamoto, World War II' },
          { title: 'Island-Hopping', period: 'Admiral Chester W. Nimitz, Pacific Theater, World War II' },
          { title: 'Hit-and-Run Tactics', period: 'Admiral Louis Mountbatten, Mediterranean Theater, World War II' },
        ],
      },
      {
        topic: 'Admirals’ Influence on Naval Fleet Development and Technology',
        task: 'Arrange the following contributions and influences of admirals on naval fleet development and technology based on their historical impact, from the earliest to the latest.',
        options: [
          { title: "Admiral Yi Sun-sin's development of the turtle ship" },
          { title: "Admiral David Farragut’s promotion of ironclad warships" },
          { title: "Admiral Tōgō Heihachirō’s use of modern naval technology at the Battle of Tsushima" },
          { title: "Admiral Chester W. Nimitz’s role in the deployment of aircraft carriers" },
          { title: "Admiral Isoroku Yamamoto’s focus on aircraft carriers" },
          { title: "Admiral Louis Mountbatten’s involvement in radar technology" },
          { title: "Admiral Michiel de Ruyter tactical innovations" },
          { title: "Admiral Horatio Nelson’s impact on naval tactics" },
          { title: "Admiral Pierre-Charles Villeneuve’s impact on ship design" },
          { title: "Admiral Pavel Nakhimov’s use of steam-powered ships and improved artillery" },
        ],
        correctOrder: [
          { title: "Admiral Yi Sun-sin's development of the turtle ship", period: 'late 16th century' },
          { title: "Admiral Michiel de Ruyter tactical innovations", period: '17th century' },
          { title: "Admiral Horatio Nelson’s impact on naval tactics", period: 'late 18th - early 19th century' },
          { title: "Admiral Pierre-Charles Villeneuve’s impact on ship design", period: 'early 19th century' },
          { title: "Admiral David Farragut’s promotion of ironclad warships", period: 'American Civil War, mid-19th century' },
          { title: "Admiral Pavel Nakhimov’s use of steam-powered ships and improved artillery", period: 'mid-19th century' },
          { title: "Admiral Tōgō Heihachirō’s use of modern naval technology at the Battle of Tsushima", period: '1905' },
          { title: "Admiral Chester W. Nimitz’s role in the deployment of aircraft carriers", period: 'World War II' },
          { title: "Admiral Isoroku Yamamoto’s focus on aircraft carriers", period: 'World War II' },
          { title: "Admiral Louis Mountbatten’s involvement in radar technology", period: 'World War II' },
        ],
      },
      {
        topic: 'Cultural Representation of Admirals in Literature, Art, and Film',
        task: 'Arrange the following admirals based on their prominent cultural representations in literature, art, and film, from the earliest to the latest.',
        options: [
          { title: "Admiral Horatio Nelson" },
          { title: "Admiral Michiel de Ruyter" },
          { title: "Admiral Yi Sun-sin" },
          { title: "Admiral Pierre-Charles Villeneuve" },
          { title: "Admiral David Farragut" },
          { title: "Admiral Tōgō Heihachirō" },
          { title: "Admiral Chester W. Nimitz" },
          { title: "Admiral Isoroku Yamamoto" },
          { title: "Admiral Louis Mountbatten" },
          { title: "Admiral Pavel Nakhimov" },
        ],
        correctOrder: [
          { title: "Admiral Michiel de Ruyter", period: '17th century' },
          { title: "Admiral Horatio Nelson", period: 'late 18th - early 19th century' },
          { title: "Admiral Yi Sun-sin", period: 'late 16th century' },
          { title: "Admiral Pierre-Charles Villeneuve", period: 'early 19th century' },
          { title: "Admiral David Farragut", period: 'mid-19th century' },
          { title: "Admiral Tōgō Heihachirō", period: 'early 20th century' },
          { title: "Admiral Chester W. Nimitz", period: 'World War II' },
          { title: "Admiral Isoroku Yamamoto", period: 'World War II' },
          { title: "Admiral Louis Mountbatten", period: 'World War II' },
          { title: "Admiral Pavel Nakhimov", period: 'mid-19th century' },
        ],
      }
];

export default expert;
  