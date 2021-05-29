import { ref } from "vue";
import { projectFirestore } from "../firebase/init";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // simulate delay to preview loading spinner
      //   await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      //   });

      // with json-server
      // const res = await fetch("http://localhost:3000/posts");
      // if (!res.ok) {
      //   throw Error("No data available");
      // }
      // posts.value = await res.json();

      // with firestore
      const res = await projectFirestore
        .collection("posts")
        .orderBy("createdAt", "desc")
        .get();
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
