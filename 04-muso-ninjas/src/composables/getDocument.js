import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/init";

const getDocument = (collection, id) => {
  const document = ref(null);
  const error = ref(null);

  let documentRef = projectFirestore.collection(collection).doc(id);
  const unsub = documentRef.onSnapshot(
    (doc) => {
      if (doc.data()) {
        document.value = { ...doc.data(), id: doc.id };
        error.value = null;
      } else {
        error.value = "That document does not exist";
      }
    },
    (err) => {
      console.log(err.message);
      error.value = "Could not fetch the document";
    }
  );

  // clean up listeners
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { document, error };
};

export default getDocument;
