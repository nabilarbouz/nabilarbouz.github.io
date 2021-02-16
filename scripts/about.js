const carouselInfoArray = [
  {
    title: "School and Business Experience",
    description: [
      "1.5 years Sales. 1.5 years Operations. 4 years Customer Service.",
      "Computer Science Courses: Algorithms, Data Structures and Abstractions, Mobile App Development, Object-Oriented Design, Web Development, C++ Programming Methodologies",
    ],
  },
  {
    title: "Outdoors Enthusiast",
    description: "Running, Soccer, Traveling, and Hiking",
  },
  {
    title: "Music",
    description:
      "I am a music lover that enjoys everything from classical to rock to techno. A soundcloud with some of my tunes available upon request!",
  },
];

for (let count = 1; count <= carouselInfoArray.length; count++) {
  let carousel = document.getElementById(`carousel${count}`);
  if (count === 1) {
    carousel.innerHTML = `<h5>${carouselInfoArray[0].title}<h5><p>${carouselInfoArray[0].description[0]}</p><p>${carouselInfoArray[0].description[1]}</p>`;
  } else {
    carousel.innerHTML = `<h5>${carouselInfoArray[count - 1].title}<h5><p> ${
      carouselInfoArray[count - 1].description
    }</p>`;
  }
}
