import { ref } from "vue";
import { projectFirestore } from "../firebase/init";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // simulate delay to preview loading spinner
      //   await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      //   });

      // with json-server
      // const res = await fetch("http://localhost:3000/posts/" + id);
      // if (!res.ok) {
      //   throw Error("That post does not exist");
      // }
      // post.value = await res.json();

      // with firestore
      const res = await projectFirestore
        .collection("posts")
        .doc(id)
        .get();
      if (!res.exists) {
        throw Error("That post does not exist");
      }
      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
