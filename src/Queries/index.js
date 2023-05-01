import { getDocs } from "firebase/firestore";


const getQuery = async (ref) => {
  try {
    const data = await getDocs(ref);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    return error;
  }
};

const queries = {
  getAll: async (ref) => await getQuery(ref),
};

export default queries;