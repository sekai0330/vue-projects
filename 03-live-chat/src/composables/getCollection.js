import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/init";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");
  const unsub = collectionRef.onSnapshot(
    (snap) => {
      //   console.log("snapshot");
      let results = [];
      snap.docs.forEach((doc) => {
        // use only server snapshot (with timestamps) vs local snapshot (without timestamps)
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "Could not fetch data";
    }
  );

  // clean up listeners
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { documents, error };
};

export default getCollection;
