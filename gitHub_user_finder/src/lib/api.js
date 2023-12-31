import axios from "axios";

/************* baseURL 사용 **************/ 
const client = axios.create({
  baseURL: "https://api.github.com/users/",
});

// Export userData
export const getUserData = async (name) => { // name == githubID 
  try {
    const { data } = await client.get(name); 
    console.log("[SUCCESS] GET user data", data);
    return data;
  } 
  catch (e) {
    console.log("[FAIL] GET user data", e);
		return null;
  }
};

// Export repoData - Advanced assignment
export const getUserRepo = async (name) => { 
  try {
    const { data } = await client.get(`${name}/repos`);
    console.log("[SUCCESS] GET user repositories", data);
    return data
  } 
  catch (e) {
    console.log("[FAIL] GET user repositories", e);
    return null;
  }
};