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
        //fetchAfterSignIn();
    } catch (error) {
        if(error) {
            console.error("An error occurred:", error);
        }
    }
};
handleSignIn();
