const sonicGames = [
  {
    id: "sonic2",
    title: "Sonic the Hedgehog 2",
    year: 1992,
    art: "sonic 2.jpg",
    legacy: "Clásico de 16 bits que consolidó la fórmula de Sonic y presentó a Tails.",
    developer: "Sega Technical Institute",
    publisher: "Sega",
    gameComposers: "Masato Nakamura",
    summary:
      "Es uno de los juegos más influyentes de la franquicia. Su ritmo veloz, sus escenarios memorables y su música ayudaron a definir la identidad de Sonic en los años noventa.",
    songs: [
      {
        title: "Emerald Hill Zone",
        year: 1992,
        composer: "Masato Nakamura",
        performer: "Tema instrumental del juego",
        searchQuery: "Emerald Hill Zone Sonic the Hedgehog 2",
        details:
          "Se escucha en la primera zona y es una de las melodías más reconocibles de toda la saga por su tono brillante y energético."
      }
    ]
  },
  {
    id: "soniccd",
    title: "Sonic CD",
    year: 1993,
    art: "sonic cd.jpg",
    legacy: "Juego recordado por su viaje en el tiempo, su estilo experimental y su fuerte identidad musical.",
    developer: "Sega",
    publisher: "Sega",
    gameComposers:
      "Naofumi Hataya y Masafumi Ogata en Japón y Europa; Spencer Nilsen, David Young y Mark Crew en Norteamérica",
    summary:
      "Sonic CD expandió el universo del personaje con Amy Rose, Metal Sonic y una propuesta sonora distinta según la región. Es una obra muy valorada por fans de la música de la serie.",
    songs: [
      {
        title: "Stardust Speedway",
        year: 1993,
        composer: "Naofumi Hataya y Masafumi Ogata",
        performer: "Tema instrumental del juego",
        searchQuery: "Stardust Speedway Sonic CD",
        details:
          "La versión japonesa y europea es una de las pistas más célebres del juego por su sonido futurista y dinámico."
      },
      {
        title: "Stardust Speedway Bad Future (US)",
        year: 1993,
        composer: "Spencer Nilsen, David Young y Mark Crew",
        performer: "Tema instrumental del juego",
        searchQuery: "Stardust Speedway Bad Future Sonic CD US",
        details:
          "La banda sonora norteamericana se hizo aparte y esta pieza suele citarse como una de las composiciones más intensas de esa edición."
      }
    ]
  },
  {
    id: "adventure",
    title: "Sonic Adventure",
    year: 1998,
    art: "sonic adventure.jpg",
    legacy: "Primer gran salto de Sonic al 3D y una referencia clave de Dreamcast.",
    developer: "Sonic Team",
    publisher: "Sega",
    gameComposers: "Jun Senoue, Kenichi Tokoi y Fumie Kumatani",
    summary:
      "Con este juego la saga adoptó una identidad más rockera. También reforzó la idea de que cada personaje y momento importante podía tener un estilo musical propio.",
    songs: [
      {
        title: "Open Your Heart",
        year: 1998,
        composer: "Jun Senoue",
        performer: "Crush 40 con Johnny Gioeli en la voz",
        searchQuery: "Open Your Heart Sonic Adventure Crush 40",
        details:
          "Es el tema principal del juego y uno de los himnos definitivos de Sonic. Su mezcla de hard rock y épica marcó una nueva etapa para la franquicia."
      }
    ]
  },
  {
    id: "adventure2",
    title: "Sonic Adventure 2",
    year: 2001,
    art: "sonic adventure 2.jpg",
    legacy: "Título muy querido por la comunidad, famoso por Shadow, City Escape y su gran banda sonora.",
    developer: "Sonic Team USA",
    publisher: "Sega",
    gameComposers: "Jun Senoue, Fumie Kumatani, Tomoya Ohtani y Kenichi Tokoi",
    summary:
      "Es una de las entregas más celebradas de Sonic. Su música ganó enorme popularidad por combinar rock, metal, rap y temas temáticos para cada estilo de juego.",
    songs: [
      {
        title: "Live & Learn",
        year: 2001,
        composer: "Jun Senoue",
        performer: "Crush 40 con Johnny Gioeli",
        searchQuery: "Live and Learn Sonic Adventure 2 Crush 40",
        details:
          "Tema principal del juego y una de las canciones más famosas de toda la historia de Sonic. Acompaña el clímax final y sigue siendo un favorito absoluto entre fans."
      },
      {
        title: "Escape from the City",
        year: 2001,
        composer: "Jun Senoue",
        performer: "Ted Poley y Tony Harnell",
        searchQuery: "Escape from the City Sonic Adventure 2",
        details:
          "Suena en City Escape, una de las fases más icónicas de Sonic. La canción se volvió legendaria por su energía y por representar perfectamente la velocidad del personaje."
      }
    ]
  },
  {
    id: "unleashed",
    title: "Sonic Unleashed",
    year: 2008,
    art: "sonic unleashed.jpeg",
    legacy: "Juego clave en la era moderna, recordado por la velocidad diurna y su presentación audiovisual.",
    developer: "Sonic Team",
    publisher: "Sega",
    gameComposers:
      "Tomoya Ohtani, Fumie Kumatani, Kenichi Tokoi, Hideaki Kobayashi, Takahito Eguchi y Mariko Nanba",
    summary:
      "Aunque dividió opiniones por su estructura, es una entrega muy admirada por su música. Varias piezas de Unleashed están entre las mejor valoradas de la franquicia.",
    songs: [
      {
        title: "Endless Possibility",
        year: 2008,
        composer: "Tomoya Ohtani",
        performer: "Jaret Reddick",
        searchQuery: "Endless Possibility Sonic Unleashed",
        details:
          "Tema vocal principal de la versión HD del juego. Es muy recordado por su tono optimista y por representar la ambición de la etapa moderna de Sonic."
      },
      {
        title: "Rooftop Run",
        year: 2008,
        composer: "Tomoya Ohtani",
        performer: "Tema instrumental del juego",
        searchQuery: "Rooftop Run Sonic Unleashed",
        details:
          "Es una de las piezas instrumentales más celebradas de Sonic por su elegancia, velocidad y mezcla de influencias mediterráneas."
      }
    ]
  },
  {
    id: "colors",
    title: "Sonic Colors",
    year: 2010,
    art: "sonic colors.jpg",
    legacy: "Entrega muy querida por su tono más accesible, su colorido y su recuperación de la buena reputación de la saga.",
    developer: "Sonic Team",
    publisher: "Sega",
    gameComposers:
      "Tomoya Ohtani, Kenichi Tokoi, Fumie Kumatani, Hideaki Kobayashi, Mariko Nanba y Naofumi Hataya",
    summary:
      "Sonic Colors destacó por su energía positiva y una banda sonora que mezcla orquesta, pop y electrónica. Fue decisivo en la recuperación crítica de la serie.",
    songs: [
      {
        title: "Reach for the Stars",
        year: 2010,
        composer: "Tomoya Ohtani",
        performer: "Jean Paul Makhlouf de Cash Cash",
        searchQuery: "Reach for the Stars Sonic Colors",
        details:
          "Es el tema de apertura del juego y una de las canciones modernas más reconocidas de Sonic por su enfoque luminoso y optimista."
      }
    ]
  },
  {
    id: "frontiers",
    title: "Sonic Frontiers",
    year: 2022,
    art: "sonic frontiers.jpg",
    legacy: "Representa una etapa reciente de Sonic con estructura abierta y un tono musical más intenso para los jefes.",
    developer: "Sonic Team",
    publisher: "Sega",
    gameComposers:
      "Tomoya Ohtani, Kenichi Tokoi, Takahito Eguchi, Rintaro Soma, Kenji Mizuno, Kanon Oguni y Hiroshi Kawaguchi",
    summary:
      "Frontiers modernizó el estilo de la franquicia y dio gran protagonismo a canciones de combate con sonido rock y metal, muy celebradas por la comunidad.",
    songs: [
      {
        title: "Undefeatable",
        year: 2022,
        composer: "Tomoya Ohtani",
        performer: "Kellin Quinn y MEG",
        searchQuery: "Undefeatable Sonic Frontiers",
        details:
          "Tema del jefe Giganto. Se hizo muy popular por su intensidad y porque mostró una faceta más agresiva y contemporánea para la música de Sonic."
      }
    ]
  }
];

