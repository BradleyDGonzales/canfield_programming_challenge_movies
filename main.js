/* eslint-disable require-jsdoc */
// movies following the form of a JSON Object

function pageLoad() {
  // append root to body
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);


  // create the navbar for UX purposes and append to root
  const navbar = document.createElement('nav');
  navbar.setAttribute('id', 'navBar');

  const logo = new Image();
  logo.setAttribute('id', 'logo');
  logo.src = 'images/icon.png';

  const websiteTitle = document.createElement('h2');
  websiteTitle.setAttribute('id', 'logoTitle');
  websiteTitle.textContent = 'Movie Critics';

  root.appendChild(navbar);

  // append logo and title to navbar

  navbar.appendChild(logo);
  document.getElementById('logo').addEventListener('click', (e) => {
    location.href = location.origin + location.pathname;
  });
  navbar.appendChild(websiteTitle);


  // create moviesList div for the small set of movies
  const moviesList = document.createElement('div');
  moviesList.classList.add('moviesList');

  root.appendChild(moviesList);


  // eslint-disable-next-line no-var
  const movies = [
    new Movie(
        {
          movieImg: 'images/avatar_way_of_water.jpg',
          movieTitle: 'Avatar: The Way of Water',
          movieRating: 'PG-13',
          movieYear: 2022,
          movieDesc: `Jake Sully and Ney'tiri have formed a family and are doing everything to stay together.
                      However, they must leave their home and explore the regions of Pandora.
                      When an ancient threat resurfaces,  Jake must fight a difficult war against the humans.`,
          movieGenre: 'Sci-fi/Adventure',
          movieDuration: '3h 12m',
          movieThumbsDown: 0,
          movieThumbsUp: 0,
          movieTrailer: 'https://www.youtube.com/embed/d9MyW72ELq0',
        }),
    new Movie(
        {
          movieImg: 'images/mist.jpg',
          movieTitle: 'The Mist',
          movieRating: 'R',
          movieYear: 2007,
          movieDesc: `After a powerful storm damages their Maine home, David Drayton (Thomas Jane) and his young son head into town to gather food and supplies.
                      Soon afterward, a thick fog rolls in and engulfs the town, trapping the Draytons and others in the grocery store.
                      Terror mounts as deadly creatures reveal themselves outside, but that may be nothing compared to the threat within,
                      where a zealot (Marcia Gay Harden) calls for a sacrifice.`,
          movieGenre: 'Horror/Sci-fi',
          movieDuration: '2h 5m',
          movieThumbsDown: 0,
          movieThumbsUp: 0,
          movieTrailer: 'https://www.youtube.com/embed/LhCKXJNGzN8',
        }),
    new Movie(
        {
          movieImg: 'images/parasite.jpg',
          movieTitle: 'Parasite',
          movieRating: 'R',
          movieYear: 2019,
          movieDesc: `Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.
                Be it chance or fate, these two houses are brought together and the Kims sense a golden opportunity.`,
          movieGenre: 'Comedy/Mystery & thriller',
          movieDuration: '2h 12m',
          movieThumbsDown: 0,
          movieThumbsUp: 0,
          movieTrailer: 'https://www.youtube.com/embed/5xH0HfJHsaY',

        },
    ),
    new Movie(
        {
          movieImg: 'images/the_godfather.jpg',
          movieTitle: 'The Godfather',
          movieRating: 'R',
          movieYear: 1972,
          movieDesc: `Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful
            Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia,
            he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife,
            Kay (Diane Keaton), he is drawn deeper into the family business.`,
          movieGenre: 'Crime/Drama',
          movieDuration: '2h 57m',
          movieThumbsDown: 0,
          movieThumbsUp: 0,
          movieTrailer: 'https://www.youtube.com/embed/UaVTIH8mujA',
        },
    ),

    new Movie(

        {
          movieImg: 'images/the_hunger_games.jpg',
          movieTitle: 'The Hunger Games',
          movieRating: 'PG-13',
          movieYear: 2012,
          movieDesc: `In what was once North America, the Capitol of Panem maintains its hold on its 12 districts by forcing them each to select a boy and a girl,
            called Tributes, to compete in a nationally televised event called the Hunger Games. Every citizen must watch as the youths fight to the death
            until only one remains. District 12 Tribute Katniss Everdeen (Jennifer Lawrence) has little to rely on, other than her hunting skills and
            sharp instincts, in an arena where she must weigh survival against love`,
          movieGenre: 'Sci-fi/Action',
          movieDuration: '2h 22m',
          movieThumbsDown: 0,
          movieThumbsUp: 0,
          movieTrailer: 'https://www.youtube.com/embed/PbA63a7H0bo',
        },
    ),

    new Movie(

        {
          movieImg: 'images/sleepless_in_seattle.jpg',
          movieTitle: 'Sleepless in Seattle',
          movieRating: 'PG',
          movieYear: 1993,
          movieDesc: `After the death of his wife, Sam Baldwin (Tom Hanks) moves to Seattle with his son, Jonah (Ross Mallinger).
            When Jonah calls in to a talk-radio program to find a new wife for his father, Sam grudgingly gets on the line to discuss his feelings.
            Annie Reed (Meg Ryan), a reporter in Baltimore, hears Sam speak and falls for him, even though she is engaged. Unsure where it will lead,
            she writes Sam a letter asking him to meet her at the Empire State Building on Valentine's Day.`,
          movieGenre: 'Romance/Comedy',
          movieDuration: '1h 45m',
          movieThumbsDown: 0,
          movieThumbsUp: 0,
          movieTrailer: 'https://www.youtube.com/embed/ahI9LaOGYcE',
        },
    ),
  ];

  // initialize Movie class along with its parameters and functions to render the card itself
  function Movie(MovieParameters) {
    this.renderMovieCard = renderMovieCard;
    this.movieImg = MovieParameters.movieImg;
    this.movieTitle = MovieParameters.movieTitle;
    this.movieRating = MovieParameters.movieRating;
    this.movieYear = MovieParameters.movieYear;
    this.movieDesc = MovieParameters.movieDesc;
    this.movieGenre = MovieParameters.movieGenre;
    this.movieDuration = MovieParameters.movieDuration;
    this.movieThumbsDown = MovieParameters.movieThumbsDown;
    this.movieThumbsUp = MovieParameters.movieThumbsUp;
    this.movieTrailer = MovieParameters.movieTrailer;

    return;

    function renderMovieCard() {
      const card = document.createElement('div');
      card.classList.add('card');
      moviesList.appendChild(card);

      const movieImg = new Image();
      movieImg.classList.add('movies');
      movieImg.src = MovieParameters.movieImg;
      movieImg.alt = MovieParameters.movieTitle;

      const movieName = document.createElement('p');
      movieName.textContent = MovieParameters.movieTitle;
      const movieDataContainer = document.createElement('div');
      movieDataContainer.classList.add('moviesDataContainer');

      card.appendChild(movieImg);

      card.appendChild(movieName);
      card.appendChild(movieDataContainer);

      const thumbDown = new Image();
      thumbDown.src = 'images/thumb-down-outline.svg';
      thumbDown.classList.add('thumbDown');
      thumbDown.setAttribute('data-movie', `${MovieParameters.movieTitle} Dislikes`);
      movieDataContainer.appendChild(thumbDown);

      const thumbDownCount = document.createElement('p');
      thumbDownCount.textContent = MovieParameters.movieThumbsDown;
      movieDataContainer.appendChild(thumbDownCount);


      const thumbUp = new Image();
      thumbUp.src = 'images/thumb-up-outline.svg';
      thumbUp.classList.add('thumbUp');
      thumbUp.setAttribute('data-movie', `${MovieParameters.movieTitle} Likes`);
      movieDataContainer.appendChild(thumbUp);

      const thumbUpCount = document.createElement('p');
      thumbUpCount.textContent = MovieParameters.movieThumbsUp;
      movieDataContainer.appendChild(thumbUpCount);
    }
  }

  movies.map((data) => data.renderMovieCard());

  document.querySelectorAll('.movies').forEach((movie) => {
    movie.addEventListener('click', function(e) {
      location.href = location.origin + location.pathname + '#' + e.target.alt.replaceAll(' ', '-');
    });
  });

  window.addEventListener('hashchange', () => {
    renderOnPageLoadOrURLChange();
  });
  window.addEventListener('popstate', () => {
    renderOnPageLoadOrURLChange();
  });


  document.querySelectorAll('.thumbUp').forEach((thumb) => {
    thumb.addEventListener('click', function() {
      const currentAttribute = thumb.getAttribute('data-movie');
      console.log(currentAttribute);
      handleThumbUpClick(currentAttribute);
    });
  });
  document.querySelectorAll('.thumbDown').forEach((thumb) => {
    thumb.addEventListener('click', function() {
      const currentAttribute = thumb.getAttribute('data-movie');
      console.log(currentAttribute);
      handleThumbDownClick(currentAttribute);
    });
  });
  function handleThumbUpClick(movieToUpdate) {
    let thumbUpCount = 0;
    movies.map((movie) => {
      if (`${movie.movieTitle} Likes` === movieToUpdate) {
        thumbUpCount = movie.movieThumbsUp;
      }
    });
    function updateLikesData(thumbUpCount) {
      thumbUpCount++;
      movies.map((movie) => {
        if (`${movie.movieTitle} Likes` === movieToUpdate) {
          movie.movieThumbsUp = thumbUpCount;
        }
      });
      document.querySelector(`[data-movie="${movieToUpdate}"]`).nextElementSibling.textContent = thumbUpCount;
    };
    return updateLikesData(thumbUpCount);
  }
  function handleThumbDownClick(movieToUpdate) {
    let thumbDownCount = 0;
    movies.some((movie) => {
      if (`${movie.movieTitle} Dislikes` === movieToUpdate) {
        thumbDownCount = movie.movieThumbsDown;
      }
    });
    function updateDislikesData(thumbDownCount) {
      thumbDownCount++;
      movies.map((movie) => {
        if (`${movie.movieTitle} Dislikes` === movieToUpdate) {
          movie.movieThumbsDown = thumbDownCount;
        }
      });
      document.querySelector(`[data-movie="${movieToUpdate}"]`).nextElementSibling.textContent = thumbDownCount;
      console.log(movies);
    };
    return updateDislikesData(thumbDownCount);
  }
  function renderOnPageLoadOrURLChange() {
    let movieInfo;
    const currentPath = location.hash.substring(1).replaceAll('%20', '-');
    if (currentPath === '') {
      const movieInfoContainer = document.querySelector('.movieInfoContainer');
      movieInfoContainer ? (movieInfoContainer.remove(), root.appendChild(moviesList)) : null;
      return;
    } else {
      const tempArray = [...movies.map((movie) => {
        const element = movie.movieTitle.replaceAll(' ', '-');
        return element;
      })];
      for (let i = 0; i <= tempArray.length - 1; i++) {
        if (currentPath === tempArray[i]) {
          movieInfo = movies.filter(function(el) {
            return el.movieTitle === currentPath.replaceAll('-', ' ');
          });
          console.log(movieInfo);
        }
      }
    }
    function renderSpecificItem(item) {
      const moviesList = document.querySelector('.moviesList');
      moviesList.remove();


      const movieInfoContainer = document.createElement('div');
      movieInfoContainer.classList.add('movieInfoContainer');

      root.appendChild(movieInfoContainer);

      const movieInfo = document.createElement('div');
      movieInfo.classList.add('movieInfo');

      movieInfoContainer.appendChild(movieInfo);

      const movieTitle = document.createElement('h2');
      movieTitle.setAttribute('id', 'movieTitle');
      movieTitle.textContent = item[0].movieTitle;
      movieInfo.appendChild(movieTitle);

      const movieDetails = document.createElement('ul');
      movieDetails.classList.add('movieDetails');
      movieInfo.appendChild(movieDetails);

      const movieYear = document.createElement('li');
      movieYear.textContent = item[0].movieYear;
      movieDetails.appendChild(movieYear);

      const movieRating = document.createElement('li');
      movieRating.textContent = item[0].movieRating;
      movieDetails.appendChild(movieRating);

      const movieDuration = document.createElement('li');
      movieDuration.textContent = item[0].movieDuration;
      movieDetails.appendChild(movieDuration);

      const movieLikes = document.createElement('li');
      movieLikes.textContent = `${item[0].movieThumbsUp} others like this movie`;
      movieDetails.appendChild(movieLikes);

      const movieDislikes = document.createElement('li');
      movieDislikes.textContent = `${item[0].movieThumbsDown} others dislike this movie`;
      movieDetails.appendChild(movieDislikes);

      const movieAdditional = document.createElement('div');
      movieAdditional.classList.add('movieAdditional');
      movieInfoContainer.appendChild(movieAdditional);

      const movieImg = new Image();
      movieImg.src = item[0].movieImg;
      movieImg.classList.add('renderedMovieImage');
      movieAdditional.appendChild(movieImg);

      const movieSummary = document.createElement('div');
      movieSummary.classList.add('movieSummary');

      movieInfoContainer.appendChild(movieSummary);

      const movieGenre = document.createElement('h2');
      movieGenre.textContent = item[0].movieGenre;

      movieSummary.appendChild(movieGenre);

      const movieDesc = document.createElement('p');
      movieDesc.textContent = item[0].movieDesc;
      movieSummary.appendChild(movieDesc);


      const iframeContainer = document.createElement('div');
      iframeContainer.classList.add('iframeContainer');
      movieSummary.appendChild(iframeContainer);


      const movieTrailer = document.createElement('iframe');
      movieTrailer.src = item[0].movieTrailer;
      movieTrailer.classList.add('movieTrailer');
      movieTrailer.setAttribute('allowFullScreen', '');
      movieTrailer.setAttribute('target', '_blank');

      iframeContainer.appendChild(movieTrailer);
    }
    return renderSpecificItem(movieInfo);
  }
  window.onload = () => {
    renderOnPageLoadOrURLChange();
  };
}
pageLoad();
