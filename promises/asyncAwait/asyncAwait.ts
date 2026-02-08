const passwordLength = new Promise<string>((resolve, reject) => {
  const password = "mySecretPassword56413485";

if (password.length > 8) {
    resolve("Strong password. Welcome aboard!");
  } else {
    reject(new Error("Password too weak! Try again"));
  }
});

const handleSignIn = async (): Promise<void> => {
    try {
        const message = await passwordLength;
        console.log(message);
        await fetchAfterSignIn();
    } catch (error) {
        if(error) {
            console.error("An error occurred:", error);
        }
    }
};
handleSignIn();



type Affirmation = {
  affirmation: string;
}

const fetchAfterSignIn = async (): Promise<void> => {
  try{
    const response = await fetch("https://www.affirmations.dev/")
    
    if (!response.ok) {
            throw new Error("Network response was not ok");
        }
    
  const data: Affirmation = await response.json();
  console.log("Random affirmation of the day:", data.affirmation );
    } catch(error) {
        console.error("Error fetching affirmation:", error);
    }
}