const timelineTrack = document.querySelector("#timeline-track");
const gameSelector = document.querySelector("#game-selector");
const gameDetail = document.querySelector("#game-detail");
const songGrid = document.querySelector("#song-grid");

let activeGameId = sonicGames[0].id;

function buildPlatformLinks(query) {
  const encoded = encodeURIComponent(query);

  return [
    {
      label: "Spotify",
      url: `https://open.spotify.com/search/${encoded}`
    },
    {
      label: "YouTube Music",
      url: `https://music.youtube.com/search?q=${encoded}`
    },
    {
      label: "Apple Music",
      url: `https://music.apple.com/us/search?term=${encoded}`
    }
  ];
}

function renderTimeline() {
  timelineTrack.innerHTML = sonicGames
    .map(
      (game) => `
        <article class="timeline-item">
          <span class="year">${game.year}</span>
          <h3>${game.title}</h3>
          <p>${game.legacy}</p>
        </article>
      `
    )
    .join("");
}

function renderSelector() {
  gameSelector.innerHTML = sonicGames
    .map(
      (game) => `
        <button class="game-button ${game.id === activeGameId ? "is-active" : ""}" data-game-id="${game.id}">
          <strong>${game.title}</strong>
          <span>${game.year} · ${game.songs.length} canci${game.songs.length > 1 ? "ones" : "ón"} destacada${game.songs.length > 1 ? "s" : ""}</span>
        </button>
      `
    )
    .join("");

  gameSelector.querySelectorAll(".game-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeGameId = button.dataset.gameId;
      renderSelector();
      renderGameDetail();
    });
  });
}

