// movies following the form of a JSON Object
const movies = [
  {
    movie: 'images/avatar_way_of_water.jpg',
    movieName: 'Avatar: The Way of Water',
    movieYear: 2022,
    movieDesc: `Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. 
                However, they must leave their home and explore the regions of Pandora. 
                When an ancient threat resurfaces,  Jake must fight a difficult war against the humans.`,
    movieGenre: 'Sci-fi/Adventure',
    movieDuration: '3h 12m',
    movieThumbsDown: 0,
    movieThumbsUp: 0,
    movieTrailer: 'https://www.youtube.com/watch?v=d9MyW72ELq0',
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
    movieTrailer: 'https://www.youtube.com/watch?v=LhCKXJNGzN8',
  },
  {
    movie: 'images/parasite.jpg',
    movieName: 'Parasite',
    movieRating: 'R',
    movieYear: 2019,
    movieDesc: `Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.`,
    movieGenre: 'Comedy/Mystery & thriller',
    movieDuration: '2h 12m',
    movieThumbsDown: 0,
    movieThumbsUp: 0,
    movieTrailer: 'https://www.youtube.com/watch?v=5xH0HfJHsaY',
  },
  {
    movie: 'images/the_godfather.JPG',
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
    movieTrailer: 'https://www.youtube.com/watch?v=UaVTIH8mujA',
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
    movieTrailer: 'https://www.youtube.com/watch?v=PbA63a7H0bo',
  },
  {
    movie: 'images/star_wars_ep_3.jpg',
    movieName: 'Star Wars: Episode III - Revenge of the Sith',
    movieRating: 'PG-13',
    movieYear: 2005,
    movieDesc: `It has been three years since the Clone Wars began. Jedi Master Obi-Wan Kenobi (Ewan McGregor) and Jedi Knight Anakin Skywalker (Hayden Christensen) 
                rescue Chancellor Palpatine (Ian McDiarmid) from General Grievous, the commander of the droid armies, but Grievous escapes. Suspicions are raised 
                within the Jedi Council concerning Chancellor Palpatine, with whom Anakin has formed a bond. Asked to spy on the chancellor, and full of bitterness 
                toward the Jedi Council, Anakin embraces the Dark Side.`,
    movieGenre: 'Action/Sci-fi',
    movieDuration: '2h 20m',
    movieThumbsDown: 0,
    movieThumbsUp: 0,
    movieTrailer: 'https://www.youtube.com/watch?v=5UnjrG_N8hU',
  },
];
// append root to body
const root = document.createElement('div');
root.textContent = 'TEST?';
root.setAttribute('id', 'root');
console.log('oh yeah baby');
document.body.appendChild(root);

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
    thumbUp.src = '/images/thumb-up-outline.svg';
    thumbUp.classList.add('thumbUp');
    thumbUp.setAttribute('data-movie', `${data.movieName} Likes`);
    const thumbDown = new Image();
    thumbDown.src = '/images/thumb-down-outline.svg';
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

window.onload = initRender();
document.querySelectorAll('.movies').forEach((movie) => {
  movie.addEventListener('click', function(e) {
    location.href = location.origin + location.pathname + '#' + e.target.alt.replaceAll(' ', '-').replaceAll(':', '');
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

const module = {
  renderSpecificItem: (items, renderID) => {
    const div = document.createElement('div');
    div.textContent = 'just got added';
    root.appendChild(div);
  },

  renderOnPageLoadOrURLChange: () => {
    const currentPath = location.hash.substring(1).replaceAll('%20', '-').replaceAll(':', '');
    const tempArray = [movies.map((movie) => {
      const element = movie.movieName.replaceAll(' ', '-').replaceAll(':', '');
      return element;
    })];
    for (let i = 0; i < tempArray.length - 1; i++) {
      if (currentPath === tempArray[i]) {
        module.renderSpecificItem(tempArray[i], `${temp}`);
      }
    }
  },
};
window.addEventListener('popstate', () => {
  module.renderOnPageLoadOrURLChange();
});

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
