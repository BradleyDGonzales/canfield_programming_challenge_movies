// movies following the form of a JSON Object

console.log('test');

const movies = [
  {
    movie: 'images/avatar_way_of_water.jpg',
    movieName: 'Avatar: The Way of Water',
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
  },
  {
    movie: 'images/mist.jpg',
    movieName: 'The Mist',
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
  },
  {
    movie: 'images/parasite.jpg',
    movieName: 'Parasite',
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
  {
    movie: 'images/the_godfather.jpg',
    movieName: 'The Godfather',
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
  {
    movie: 'images/the_hunger_games.jpg',
    movieName: 'The Hunger Games',
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
  {
    movie: 'images/sleepless_in_seattle.jpg',
    movieName: 'Sleepless in Seattle',
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
];

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
navbar.appendChild(websiteTitle);


// create moviesList div for the small set of movies
const moviesList = document.createElement('div');
moviesList.classList.add('moviesList');

root.appendChild(moviesList);
function initRender() {
  // map through movie and make card for each individual movie (seperate tally of thumb up and down)
  movies.map((data) => {
    const card = document.createElement('div');
    card.classList.add('card');
    moviesList.appendChild(card);
    const img = new Image();
    img.classList.add('movies');
    img.src = data.movie;
    img.alt = data.movieName;
    const movieName = document.createElement('p');
    movieName.textContent = data.movieName;
    const movieData = document.createElement('div');
    movieData.classList.add('moviesData');
    card.appendChild(img);
    card.appendChild(movieName);
    card.appendChild(movieData);
    const thumbUp = new Image();
    thumbUp.src = 'images/thumb-up-outline.svg';
    thumbUp.classList.add('thumbUp');
    thumbUp.setAttribute('data-movie', `${data.movieName} Likes`);
    const thumbDown = new Image();
    thumbDown.src = 'images/thumb-down-outline.svg';
    thumbDown.classList.add('thumbDown');
    thumbDown.setAttribute('data-movie', `${data.movieName} Dislikes`);
    const thumbDownCount = document.createElement('p');
    thumbDownCount.textContent = data.movieThumbsDown;
    const thumbUpCount = document.createElement('p');
    thumbUpCount.textContent = data.movieThumbsUp;
    movieData.appendChild(thumbDown);
    movieData.appendChild(thumbDownCount);
    movieData.appendChild(thumbUp);
    movieData.appendChild(thumbUpCount);
  });
}
initRender();

// if user goes back, hash url will change so we need to render the initpage again

function routeChange() {
  const hash = window.location.hash;
  if (hash === '') {
    document.querySelector('.movieInfoContainer').remove();
    const routerView = document.getElementById('root');
    routerView.appendChild(moviesList);
  }
}

// if refreshed on a specific movie's page, keep the contents
window.addEventListener('hashchange', routeChange);
window.onload = () => {
  module.renderOnPageLoadOrURLChange();
};

// hash URL
document.querySelectorAll('.movies').forEach((movie) => {
  movie.addEventListener('click', function(e) {
    location.href = location.origin + location.pathname + '#' + e.target.alt.replaceAll(' ', '-');
  });
});

document.querySelectorAll('.thumbUp').forEach((thumb) => {
  thumb.addEventListener('click', function(e) {
    const currentAttribute = thumb.getAttribute('data-movie');
    handleThumbUpClick(currentAttribute);
  },
  );
});

document.querySelectorAll('.thumbDown').forEach((thumb) => {
  thumb.addEventListener('click', function() {
    const currentAttribute = thumb.getAttribute('data-movie');
    handleThumbDownClick(currentAttribute);
  });
});

// if clicked on logo then go back to main page and change hash URL
document.getElementById('logo').addEventListener('click', (e) => {
  const movieInfoContainer = document.querySelector('.movieInfoContainer');
  movieInfoContainer !== null ? root.appendChild(moviesList) : null;
  location.hash = '';
});

const module = {
  // renders item that was returned from temp array in other function
  renderSpecificItem: (item) => {
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
    movieTitle.textContent = item[0].movieName;
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
    movieImg.src = item[0].movie;
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
  },

  // javascript helper function to determine what to display on page
  renderOnPageLoadOrURLChange: () => {
    const currentPath = location.hash.substring(1).replaceAll('%20', '-');
    const tempArray = [...movies.map((movie) => {
      const element = movie.movieName.replaceAll(' ', '-');
      return element;
    })];
    for (let i = 0; i <= tempArray.length - 1; i++) {
      if (currentPath === tempArray[i]) {
        const movieInfo = movies.filter(function(el) {
          return el.movieName === currentPath.replaceAll('-', ' ');
        });
        console.log(movieInfo);
        module.renderSpecificItem(movieInfo);
      }
    }
  },
};
window.addEventListener('popstate', () => {
  module.renderOnPageLoadOrURLChange();
});

// console.log(document.querySelector('.iframeContainer'));
// // document.querySelectorAll('.movieTrailer').forEach((trailer) => {
// //   trailer.addEventListener('click', function(e) {
// //     console.log(e);
// //   });
// // });
// using closures for data


// allows user to like as many times as they would like
function handleThumbUpClick(movieToUpdate) {
  let thumbUpCount = 0;
  movies.some((movie) => {
    if (`${movie.movieName} Likes` === movieToUpdate) {
      thumbUpCount = movie.movieThumbsUp;
    }
  });
  function updateLikesData(thumbUpCount) {
    thumbUpCount++;
    movies.map((movie) => {
      if (`${movie.movieName} Likes` === movieToUpdate) {
        movie.movieThumbsUp = thumbUpCount;
      }
    });
    document.querySelector(`[data-movie="${movieToUpdate}"]`).nextElementSibling.textContent = thumbUpCount;
  };
  return updateLikesData(thumbUpCount);
}

// allows user to dislike as many times as they would like
function handleThumbDownClick(movieToUpdate) {
  let thumbDownCount = 0;
  movies.some((movie) => {
    if (`${movie.movieName} Dislikes` === movieToUpdate) {
      thumbDownCount = movie.movieThumbsDown;
    }
  });
  function updateDislikesData(thumbDownCount) {
    thumbDownCount++;
    movies.map((movie) => {
      if (`${movie.movieName} Dislikes` === movieToUpdate) {
        movie.movieThumbsDown = thumbDownCount;
      }
    });
    document.querySelector(`[data-movie="${movieToUpdate}"]`).nextElementSibling.textContent = thumbDownCount;
  };
  return updateDislikesData(thumbDownCount);
}
