const passwordLength = new Promise((resolve, reject) => {
    const password = "mySecretPassword56413485";
    if (password.length > 8) {
        resolve("Strong password. Welcome aboard!");
    } else {
        reject(new Error("Password too weak!Try again"));
    }
});
passwordLength
    .then((message) => {
        console.log(message);
        fetchAfterSignIn();
    })
    .catch((error) => {
        console.error(error.message);
    });

    type Affirmation = {
    affirmation: string;
    }

const fetchAfterSignIn = () => {
    fetch("https://www.affirmations.dev/")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data: Affirmation) => {
        console.log("Random affirmation of the day:", data.affirmation );
    })
    .catch((error) => {
        console.error("Error fetching affirmation:", error);
    });
}