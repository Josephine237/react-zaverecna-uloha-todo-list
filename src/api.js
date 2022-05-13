export const getTasks = () => {
  return fetch("http://localhost:8081/tasks").then((response) =>
    response.json()
  );
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve([
  //         {
  //           id: "VasFEeR8_ZHHEbKL6B-OIu",
  //           text: "Vytvořit prezantaci",
  //           completed: false,
  //           createdDate: 1501594393387,
  //         },
  //         {
  //           id: "ADSFaEKG_Z2IISFNse-mMM",
  //           text: "Dokončit dokumentaci",
  //           completed: false,
  //           createdDate: 1501594393387,
  //         },
  //         {
  //           id: "V1StGXR8_Z5jdHi6B-myT",
  //           text: "Udělat API",
  //           completed: true,
  //           createdDate: 1501594393387,
  //           completedDate: 1643205131975,
  //         },
  //       ]);
  //     }, 300);
  //  });
};

export const toggleTask = (id, completed) => {
  return fetch(
    `http://localhost:8081/tasks/${id}/${completed ? "complete" : "incomplete"}`,
    {
      method: "POST",
    }
  );
  // pokud dám fetch, tak to automaticky vytváří get request => tady musí mít fetch další paramatr method POST
};
