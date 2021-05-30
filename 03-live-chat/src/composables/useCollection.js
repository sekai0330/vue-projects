import { ref } from "vue";
import { projectFirestore } from "../firebase/init";

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (document) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(document);
    } catch (err) {
      console.log(err.message);
      error.value = "Could not send the message";
    }
  };

  return { error, addDoc };
};

export default useCollection;
