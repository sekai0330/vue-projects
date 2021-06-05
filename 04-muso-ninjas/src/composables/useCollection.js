import { ref } from "vue";
import { projectFirestore } from "../firebase/init";

const useCollection = (collection) => {
  const error = ref(null);
  const isPending = ref(false);

  const addDoc = async (document) => {
    error.value = null;
    isPending.value = true;
    try {
      const res = await projectFirestore.collection(collection).add(document);
      isPending.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = "Could not send the message";
      isPending.value = false;
    }
  };

  return { error, addDoc, isPending };
};

export default useCollection;
