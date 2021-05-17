const app = Vue.createApp({
  //   template: "<h2>I am the template</h2>",
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      showBooks: true,
      x: 0,
      y: 0,
      books: [
        {
          title: "Name of the Wind",
          author: "Patrick Rothfuss",
          img: "https://github.com/iamshaunjp/Vue-3-Firebase/blob/lesson-13/assets/1.jpg?raw=true",
          isFav: true,
        },
        {
          title: "The Way of Kings",
          author: "Brandon Sanderson",
          img: "https://github.com/iamshaunjp/Vue-3-Firebase/blob/lesson-13/assets/2.jpg?raw=true",
          isFav: false,
        },
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          img: "https://github.com/iamshaunjp/Vue-3-Firebase/blob/lesson-13/assets/3.jpg?raw=true",
          isFav: true,
        },
      ],
      url: "https://vuejs.org/",
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