function renderGameDetail() {
  const game = sonicGames.find((entry) => entry.id === activeGameId);

  gameDetail.innerHTML = `
    <span class="game-kicker">Juego destacado</span>
    <div class="game-layout">
      <div>
        <img class="game-art" src="${game.art}" alt="Arte decorativo inspirado en ${game.title}" />
        <h2>${game.title}</h2>
        <p class="game-summary">${game.summary}</p>
        <ul class="game-meta">
          <li><strong>Año de lanzamiento:</strong> ${game.year}</li>
          <li><strong>Desarrollador:</strong> ${game.developer}</li>
          <li><strong>Publicador:</strong> ${game.publisher}</li>
          <li><strong>Compositores del juego:</strong> ${game.gameComposers}</li>
          <li><strong>Importancia histórica:</strong> ${game.legacy}</li>
        </ul>
      </div>
      <div class="game-songs">
        <h3>Canciones famosas de este juego</h3>
        <div class="mini-song-list">
          ${game.songs
            .map(
              (song) => {
                const links = buildPlatformLinks(song.searchQuery)
                  .map(
                    (platform) => `
                      <a class="platform-link" href="${platform.url}" target="_blank" rel="noreferrer">${platform.label}</a>
                    `
                  )
                  .join("");

                return `
                <article class="mini-song">
                  <strong>${song.title}</strong>
                  <p>${song.year} · ${song.composer}</p>
                  <p>${song.details}</p>
                  <div class="platform-links">${links}</div>
                </article>
              `;
              }
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderSongs() {
  const cards = sonicGames.flatMap((game) =>
    game.songs.map(
      (song) => {
        const links = buildPlatformLinks(song.searchQuery)
          .map(
            (platform) => `
              <a class="platform-link" href="${platform.url}" target="_blank" rel="noreferrer">${platform.label}</a>
            `
          )
          .join("");

        return `
        <article class="song-card">
          <span class="tag">${game.title}</span>
          <h3>${song.title}</h3>
          <p>${song.details}</p>
          <ul class="song-meta">
            <li><strong>Año:</strong> ${song.year}</li>
            <li><strong>Compositor:</strong> ${song.composer}</li>
            <li><strong>Intérprete o formato:</strong> ${song.performer}</li>
            <li><strong>Juego de origen:</strong> ${game.title}</li>
          </ul>
          <div class="platform-links">${links}</div>
        </article>
      `;
      }
    )
  );

  songGrid.innerHTML = cards.join("");
}

renderTimeline();
renderSelector();
renderGameDetail();
renderSongs();
