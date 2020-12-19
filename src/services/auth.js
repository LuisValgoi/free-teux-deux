export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          name: "Valgoi",
          email: "luisvalgoi@gmail.com",
        },
      });
    }, 2000);
  });
}
